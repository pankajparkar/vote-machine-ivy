import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'vm-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {

  @Input() votes: number = 0;

  constructor() { }

  ngOnInit() {
  }

}
