import './App.css';
import { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component{
  constructor(){
    super();
    this.state = {
      monsters: [
        {
          name: 'Dracula'
        },
        {
          name: 'Frankstein'
        }
      ],
      searchField: '',

    }
  }
 onSearchChange = 
  e => {this.setState({searchField: e.target.value })};

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users=> this.setState({monsters: users }));
  }
  render(){
    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField));
    return (
        <div className="App">
          <h1>Monsters Rolodex</h1>
          <SearchBox type="search" handleChange={this.onSearchChange } placeholder="search here"/>
          <CardList monsters={filteredMonsters}></CardList>
        </div>
      );

 
  }
}
export default App;
