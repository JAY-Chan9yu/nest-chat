import { SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'ws';

var a = 1;

@WebSocketGateway({cors: '*:*'}) 
export class ChatGateway {  
  @WebSocketServer()
  server: Server;
  
  constructor() {
    a += 1;
    console.log('로그로그' + a)
  }

  @SubscribeMessage('chat')
  handleMessage(client: any, payload: any): void {
    console.log(payload);
    console.log(client)
    client.send('테스트 입니다!');
  }  
}
 