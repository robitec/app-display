import React, { createContext } from 'react';
import socketIOClient from 'socket.io-client';

const SocketContext = createContext({ socket: null });

const IP = process.env.SOCKET_IP || window.location.host
const PORT = process.env.SOCKET_PORT || window.location.port

console.log(`Socket: ${IP}:${PORT}`);

const SocketProvider = ({ children }) => {
  const socket = socketIOClient(
    `${window.location.protocol}//${IP}:${PORT}`
  );
  return <SocketContext.Provider value={{ socket }}>{children}</SocketContext.Provider>;
};

export { SocketContext, SocketProvider };
