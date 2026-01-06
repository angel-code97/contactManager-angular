import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogModule,
} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-content',
  imports: [MatButtonModule, MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogModule],
  templateUrl: './dialog-content.html',
  styleUrl: './dialog-content.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogContent {
  data = inject(MAT_DIALOG_DATA);
}
