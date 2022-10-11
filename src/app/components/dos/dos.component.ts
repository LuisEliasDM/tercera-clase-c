import { Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-dos',
  templateUrl: './dos.component.html',
  styleUrls: ['./dos.component.scss']
})
export class DosComponent implements OnInit {
  @Input() public value:number = 0;
  @Input() public event!:any;

  constructor() { }

  ngOnInit(): void {
  }

}
