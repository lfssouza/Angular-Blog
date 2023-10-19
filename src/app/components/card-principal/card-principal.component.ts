import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-principal',
  templateUrl: './card-principal.component.html',
  styleUrls: ['./card-principal.component.css']
})
export class CardPrincipalComponent implements OnInit {
  @Input()
  photo:string=""
  @Input()
  title:string=""
  @Input()
  description=""
  @Input()
  id:string="0"
  constructor() { }

  ngOnInit(): void {
  }

}
