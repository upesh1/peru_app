import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AboutComponent } from '../about/about.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openCreditDialog(): void {
    const dialogRef = this.dialog.open(AboutComponent, {
      maxWidth: '60%',
      minWidth: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {

    });
  }

}
