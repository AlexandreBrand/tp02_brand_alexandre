import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-recapitulatif',
  templateUrl: './recapitulatif.component.html',
  styleUrls: ['./recapitulatif.component.css']
})
export class RecapitulatifComponent implements OnInit {

  
  @Input() dataUtilisateur = "{}";
  
  
  data  = JSON.parse(this.dataUtilisateur)
  
  constructor() { }

  ngOnInit(): void {
  }

}
