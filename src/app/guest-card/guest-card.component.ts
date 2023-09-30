import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Guest } from '../interfaces/guest.interface';

@Component({
  selector: 'app-guest-card',
  standalone: true,
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
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GuestCardComponent {
  @Input({ required: true })
  guest!: Guest;
}
