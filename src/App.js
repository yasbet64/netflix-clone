import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner'
import Nav from './Nav';



function App() {
  return (
    <div className="app">
      <Nav/>
      <Banner/>
    
    
      <Row 
      title="NETFLIX ORIGINAL" 
      fetchUrl={requests.fetchNetflixOriginals} 
      isLargeRow={true}
      />
      
        <Row title="Peliculas Nuevas" fetchUrl={requests.fetchTrending} />
       <Row title="Top de Peliculas" fetchUrl={requests.fetchTopRated} />

      <Row title="Peliculas de Acción" fetchUrl={requests.fetchActionMovies} />
      <Row title="Peliculas de Comedia" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Peliculas de Terror" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Peliculas de Romance" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentales" fetchUrl={requests.fetchDocumentaries} /> 
    </div>
  );
}

export default App;
