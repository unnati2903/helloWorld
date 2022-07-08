import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-world-event-binding',
  templateUrl: './hello-world-event-binding.component.html',
  styleUrls: ['./hello-world-event-binding.component.scss']
})
export class HelloWorldEventBindingComponent implements OnInit {
  canClick = false;
  message = 'Hello, World';
  constructor() { }

  ngOnInit(): void {
  }
  sayMessage() {
    alert(this.message);
  }
}
