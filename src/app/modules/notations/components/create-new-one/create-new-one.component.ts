import {Component, OnInit} from '@angular/core';
import {INotation} from "../../models/notation";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {GetNotationsService} from "../../services/get-notations.service";
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-create-new-one',
  templateUrl: './create-new-one.component.html',
  styleUrls: ['./create-new-one.component.css']
})
export class CreateNewOneComponent implements OnInit {

  newNotation: INotation

  // Form`s controls
  controls = {
    title: new FormControl('', [Validators.required]),
    descriptions: new FormControl('', [Validators.required])
  }

  // Form
  form: FormGroup = new FormGroup(this.controls)

  constructor(
    private getNotationsService: GetNotationsService,
    private dataService: DataService
  ) {
  }

  ngOnInit(): void {

  }

  saveNewNotation() {
    // Save in newNotation
    this.newNotation = this.form.value

    // Sent new data to localStore across data.services
    const updatedNotationsList = this.getNotationsService.addNotation(this.newNotation)
    this.dataService.setNotationsList(updatedNotationsList)

    // Clear old information
    this.controls.title.setValue('')
    this.controls.descriptions.setValue('')
  }

}
