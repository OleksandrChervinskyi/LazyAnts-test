import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {INotation} from "../../models";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {DataService, NotationsService} from "../../services";
import {DialogComponent} from "../dialog/dialog.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-update-one',
  templateUrl: './update-one.component.html',
  styleUrls: ['./update-one.component.css']
})
export class UpdateOneComponent implements OnInit {

  notation: INotation;
  updatedNotation: INotation;

  // Forms controls
  controls = {
    title: new FormControl('', [Validators.required]),
    descriptions: new FormControl('', [Validators.required])
  }

  // Form
  form: FormGroup = new FormGroup(this.controls);

  constructor(
    private router: Router,
    private notationsService: NotationsService,
    private dataService: DataService,
    private dialog: MatDialog
  ) {

    // Get selected notation from state
    this.notation = this.router.getCurrentNavigation()?.extras.state as INotation;
    // Fill forms inputs
    this.controls.title.reset(this.notation.title);
    this.controls.descriptions.reset(this.notation.descriptions);
  }

  ngOnInit(): void {

  }

  // Clean old information from inputs functions
  cleanInputs() {
    this.controls.title.setValue('');
    this.controls.descriptions.setValue('');
  }

  saveChanges() {
    // Confirm action in dialog
    const dialogRef = this.dialog.open(DialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {

        // Save value from form in updatedNotation
        this.updatedNotation = {
          title: this.form.controls.title.value,
          descriptions: this.form.controls.descriptions.value,
          createdAt: this.notation.createdAt
        }

        //Remove outdated notation
        this.notationsService.removeNotation(this.notation);

        //Add updated notation to localStore and data.services
        const updatedNotationsList = this.notationsService.addNotation(this.updatedNotation);
        this.dataService.setNotationsList(updatedNotationsList);

        // Clean old information
        this.cleanInputs();
      }
    });
  }

  deleteNotation() {
    // Confirm action in dialog
    const dialogRef = this.dialog.open(DialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Delete from localStore and data.service
        this.dataService.setNotationsList(this.notationsService.removeNotation(this.notation));
        this.cleanInputs();
      }
    });
  }

  cancelChanges() {
    // Confirm action in dialog
    const dialogRef = this.dialog.open(DialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.controls.title.reset(this.notation.title);
        this.controls.descriptions.reset(this.notation.descriptions);
      }
    });
  }
}
