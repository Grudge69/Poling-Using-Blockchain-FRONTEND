// Poll service - Responsible for Getting Data such as polls, also for actual voting in creating the polls.
// Will be communicating in future with the web3service which communicates with the metamask.

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Poll, PollForm } from '../types';

@Injectable({
  providedIn: 'root',
})
export class PollService {
  constructor() {}

  // this gets the existing polls and all the details inside it like id, question asked, results(which option is voted by how many people), etc.
  getPolls(): Observable<Poll[]> {
    // Using mock data for now, we can use any backend data or JSON and also the data from Blockchain

    // of() converts our array to observables
    return of([
      {
        id: 1,
        question: 'Which do you like more, Dogs or Cats?',
        thumbnail:
          'https://images.pexels.com/photos/46024/pexels-photo-46024.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
        results: [0, 5, 7],
        options: ['Cats', 'Dogs', 'None'],
        voted: true,
      },
      {
        id: 2,
        question: 'Best month for summer holidays?',
        thumbnail:
          'https://images.pexels.com/photos/1118448/pexels-photo-1118448.jpeg?',
        results: [1, 6, 4],
        options: ['June', 'July', 'Aug'],
        voted: false,
      },
    ]).pipe(delay(2000));
  } // Delay it to replicated real life scenario

  // Handles our votes it has
  // 1) the id for the poll that we are voting to
  // 2) the voteNumber(option no.) we have selected or voted for
  vote(pollId: number, voteNumber: number) {
    console.log(pollId, voteNumber);
  }

  // Handles our create a new poll Operation which is basically a new form generated
  createPoll(poll: PollForm) {
    console.log(poll);
  }
}
