import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  listArray : any[];
  itemTitle: string;
  constructor() { }

  ngOnInit() {
    this.clear();

  }
  clear(){
    this.itemTitle = '';
    this.listArray = ["item 1", "item 2", "item 3", "item 4"];
    }

  search(){
    this.listArray = ["item 1", "item 2", "item 3", "item 4"];
    var temp = this.itemTitle;
    
    var selected = this.listArray.filter(s => s.includes(temp));
    this.listArray = [];
    if(selected.length > 0)
    this.listArray = selected;
      

    }
  
}
