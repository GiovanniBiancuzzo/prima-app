import { NgModule } from '@angular/core';//qui si inseriscono le funzionalità     
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';//qui si inseriscono le componenti
import { TitoloComponent } from './components/titolo.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SottotitoloComponent } from './sottotitolo/sottotitolo.component';
import { DatiAziendaComponent } from './dati-azienda/dati-azienda.component';


@NgModule({
  declarations: [//qui si inseriscono le componenti
    AppComponent,
    TitoloComponent,
    NavbarComponent,
    FooterComponent,
    SottotitoloComponent,
    DatiAziendaComponent
  ],
  imports: [//qui si inseriscono le funzionalità
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
