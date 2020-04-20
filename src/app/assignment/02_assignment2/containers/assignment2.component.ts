import { Component, Input, Output ,EventEmitter} from '@angular/core';
import { Todo } from '../../assignment.component';

@Component({
  selector: 'app-assignment2',
  templateUrl: './assignment2.component.html',
  styleUrls: ['./assignment2.component.css']
})
export class Assignment2Component {

  @Input()
  data: Todo[]

 
  selectedTodo: Todo;


  onSelectTodo(todo: Todo) {
    this.selectedTodo =todo;
  }

}
