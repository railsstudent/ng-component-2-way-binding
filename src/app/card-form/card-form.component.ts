import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Guest } from '../interfaces/guest.interface';

@Component({
  selector: 'app-card-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <form [formGroup]="form">
      <div>
        <label for="name">Name: </label>
        <input type="text" id="name" name="name" formControlName="name" />
      </div>
      <div>
        <label for="company">Company: </label>
        <input type="text" id="company" name="company" formControlName="company"  />
      </div>
      <div>
        <label for="industry">Industry: </label>
        <input type="text" id="industry" name="industry" formControlName="industry"  />
      </div>
      <div>
        <label for="title">Title: </label>
        <input type="text" id="title" name="title" formControlName="title"  />
      </div>
    </form>
  `,
  styles: [`
    :host {
      display: block;
    }

    form {
      margin: 1rem;
      border: 1px solid black;
      border-radius: 10px;
      padding: 1rem;
    }

    div {
      margin-bottom: 1rem;
    }

    input {
      padding: 0.25rem;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardFormComponent {
  form = new FormGroup({
    name: new FormControl('', { nonNullable: true }),
    company: new FormControl('', { nonNullable: true }),
    industry: new FormControl('', { nonNullable: true }),
    title: new FormControl('', { nonNullable: true }),    
  })

  @Input()  guest!: Guest;
  @Output() guestChange = new EventEmitter<Guest>();

  constructor() {
    this.form.valueChanges.pipe(takeUntilDestroyed())
    .subscribe((formValues) => {
      const { name = '', company = '', industry = '', title = '' } = formValues;
      this.guest = { 
        name,
        company,
        industry,
        title,        
      };
      this.guestChange.emit(this.guest);
    })
  }
}
