import React, {Component} from 'react';
import './App.css';
import Header from '../../components/Header/Header.js'
import Footer from '../../components/Footer/Footer.js'
import SearchBar from '../../components/SearchBar/SearchBar.js'
import Card from '../../components/Card/Card.js'

class App extends Component  {
  render(){
  return (
      <div>
        <Header />
        <SearchBar />
        <Card />
        <Footer />
      </div>
    )
  }
}

export default App;
