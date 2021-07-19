import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Show } from './larenga-shows/shows';

const URL = "https://60f5c8cd18254c00176e0028.mockapi.io/api/v1/shows";

@Injectable({
  providedIn: 'root'
})
export class ShowDataService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Show[]> {

    return this.http.get<Show[]>(URL)
              .pipe(
                tap()
              );
  }
}
