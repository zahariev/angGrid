import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private rowFilter = new BehaviorSubject(new Array());
  filter = this.rowFilter.asObservable();

  rows: any [] = [];
  selected = [];

  constructor() {

  }

  fetch(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/100k.json`);

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }

  setFilter(row) {
    this.rowFilter.next(row);
  }

}
