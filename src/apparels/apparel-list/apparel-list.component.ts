import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CreateApparelsComponent } from '../create-apparels/create-apparels.component';


@Component({
  selector: 'app-apparel-list',
  templateUrl: './apparel-list.component.html',
  styleUrls: ['./apparel-list.component.scss']
})
export class ApparelListComponent implements OnInit {




  constructor(
    public dialog: MatDialog
  ) { }

  addApparels() {
    const dialogRef = this.dialog.open(CreateApparelsComponent, {
            width: '70vw',
            height: 'auto',
    })
    dialogRef.afterClosed().subscribe(res =>{
      console.log(res);
    })

  }

  ngOnInit(): void {
  }

}
