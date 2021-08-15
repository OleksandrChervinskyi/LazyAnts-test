import {Component} from '@angular/core';
import {INotation} from "../../models";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {DataService, NotationsService} from "../../services";

@Component({
  selector: 'app-create-new-one',
  templateUrl: './create-new-one.component.html',
  styleUrls: ['./create-new-one.component.css']
})
export class CreateNewOneComponent {

  newNotation: INotation;

  // Form`s controls
  controls = {
    title: new FormControl('', [Validators.required]),
    descriptions: new FormControl('', [Validators.required]),
  }

  // Form
  form: FormGroup = new FormGroup(this.controls);

  constructor(
    private notationsService: NotationsService,
    private dataService: DataService
  ) {
  }

  saveNewNotation() {
    // Save in newNotation
    this.newNotation = {
      title: this.form.controls.title.value,
      descriptions: this.form.controls.descriptions.value,
      createdAt: new Date().toISOString()
    }

    // Sent new data to localStore across data.services
    const updatedNotationsList = this.notationsService.addNotation(this.newNotation);
    this.dataService.setNotationsList(updatedNotationsList);

    // Clear old information
    this.controls.title.setValue('');
    this.controls.descriptions.setValue('');
  }
}
