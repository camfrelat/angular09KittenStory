import { Component, OnInit } from '@angular/core';
import { Kitten } from '../shared/models/kitten.model';

@Component({
  selector: 'app-list-kitten',
  templateUrl: './list-kitten.component.html',
  styleUrls: ['./list-kitten.component.css'],
})
export class ListKittenComponent implements OnInit {
  kittens: Kitten[];
  userKittens: Kitten[];

  constructor() {
    this.kittens = new Array();
    this.userKittens = new Array();
  }

  addKitten(kitten: Kitten) {
    this.kittens.push(kitten);
  }

  //Add a kitten to a new array adoptedKittens and concat arrays userKittens and adoptedKittens
  //This method takes the index of an array as parameter
  adoptKitten(index: number) {
    const adoptedKittens = this.kittens.splice(index, 1);
    this.userKittens = this.userKittens.concat(adoptedKittens);
  }

  ngOnInit(): void {
    this.kittens.push(
      new Kitten(
        'Bao',
        'Européen',
        '03/08/2021',
        'https://cdn.pixabay.com/photo/2021/10/13/11/50/cat-6706393_960_720.jpg'
      ),
      new Kitten(
        'Sherlock',
        'Européen',
        '12/11/2020',
        'https://cdn.pixabay.com/photo/2020/11/23/16/19/kitten-5770229_960_720.jpg'
      ),
      new Kitten(
        'Mocka',
        'Européen',
        '05/01/2021',
        'https://cdn.pixabay.com/photo/2017/07/25/01/22/cat-2536662_960_720.jpg'
      )
    );
  }
}
