import React from 'react'

const AnimeCard = ({anime, openPopup, id}) => {
   const description = anime.synopsis
   const descriptionTrimmed = description.substring(0, 120) + `...`
  return (
    <div className='animeCard' onClick={() => openPopup(id)}>
      <h3 className='animeTitle'>{anime.title}</h3>
      <img src={anime.images.jpg.image_url} alt="" className='cardImg'/>
      <span>{descriptionTrimmed}</span>
    </div>
  )
}

export default AnimeCard