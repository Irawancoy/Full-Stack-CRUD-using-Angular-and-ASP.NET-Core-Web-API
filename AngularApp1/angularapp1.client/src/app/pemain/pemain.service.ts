import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

import { Pemain } from './pemain';

@Injectable({
  providedIn: 'root'
})
export class PemainService {

  private apiURL = "https://localhost:7103/api/Pemains"
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(
    private httpClient: HttpClient
  ) { }

  getPemains(): Observable<Pemain[]> {
    return this.httpClient.get<Pemain[]>(this.apiURL)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  getPemain(id : number): Observable<Pemain> {
    return this.httpClient.get<Pemain>(this.apiURL + '/' + id)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  createPemain(pemain : Pemain): Observable<Pemain> {
    return this.httpClient.post<Pemain>(this.apiURL, JSON.stringify(pemain), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  updatePemain(id : number, pemain : Pemain): Observable<Pemain> {
    return this.httpClient.put<Pemain>(this.apiURL + '/' + id, JSON.stringify(pemain), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  deletePemain(id : number) {
    return this.httpClient.delete<Pemain>(this.apiURL + '/' + id, this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  errorHandler(error : HttpErrorResponse) {
    let errorMessage = ''
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`
    }

    return throwError(()=>new Error(errorMessage))
  }
}
