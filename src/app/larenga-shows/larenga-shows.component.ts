import { Component, OnInit } from '@angular/core';
import { Show } from './shows';

@Component({
  selector: 'app-larenga-shows',
  templateUrl: './larenga-shows.component.html',
  styleUrls: ['./larenga-shows.component.css']
})
export class LarengaShowsComponent implements OnInit {

  shows: Show [] = [ 
    {
      "site":"Buenos Aires",
      "stadium":"Tres Arroyos",
      "date": "27/10/2020",
      "hour": "20:00 hs",
      
    },
    {
      "site":"Buenos Aires",
      "stadium":"Tres Arroyos",
      "date": "27/10/2020",
      "hour": "20:00 hs",
      
  },
    {
      "site":"Buenos Aires",
      "stadium":"Tres Arroyos",
      "date": "27/10/2020",
      "hour": "20:00 hs",
      
    },
    {
      "site":"Buenos Aires",
      "stadium":"Tres Arroyos",
      "date": "27/10/2020",
      "hour": "20:00 hs",
     
  },
    
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
