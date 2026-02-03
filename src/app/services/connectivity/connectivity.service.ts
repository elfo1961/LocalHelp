import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConnectivityService {

  /**
   * BehaviorSubject holds the latest connectivity state.
   * It immediately emits the current value to any new subscriber.
   *
   * navigator.onLine is the browser's built‑in connectivity flag.
   * It is reliable enough for browser‑only environments.
   */
  private onlineSubject = new BehaviorSubject<boolean>(navigator.onLine);

  /**
   * Public observable that components and services can subscribe to.
   * Emits true when online, false when offline.
   */
  onlineChanges$ = this.onlineSubject.asObservable();

  constructor() {
    /**
     * Browser event: fired when the browser detects a connection.
     * We forward this event into our BehaviorSubject.
     */
    window.addEventListener('online', () => {
      this.onlineSubject.next(true);
    });

    /**
     * Browser event: fired when the browser detects loss of connection.
     * Again, we forward this into our BehaviorSubject.
     */
    window.addEventListener('offline', () => {
      this.onlineSubject.next(false);
    });
  }

  /**
   * Returns the current connectivity state synchronously.
   * Useful for guards, startup logic, or quick checks.
   */
  isOnline(): boolean {
    return this.onlineSubject.value;
  }
}
