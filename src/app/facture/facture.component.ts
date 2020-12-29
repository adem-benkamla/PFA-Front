
import {Component, OnInit} from '@angular/core';
import {FactureService} from './facture.service';
import {facture} from '../shared/facture';
import {NgbModal, ModalDismissReasons, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-facture',
  templateUrl: './facture.component.html',
  styleUrls: ['./facture.component.css']
})
export class FactureComponent implements OnInit {


    facture: facture[];
    factureForm: FormGroup;
    operation: string='add';
    selectedFacture: facture;
    title = 'ng-bootstrap-modal-demo';
    closeResult: string;
    modalOptions:NgbModalOptions;
    constructor(private factureservice:FactureService, private fb: FormBuilder, private route: ActivatedRoute, private modalService: NgbModal ){
  this.createForm();
  this.modalOptions = {
    backdrop:'static',
    backdropClass:'customBackdrop'
  }
    }

    ngOnInit(){
    this.initFacture();
  this.facture = this.route.snapshot.data.facture;
    }
    createForm(){
      this.factureForm = this.fb.group({
      date: ['', Validators.required],
        nometprenom: [''],

      montant: [''],
  });
    }
  loadfacture(){
    this.factureservice.getFacture().subscribe(
      data => {this.facture =data},
    error =>{ console.log('An error was')},
    () => { console.log('loading was done')}
  );
  }
  addFacture(){
    const f = this.factureForm.value ;
    this.factureservice.addFacture(f).subscribe(
      re=>{
        this.initFacture();
      this.loadfacture()}
    );
  }
  updateFacture(){
    this.factureservice.updateFacture(this.selectedFacture).subscribe(
      re=>{
      this.initFacture();
      this.loadfacture()}
    );
  }
  deleteFacture(){
      this.factureservice.deleteFacture(this.selectedFacture.idF).subscribe(
        re=>{
        this.selectedFacture = new facture();
        this.loadfacture()}
      );
  }
  Rechercher(){

  }
  initFacture(){
    this.selectedFacture = new facture();
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
