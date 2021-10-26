import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { AppComponent } from "./app.component";
import { AddTaskComponent } from "./AddTask/add-task/add-task.component";

@NgModule({
  declarations: [AppComponent, AddTaskComponent],
  imports: [BrowserModule, DragDropModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
