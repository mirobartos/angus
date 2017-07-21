import { Injectable } from '@angular/core';

@Injectable()
export class MailService {

  messages = [
    {id:1, text:`message 1`},
    {id:2, text:`message 2`},
    {id:3, text:`message 3`}
  ];

  update(id, text) {
    this.messages = this.messages.map(m =>
    m.id === id ? {id, text} : m)
  }

  constructor() { }

}
