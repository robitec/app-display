import React, { createContext } from 'react';
import socketIOClient from 'socket.io-client';

const SocketContext = createContext({ socket: null });

const IP = process.env.SOCKET_IP || "172.27.229.66"
const PORT = process.env.SOCKET_PORT || "3001"
const SocketProvider = ({ children }) => {
  const socket = socketIOClient(
    `${window.location.protocol}//${IP}:${PORT}`
  );
  return <SocketContext.Provider value={{ socket }}>{children}</SocketContext.Provider>;
};

export { SocketContext, SocketProvider };
