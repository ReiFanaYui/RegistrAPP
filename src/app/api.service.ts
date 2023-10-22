import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://apis.digital.gob.cl/fl/feriados';

  constructor(private http: HttpClient) { }

  getDatos() {
    return this.http.get(`${this.apiUrl}`);
  }
}
