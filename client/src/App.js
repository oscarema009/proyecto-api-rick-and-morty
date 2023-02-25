import { useState, useEffect } from 'react'
import {Routes, Route, useLocation, useNavigate} from 'react-router-dom'
import './App.css'
import About from './components/About/About'
import Cards from './components/cards/Cards'
import Nav from './components/Nav/Nav'
import Detail from './components/detail/Detail'
import Form from "./components/form/form"
import {useSelector} from 'react-redux'

function App() {
  const data = useSelector()
  const location = useLocation();
  const navigate = useNavigate()
  const [characters, setCharacters] = useState({});
  const [access, setAccess] = useState(false)
  const username = 'oscar@henry.com'
  const password = 'oscar1234'

  function login(userData){
    if(userData.username === username && userData.password === password){
      setAccess(true)
      navigate('/home')
    }
    else{
      alert('usuario o contraseña incorrecta')
    }
  }

  function onSearch(character) {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert('No hay personajes con ese ID');
        }
      });
  }

  const onClose = (id) => {
    setCharacters(characters.filter(char => char.id !== id))
  }

 
  useEffect(() => {
    !access && navigate('/');
 }, [access]);

  return (
    <div className='App' style={{ padding: '25px' }}>
      <div>
        {location.pathname !== '/' && <Nav onSearch={onSearch}/>}
        </div>
      <Routes>
        <Route patch="/" element={<Form login={login}/>}/>
        <Route path="/home" element= {<Cards characters={characters}
        onClose={onClose}/>}
        />
        <Route path="/About" element={<About/>}/>
        <Route path ="detail/:detailId " element={<Detail />}/>
      </Routes>
      
    </div>
  )
}

export default App
