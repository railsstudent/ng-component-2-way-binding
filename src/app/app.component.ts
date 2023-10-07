import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CardFormComponent } from './card-form/card-form.component';
import { GuestCardComponent } from './guest-card/guest-card.component';
import { Guest } from './interfaces/guest.interface';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CardFormComponent, GuestCardComponent],
  template: ` 
    <h2>2-way data binding of component</h2>
    <app-guest-card [guest]="guest" />
    <app-card-form [(guest)]="guest" />
  `,
  styles: [`
    :host {
      display: block;
    }

    h2 {
      margin: 1rem; 
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  guest: Guest = {
    name: '',
    company: '',
    industry: '',
    title: '',
  }

  constructor(titleService: Title) {
    titleService.setTitle('2-way binding');
  }
}
