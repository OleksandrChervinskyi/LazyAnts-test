import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {INotation} from "../../models/notation";
import {GetNotationsService} from "../../services/get-notations.service";
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-notations-list',
  templateUrl: './notations-list.component.html',
  styleUrls: ['./notations-list.component.css']
})
export class NotationsListComponent {

  notations: INotation[]


  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private getNotationsService: GetNotationsService,
    private dataService: DataService
  ) {
    // Get all notations
    this.dataService.getCurrentNotationsList().subscribe(value => this.notations = value)
  }

  navigateToCreatePage() {
    this.router.navigate(['updateNotation'], {relativeTo: this.activatedRoute})
  }

  deleteOne(notation: INotation) {
    const filtredList = this.notations.filter(value => value.title !== notation.title)

    // Sent new data to localStore across data.services
    const updatedList = this.getNotationsService.updateNotationsList(filtredList)
    this.dataService.setNotationsList(updatedList)
  }
}
