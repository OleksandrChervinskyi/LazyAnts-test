import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {INotation} from "../../models/notation";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {NotationsService} from "../../services/notations.service";
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-update-one',
  templateUrl: './update-one.component.html',
  styleUrls: ['./update-one.component.css']
})
export class UpdateOneComponent implements OnInit {

  notation: INotation
  updatedNotation: INotation

  controls = {
    title: new FormControl('', [Validators.required]),
    descriptions: new FormControl('', [Validators.required])
  }


  form: FormGroup = new FormGroup(this.controls);

  constructor(
    private router: Router,
    private notationsService: NotationsService,
    private dataService: DataService
  ) {
    // Get selected notation from state

    this.notation = this.router.getCurrentNavigation()?.extras.state as INotation;
    // Fill forms inputs
    this.controls.title.reset(this.notation.title)
    this.controls.descriptions.reset(this.notation.descriptions)
  }

  ngOnInit(): void {

  }

  saveChanges() {
    // Save value from form in updatedNotation
    this.updatedNotation = {
      title: this.form.controls.title.value,
      descriptions: this.form.controls.descriptions.value,
      createdAt: this.notation.createdAt
    }

    //Remove outdated notation
    this.notationsService.removeNotation(this.notation)

    //Add updated notation to localStore and data.services
    const updatedNotationsList = this.notationsService.addNotation(this.updatedNotation)
    this.dataService.setNotationsList(updatedNotationsList)

    // Clean old information
    this.controls.title.setValue('')
    this.controls.descriptions.setValue('')
  }
}
