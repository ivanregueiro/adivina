import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  //tipos primitivos number ,string boolean, any ,array
      num:number;
      mayorMenor : String ="...";
      numSecreto : number =this.numAleatorio(0,10);
  constructor(public navCtrl: NavController) {
    
  }
  numAleatorio(a,b){
    return Math.round(Math.random()*(b-a)+parseInt(a));
  }

compruebaNumero(){
  if(this.num){
    if(this.numSecreto<this.num){
      this.mayorMenor='menor de';

    }
    else if(this,this.numSecreto>this.num){
      this.mayorMenor='mayor de';
    }
    else 
    this.mayorMenor=' ';
  }
}
}