import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';

import {RendezVousService} from './rendez_vous.service';
import {rendez_vous} from '../shared/rendez_vous';

import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-rendez-vous',
  templateUrl: './rendez-vous.component.html',
  styleUrls: ['./rendez-vous.component.css']
})
export class RendezVousComponent implements OnInit {

  rendez_vous: rendez_vous[];
  rendez_vousForm: FormGroup;
  operation: string='add';
  selectedRendez_vous: rendez_vous;
  title = 'ng-bootstrap-modal-demo';
  closeResult: string;
  modalOptions:NgbModalOptions;

  constructor(private rendezVousService:RendezVousService, private fb: FormBuilder, private route: ActivatedRoute, private modalService: NgbModal ){
  this.createForm();
  this.modalOptions = {
    backdrop:'static',
    backdropClass:'customBackdrop'
  }
  }

  ngOnInit(){
  this.initRendezVous();
  this.rendez_vous = this.route.snapshot.data.rendez_vous;
  }
  createForm(){
    this.rendez_vousForm = this.fb.group({
      cin: ['', Validators.required],
      nom_et_prenom: [''],
      dateDeRendezVous: [''],
    heure: [''],
    commentaire: ['']
  });
  }
  loadrendez_vous(){
  this.rendezVousService.getRendezVous().subscribe(
    data => {this.rendez_vous =data},
  error =>{ console.log('An error was')},
  () => { console.log('loading was done')}
  );
  }
  addRendezVous(){
  const r = this.rendez_vousForm.value ;
  this.rendezVousService.addRendezVous(r).subscribe(
    re=>{
      this.initRendezVous();
    this.loadrendez_vous()}
  );
  }
  updateRendezVous(){
  this.rendezVousService.updateRendezVous(this.selectedRendez_vous).subscribe(
    re=>{
    this.initRendezVous();
    this.loadrendez_vous()}
  );
  }
  deleteRendezVous(){
    Swal.fire({
    title: 'Are you sure?',

    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes, delete it!',
    cancelButtonText: 'No, keep it'
  }).then((result) => {
    if (result.value) {
      console.log(this.selectedRendez_vous.idR);

      this.rendezVousService.deleteRendezVous(this.selectedRendez_vous.idR).subscribe(
        re=>{
        this.selectedRendez_vous = new rendez_vous();
        this.loadrendez_vous()}
      );
      Swal.fire(
        'Deleted!',
        '',
        'success'
      )
    // For more information about handling dismissals please visit
    // https://sweetalert2.github.io/#handling-dismissals
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      Swal.fire(
        'Cancelled',
        'Your imaginary file is safe :)',
        'error'
      )
    }
  })

  }
  initRendezVous(){
  this.selectedRendez_vous = new rendez_vous();
  this.createForm();
  }
  open(content) {
    this.modalService.open(content, this.modalOptions).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
  }
