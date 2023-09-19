import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http: HttpClient) { }

  clients: any = []

  private url = 'http://127.0.0.1:8080'
  private api = '/banque'

  createClient(client: any) {
    return this.http.post(this.url + this.api + '/client', client)
  }

}
