
import { useEffect, useState } from 'react';
import './App.css';
import AnimeList from './components/AnimeList';
import Navbar from './components/Navbar';
import Search from './components/Search';

function App() {

  const [q, setQ] = useState("");
  const[items,setItems]=useState([])

  useEffect(() => {
    fetch("https://ghibliapi.herokuapp.com/films")
        .then((res) => res.json())
        .then(
            (result) => {
                
                setItems(result);
            }
            );
          }, []);



  const filteredPersons = items.filter(
    anime => {
      return (
        anime
        .title
        .toLowerCase()
        .includes(q.toLowerCase()) 
      );
    }
  );

  return (
    <div >
      <Navbar/>
      <Search setQ={setQ} q={q} />
      <AnimeList filteredPersons={filteredPersons} items={items} setItems={setItems}/>
    </div>
  );
}

export default App;
