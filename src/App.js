import React from "react";
import "./App.css";
import SearchBox from "./components/search-box/search-box";
import CardList from "./components/card-list/card-list";

export default class App extends React.Component{
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ""
    };
  }
  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => this.setState({monsters:users}));
  }
  onSearchChange = event =>{
    this.setState({
        searchField: event.target.value
    })
  }

  render() {
    const monsters=this.state.monsters;
    const searchField = this.state.searchField;
    const filteredMonsters = monsters.filter(
        monster => monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    
    return (
      <div className="App">
        <h1>Rollodex</h1>
        <SearchBox searchField={searchField} onSearchChange= {this.onSearchChange}/>
        <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
}