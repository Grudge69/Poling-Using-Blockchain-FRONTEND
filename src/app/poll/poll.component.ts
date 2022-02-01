import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.scss'],
})
export class PollComponent implements OnInit {
  // Reason for @Input() is as following :-
  // We will get these variables'  value from the parent component which is the app-component
  @Input() question: string = '';
  @Input() votes: number[] = [];
  @Input() voted: boolean = false;
  @Input() pollImage: string = '';

  numberOfVotes: number | undefined;

  constructor() {}

  ngOnInit(): void {
    if (this.votes.length) {
      this.numberOfVotes = this.votes.reduce((acc, curr) => {
        return (acc += curr);
      });
    }
  }
}
