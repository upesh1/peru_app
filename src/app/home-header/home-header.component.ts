import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { InteractiveTourComponent } from '../interactive-tour/interactive-tour.component'
import { Router } from "@angular/router";

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.scss']
})
export class HomeHeaderComponent implements OnInit {

  constructor(public dialog: MatDialog, private router: Router) { }

  ngOnInit(): void {
  }

  openDialog() {
    const dialogRef = this.dialog.open(InteractiveTourComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  navigate(route) {
    this.router.navigate([route]);
  }

}
