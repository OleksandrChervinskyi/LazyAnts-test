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

  setNotations(newNotation: INotation) {
    const curentList = this.getAll()

    //Update old array or create new one
    if (curentList) {
      curentList.push(newNotation)
      localStorage.setItem('notationsList', JSON.stringify(curentList))
    } else {
      localStorage.setItem('notationsList', JSON.stringify([newNotation]))
    }
  }
}
