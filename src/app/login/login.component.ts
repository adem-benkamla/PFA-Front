import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';

import { AppService } from '../app.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  credentials = {
    username: '',
    password: ''
  };

  constructor(private fb: FormBuilder,
              private appService: AppService,
              private router: Router) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(3)])]
    });
  }

  login(){
    this.appService.authenticate(this.credentials, ()=>{
      Swal.fire({
  position: 'top-end',
  icon: 'success',
  title: 'Welcome' ,
  showConfirmButton: false,
  timer: 1500
})
      this.router.navigateByUrl('/accueil');
    });

  }

}
