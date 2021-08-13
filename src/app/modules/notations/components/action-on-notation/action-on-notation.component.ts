import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {INotation} from "../../models/notation";
import {GetNotationsService} from "../../services/get-notations.service";

@Component({
  selector: 'app-action-on-notation',
  templateUrl: './action-on-notation.component.html',
  styleUrls: ['./action-on-notation.component.css']
})
export class ActionOnNotationComponent implements OnInit {

  newNotation: INotation

  // Form`s controls
  controls = {
    title: new FormControl('', [Validators.required]),
    descriptions: new FormControl('', [Validators.required])
  }

  // Form
  form: FormGroup = new FormGroup(this.controls)

  constructor(
    private getNotationsService: GetNotationsService
  ) {
  }

  ngOnInit(): void {

  }

  saveNewNotation() {
    // Save in newNotation
    this.newNotation = this.form.value

    // Clear old information
    this.controls.title.setValue('')
    this.controls.descriptions.setValue('')

    // Sent new data to localStore
    this.getNotationsService.setNotations(this.newNotation)
  }
}
