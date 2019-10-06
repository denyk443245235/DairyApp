import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { from } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  @Output() LoginStatus = new EventEmitter();
  @Output() LogOut = new EventEmitter();
  @Input() loginStatus;

  Login(login, password) {
    this.authService.login(login.value, password.value).subscribe((result) => {
   
      this.LoginStatus.emit(result);
    });
  }

  Register(login, password) {
    if (this.profileForm.status == 'VALID') {
      this.authService.regiter(login.value, password.value).subscribe((result) => {
        console.log(result);
      });
    }
  }

  LogOutFunc() {
  localStorage.removeItem('name');
    this.LogOut.emit();

  }
  constructor(public authService: AuthService) { }
  profileForm = new FormGroup({
    login: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  ngOnInit() {

  }

}
