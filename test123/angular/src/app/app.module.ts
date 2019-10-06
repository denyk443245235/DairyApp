import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import { AppComponent } from './app.component';
import { AuthComponent } from './compents/auth/auth.component';
import { ItemsComponent } from './compents/items/items.component';
import { CommentsComponent } from './compents/comments/comments.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {TokenInteceptorService} from './services/token-inteceptor.service'; 
import { from } from 'rxjs';
@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    ItemsComponent,
    CommentsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:TokenInteceptorService,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
