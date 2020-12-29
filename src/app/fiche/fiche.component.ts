import {Component, OnInit} from '@angular/core';
import {FicheService} from './fiche.service';
import {fiche} from '../shared/fiche';
import {NgbModal, ModalDismissReasons, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fiche',
  templateUrl: './fiche.component.html',
  styleUrls: ['./fiche.component.css']
})
export class FicheComponent implements OnInit {

  fiche: fiche[];
  ficheForm: FormGroup;
  operation: string='rech';
  selectedFiche: fiche;
  title = 'ng-bootstrap-modal-demo';
  closeResult: string;
  modalOptions:NgbModalOptions;
  constructor(private ficheservice:FicheService, private fb: FormBuilder, private route: ActivatedRoute, private modalService: NgbModal ){
this.createForm();
this.modalOptions = {
  backdrop:'static',
  backdropClass:'customBackdrop'
}
  }

  ngOnInit(){
  this.initFiche();
this.fiche = this.route.snapshot.data.fiche;
  }
  createForm(){
    this.ficheForm = this.fb.group({
      cin: ['', Validators.required],
      nom: [''],
      prenom: [''],
      age: [''],
      telephone: [''],
      adresseMail: ['']
});
  }
loadfiche(){
  this.ficheservice.getFiche().subscribe(
    data => {this.fiche =data},
  error =>{ console.log('An error was')},
  () => { console.log('loading was done')}
);
}
addFiche(){
  const f = this.ficheForm.value ;
  this.ficheservice.addFiche(f).subscribe(
    re=>{
      this.initFiche();
    this.loadfiche()}
  );
}
updateFiche(){
  this.ficheservice.updateFiche(this.selectedFiche).subscribe(
    re=>{
    this.initFiche();
    this.loadfiche()}
  );
}
deleteFiche(){
    this.ficheservice.deleteFiche(this.selectedFiche.id).subscribe(
      re=>{
      this.selectedFiche = new fiche();
      this.loadfiche()}
    );
}
Rechercher(){

}
initFiche(){
  this.selectedFiche = new fiche();
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
