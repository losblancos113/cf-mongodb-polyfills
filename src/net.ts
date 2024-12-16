import { CloudflareSocket } from './net-mock';

export const createConnection = (opts: {
  autoSelectedFamily: boolean;
  host: string;
  port: number;
}) => {
  // use socket.readable to read from the socket and write to m
  console.log('createConnection called');
  const cfSocket = new CloudflareSocket(false);
  cfSocket.connect(opts);
  return cfSocket;
};

export const isIP = (host: string) => {
  return /\d+\.\d+\.\d+\.\d+/.test(host);
};

export const net = {
  createConnection,
};

export default { ...net };
