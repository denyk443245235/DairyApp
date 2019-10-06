import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public item;
  @Output() public loginStatus: boolean;

  getItem(event) {
    this.item = event;
  }
  SendStatus(event) {
    if (event) {
      localStorage.setItem('name', event.token);
      this.loginStatus = true;
    }

  }


  getUser() {
    this.loginStatus = Boolean(localStorage.getItem('name'));

  }
  LogOut() {
    this.loginStatus = false;
  }

  title = 'angular';
  ngOnInit() {
    this.getUser();
  }
}
