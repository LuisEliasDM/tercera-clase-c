import { outputAst } from '@angular/compiler';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tres',
  templateUrl: './tres.component.html',
  styleUrls: ['./tres.component.scss']
})
export class TresComponent implements OnInit {
  @Output() clickEvent: EventEmitter<any> = new EventEmitter<any>();
  @Output() reiniciarEvent: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(): void{
    this.clickEvent.emit("aumentar")
  }

  reiniciar(event: Event): void{
    this.reiniciarEvent.emit(event)
  }

}
