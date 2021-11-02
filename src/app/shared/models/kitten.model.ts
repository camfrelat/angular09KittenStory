export class Kitten {
  name: string;
  race: string;
  //Change birthday type to Date ?
  birthdate: string;
  img: string;

  constructor(name: string, race: string, birthdate: string, img: string) {
    this.name = name;
    this.race = race;
    this.birthdate = birthdate;
    this.img = img;
  }
}
