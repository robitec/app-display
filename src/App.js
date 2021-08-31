import React, { useEffect, useState, useContext } from 'react';
import { Switch, Route } from 'react-router-dom';
import axios from "axios";

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
      setData(data);
    });
  }, [socket]);

  const functionAction = async (element) => {
    try {
      console.log(element.name)
      if (element.units.match("mm")) {
        console.log(`POST ${process.env.API_URL || 'http://172.16.40.86:3001'}/api/visor/zero`);
        const resp = await axios.post(
          `${process.env.API_URL || 'http://172.16.40.86:3001'}/api/visor/zero`,
          {
            sensor: 'S1'
          }
        );

        return resp;
      }
    }catch {}
  }

  return (
    <Switch>
      <Route exact path="/">
        {data.elements.map((el, index) => (
          <Display
            key={el.name + '-' + index}
            id={index}
            name={el.name}
            value ={el.value}
            units={el.units}
            status={el.online}
            dotStatus={el.status}
            action={() => functionAction(el)}
          />
        ))}
      </Route>
    </Switch>
  );
}

export default App;
