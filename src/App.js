import './styles/App.css';
import React from 'react';
import WolfTab from './components/WolfTab';
import FoxTab from './components/FoxTab';
import CoyoteTab from './components/CoyoteTab';
import CatTab from './components/CatTab';
import DogTab from './components/DogTab';

let elements = document.getElementsByClassName('side-navbar__container__button')

function App() {
  const [numeroAba,setAba] = React.useState(0);

for (var i =0; i < elements.length; i++){
    (function(index) { 
      elements[index].addEventListener('click', function() {
        setAba(index)
      });
    })(i);
  }

switch(numeroAba){
  case 0: 
    return (<WolfTab/>);
    break;
  case 1:
    return (<FoxTab/>);
    break;
  case 2: 
    return (<CoyoteTab/>);
    break;
  case 3:
    return (<CatTab/>);
    break;
  case 4:
    return (<DogTab/>);
    break;
  } 
}

export default App;
