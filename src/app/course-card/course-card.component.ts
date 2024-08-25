import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Course } from "../model/course";

@Component({
  selector: "course-card",
  standalone: true,
  imports: [],
  templateUrl: "./course-card.component.html",
  styleUrl: "./course-card.component.css",
})
export class CourseCardComponent implements OnInit {
  @Input()
  course: Course;

  @Input({ required: true })
  index: number;

  @Output("courseSelected")
  courseEmitter = new EventEmitter<Course>();

  constructor() {}

  ngOnInit() {}

  onCourseViewed() {
    console.log("card component - button clicked ...");

    this.courseEmitter.emit(this.course);
  }
}
