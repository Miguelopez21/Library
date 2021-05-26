import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  constructor(private httpClient: HttpClient) { }

  public get(name: string, authorName: string, year: number){

    const url = 'https://localhost:44396/api/books';
    return this.httpClient.get(url 
      + '?title=' + name
      + '&authorName=' + authorName
      + '&year=' + year
      );
  }
}
