import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  loader: BehaviorSubject<boolean>;

  constructor() {
    this.loader = new BehaviorSubject<boolean>(true);
  }

  public getloader(): Observable<boolean> {
    return this.loader.asObservable();
  }

  public setloader(newValue: boolean): void {
    this.loader.next(newValue);
  }
}
