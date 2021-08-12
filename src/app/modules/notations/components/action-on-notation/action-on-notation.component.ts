import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {INotation} from "../../models/notation";

@Component({
  selector: 'app-action-on-notation',
  templateUrl: './action-on-notation.component.html',
  styleUrls: ['./action-on-notation.component.css']
})
export class ActionOnNotationComponent implements OnInit {

  notationsListFromStorage: INotation[]

  controls = {
    title: new FormControl('', [Validators.required]),
    descriptions: new FormControl('', [Validators.required])
  }

  form: FormGroup = new FormGroup(this.controls)

  constructor() {
  }

  ngOnInit(): void {

  }


  saveNewNotation() {
    // Save in newNotation
    const newNotation: INotation = {
      title: this.form.controls.title.value,
      descriptions: this.form.controls.descriptions.value
    }

    // localStorage.clear()



    // Clear old information
    this.controls.title.setValue('')
    this.controls.descriptions.setValue('')

  }
}
