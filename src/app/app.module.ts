// CORE DEPS
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
// MATERIAL DESIGN MODULES
import {
  MatToolbarModule,
  MatCardModule,
  MatTabsModule,
  MatButtonModule,
  MatInputModule,
  MatCheckboxModule,
  MatRadioModule,
  MatIconModule,
  MatListModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { APP_ROUTES } from './app.routes';

import { PeopleAppComponent } from './app.component';
import { HomeComponent } from './home';
import { PersonComponent } from './person';
import { PeopleComponent } from './people';
import { CardComponent } from './shared/card';
import { AddDialogComponent } from './people/add-dialog/add-dialog.component';
import { FormComponent } from './shared/form';
import { UpdateComponent } from './update/update.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatTabsModule,
    MatButtonModule,
    MatInputModule,
    MatCheckboxModule,
    MatRadioModule,
    MatIconModule,
    MatListModule
  ],
  declarations: [
    PeopleAppComponent,
    HomeComponent,
    PersonComponent,
    PeopleComponent,
    CardComponent,
    AddDialogComponent,
    FormComponent,
    UpdateComponent
  ],
  entryComponents: [AddDialogComponent],
  providers: [ ],
  bootstrap: [
    PeopleAppComponent
  ]
})
export class AppModule { }