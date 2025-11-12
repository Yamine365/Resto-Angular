import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommandesComponent } from './commandes/commandes.component';
import { PassCommandComponent } from './pass-command/pass-command.component';
import { UpdateCommandeComponent } from './update-commande/update-commande.component';

@NgModule({
  declarations: [
    AppComponent,
    CommandesComponent,
    PassCommandComponent,
    UpdateCommandeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
