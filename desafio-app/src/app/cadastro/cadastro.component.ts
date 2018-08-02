import { Component} from '@angular/core';
import { Router } from '@angular/router';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import { WebService } from '../laravel.service';



@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent  {

   militar = {nome:'', dataNascimento:'', svObrigatorio:'0', patente:'', identidade:''};

   msg = '';
   patentes:string;




  constructor(private webService:WebService, private route:Router){

    let self = this;
    self.webService.getPatente(self.webService.getUsuario().token).then(function(retorno){
      if(retorno.status){
        console.log(retorno.data);
         self.patentes = retorno.data;
      }else{
        this.route.navigateByUrl('login');
      }
    });


  }

  verificaPatente(){

    if(this.militar.patente < '12'){
      this.militar.svObrigatorio='0';
     (document.getElementById("sim")as HTMLInputElement ).disabled = true;
     (document.getElementById("nao")as HTMLInputElement ).disabled = false;
    }else{
      this.militar.svObrigatorio='1';
      (document.getElementById("nao")as HTMLInputElement ).disabled = true;
     (document.getElementById("sim")as HTMLInputElement ).disabled = false;
    }
  }


  addCadastro(){
    var self = this;
    this.webService.cadastro(self.webService.getUsuario().token,self.militar.nome,self.militar.dataNascimento,self.militar.svObrigatorio,self.militar.patente,self.militar.identidade)
    .then(function(retorno){
      if(retorno.status){
        console.log(retorno.data);
        self.militar = {nome:'', dataNascimento:'', svObrigatorio:'0', patente:'', identidade:''};
        self.msg = retorno.data;
      }else{
        console.log(retorno.data);
        self.msg = retorno.data;
      }

    });

  }









}
