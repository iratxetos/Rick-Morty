import '../styles/app.scss';
import { useState, useEffect } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import objectToExport from '../services/Api';
import ls from '../services/ls.js';
import Header from './Header';
import Footer from './Footer';
import Filters from './Filters';
import Reset from './Reset';
import RandomNumber from './RandomNumber';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';



function App() {

  //CONSTANTES
  //GUARDAMOS EN USE STATE DATOS DEL FETCH
  const [data, setData] = useState([]);
  const [searchName, setSearchName] = useState('');
  const [searchSpecies, setSearchSpecies] = useState('All');
  const [searchStatus, setSearchStatus] = useState('All');
  let pageNumCont;
  const [pageNum, setPageNum] = useState(1);
  const maxNumber = (34);

  //USE EFFECTS
  //HACEMOS QUE LA PETICIÓN AL FETCH SE EJECUTE SOLO UNA VEZ Y COMPARA SI HAY DATOS EN LOCAL STORAGE
  useEffect(() => {
    //LLAMAMOS AL CACHE
    if (ls.get('characters', []).length > 0) {
      setData(ls.get('characters', []));
    } else {
      //LLAMAMOS AL FETCH
      objectToExport.getFromApi().then((initialData) => {
        //ORDENAMOS LA BÚSQUEDA ALFABÉTICAMENTE POR NOMBRE
        const orderedData = initialData.sort(function (a, b) {
          if (a.name > b.name) {
            return 1;
          }
          if (a.name < b.name) {
            return -1;
          }
          return 0;
        });
        //PINTAMOS EL LISTADO ORDEADO
        setData(orderedData);
        ls.set('characters', orderedData);
      });
    }
  }, []);

  //MUESTRA LA SIGUIENTE PÁGINA AL CLICAR SOBRE SIGUIENTE
  useEffect(() => {
    objectToExport.nextPages(pageNum).then(response => {
      setData(response);
    })
  }, [pageNum]);

  //*HANDLE FUNCTIONS

  //OBTENER EL NÚMERO RANDOM
  function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
  }
  const randomNumber = getRandomNumber(maxNumber);

  //BOTON RANDOM
  const handleRandomNumber = (ev) => {
    pageNumCont = randomNumber;
    setPageNum(pageNumCont);
  }

  //BOTON RESET
  const handleReset = (ev) => {
    setSearchSpecies('All');
    setSearchStatus('All');
    setSearchName('');
    setPageNum(1);
  }

  //BÚSQUEDA POR NOMBRE
  const handleName = (ev) => {
    setSearchName(ev.currentTarget.value);
    ev.preventDefault()
  }

  ///BÚSQUEDA POR ESPECIE
  const handleSpecies = (ev) => {
    setSearchSpecies(ev.currentTarget.value);
    ev.preventDefault()
  }

  ///BÚSQUEDA POR STATUS
  const handleStatus = (ev) => {
    setSearchStatus(ev.currentTarget.value);
    ev.preventDefault();
  }

  //PASO A SIGUIENTE PÁGINA
  const handlePage = (ev) => {
    pageNumCont = pageNum + 1;
    setPageNum(pageNumCont);
  }

  //FUNCIONES ROUTE  
  const routeData = useRouteMatch('/:id');
  const characterId = routeData !== null ? routeData.params.id : '';
  const selectedCharacter = data.find((character) => character.id === parseInt(characterId));


  //FILTRADO DE DATA
  const FilteredData = data
    .filter((character) => character.name.toLocaleLowerCase().includes(searchName.toLocaleLowerCase()))
    .filter((character) => searchSpecies === 'All' || character.species === searchSpecies)
    // .filter((character) => searchStatus === 'All' || character.status === searchStatus)
    .filter((character) => {
      if (searchStatus !== 'All') {
        return character.status === searchStatus;
      } else {
        return true;
      }
    })


  return (
    <div>
      <Header />

      <section className='filtered__data'>

        {/* FILTROS */}
        <Filters
          searchName={searchName}
          searchSpecies={searchSpecies}
          searchStatus={searchStatus}
          handleName={handleName}
          handleSpecies={handleSpecies}
          handleStatus={handleStatus}
        />
        {/* BOTONES */}
        <section className='buttons'>
          <Reset handleReset={handleReset} />
          <RandomNumber handleRandomNumber={handleRandomNumber} />
        </section>
        {/* COMPONENTE DE LA UL */}
        <CharacterList data={FilteredData}
          handlePage={handlePage} />

      </section>
      <Footer />
      <Switch>
        <Route path='/:id'>
          <section>
            <CharacterDetail character={selectedCharacter} />
          </section>
        </Route>
        <Route exact path='/'>

        </Route>
      </Switch>


    </div >
  );

}
export default App;
