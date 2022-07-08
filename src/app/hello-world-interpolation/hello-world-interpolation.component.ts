import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-world-interpolation',
  templateUrl: './hello-world-interpolation.component.html',
  styleUrls: ['./hello-world-interpolation.component.scss']
})
export class HelloWorldInterpolationComponent implements OnInit {
  message = 'Hello, World!';
  constructor() { }

  ngOnInit(): void {
  }

}
