import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router'; 
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RegistrazioneComponent } from './components/registrazione/registrazione.component';
import { AccessoComponent } from './components/accesso/accesso.component';

const routes: Routes = [
  { path: 'registrazione', component: RegistrazioneComponent },
  { path: 'accesso', component: AccessoComponent },
  { path: '', redirectTo: '/registrazione', pathMatch: 'full' },
  { path: '**', redirectTo: '/registrazione', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    RegistrazioneComponent,
    AccessoComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule, 
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
