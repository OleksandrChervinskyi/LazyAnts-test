import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {INotation} from "../models/notation";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private notationsList: BehaviorSubject<INotation[]> = new BehaviorSubject<INotation[]>([])

  getCurentNotationsList() {
    return this.notationsList
  }

  getSnapshotNotationsList() {
    return this.notationsList.getValue()
  }

  setNotationsList(newValue: INotation[]): void {
    this.notationsList.next(newValue)
  }

}
