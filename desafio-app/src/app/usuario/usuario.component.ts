import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { WebService } from '../laravel.service';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent {

  constructor(private webService:WebService, private route:Router){}

   usuarioCad = {nome:'',login:'',senha:''};
   msg ='';

  addUsuario(){
    var self = this;
    this.webService.usuario(self.usuarioCad.nome,self.usuarioCad.login,self.usuarioCad.senha)
    .then(function(retorno){
      if(retorno.status){
        console.log(retorno.data);
        self.webService.setUsuario({nome:retorno.data.name,login:retorno.data.login,token:retorno.data.api_token});
        self.usuarioCad = {nome:'',login:'',senha:''};
        self.route.navigateByUrl('home');
      }else{
        console.log(retorno.data);
        self.msg = retorno.data;
      }

    });

  }

}
