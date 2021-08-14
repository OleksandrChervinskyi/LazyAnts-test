import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {INotation} from "../models/notation";
import {NotationsService} from "./notations.service";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private notationsService: NotationsService) {

  }

  private notationsListFromLocalStorage = this.notationsService.getAll()

  private initialState() {
    if (this.notationsListFromLocalStorage) {
      return this.notationsListFromLocalStorage
    } else {
      return []
    }
  }

  //BehaviorSubject
  private notationsList: BehaviorSubject<INotation[]> = new BehaviorSubject<INotation[]>(this.initialState())


  getCurrentNotationsList() {
    return this.notationsList
  }

  setNotationsList(newValue: INotation[]): void {
    this.notationsList.next(newValue)
  }

}
