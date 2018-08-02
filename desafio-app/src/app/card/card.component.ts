import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

 @Input() header: string;
 @Input() titulo: string;
 @Input() descricao: string;
 @Input() link: string;
 @Input() nomeButton: string;


}
