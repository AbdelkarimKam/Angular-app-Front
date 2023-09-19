import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjoutClientComponent } from './ajout-client/ajout-client.component';
import { ListClientsComponent } from './list-clients/list-clients.component';
import { UpdateClientComponent } from './update-client/update-client.component';
import { DeleteClientComponent } from './delete-client/delete-client.component';

const routes: Routes = [
  { path: 'ajout', component: AjoutClientComponent },
  { path: 'list', component: ListClientsComponent },
  { path: 'update', component: UpdateClientComponent },
  { path: 'delete', component: DeleteClientComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
