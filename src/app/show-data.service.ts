import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

const URL = "asd";

@Injectable({
  providedIn: 'root'
})
export class ShowDataService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Shows[]> {
    // fetch('url', {method: 'GET'})

    return this.http.get<Shows[]>(URL)
              .pipe(
                tap((shows: Shows[]) => shows.forEach(show => show.quantity = 0))
              );
  }
}
