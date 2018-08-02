import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { WebService } from '../laravel.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private webService:WebService, private route:Router){
    if (!this.webService.getUsuario().nome){
      this.route.navigateByUrl('login');
      return;

    }

  }
}
