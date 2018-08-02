import{ ModuleWithProviders } from '@angular/core';
import{ Routes, RouterModule } from '@angular/router';

import{ HomeComponent} from './home/home.component';
import{ LoginComponent} from './login/login.component';
import{ UsuarioComponent} from './usuario/usuario.component';
import{ CadastroComponent} from './cadastro/cadastro.component';
import{ ListaMilitarComponent} from './lista-militar/lista-militar.component';
import{ AlteraMilitarComponent} from './altera-militar/altera-militar.component';

const appRoutes: Routes = [
  { path:'', redirectTo:'home', pathMatch: 'full'},
  { path:'home', component:HomeComponent },
  { path:'login', component:LoginComponent },
  { path:'usuario', component:UsuarioComponent },
  { path:'cadastro', component:CadastroComponent },
  { path:'listaMilitar', component:ListaMilitarComponent },
  { path:'alteraMilitar', component:AlteraMilitarComponent }

];

export const route: ModuleWithProviders = RouterModule.forRoot(appRoutes);
