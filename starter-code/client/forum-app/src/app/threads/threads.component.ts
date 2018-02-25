import { Component, OnInit } from '@angular/core';
import { AuthGetService } from '../services/auth-get.service';

@Component({
  selector: 'app-threads',
  templateUrl: './threads.component.html',
  styleUrls: ['./threads.component.css']
})
export class ThreadsComponent implements OnInit {

  threads: Array<any> = [];
  author: Number;
  title: String;
  content: String;
  date: Date;
  replies: [String];

  constructor() { }

  ngOnInit() {
  }


}
