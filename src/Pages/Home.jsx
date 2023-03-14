import axios from 'axios'
import React, {useEffect, useState} from 'react'
import AnimeCard from '../components/AnimeCard'
import NavBar from '../components/NavBar'
import Popup from '../components/Popup'

export const Home = () => {
  const [animes, setAnimes] = useState([])
  const [selectedAnime, setSelectedAnime] = useState()

  useEffect(() =>{
    getAnimes()
  }, [])
  
  const getAnimes = () => {
    axios.get("https://api.jikan.moe/v4/anime").then(res => setAnimes(res.data.data))
  }

  const animeFilter = (name) => {
    var filteredAnimes = []
    if (name === "") {
      getAnimes()
    }
    for (var i in animes){
      if(animes[i].title.includes(name)){
        filteredAnimes.push(animes[i])
      }
    }
    setAnimes(filteredAnimes)

  }

  const openPopup = (id) => {

    setSelectedAnime(animes[id])
    
  }

  const closePopup = () => {
    setSelectedAnime()
    getAnimes()
  }

  return (
    <div>
      {!selectedAnime ? <div>
        <NavBar animeFilter={animeFilter}/>
      <section id='cardSection'>
      {animes.map((anime, key) => (
        <AnimeCard anime={anime} key={key} id={key} openPopup={openPopup}/>
      ))}
      </section>
      </div> : <Popup anime={selectedAnime} closePopup={closePopup}/>
      }
      </div>
  )
}
