import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MonServiceService } from '../services/mon-service.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-mon-composant',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mon-composant.component.html',
  styleUrl: './mon-composant.component.scss'
})
export class MonComposantComponent {
  private title: Title = inject(Title);
  constructor() {
    this.title.setTitle('Mon Composant');
    }
    

  public color: string = "blue";
  ok: boolean= true;
  titres: string[]= ['titre1', 'titre2', 'titre3'];
  messageCount: number = 0;

  private service: MonServiceService = inject(MonServiceService);

  public temp: string = "";

  clickMeteo(){
    console.log('clic');
    this.service.getMeteo().subscribe({
      next : (data) => {
        console.log(data);
        this.temp = data.current_condition.tmp;
      }
    });
  }

}
