import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import * as localForage from 'localforage';
import { Class, School, Student, TestModel } from '../models';

export enum StoreType {
  School = 'School',
  Class = 'Class',
  Student = 'Student',
  TestModel = 'TestModel'
}

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private apiUrl = 'http://localhost:3000'; // replace with your API url
  private stores: { School: any[]; Class: any[]; Student: any[]; TestModel: any[]} = {
    School: [],
    Class: [],
    Student: [],
    TestModel: []
  };

  constructor(private http: HttpClient) {
    this.loadDataFromLocalForage();
  }

  private async loadDataFromLocalForage() {
    try {
      const stores = await localForage.getItem<{ School: School[]; Class: Class[]; Student: Student[]; TestModel: TestModel[] }>('stores');
      if (stores !== null) {
        this.stores = stores;
      }
    } catch (error) {
      console.error('Error loading data from localForage:', error);
    }
  }
  

  private async saveDataToLocalForage() {
    try {
      await localForage.setItem('stores', this.stores);
    } catch (error) {
      console.error('Error saving data to localForage:', error);
    }
  }

  loadDataFromAPI(): Observable<any> {
    const promises = Object.values(StoreType).map(storeType => {
      var storeApiName = storeType == StoreType.Class ? 'classes' : `${storeType.toLowerCase()}s`;
      return this.http.get<any[]>(`${this.apiUrl}/${storeApiName}`).pipe(
        map((data: any[]) => {
          this.stores[storeType] = data;
          this.saveDataToLocalForage();
          console.log(`${storeType} loaded from API`);
        }),
        catchError((error) => {
          console.error(`Error loading ${storeType} from API:`, error);
          return of(null);
        })
      ).toPromise();
    });
    return from(Promise.all(promises));
  }
  

  store(storeType: StoreType) {
    const store = {
      data: this.stores[storeType],
      get: () => {
        return store.data;
      },
      filter: (filterFn: (item: any) => boolean) => {
        store.data = store.data.filter(filterFn);
        return store;
      },
      sortBy: (prop: string, descending = false) => {
        store.data = store.data.sort((a, b) => {
          if (a[prop] < b[prop]) {
            return descending ? 1 : -1;
          }
          if (a[prop] > b[prop]) {
            return descending ? -1 : 1;
          }
          return 0;
        });
        return store;
      },
      add: (newItem: any) => {
        const storeData = this.stores[storeType];
        storeData.push(newItem);
        this.stores[storeType] = storeData;
        this.saveDataToLocalForage();
        console.log(`${storeType} added`);
      }
    };
    return store;
  }
  
  private getClassByStoreType(storeType: StoreType) {
    switch (storeType) {
      case StoreType.School:
        return School;
      case StoreType.Class:
        return Class;
      case StoreType.Student:
        return Student;
      default:
        throw new Error(`Invalid store type: ${storeType}`);
    }
  }
  clear() {
    this.stores = {
      School: [],
      Class: [],
      Student: [],
      TestModel: []
    };
    this.saveDataToLocalForage();
  }

  isOnline() {
    return navigator.onLine;
  }

  loadData(): Observable<void|null> {
    if (this.isOnline()) {
      console.log('Loading data from API');
      return this.loadDataFromAPI().pipe(
        tap(() => console.log('Data loaded from API')),
        catchError((error) => {
          console.error('Error loading data from API:', error);
          return of(null);
        }),
      );
    } else {
      console.log('Loading data from localForage');
      this.loadDataFromLocalForage();
      return of(null);
    }
  }
  
}
