import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-button-list',
  templateUrl: './home-button-list.component.html',
  styleUrls: ['./home-button-list.component.scss']
})
export class HomeButtonListComponent implements OnInit {

  constructor(public dialog: MatDialog, private router: Router) { }

  ngOnInit(): void {
  }

  navigate(route) {
    this.router.navigate([route]);
  }

}
