import React from 'react';
import Card from '../src/components/card/Card';
import Header from '../src/components/header/Header';
import ShowModal from './components/modal/ShowModal';
import axios from 'axios';
import { useState, useEffect } from 'react';



function App() {

  const [search, setSearch] = useState('');
  const [heroes, setHeroes] = useState([]);
  const [heroModal, setHeroModal] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const toggle = () => setModalOpen(!modalOpen);



  useEffect(() => {

    axios.get('http://homologacao3.azapfy.com.br/api/ps/metahumans')
      .then(response => {
        setHeroes(response.data);
      })
      .catch(err => {
        return console.log('Parece que estamos com problemas: ' + err)
      })
  }, [])

  return (
    <div className="App">

      {heroModal != null ?
        <ShowModal
          hero={heroModal}
          toggle={toggle}
          open={modalOpen} />
        :
        null
      }

      <Header onChange={(e) => setSearch(e.target.value)} />
      <div className="container py-5">
        <div className="row">
          {
            heroes
              .filter((hero) => {
                if (search === "") {
                  return hero
                }
                else if (hero.name.toLowerCase().includes(search.toLowerCase())) {
                  return hero
                }
              })
              .map((hero, key) => {
                return (
                  <a
                    href="#"
                    onClick={() => {
                      toggle();
                      setHeroModal(hero);
                    }}
                    key={key}
                    className="card_hero_container d-flex d-sm-block justify-content-center p-2 col-6 col-sm-4 col-lg-2 cursor-pointer">
                    <Card name={hero.name} image={hero.images.sm}></Card>
                  </a>
                )
              })
          }
        </div>
      </div>
    </div>
  );
}

export default App;
import React from 'react';
import styled from 'styled-components'

