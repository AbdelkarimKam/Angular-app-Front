import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-ajout-client',
  templateUrl: './ajout-client.component.html',
  styleUrls: ['./ajout-client.component.css']
})
export class AjoutClientComponent {

  constructor(public _shared: SharedService) { }
  client = {
    id: '',
    name: '',
    compte: {
      solde: 0
    }
  }

  createClient() {
    this._shared.createClient(this.client)
      .subscribe(
        res => {
          console.log(res)
        },
        err => {
          console.log(err)
        }
      )
    this.resetClient()
    console.log(this._shared.clients)
  }

  resetClient() {
    this.client = {
      id: '',
      name: '',
      compte: {
        solde: 0
      }
    }
  }
}
