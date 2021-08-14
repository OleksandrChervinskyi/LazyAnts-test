import {Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {INotation} from "../../models/notation";
import {NotationsService} from "../../services/notations.service";
import {DataService} from "../../services/data.service";
import {MatDialog} from "@angular/material/dialog";
import {DialogComponent} from "../dialog/dialog.component";

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
    private notationsService: NotationsService,
    private dataService: DataService,
    public dialog: MatDialog
  ) {
    // Get all notations and sort they by createdAt
    this.dataService.getCurrentNotationsList().subscribe(value => this.notations = value.sort(
      (a, b) => (a.createdAt > b.createdAt) ? -1 : ((b.createdAt > a.createdAt) ? 1 : 0)));
  }


  // Ask confirm before deleting
  openDialog(notation: INotation) {
    const dialogRef = this.dialog.open(DialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Delete from localStore and data.service
        this.dataService.setNotationsList(this.notationsService.removeNotation(notation));
      }
    });
  }

  // Change page to /updateNotation
  navigateToUpdatePage(notation: INotation) {
    this.router.navigate(['updateNotation'], {relativeTo: this.activatedRoute, state: notation});
  }
}
