import { useEffect, useState } from 'react';
import './App.css';
import Characters from './components/Characters';
import Header from './components/Header';
import Global from './style/global';


function App() {
  const [characterList, setCharacterList] = useState([])
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${currentPage}`, {
      method: "GET"
    })
    .then(resp => resp.json())
    .then(resp => setCharacterList(resp.results))
    .catch(err => console.log(err))
  }, [currentPage])

  function nextPage(){
    if(currentPage < 42){
      setCurrentPage(currentPage + 1)
    }
  }

  function prevPage(){
    if(currentPage > 1){
      setCurrentPage(currentPage - 1)
    }
  }

  return (
    <div className="App">
      <Global></Global>
      <Header></Header>
      <Characters characterList={characterList}></Characters>
      <div>
        <button onClick={prevPage}>Prev</button>
        <button onClick={nextPage}>Next</button>
      </div>
    </div>
  );
}

export default App;
