import { Injectable } from '@angular/core';

@Injectable()
export class FirstOpsService {
  messages: Message[] = [];
  constructor() {
    this.init();
  }

  init(): void {
    this.Insert({
      name: 'alu',
      email: 'alu@mail,com',
      message: 'some message for alu',
    });
    this.Insert({
      name: 'doe',
      email: 'doe@mail,com',
      message: 'some message for doe',
    });
    this.Insert({
      name: 'bilu',
      email: 'bilu@mail,com',
      message: 'some message for bilu',
    });
  }

  Insert(message: { name: string; email: string; message: string }): void {
    this.messages.push(message);
  }

  getAllMessage(): Message[] {
    return this.messages;
  }

  deleteMessage(index: number): void {
    this.messages.splice(index, 1);
  }
}
