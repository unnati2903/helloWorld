import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-world-property-binding',
  templateUrl: './hello-world-property-binding.component.html',
  styleUrls: ['./hello-world-property-binding.component.scss']
})
export class HelloWorldPropertyBindingComponent implements OnInit {
  fontColor = 'blue';
  sayHelloId = 1;
  constructor() { }

  ngOnInit(): void {
  }

}
