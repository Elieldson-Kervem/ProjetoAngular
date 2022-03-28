import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {
  //aqui é onde eu mexo no meu typescript
  //essa é a forma com a qual eu faço string interpolation,ou seja como eu atraves da classe faço sobre escrita no meu template...

  public titulo:string='Aprenda Inglês';

  constructor() { }

  ngOnInit(): void {
  }

}
