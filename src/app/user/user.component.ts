import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { user } from './user.model';
import {UserService} from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})







export class UserComponent implements OnInit {

user: user[];
  userForm: FormGroup;
  operation: string='add';
  selectedUser: user;
  constructor(private UserService:UserService, private fb: FormBuilder, private route: ActivatedRoute ){
  this.createForm();
  }

  ngOnInit(){
  this.initUser();
  this.user = this.route.snapshot.data.user;
  }
  createForm(){
    this.userForm = this.fb.group({
      username: ['', Validators.required],
  });
  }
  loaduser(){
  this.UserService.getAll().subscribe(
    data => {this.user =data},
  error =>{ console.log('An error was')},
  () => { console.log('loading was done')}
  );
  }
  add(){
  const r = this.userForm.value ;
  this.UserService.add(r).subscribe(
    re=>{
      this.initUser();
    this.loaduser()}
  );
  }
  update(){
  this.UserService.update(this.selectedUser).subscribe(
    re=>{
    this.initUser();
    this.loaduser()}
  );
  }
  delete(){
    this.UserService.delete(this.selectedUser.id).subscribe(
      re=>{
      this.selectedUser = new user();
      this.loaduser()}
    );
  }
  initUser(){
  this.selectedUser = new user();
  this.createForm();
  }
  }
