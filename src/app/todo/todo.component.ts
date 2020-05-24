import { Component, OnInit } from '@angular/core';
import { TodoService } from '../shared/todo.service'
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers: [TodoService]
})
export class TodoComponent implements OnInit {

  listArray : any[];
  itemTitle: string;
  constructor(private toDoService: TodoService) { }

  ngOnInit() {
    this.clear();
  }
  clear(){
    this.itemTitle = '';
    this.populateToDoListBlock();
    }
  populateToDoListBlock(){
    const that = this;
    that.listArray = [];
    this.toDoService.getToDo().subscribe(function(data){
    for(var ele in data){
      that.listArray.push(data[ele]);
    }    
    });
  }

  search(){
    this.populateToDoListBlock()
    var temp = this.itemTitle;
    
    var selected = this.listArray.filter(s => s.includes(temp));
    this.listArray = [];
    if(selected.length > 0)
    this.listArray = selected;
      

    }
  
}
