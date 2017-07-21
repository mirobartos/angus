import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({  
  selector: 'app-simple-form',
  template: `
        
    <input 
      #myInput 
      type="text" 
      [(ngModel)]="message"
      [ngClass]="{mousedown:isMouseDown}"
      (mousedown)="isMouseDown = true"
      (mouseup)="isMouseDown = false"
      (mouseleave)="isMouseDown = false"
      >
    <button
      class="white bg-black code"
     (click)="update.emit({text:message})">Click me</button>
    
  `,
  styles: [`
  *{
    font-family:monospace;
  }

  input:focus{
    font-weight:bold;
  }

  .mousedown{
    border: 5px solid green;
  }
  `]
})
export class SimpleFormComponent implements OnInit {

  isMouseDown;

  @Input() message;

  @Output() update = new EventEmitter();

  // onClick(event, value) {
  //   console.log(event);
  //   console.log(value);
  // }

  constructor() { }

  ngOnInit() {
  }

}
