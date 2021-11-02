import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { Kitten } from '../shared/models/kitten.model';

@Component({
  selector: 'app-create-kitten',
  templateUrl: './create-kitten.component.html',
  styleUrls: ['./create-kitten.component.css'],
})
export class CreateKittenComponent implements OnInit {
  kittens: Kitten[];

  kittenForm = this.formBuilder.group({
    kittenName: ['', Validators.required],
    race: ['', Validators.required],
    birthdate: ['', Validators.required],
    imgLink: ['', Validators.required],
  });

  @Output() public createKitten: EventEmitter<Object> = new EventEmitter();

  constructor(private formBuilder: FormBuilder) {
    this.kittens = new Array();
  }

  onSubmit(): void {
    console.log(this.kittenForm.value);
    this.kittens.push(
      new Kitten(
        this.kittenForm.value('kittenName'),
        this.kittenForm.value('race'),
        this.kittenForm.value('birthdate'),
        this.kittenForm.value('imgLink')
      )
    );

    // this.createKitten.emit(this.kittenForm.value);
  }

  ngOnInit(): void {
    this.kittens.push(new Kitten('toto', 'Européen', '02/11/2020', 'url'));
  }
}
