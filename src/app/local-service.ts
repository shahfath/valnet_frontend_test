import { Injectable } from '@angular/core';

export class LocalService {
  constructor() {}

  setData(data) {
    const jsonData = JSON.stringify(data);
    localStorage.setItem('myData', jsonData);
  }

  public getData() {
    return localStorage.getItem('myData');
  }

  removeData(key) {
    localStorage.removeItem(key);
  }

  public clearData() {
    localStorage.clear();
  }
}
