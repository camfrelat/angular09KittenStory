import { Routes } from '@angular/router';
import { CreateKittenComponent } from './create-kitten/create-kitten.component';
import { ListKittenComponent } from './list-kitten/list-kitten.component';

const ROUTES: Routes = [
  { path: 'create', component: CreateKittenComponent },
  { path: 'kittenList', component: ListKittenComponent },
];

export { ROUTES };
