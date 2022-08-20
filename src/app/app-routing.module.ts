import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddContactComponent } from './components/add-contact/add-contact.component';
import { ShowAllContactComponent } from './components/show-all-contact/show-all-contact.component';

const routes: Routes = [
  {path: 'addContact', component: AddContactComponent},
  {path: 'addContact/:id', component: AddContactComponent},
  {path: 'showContact', component: ShowAllContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
