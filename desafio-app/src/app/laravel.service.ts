import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import  'rxjs/add/operator/toPromise';

@Injectable()
export class WebService{

   private headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});
   private urlUsuario = 'http://localhost:8000/api/usuario';
   private urlLogin = 'http://localhost:8000/api/login';
   private urlPatente = 'http://localhost:8000/api/patentes?api_token=';
   private urlMilitar = 'http://localhost:8000/api/cadastro?api_token=';
   private urlFiltraMilitar = 'http://localhost:8000/api/filtraCadastro?api_token=';

   constructor(private http:Http){ }

   usuario(name:string, login:string, password:string){
      return this.http
      .post(this.urlUsuario,'name='+name+'&login='+login+'&password='+password,{headers:this.headers})
      .toPromise().then(res=>res.json());

   }
   login(login:string, password:string){
      return this.http
      .post(this.urlLogin,'login='+login+'&password='+password,{headers:this.headers})
      .toPromise().then(res=>res.json());
   }

   getPatente(token:string){
     return this.http
     .get(this.urlPatente+token)
     .toPromise().then(res=>res.json());
   }

   getMilitar(token:string){
     return this.http
     .get(this.urlMilitar+token)
     .toPromise().then(res=>res.json());
   }

   getMilitarId(token:string,id:string){
     return this.http
     .get(this.urlFiltraMilitar+token+'&id='+id)
     .toPromise().then(res=>res.json());
   }

   updateMilitar(token:string,id:string,nome:string,data_nascimento:string,sv_obrigatorio:string,id_posto_grad:string,identidade:string){
     return this.http
     .put(this.urlMilitar+token+'&id='+id,'nome='+nome+'&data_nascimento='+data_nascimento+'&sv_obrigatorio='+sv_obrigatorio+'&id_posto_grad='+id_posto_grad+'&identidade='+identidade,{headers:this.headers})
     .toPromise().then(res=>res.json());

   }

   deleteMilitar(token:string,id:string){
     return this.http
     .delete(this.urlMilitar+token+'&id='+id)
     .toPromise().then(res=>res.json());

   }

   cadastro(token:string,nome:string,data_nascimento:string,sv_obrigatorio:string,id_posto_grad:string,identidade:string){
      return this.http
      .post(this.urlMilitar+token,'nome='+nome+'&data_nascimento='+data_nascimento+'&sv_obrigatorio='+sv_obrigatorio+'&id_posto_grad='+id_posto_grad+'&identidade='+identidade,{headers:this.headers})
      .toPromise().then(res=>res.json());

   }

   setUsuario(usuario){
     sessionStorage.setItem('usuarioNome',usuario.nome);
     sessionStorage.setItem('usuarioLogin',usuario.login);
     sessionStorage.setItem('usuarioToken',usuario.token);
   }

   getUsuario(){
     return {
       nome: sessionStorage.getItem('usuarioNome'),
      login: sessionStorage.getItem('usuarioLogin'),
      token: sessionStorage.getItem('usuarioToken')
     };
  }

}
