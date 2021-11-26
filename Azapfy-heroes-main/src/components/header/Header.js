import React from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  Input,

} from 'reactstrap'

function Header(props) {
  return (

    <div>
      <Navbar
        color="dark"
        dark
        container
        expand
      >
        <NavbarBrand className="d-sm-block" href="/">
          Azapfy <span className="text-warning">Heroes</span>
        </NavbarBrand>
        <NavbarToggler onClick={function noRefCheck() { }} />
        <Collapse navbar
          className="justify-content-end">
          <Nav
            navbar
          >
            <div className="d-flex">
              <p className="text-light m-0 px-3 ">Pesquisar</p>
              <Input
                bsSize="sm"
                type="search"
                className="justify-end m-0"
                onChange={props.onChange}
              />
            </div>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
const API_KEY = '4006464432799541';
const BASE_URL = 'https://superheroapi.com/api/';
const proxyUrl = "https://cors-anywhere.herokuapp.com/";


const superheroapi = {
    search : async (nome) => {
        const req = await fetch(`${proxyUrl+BASE_URL+API_KEY}/search/${nome}`);
        const json = await req.json();
        return json;
    },
    getAllHeroes: async() => {
        const req = await fetch('https://akabab.github.io/superhero-api/api/all.json');
        const json = await req.json();
        return json;
    },
    getHero: async (id) => {
        const req = await fetch(`${proxyUrl+BASE_URL+API_KEY}/${id}`);
        const json = await req.json();
        return json;
    }
} 


export default ()=> superheroapi;