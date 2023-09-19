import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AjoutClientComponent } from './ajout-client/ajout-client.component';
import { ListClientsComponent } from './list-clients/list-clients.component';
import { UpdateClientComponent } from './update-client/update-client.component';
import { HeaderComponent } from './header/header.component';
import { DeleteClientComponent } from './delete-client/delete-client.component';

@NgModule({
  declarations: [
    AppComponent,
    AjoutClientComponent,
    ListClientsComponent,
    UpdateClientComponent,
    DeleteClientComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
