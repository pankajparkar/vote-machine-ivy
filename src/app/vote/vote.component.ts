import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'vm-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {

  //default votes would be 0
  @Input() votes: number = 0;
  @Output() voteChanges: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  upvote(){
    this.voteChanges.emit(this.votes = ++this.votes);
  }

  downvote(){
    this.voteChanges.emit(this.votes = --this.votes);
  }

  ngOnInit() {
  }

}
