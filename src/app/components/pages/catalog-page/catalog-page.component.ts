import { Component } from '@angular/core';
import { TemplateContentComponent } from '../../shared/template-content/template-content.component';

@Component({
  selector: 'app-catalog-page',
  standalone: true,
  imports: [TemplateContentComponent],
  templateUrl: './catalog-page.component.html',
  styleUrl: './catalog-page.component.scss'
})
export class CatalogPageComponent {

}
