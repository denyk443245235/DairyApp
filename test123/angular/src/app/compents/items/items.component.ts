import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../../services/items.service';
import { from } from 'rxjs';
import { Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})


export class ItemsComponent implements OnInit {
  @Input() loginStatus;

  public CurrentClass = {
    unvisable: true
  };
  private items;
  AddItems(item) {
    this.itemService.addItems(item.value).subscribe((result) => {
      this.getItems();
    });
  }

  getItems() {
    this.itemService.getItems().subscribe((result) => {
      this.CurrentClass = {
        unvisable: true
      }
      this.items = result;
    })
  }
  Delete(id) {
    this.itemService.Delete(id).subscribe(() => {
      this.getItems();
    });
  }
  @Output() Send = new EventEmitter();
  @Output() getComments = new EventEmitter();
  goComment(item) {
    this.Send.emit(item.name);
    this.getComments.emit();
  }
  constructor(public itemService: ItemsService) { }

  ngOnInit() {
    this.CurrentClass = {
      unvisable: false
    }
    this.getItems();

  }

}
