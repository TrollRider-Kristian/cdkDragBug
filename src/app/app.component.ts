import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SomeComponentComponent } from './some-component/some-component.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'cdkBugDemo';

  constructor(private dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(SomeComponentComponent, {});
  }
}
