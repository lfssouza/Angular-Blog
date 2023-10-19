import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-secundario',
  templateUrl: './card-secundario.component.html',
  styleUrls: ['./card-secundario.component.css']
})
export class CardSecundarioComponent implements OnInit {
  @Input()
  Photo:string=""
  @Input()
  title:string=""
  @Input()
  id:string="0"
  constructor() { }

  ngOnInit(): void {
  }

}
