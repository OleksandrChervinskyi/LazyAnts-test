import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {INotation} from "../models/notation";
import {GetNotationsService} from "./get-notations.service";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private getNotationsService: GetNotationsService) {

  }

  private notationsListFromLocalStorage = this.getNotationsService.getAll()

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

  getSnapshotNotationsList() {
    return this.notationsList.getValue()
  }

  setNotationsList(newValue: INotation[]): void {
    this.notationsList.next(newValue)
  }

}
