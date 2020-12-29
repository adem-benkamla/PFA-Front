import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
import {AppService} from '../app.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input()
  showSideBar: boolean = false;

  @Output()
  showSideBarChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private appService: AppService, private router: Router) { }

  ngOnInit() {
  }

  afficherSideBar(){
    this.showSideBar = !this.showSideBar;
    this.showSideBarChange.emit(this.showSideBar);
  }
  logout(){
    this.appService.logout(()=>{
      Swal.fire({
  title: 'Are you sure?',

  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes!'
}).then((result) => {
  if (result.value) {
      this.router.navigateByUrl('/login');
    Swal.fire(
      'Good bye!',
      '',
      'success'
    )
  }
})

    });
  }

}
