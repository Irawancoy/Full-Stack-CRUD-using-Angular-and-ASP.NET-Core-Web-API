import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Posisi } from './posisi'; 

@Injectable({
  providedIn: 'root'
})
export class PosisiService {

  private apiURL = "https://localhost:7103/api/Posisi"

  constructor(
    private http: HttpClient
  ) { }

  getPosisi(): Observable<Posisi[]> {
    return this.http.get<Posisi[]>(this.apiURL)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  errorHandler(error: HttpErrorResponse) {
    let errorMessage = ''
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`
    }

    return throwError(()=>new Error(errorMessage))
  }
}
