import { Component } from '@angular/core';
import { TemplateContentComponent } from '../../shared/template-content/template-content.component';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [TemplateContentComponent],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.scss'
})
export class ContactPageComponent {

}
