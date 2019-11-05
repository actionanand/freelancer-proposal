import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  imgUrl: string = 'https://baypath.s3.amazonaws.com/files/events/169_825_woman-hand-smartphone-laptop-2.jpg';
  constructor() { }

  ngOnInit() {
  }

}
