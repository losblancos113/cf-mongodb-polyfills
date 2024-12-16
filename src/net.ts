import { CloudflareSocket } from './net-mock';

export const createConnection = (opts: {
  autoSelectedFamily: boolean;
  host: string;
  port: number;
}) => {
  // use socket.readable to read from the socket and write to m
  const cfSocket = new CloudflareSocket(false);
  cfSocket.connect(opts);
  return cfSocket;
};

export const net = {
  createConnection,
};

export default { ...net };
