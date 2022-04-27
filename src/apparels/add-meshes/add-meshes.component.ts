import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'bro-add-meshes',
    templateUrl: './add-meshes.component.html',
    styleUrls: ['./add-meshes.component.scss']
})
export class AddMeshesComponent implements OnInit {

    meshForm!: FormGroup;

    constructor(
        @Optional() @Inject(MAT_DIALOG_DATA) public id: number,
        public fb: FormBuilder,
        public dial: MatDialogRef<AddMeshesComponent>
    ){
        this.createForm()
    }

    createForm() {
        this.meshForm = this.fb.group({
            name: [],
            enabled: [],
            group: []
        })
    }

    submitForm() {
        if (this.meshForm.valid) {
            this.dial.close(this.meshForm);
        }
    }


    ngOnInit(): void {

    }
}
