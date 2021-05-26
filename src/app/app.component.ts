import { Component, OnInit } from '@angular/core';
import { LibraryService } from './library.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  public nameFilter: string = '';
  public authorFilter: string = '';
  public yearFilter: number = 0;
  public books : any = [];

  public constructor(private libraryService: LibraryService) {

  }

  ngOnInit(): void {
    this.search();
  }

  public search() 
  {
    if (this.nameFilter == null || this.nameFilter == undefined) {
      this.nameFilter = '';
    }
    if (this.authorFilter == null || this.authorFilter == undefined) {
      this.authorFilter = '';
    }
    if (this.yearFilter <= 0) {
      this.yearFilter = 0;
    }

    this.libraryService.get(this.nameFilter, this.authorFilter, this.yearFilter)   
      .subscribe(books => this.books = books)
  }

}
