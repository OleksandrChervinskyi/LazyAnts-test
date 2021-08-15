import {Component, Input} from '@angular/core';
import {INotation} from "../../models";
import {DialogComponent} from "../dialog/dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {DataService, NotationsService} from "../../services";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-notation',
  templateUrl: './notation.component.html',
  styleUrls: ['./notation.component.css']
})
export class NotationComponent {

  @Input()
  notation: INotation;

  constructor(
    private router: Router,
    public dialog: MatDialog,
    private activatedRoute: ActivatedRoute,
    private dataService: DataService,
    private notationsService: NotationsService,
  ) {
  }

  // Ask confirm before deleting
  deleteOne(notation: INotation) {
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
