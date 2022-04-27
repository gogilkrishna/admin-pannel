import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  opened = false;

  constructor(public formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

}
