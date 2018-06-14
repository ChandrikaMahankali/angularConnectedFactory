import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const requestToken = '';

const url = 'https://mdiconnectedfactory.azurewebsites.net/WebMethod/GetDataForOpcUaNode';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getData(token) {
    const data = {
      '__RequestVerificationToken': token,
      'key': 'urn:beijing103:ua:beijing:line1:assemblystation',
      'nodeId': 'ns=2;i=434',
      'view': 'Hour'
    };
    return this.http.post(url, data, httpOptions).pipe(map((response: Response) => {
    console.log (response.json());
    }));
  }
}
