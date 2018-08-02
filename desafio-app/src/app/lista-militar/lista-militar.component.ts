import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { WebService } from '../laravel.service';
import { AlteraMilitarComponent } from '../altera-militar/altera-militar.component';


@Component({
  selector: 'app-lista-militar',
  templateUrl: './lista-militar.component.html',
  styleUrls: ['./lista-militar.component.css']
})
export class ListaMilitarComponent {


   militares: string;

   msg ='';
  constructor(private webService:WebService, private route:Router){

    let self = this;
    self.webService.getMilitar(self.webService.getUsuario().token).then(function(retorno){
      if(retorno.status){
        console.log(retorno.data);
         self.militares = retorno.data;
      }else{
        this.route.navigateByUrl('login');
      }
    });


}



excluiCadastro(id){

  var self = this;

    self.webService.deleteMilitar(self.webService.getUsuario().token,id)
    .then(function(retorno){
      if(retorno.status){
        console.log(retorno.data);
        self.msg=retorno.data;
        window.location.reload();

      }else{
        console.log(retorno.data);
        self.msg = retorno.data;
      }

    });
}




editMilitar(id): void {
    localStorage.removeItem("militarId");
    localStorage.setItem("militarId", id.toString());
    this.route.navigate(['alteraMilitar']);
  };






}
