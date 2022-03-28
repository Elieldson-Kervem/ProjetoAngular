import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-01';
  public jogoAndamento:boolean=true;
  public tipoEncerramento:string=''
  public encerrarJogo(tipo:string):void{
       this.jogoAndamento=false
       this.tipoEncerramento=tipo
  }
  public reiniciarJogo():void{
    this.jogoAndamento=true;
    this.tipoEncerramento=''
  }
  
}
