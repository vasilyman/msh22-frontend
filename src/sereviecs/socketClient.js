export default class SocketClient {
  constructor(baseWs = 'wss://msh22.remonstro.ru/ws') {
    this.baseWs = baseWs;
    this.client = null;
  }

  async connect(model) {
    const url = model ? this.baseWs + model : this.baseWs;
    this.client = await new Promise((res, rej) => {
      const socket = new WebSocket(url);
      socket.addEventListener('open', () => res(socket), { once: true });
      socket.addEventListener('error', (e) => rej(e), { once: true });
    });
  }
}
