import {Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {INotation} from "../../models/notation";
import {GetNotationsService} from "../../services/get-notations.service";
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
    private getNotationsService: GetNotationsService,
    private dataService: DataService,
    public dialog: MatDialog
  ) {
    // Get all notations
    this.dataService.getCurrentNotationsList().subscribe(value => this.notations = value);
  }

  // Change page to /updateNotation
  navigateToCreatePage() {
    this.router.navigate(['updateNotation'], {relativeTo: this.activatedRoute});
  }

  // Delete from localStore and data.service
  deleteOne(notation: INotation) {
    const filtredList = this.notations.filter(value => value.title !== notation.title);
    const updatedList = this.getNotationsService.updateNotationsList(filtredList);
    this.dataService.setNotationsList(updatedList);

  }

  // Ask confirm before deleting
  openDialog(notation: INotation) {
    const dialogRef = this.dialog.open(DialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteOne(notation);
      }
    });
  }
}
