export interface Poll extends PollForm {
  id: number; // 12
  results: number[]; // [0, 0, 0, 0, 5, 7, 2] means 0 people voted for monday, 0 for tuesday ans so on..
  voted: boolean;
}

export interface PollForm {
  question: string; // Which days of week you like most?
  options: string[]; // ["Monday", "Tuesday", "Wednesday"....]
  thumbnail: string; // some link to image url https://image.png
}

export interface PollVote {
  id: number;
  vote: number
}

export interface Voter {
  id: string; // some random hash which would be given to us through metamask, 0xJHSADJH1231234XD
  voted: number[]; // [12] number of the poll which has been voted for
}
