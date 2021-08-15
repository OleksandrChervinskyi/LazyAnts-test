import {Component} from '@angular/core';
import {INotation} from "../../models";
import {DataService} from "../../services";

@Component({
  selector: 'app-notations-list',
  templateUrl: './notations-list.component.html',
  styleUrls: ['./notations-list.component.css']
})
export class NotationsListComponent {

  notations: INotation[];

  constructor(
    private dataService: DataService,
  ) {
    // Get all notations and sort they by createdAt
    this.dataService.getCurrentNotationsList().subscribe(value => this.notations = value.sort(
      (a, b) => (a.createdAt > b.createdAt) ? -1 : ((b.createdAt > a.createdAt) ? 1 : 0)));
  }
}
