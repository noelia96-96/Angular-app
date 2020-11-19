import { Component, OnInit } from '@angular/core';
import { Owner } from '../../interfaces/owner';

@Component({
  selector: 'app-form-owner',
  templateUrl: './form-owner.component.html',
  styleUrls: ['./form-owner.component.css']
})
export class FormOwnerComponent implements OnInit {

  owner: Owner;

  constructor() { 
  this.owner = {
    firstName: 'Pepe',
    lastName: 'Garrido',
    address: 'calle Alfa, 12',
    telephone: '666666',
    city: 'Paradise'

  }
}

  ngOnInit(): void {
  }

  submit(){
    console.table(this.owner);
  }

}
