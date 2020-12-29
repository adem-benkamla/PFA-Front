import { Component, OnInit, Input } from '@angular/core';
import {FactureService} from '../facture/facture.service';
import {FicheService} from '../fiche/fiche.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
 facturedata = {
    labels: [],
  datasets: []
};
  patientdata = {
  labels: [],
datasets: []
};
  constructor(private ficheservice:FicheService, private factureservice:FactureService  ) { }

  ngOnInit() {


  const  datasetsMontant= {
    label: "Montant",
    data:[],
    backgroundColor: 'rgba(153, 102, 255, 0.2)',
    borderColor: 'rgb(255, 99, 132)'
  };
  this.factureservice.getFacture().subscribe(list=> list.forEach(facture => {
        this.facturedata.labels.push(facture.date);
        datasetsMontant.data.push(facture.montant);

      }));;
  this.facturedata.datasets.push(datasetsMontant);

const  datasetsAge= {
  label: "Age",
  data:[],
  backgroundColor: 'rgba(255, 200, 85, 0.2)',
    borderColor: 'rgb(255, 99, 132)'
};
this.ficheservice.getFiche().subscribe(list1=> list1.forEach(fiche => {
      this.patientdata.labels.push(fiche.nom);
      datasetsAge.data.push(fiche.age);

    }));;
this.patientdata.datasets.push(datasetsAge);
}
}
