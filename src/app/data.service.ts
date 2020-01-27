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

  fetchDetails(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `https://api.bilkata.bg/info/dashboard/SalesDetails/2020-01-23?ApiKey=0dd46cac448dce1591f7993b79bc8785`);

    req.onload = () => {
      const val = JSON.parse(req.response).month;
      const local = this.getLocalData();
      console.log(val);
      cb([...val, ...local]);
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

  getLocalData() {
    const local = localStorage.getItem('salesData');
    return JSON.parse(local);
  }

  setToLocalData(data) {

    localStorage.setItem('salesData', data);
  }

  setFilter(row) {
    this.rowFilter.next(row);
  }

}
