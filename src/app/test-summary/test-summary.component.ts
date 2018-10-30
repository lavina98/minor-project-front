import { Component, OnInit } from '@angular/core';
import { TestService } from '../services/test.service';

@Component({
  selector: 'app-test-summary',
  templateUrl: './test-summary.component.html',
  styleUrls: ['./test-summary.component.css']
})
export class TestSummaryComponent implements OnInit {

  questionArray: any = [];
  ans: any;
  constructor(private testService: TestService) { }

  ngOnInit() {
    this.questionArray = this.testService.getQuestions();
    console.log(this.questionArray);
    this.testService.getScores(this.questionArray).subscribe(
      (data) => {
        this.ans = data;
        console.log(this.ans);
      }
    );
  }
}
