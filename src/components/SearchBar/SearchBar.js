import React from 'react'
import classes from './SearchBar.module.css'

const searchbar = () => {
  return(
    <div className={classes.SearchBarWrapper}>
      City: <input type="text"/>
    </div>
  )
}

export default searchbar
