import { Component, Input, OnInit } from '@angular/core';
import { Kitten } from '../shared/models/kitten.model';

@Component({
  selector: 'app-user-kitten',
  templateUrl: './user-kitten.component.html',
  styleUrls: ['./user-kitten.component.css'],
})
export class UserKittenComponent implements OnInit {
  @Input() kitten: Kitten | undefined;
  constructor() {}

  ngOnInit(): void {}
}
