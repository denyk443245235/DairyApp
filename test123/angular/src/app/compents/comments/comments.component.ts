import { Component, OnInit, Input, Output } from '@angular/core';
import { CommentsService } from '../../services/comments.service';
import { from } from 'rxjs';
import { EventEmitter } from 'events';
@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  public Item;
  public Comments;

  @Input() set item(item: string) {
    if (item) {
      this.Item = item;
      this.getComments(this.Item);
    }
  }
  constructor(public commentservice: CommentsService) {

  }
  AddComment(message) {
    this.commentservice.AddComment(this.Item, message.value).subscribe((result) => {

      this.getComments(this.Item);
    });
  }

  getComments(item) {
   
    this.commentservice.getComments(item).subscribe((comments) => {

      this.Comments = comments;
    console.log(this.Comments);
    });
  }

  ngOnInit() {

  }
}
