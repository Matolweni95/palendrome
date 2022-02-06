import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-fail',
  templateUrl: './fail.component.html',
  styleUrls: ['./fail.component.css']
})
export class FailComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  onClick(){
    this.dialog.closeAll();
  }

  ngOnInit(): void {
  }

}
