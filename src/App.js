//import { Component } from 'react';
import { useState, useEffect } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box-componemt';

import './App.css';

const App = () => {

  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filterMonsters, setfilterMonsters] = useState(monsters);


  console.log("render");
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  .then((users) => setMonsters(users));
  }, []);

  useEffect(() =>{
    const newfilterMonsters = monsters.filter((monster)=> {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    setfilterMonsters(newfilterMonsters);
  },[monsters, searchField]);

  const onSearchChange = (event) => {
      const searchFieldString = event.target.value.toLocaleLowerCase();
      setSearchField(searchFieldString);
  }

  return (
    <div className="App">
    <h1 className='app-title'>Monsters Rolodex</h1>
    <SearchBox 
    onChangeHandler={onSearchChange} 
    placeholder='Search monsters'
    className = 'monsters-search-box'
    />
    <CardList monsters={filterMonsters}/>

    </div>
  );
}

// class App  extends Component{
//   constructor(){
//     super();
//     this.state = {
//       monsters:[],
//       searchField: ''
//     };
//     console.log('constructor');
//   }

// componentDidMount(){
//   console.log('componentDidMount');
//   fetch('https://jsonplaceholder.typicode.com/users')
//   .then((response) => response.json())
//   .then((users) => this.setState(() => {
//     return {monsters : users }
//   },
//   ()=> {
//   }
  
//   ));
// }

// onSearchChange = (event) => {
//   const searchField = event.target.value.toLocaleLowerCase();
  
//   this.setState(() => {
//     return {searchField};

//   });

// }

//   render(){
//     const {monsters, searchField} = this.state;
//     const {onSearchChange} = this;
//     console.log('render');
//     const filterMonsters = monsters.filter((monster)=> {
//       return monster.name.toLocaleLowerCase().includes(searchField);
//     });

//   return (
//     <div className="App">
//     <h1 className='app-title'>Monsters Rolodex</h1>
//     <SearchBox 
//     onChangeHandler={onSearchChange} 
//     placeholder='Search monsters'
//     className = 'monsters-search-box'
//     />
//     <CardList monsters={filterMonsters}/>

//     </div>
//   );
//   }
// }

export default App;
