import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-template-content',
  standalone: true,
  imports: [],
  templateUrl: './template-content.component.html',
  styleUrl: './template-content.component.scss'
})
export class TemplateContentComponent {
  @Input() marginTop: boolean = true;
}
