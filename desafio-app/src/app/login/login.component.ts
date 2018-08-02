import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { WebService } from '../laravel.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  constructor(private webService:WebService, private route:Router){}

   usuario = {login:'',senha:''};
   msg ='';

  login(){
    var self = this;
    this.webService.login(self.usuario.login,self.usuario.senha)
    .then(function(retorno){
      if(retorno.status){
        console.log(retorno.data);
        self.webService.setUsuario({nome:retorno.data.name,login:retorno.data.login,token:retorno.data.api_token});
        self.usuario = {login:'',senha:''};
        self.route.navigateByUrl('home');
      }else{
        console.log(retorno.data);
        self.msg = retorno.data;
      }

    });

  }



}
