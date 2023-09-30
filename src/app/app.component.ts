import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CardFormComponent } from './card-form/card-form.component';
import { GuestCardComponent } from './guest-card/guest-card.component';
import { Guest } from './interfaces/guest.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CardFormComponent, GuestCardComponent],
  template: ` 
    <app-guest-card [guest]="guest" />
    <app-card-form [(guest)]="guest" />
  `,
  styles: [`
    :host {
      display: block;
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
}
