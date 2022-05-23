import React, { useState, useEffect } from "react";
import CardList from "../components/CardList";
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll'

function App() {
  const [robots, setRobots] = useState([])
  const [searchfield, setSearchField] = useState('')
  const [count, setCount] = useState(0)

  useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {setRobots(users)});
  }, []);

  const onSearchChange = (e) => { setSearchField(e.target.value) }

  const filterRobots = robots.filter(robot => {
    return robot.name.toLowerCase().includes(searchfield.toLowerCase());
  })

  return (!robots.length) ? <h1>Loading...</h1> : 
  (
    <div className="tc">
        <h1>RoboFriends</h1>
        <button onClick={() => setCount(count + 1)}>{count}</button>
        <SearchBox searchChange={onSearchChange}/>
        <Scroll>
          <CardList robots={filterRobots}/>
        </Scroll>
    </div>
  );
}

export default App;