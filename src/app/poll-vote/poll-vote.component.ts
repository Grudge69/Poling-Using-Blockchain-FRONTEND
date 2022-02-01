import {
  AfterViewInit,
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// Used this command in "tsconfig.json" under "compilerOptions" => "allowSyntheticDefaultImports": true for the below import to work
import ApexCharts from 'apexcharts';
import { PollVote } from '../types';

@Component({
  selector: 'app-poll-vote',
  templateUrl: './poll-vote.component.html',
  styleUrls: ['./poll-vote.component.scss'],
})
export class PollVoteComponent implements AfterViewInit {
  // Reason for @Input() is as following :-
  // We will get these variables' value from the parent component which is the app-component
  @Input() voted!: boolean;
  @Input() options!: string[];
  @Input() results!: number[];
  @Input() question!: string;
  @Input() id!: number;

  @Output() pollVoted: EventEmitter<PollVote> = new EventEmitter();

  voteForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.voteForm = this.fb.group({
      selected: this.fb.control('', [Validators.required]),
    });
  }

  ngAfterViewInit(): void {
    // Generate the chart only when used has voted
    if (this.voted) {
      this.generateChart();
    }
  }

  submitForm() {
    const pollVoted: PollVote = {
      id: this.id,
      vote: this.voteForm.get('selected')!.value,
    };

    // emitting this voted value using Event Emitter
    this.pollVoted.emit(pollVoted);
  }

  generateChart() {
    // Steps to generate a chart
    // 1. Declare options of type ApexCharts.ApexOptions
    // 2. Create a new variable chart of type ApexCharts
    // 3. Call chart.render()

    const options: ApexCharts.ApexOptions = {
      chart: {
        height: 350,
        type: 'bar',
      },
      plotOptions: {
        bar: {
          columnWidth: '45%',
          distributed: true,
        },
      },
      series: [
        {
          // Results
          data: this.results,
        },
      ],
      legend: {
        show: false,
      },
      xaxis: {
        // Options
        categories: this.options,
      },
    };

    const chart = new ApexCharts(
      document.getElementById('poll-results'),
      options
    );

    chart.render();

    // Call this generateChart() inside ngOnInit()
  }
}
