import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent {
  locationForm!: FormGroup;
  constructor(private readonly fb: FormBuilder) {}

  ngOnInit(): void {

  }

  onSubmit():void{
    console.log('form ->');
  }

  // initForm(): FormGroup{
  //   this.fb.group({
  //     name: ['', [Validators.required,]]
  //   })
  // }
}
