import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-delete-client',
  templateUrl: './delete-client.component.html',
  styleUrls: ['./delete-client.component.css']
})
export class DeleteClientComponent {

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
