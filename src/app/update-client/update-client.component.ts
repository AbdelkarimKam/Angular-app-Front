import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-update-client',
  templateUrl: './update-client.component.html',
  styleUrls: ['./update-client.component.css']
})
export class UpdateClientComponent {

  constructor(public _shared: SharedService) { }

  client = {
    id: '',
    name: '',
    compte: {
      solde: 0
    }
  }

  updateClient() {
    this._shared.clients.push(this.client)
    this.resetClient()
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
