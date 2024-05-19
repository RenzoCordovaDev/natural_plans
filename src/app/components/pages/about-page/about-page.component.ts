import { Component } from '@angular/core';
import { TemplateContentComponent } from '../../shared/template-content/template-content.component';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [TemplateContentComponent],
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.scss'
})
export class AboutPageComponent {

}
