import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AddMeshesComponent } from '../add-meshes/add-meshes.component';

@Component({
  selector: 'app-create-apparels',
  templateUrl: './create-apparels.component.html',
  styleUrls: ['./create-apparels.component.scss']
})
export class CreateApparelsComponent implements OnInit {

  apparelForm!: FormGroup;

  constructor(
    public fb: FormBuilder,
    public dial: MatDialog,
  ) {
    this.createForm();
  }

  displayedColumns: string[] = ['position', 'LABEL', 'APPARELID', 'GENDER', 'SPORTS', 'IMG', 'OBJ', 'action'];
  dataSource = [];

  createForm() {
    this.apparelForm = this.fb.group({
      name: ['', Validators.required],
      appareluniquename: ['', Validators.required],
      whereType: ['', Validators.required],
      SportType: ['', Validators.required],
      gender:['', Validators.required],
    })
  }

  addMesh() {
    this.dial.open(AddMeshesComponent, {
      width: '70vw',
      height: 'auto',
  })

  }



addSizeField(){

}


  ngOnInit(): void {
  }

}
