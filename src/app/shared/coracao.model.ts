export class coracao{
    constructor(
        public cheio:boolean,
        public urlCoracaoCheio:string='/assets/heart.png',
        public urlCoracaoVazio:string='assets/heart (1).png'
    ){}
    public existeCoracao():string{
        if(this.cheio){
            return this.urlCoracaoCheio
        }
        else{
           return this.urlCoracaoVazio
        }
    }
}