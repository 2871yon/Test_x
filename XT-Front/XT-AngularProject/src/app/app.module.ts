import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule} from '@angular/common/http';
import { FormsModule,FormControl } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReviewComponent } from './comp/review/review.component';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { MatFormFieldModule } from "@angular/material/form-field";
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatMenuModule} from '@angular/material/menu';

// import { ReactiveFormsModule } from '@angular/forms';
 import { MatButtonModule } from '@angular/material/button';
 import { MatIconModule } from "@angular/material/icon";
 import {MatAutocompleteModule} from '@angular/material/autocomplete';
 import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 import {MatDividerModule} from '@angular/material/divider';

// import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { Grig1Component } from './comp/grig1/grig1.component';
import { Grig2Component } from './comp/grig2/grig2.component';

@NgModule({
  declarations: [
    AppComponent,
    ReviewComponent,
    Grig1Component,
    Grig2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSlideToggleModule,
    RouterModule,HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatDividerModule,
    // MatCheckboxModule,
    // MatRadioModule,
    MatAutocompleteModule,
    // MatCardModule,
    MatButtonModule ,
    MatMenuModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatTableModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
