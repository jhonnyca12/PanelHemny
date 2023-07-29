import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
})
export class EmployeesComponent implements OnInit {
  arrayItems: any = [];
  contactForm!: FormGroup;
  model: NgbDateStruct | undefined;
  date: any;
  constructor(
    private readonly fb: FormBuilder,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.contactForm = this.initForm();
  }
  onSubmit(): void {
    this.arrayItems.push(this.contactForm.value);
    console.log(this.arrayItems);
    this.toastr.success('Se agregó correctamente');
  }

  initForm(): FormGroup {
    return this.fb.group({
      name: ['jhonny', [Validators.required, Validators.minLength(3)]],
      lastName: ['candelo', [Validators.required, Validators.minLength(3)]],
      direccion: ['guigue', [Validators.required]],
      directionTwo: ['gugigue2'],
      country: ['venecia', [Validators.required]],
      city: ['valencia', [Validators.required]],
      postal: ['2010', Validators.required],
      size: ['1.60', Validators.required],
      weight: ['87', Validators.required],
      checkTerms: [true, this.checkTermsValidator()],
    });
  }
  checkTermsValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const checked = control.value;
      if (checked) {
        return null;
      } else {
        return { checkTerms: true };
      }
    };
  }
}
