import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },  // Root path untuk pemain akan mengarah ke daftar pemain
  { path: 'list', component: ListComponent },  // Daftar pemain
  { path: 'create', component: CreateComponent },  // Form untuk membuat pemain baru
  { path: ':pemainId/detail', component: DetailsComponent },  // Detail pemain berdasarkan ID
  { path: ':pemainId/edit', component: EditComponent }  // Edit pemain berdasarkan ID
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PemainRoutingModule { }
