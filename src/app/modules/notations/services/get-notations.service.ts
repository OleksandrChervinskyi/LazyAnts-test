import {Injectable} from '@angular/core';
import {INotation} from "../models/notation";

@Injectable({
  providedIn: 'root'
})
export class GetNotationsService {


  constructor() {
  }

  getAll() {
    const currentList = localStorage.getItem('notationsList')
    if (currentList) {
      return JSON.parse(currentList)
    } else return null
  }

  addNotation(newNotation: INotation) {
    const currentList = this.getAll()

    //Update old array or create new one
    if (currentList) {
      currentList.push(newNotation)
      localStorage.setItem('notationsList', JSON.stringify(currentList))
    } else {
      localStorage.setItem('notationsList', JSON.stringify([newNotation]))
    }

    return this.getAll()
  }

  updateNotationsList(newArray: INotation[]) {
    localStorage.setItem('notationsList', JSON.stringify(newArray))
    return this.getAll()
  }
}
