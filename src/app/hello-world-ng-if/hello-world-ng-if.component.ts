import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-world-ng-if',
  templateUrl: './hello-world-ng-if.component.html',
  styleUrls: ['./hello-world-ng-if.component.scss']
})
export class HelloWorldNgIfComponent implements OnInit {
  message = "I'm read only!";
  canEdit = false;
  constructor() { }

  ngOnInit(): void {
  }
  onEditClick() {
    this.canEdit = !this.canEdit;
    if (this.canEdit) {
      this.message = 'You can edit me!';
    } else {
      this.message = "I'm read only!";
    }
  }
}
