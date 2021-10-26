import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter,
} from "@angular/core";
import { exit } from "process";

@Component({
  selector: "app-add-task",
  templateUrl: "./add-task.component.html",
  styleUrls: ["./add-task.component.css"],
})
export class AddTaskComponent implements OnInit {
  @ViewChild("taskName", { static: false }) taskNames: ElementRef;
  @Output() taskAdded = new EventEmitter<any>();
  taskDetails: String = "";
  constructor() {}
  ngOnInit() {}
  clickOnAdd() {
    const Taskname = this.taskNames.nativeElement.value;
    const Tasks = Taskname;
    this.taskAdded.emit(Tasks);
    this.taskDetails = "";
  }
}
