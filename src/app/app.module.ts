import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UpsertModalComponent } from './upsert-modal/upsert-modal.component';
import { SortablejsModule } from 'ngx-sortablejs';

@NgModule({
  declarations: [
    AppComponent,
    UpsertModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    SortablejsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
