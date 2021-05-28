import React, { createContext } from 'react';
import socketIOClient from 'socket.io-client';

const SocketContext = createContext({ socket: null });

// const IP = process.env.SOCKET_IP || window.location.host
// const PORT = process.env.SOCKET_PORT || window.location.port
const socketUrl = 'http://172.25.229.137:3001';

console.log(`Socket: ${socketUrl}`);

const SocketProvider = ({ children }) => {
  const socket = socketIOClient(socketUrl);
  return <SocketContext.Provider value={{ socket }}>{children}</SocketContext.Provider>;
};

export { SocketContext, SocketProvider };
