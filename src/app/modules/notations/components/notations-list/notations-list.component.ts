import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {INotation} from "../../models/notation";
import {GetNotationsService} from "../../services/get-notations.service";

@Component({
  selector: 'app-notations-list',
  templateUrl: './notations-list.component.html',
  styleUrls: ['./notations-list.component.css']
})
export class NotationsListComponent implements OnInit {

  notations: INotation[]


  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private getNotationsService: GetNotationsService
  ) {

  }


  ngOnInit(): void {
    this.notations = this.getNotationsService.getAll()
  }

  navigateToCreatePage() {
    this.router.navigate(['updateNotation'], {relativeTo: this.activatedRoute, state: this.notations})
  }
}
