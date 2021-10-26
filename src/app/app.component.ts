import { Component } from "@angular/core";
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from "@angular/cdk/drag-drop";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  todo = [
    "Measure load performance on the site",
    "Loading database with customer data",
    "Create a forum for our customers",
  ];
  implementing = [
    "Book CEO training for all editors",
    "Produce finance report for Q2",
    "Develope an Android app using new tech",
  ];
  done = [
    "Schedule database maintenance",
    "Pay overdue invoices and generate report",
    "Write blog entry for our product",
  ];

  addedItem(taskAdded: string) {
    this.todo.push(taskAdded);
  }

  removeFromTodo(idx: number) {
    let do_delete = confirm("Are you sure to delete the task?");
    if (do_delete) {
      this.todo.splice(idx, 1);
    }
  }

  removeFromImplementing(idx: number) {
    let do_delete = confirm("Are you sure to delete the task?");
    if (do_delete) {
      this.implementing.splice(idx, 1);
    }
  }

  removeFromDone(idx: number) {
    let do_delete = confirm("Are you sure to delete the task?");
    if (do_delete) {
      this.done.splice(idx, 1);
    }
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
