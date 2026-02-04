import { Injectable } from '@angular/core';
import { BehaviorSubject, fromEvent, merge } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ConnectivityService {

  // A BehaviorSubject that always reflects the current state
  private onlineSubject = new BehaviorSubject<boolean>(navigator.onLine);

  // Public observable for other parts of the app
  onlineChanges$ = this.onlineSubject.asObservable();

  constructor() {
    // Listen to browser events and update the subject
    merge(
      fromEvent(window, 'online').pipe(map(() => true)),
      fromEvent(window, 'offline').pipe(map(() => false))
    ).subscribe(value => this.onlineSubject.next(value));
  }

  // Always read the current value from the BehaviorSubject
  isOnline(): boolean {
    return this.onlineSubject.value;
  }
}
