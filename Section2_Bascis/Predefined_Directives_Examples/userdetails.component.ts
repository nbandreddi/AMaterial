import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {

  secretPhraseStatus = false;
  logButtonClickEvents = [];

  constructor() {
  }

  ngOnInit(): void {
  }

  onToggle() {
    this.secretPhraseStatus = !this.secretPhraseStatus;
    this.logButtonClickEvents.push(new Date());
  }

}
