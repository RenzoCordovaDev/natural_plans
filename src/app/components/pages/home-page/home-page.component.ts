import { Component } from '@angular/core';
import { TemplateContentComponent } from '../../shared/template-content/template-content.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [TemplateContentComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
