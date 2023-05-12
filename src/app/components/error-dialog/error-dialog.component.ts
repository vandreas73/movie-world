import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './error-dialog.component.html',
  styleUrls: ['./error-dialog.component.scss']
})
export class ErrorDialogComponent {

  message: string = 'An unspecified error has occurred';
  icon: string = '';
  buttonText = 'Ok';

  constructor(
    @Inject(MAT_DIALOG_DATA)
    private data: {
      message: string;
      icon: string;
      buttonText: string;
    },
  ) {
    if (data?.icon) this.icon = data.icon;
    if (data?.message) this.message = data.message;
    if (data?.buttonText) this.buttonText = data.buttonText;
  }
}
