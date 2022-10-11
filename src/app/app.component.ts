import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public value: number = 0;
  public reiniciarEvent!: Event;

  aumentar(event: any){
    this.value++;
    console.log(event);
  }

  reiniciar(event: any){
    this.value = 0;
    console.log(event);
    this.reiniciarEvent = event;
  }
}
