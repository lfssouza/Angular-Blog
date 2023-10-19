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
  cardTitle:string=""
  @Input()
  description=""
  constructor() { }

  ngOnInit(): void {
  }

}
