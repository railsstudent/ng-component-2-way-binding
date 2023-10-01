import { NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Guest } from '../interfaces/guest.interface';
import { INDUSTRIES } from './constants/industry.constant';

@Component({
  selector: 'app-card-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor],
  template: `
    <form [formGroup]="form">
      <div>
        <label for="name">Name: 
          <input type="text" id="name" name="name" formControlName="name" />
        </label>
      </div>
      <div>
        <label for="company">Company: 
          <input type="text" id="company" name="company" formControlName="company"  />
        </label>
      </div>
      <div>
        <label for="industry">Industry: 
          <select formControlName="industry">
            <option value="">----select---</option>
            <option *ngFor="let industry of industries; trackBy: trackByFunc">
              {{industry}}
            </option>
          </select>
        </label>
      </div>
      <div>
        <label for="title">Title: 
          <input type="text" id="title" name="title" formControlName="title"  />
        </label>
      </div>
    </form>
  `,
  styles: [`
    :host {
      display: block;
    }

    form {
      max-width: 450px;
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
      width: 300px;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardFormComponent {
  @Input()  guest!: Guest;
  @Output() guestChange = new EventEmitter<Guest>();

  form = new FormGroup({
    name: new FormControl('', { nonNullable: true }),
    company: new FormControl('', { nonNullable: true }),
    industry: new FormControl('', { nonNullable: true }),
    title: new FormControl('', { nonNullable: true }),    
  })

  industries = INDUSTRIES;

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
      });
  }

  trackByFunc(index: number) {
    return index;
  }
}
