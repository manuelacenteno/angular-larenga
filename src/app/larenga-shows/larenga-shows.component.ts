import { Component, OnInit } from '@angular/core';
import { ShowDataService } from '../show-data.service';
import { Show } from './shows';

@Component({
  selector: 'app-larenga-shows',
  templateUrl: './larenga-shows.component.html',
  styleUrls: ['./larenga-shows.component.css']
})
export class LarengaShowsComponent implements OnInit {

  shows: Show [] = [];

  constructor(
    private showsDataService: ShowDataService
  ) { }

  ngOnInit(): void {
    this.showsDataService.getAll().subscribe(shows => this.shows= shows);
  }

}
