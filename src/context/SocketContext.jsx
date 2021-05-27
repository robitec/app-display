import React, { createContext } from 'react';
import socketIOClient from 'socket.io-client';

const SocketContext = createContext({ socket: null });

const IP = process.env.SOCKET_IP || "192.168.5.139"
const PORT = process.env.SOCKET_PORT || "3001"

console.log(`Socket: ${IP}:${PORT}`);

const SocketProvider = ({ children }) => {
  const socket = socketIOClient(
    `${window.location.protocol}//${IP}:${PORT}`
  );
  return <SocketContext.Provider value={{ socket }}>{children}</SocketContext.Provider>;
};

export { SocketContext, SocketProvider };
