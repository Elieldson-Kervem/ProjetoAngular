import { Component, OnInit,Output,EventEmitter } from '@angular/core';

import { Frase } from '../shared/frase.model';
import { frases } from './frase-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {
  public frases:Frase[]=frases;
  public resposta:string='';
  public rodada:number=0;
  public rodadaFrase!: Frase;
  public progresso:number=0;
  public tentativas:number=3;
 @Output() public encerrarJogo:EventEmitter<string>= new EventEmitter();
  constructor() { 
    this.atualizaRodada();
    
  }
  //primeiro eu tive que ir ate o input onde eu queria pegar a frase e depois eu defini que precisava  criar um metodo para minha classse que pedia uma resposta e esperava um evento,dentro da minha função de binde eu coloquei $event isso é metodo angular para disparar uma função que retorna o valor digita no campo desse input, poremn, eu precisei definir que eu estava trabalhando com elemento html do tipo input

  ngOnInit(): void {
  }
  public atualizarResposta(resposta:Event):void{
    
    this.resposta=((<HTMLInputElement>resposta.target).value)
    
  }

  public verificarResposta():void{
     if(this.rodadaFrase.fraseBr===this.resposta){
       
       this.rodada++
       //progresso
       this.progresso=this.progresso+(100/this.frases.length)
       if(this.rodada===4){
         this.encerrarJogo.emit("Vitoria")
       }
        
       this.atualizaRodada()
       

   
     }
     else{
       this.tentativas--
       if(this.tentativas===-1){
        this.encerrarJogo.emit("Derrota")
       }
     };
    }
  public atualizaRodada():void{
  this.rodadaFrase=this.frases[this.rodada]
  this.resposta=''
 }
    
  }

  
//atraves do event biden eu consigo ficar ouvindo eventos em  minhas tags html e sempre que acontecer eu posso disparar um determinado comportamento...

