import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'cv-angular-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {
  showFiller = false;
  showFiller2 = false;
  showFiller3 = false;

  
  constructor() { }

  ngOnInit() {
  }

}
