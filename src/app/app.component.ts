import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-redemption-settings';

  redeemlevel3input: string = '';
  redeemlevel2input: string = '';
  redeemlevel1input: string = '';
  
  voidlevel3input: string = '';
  voidlevel2input: string = '';
  voidlevel1input: string = '';

  borrowlevel3input: string = '';
  borrowlevel2input: string = '';
  borrowlevel1input: string = '';

  complevel3input: string = '';
  complevel2input: string = '';
  complevel1input: string = '';

  voucherlevel3input: string = '';
  voucherlevel2input: string = '';
  voucherlevel1input: string = '';

  ticketlevel3input: string = '';
  ticketlevel2input: string = '';
  ticketlevel1input: string = '';


  constructor() {}
    
  ngOnInit(){

  }

  save() {
  console.log("this is save button");
  }

  cancel() {
  console.log("this is cancel button");
  }


}




