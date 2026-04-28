import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.scss',
})
export class Button {

  @Input() text = ""
    @Input() width = ""
  @Output() info = new EventEmitter()



  sentInfoToParent(){
      this.info.emit("hello")
  }



}
