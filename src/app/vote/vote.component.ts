import { Component, OnInit, Input, Output, EventEmitter, Injector } from '@angular/core';
import { createCustomElement } from '../../../node_modules/@angular/elements';
import {createNgModuleRef} from '@angular/core/src/view/refs';

@Component({
  selector: 'vm-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {

  //default votes would be 0
  @Input() votes: number = 0;
  @Output() voteChanges: EventEmitter<number> = new EventEmitter<number>();

  constructor(injector: Injector) {
  }

  upvote() {
    this.voteChanges.emit(this.votes = ++this.votes);
  }

  downvote() {
    this.voteChanges.emit(this.votes = --this.votes);
  }

  ngOnChanges() {
    console.log("Value changed to " + this.votes);
  }

  ngOnInit() {
    console.log("Votes component initialize with value " + this.votes);
  }

}
