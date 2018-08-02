import { Component } from '@angular/core';
import { Router } from '@angular/router';


import { WebService } from '../laravel.service';

@Component({
  selector: 'app-altera-militar',
  templateUrl: './altera-militar.component.html',
  styleUrls: ['./altera-militar.component.css']
})

export class AlteraMilitarComponent {


   militar = {id:'',nome:'', dataNascimento:'', svObrigatorio:'', patente:'', identidade:''};


    msg ='';
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

    let militarId = localStorage.getItem("militarId");
    if(!militarId) {
      alert("Ação inválida.")
      self.route.navigate(['listaMilitar']);
      return;
    }
    self.webService.getMilitarId(self.webService.getUsuario().token,militarId)
    .then(function(retorno){
        if(retorno.status){
          console.log(retorno.data);
          self.militar.nome = retorno.data.nome;
          self.militar.dataNascimento = retorno.data.data_nascimento;
          self.militar.svObrigatorio = retorno.data.sv_obrigatorio;
          self.militar.patente = retorno.data.id_posto_grad;
          self.militar.identidade = retorno.data.identidade;

        }else{
          console.log(retorno.data);
          this.msg = retorno.data;
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

  alterarMilitar(){
    let self = this;
    let militarId = localStorage.getItem("militarId");
    if(!militarId) {
      alert("Ação inválida.")
      self.route.navigate(['listaMilitar']);
      return;
    }
    self.webService.updateMilitar(self.webService.getUsuario().token,militarId,self.militar.nome,self.militar.dataNascimento,self.militar.svObrigatorio,self.militar.patente,self.militar.identidade)
    .then(function(retorno){
        if(retorno.status){
          console.log(retorno.data);
          self.militar = {id:'',nome:'', dataNascimento:'', svObrigatorio:'0', patente:'', identidade:''};
          self.msg =retorno.data;
          self.route.navigate(['listaMilitar']);
        }else{
          console.log(retorno.data);
          this.msg = retorno.data;
          self.route.navigate(['listaMilitar']);
        }

      });


  }

}
