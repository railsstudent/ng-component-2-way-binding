import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Guest } from './interfaces/guest.interface';
import { CardFormComponent } from './card-form/card-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CardFormComponent],
  template: `
    <div class="card">
      <h3>Guest Card</h3>
      <div class="person">
        <div class="info">
          <div class="row">
            <label>Name: </label>
            <span>{{ guest.name || 'Placeholder' }}</span>
          </div>
          <div class="row">
            <label>Company: </label>
            <span>{{ guest.company || 'Company Placeholder' }}</span>
          </div>
          <div class="row">
            <label>Industry: </label>
            <span>{{ guest.industry || 'Industry Placeholder' }}</span>
          </div>
          <div class="row">
            <label>Title: </label>
            <span>{{ guest.title || 'Title Placeholder' }}</span>
          </div>
        </div>
        <img src="https://placehold.co/80/yellow/black?text=My+Photo" />
      </div>
    </div>  
    <app-card-form [(guest)]="guest" />
  `,
  styles: [`
    :host {
      display: block;
    }

    :host {
      display: block;
    }

    h3 {
      margin-bottom: 0.75rem;
    }

    div.card {
      max-width: 450px;
      padding: 1rem;
      margin: 1rem;
      border: 1px solid black;
      border-radius: 0.5rem;
    }

    .person {
      display: flex;
      justify-content: space-between;
    }

    .info {
      width: 400px;
    }

    .row {
      text-align: left;
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
