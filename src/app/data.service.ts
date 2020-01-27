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
  local = [];

  constructor() {

  }

  fetchDetails(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `https://api.bilkata.bg/info/dashboard/SalesDetails/2020-01-23?ApiKey=0dd46cac448dce1591f7993b79bc8785`);

    req.onload = () => {
      const val = JSON.parse(req.response).month;
      this.local = this.getLocal();
      // console.log(val);
      cb(val.concat(this.local));
    };

    req.send();
  }

  fetchMain(cb) {
    const req = new XMLHttpRequest();

    req.open('GET', `https://api.bilkata.bg/info/dashboard/SalesByCategory/2020-01-23?ApiKey=0dd46cac448dce1591f7993b79bc8785`);
    // https://restcountries.eu/rest/v2/all
    req.onload = () => {
      const val = JSON.parse(req.response).today;
      cb(val);
    };

    req.send();
  }

  getLocal() {
    return JSON.parse(localStorage.getItem('salesData')) || [];
  }

  setLocal(data) {
    localStorage.setItem('salesData', JSON.stringify(this.local.concat(data)));
  }

  setFilter(row) {
    this.rowFilter.next(row);
  }

}
