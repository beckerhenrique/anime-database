import React, {useEffect, useState} from 'react'

const Popup = ({anime, closePopup}) => {
   const [genres, setGenres] = useState()
   const [producers, setProducers] = useState()

   useEffect(() => {
      var gen = ""
     anime.genres.forEach(genre => {
      gen = `${gen} | ${genre.name} | `
     });
     setGenres(gen)

     var prod
     anime.producers.forEach(producer => {
      prod = `${producer.name}`
     })

     setProducers(prod)
     
   })
   

  return (
    <div id='popup'>
      <div id='popupHeader'>
      <button onClick={closePopup}>X</button>
      <h1>{anime.title}</h1>
      </div>
      <div id='containers'>
         <div id='animeClassification'>
            <img src={anime.images.jpg.image_url} alt="" />
            <div id='releasedDate'>
               <span>Criado em: </span>
               <span>{anime.year}</span>
            </div>
            <div id='animeDuration'>
               <span>Duração: </span>
               <span>{anime.duration}</span>
            </div>
            <div id='animeScore'>
               <span>Score: </span>
               <span>{anime.score}</span>
            </div>
            <div id='animeGenres'>
               <span>Gêneros: </span>
               <span>{genres}</span>
            </div>
            <div id='animeProducers'>
               <span>Produtores: </span>
               <span>{producers}</span>
            </div>
         </div>
         <div id='animeDescription'>
            <span>{anime.synopsis}</span>
         </div>
      </div>
    </div>
  )
}

export default Popup