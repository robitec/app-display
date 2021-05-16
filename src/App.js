import React, { useEffect, useState, useContext } from 'react';
import { Switch, Route } from 'react-router-dom';

import { SocketContext } from './context';
import { Display }       from './components'

const REFRESH_INTERVAL = 3e2;
function App() {
  const [data, setData] = useState({ elements: []});
  const { socket } = useContext(SocketContext);

  useEffect(() => {
    setInterval(() => {
      socket.emit('refresh');
    }, REFRESH_INTERVAL);
    socket.on('refresh', (data) => {
      console.log(data);
      setData(data);
    });
  }, [socket]);

  return (
    <Switch>
      <Route exact path="/">
        {data.elements.map((el, index) => (
          //el: {"value":"","name":"Sensor Distance","com":"COM8","online":false}}
          <Display
            key={el.name + '-' + index}
            id={index}
            name={el.name}
            value ={el.value}
            units={el.units}
            status={el.online}
          />
        ))}
      </Route>
    </Switch>
  );
}

export default App;
