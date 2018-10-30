import { Component, OnInit } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';
import { IQuestion } from '../model/question.model';
import { TestService } from '../services/test.service';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  questionArray: IQuestion[];
  questionsForm: FormGroup = this.fb.group({
    arr: this.fb.array([])
  });
  subject: string;
  newGroup: FormGroup = this.fb.group({
    option: ['']
  });
  constructor(private testService: TestService, private fb: FormBuilder,
              private router: Router) {

  }

  ngOnInit() {
    this.subject = this.testService.getSubject();
    this.testService.getTest(this.subject).subscribe(
      (data) => {
        console.log(data);
        this.questionArray = data;
        let i = 0;
        for (i = 0; i < data.length; i++) {
          const control = <FormArray>(this.questionsForm.get('arr'));
          control.push(this.newGroup);
        }
        console.log(this.questionsForm);
      }
    );

  }

  onSubmit() {
    console.log(this.questionsForm);
    for (let i = 0; i < this.questionArray.length; i++) {
      this.questionArray[i]['response'] = this.questionsForm.value.arr[i];
    }
    this.testService.setQuestions(this.questionArray);
    this.router.navigate(['/test-summary']);
  }

}
