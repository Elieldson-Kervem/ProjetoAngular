import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit,Input, OnChanges, SimpleChanges } from '@angular/core'; 
import { coracao } from '../shared/coracao.model';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit, OnChanges {
  
  //com o protent byde eu posso mexer nos atributos das minhas tags html, e para definir qual atributo eu vou mudar eu so preciso usar [] para definir qual atributo eu vou mudar...

  //com o protent byde eu posso mexer nos atributos das minhas tags html, e para definir qual atributo eu vou mudar eu so preciso usar [] para definir qual atributo eu vou mudar...

 @Input() public tentativas:any;
public coracoes:coracao[]=[
  new coracao(true),new coracao(true),new coracao(true)
]
  constructor() { 
    
  }
ngOnChanges():  void{
  if(this.tentativas !==this.coracoes.length){
    let indice=this.coracoes.length- this.tentativas

    this.coracoes[indice-1].cheio=false
  }
}
  ngOnInit(): void {
   
  }

}
