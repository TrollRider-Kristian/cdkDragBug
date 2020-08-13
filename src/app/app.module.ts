import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BidiModule } from '@angular/cdk/bidi';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { OverlayModule } from '@angular/cdk/overlay';
import { MatDialogModule } from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { SomeComponentComponent } from './some-component/some-component.component';

@NgModule({
  declarations: [
    AppComponent,
    SomeComponentComponent
  ],
  imports: [
    BidiModule,
    BrowserModule,
    BrowserAnimationsModule,
    DragDropModule,
    OverlayModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [SomeComponentComponent]
})
export class AppModule { }
