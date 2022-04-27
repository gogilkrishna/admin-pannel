import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StoreService } from 'src/core/store.service';
import { UserService } from 'src/core/user.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(
    public fb: FormBuilder,
    public userSer: UserService,
    public storeSer: StoreService,
    public router: Router,


  ) {
    this.loginFormCreate()
  }

  loginFormCreate() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  submit() {
    this.userSer.login(this.loginForm.value).subscribe((res: any) => {
      console.log(res);
      if(res){
        this.storeSer.token = res.token;
        this.storeSer.profile = res.user;
        this.router.navigate(['auth'])


      }
    })
    console.log(this.loginForm.value)

  }

  ngOnInit(): void {
  }

}
