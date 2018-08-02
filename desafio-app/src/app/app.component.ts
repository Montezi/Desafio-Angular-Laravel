import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { WebService } from './laravel.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private webService:WebService, private route:Router){}

  private nomeUsuario ="";

  existeUsuario(){
      this.nomeUsuario = this.webService.getUsuario().nome;
      if(this.nomeUsuario){
        return true;
      }else{
        return false;
      }
  }
  logout(){
    this.webService.setUsuario({nome:"",login:"",token:""});
    this.route.navigateByUrl('login');
  }






}
