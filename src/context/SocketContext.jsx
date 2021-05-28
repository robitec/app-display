import React, { createContext } from 'react';
import socketIOClient from 'socket.io-client';

const SocketContext = createContext({ socket: null });

const socketUrl = process.env.SOCKET_URL || 'http://localhost:3001';

console.log(`Socket: ${socketUrl}`);

const SocketProvider = ({ children }) => {
  const socket = socketIOClient(socketUrl);
  return <SocketContext.Provider value={{ socket }}>{children}</SocketContext.Provider>;
};

export { SocketContext, SocketProvider };
