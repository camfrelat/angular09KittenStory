import { Component, Output } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { Kitten } from '../shared/models/kitten.model';

@Component({
  selector: 'app-create-kitten',
  templateUrl: './create-kitten.component.html',
  styleUrls: ['./create-kitten.component.css'],
})
export class CreateKittenComponent {
  kittenForm = this.formBuilder.group({
    kittenName: ['', Validators.required],
    race: ['', Validators.required],
    birthdate: ['', Validators.required],
    imgLink: ['', Validators.required],
  });

  @Output() public sendKitten: EventEmitter<Kitten> =
    new EventEmitter<Kitten>();

  constructor(private formBuilder: FormBuilder) {}

  //Create a new object Kitten and send it via emit method to the parent 'list-kitten-component'
  //reset form and send alert to user
  createKitten(): void {
    this.sendKitten.emit(
      new Kitten(
        this.kittenForm.controls.kittenName.value,
        this.kittenForm.controls.race.value,
        this.kittenForm.controls.birthdate.value,
        this.kittenForm.controls.imgLink.value
      )
    );
    alert('votre chatton a été ajouté');
    this.kittenForm.reset();
  }
}
