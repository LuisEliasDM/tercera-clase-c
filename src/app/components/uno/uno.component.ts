import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uno',
  templateUrl: './uno.component.html',
  styleUrls: ['./uno.component.scss']
})
export class UnoComponent implements OnInit {
  public flag: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  onClick(): void {
    this.flag = !this.flag;
  }

  onMouseEnter(): void {
    console.log("Hola");
  }

  onInput(event: Event): void{
    let element = event.target as HTMLInputElement;
    let regex = /[^A-Za-zá-úÁ-Ú]|[*÷×]/g

    element.value = element.value.replace(regex, "")

  }
}
