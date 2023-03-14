import React from 'react'

const NavBar = ({animeFilter}) => {
  return (
    <div className='navbar'>
      <span>
         Catálogo de Animes
      </span>
      <section id='searchArea'>
      <input type="text" 
      placeholder='Procure por um Anime'
      className='searchbox'
      onChange={(e) => animeFilter(e.target.value)}
      />
      </section>
      </div>
  )
}

export default NavBar