import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {route} from './app.routes';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { CardComponent } from './card/card.component';
import { WebService } from './laravel.service';
import { ListaMilitarComponent } from './lista-militar/lista-militar.component';
import { AlteraMilitarComponent } from './altera-militar/altera-militar.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    CadastroComponent,
    UsuarioComponent,
    CardComponent,
    ListaMilitarComponent,
    AlteraMilitarComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    route,
    NgbModule.forRoot()
  ],
  providers: [WebService],
  bootstrap: [AppComponent]
})
export class AppModule { }
