import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { filter } from 'rxjs/operators';

import { Alert, AlertType } from '../models/Alert';


@Injectable({ providedIn: 'root' })
export class AlertService {

  private subject = new Subject<any>();
  private defaultId = 'default-alert';

  onAlert(id = this.defaultId): Observable<Alert> {
    return this.subject.asObservable().pipe(filter(x => x && x.id === id));
}

    // convenience methods
    success(message: string, options?: any) {
        this.alert(new Alert({ ...options, type: AlertType.Success, message }));
    }

    error(message: string, options?: any) {
        this.alert(new Alert({ ...options, type: AlertType.Error, message }));
    }

    info(message: string, options?: any) {
        this.alert(new Alert({ ...options, type: AlertType.Info, message }));
    }

    warn(message: string, options?: any) {
        this.alert(new Alert({ ...options, type: AlertType.Warning, message }));
    }

      
    alert(alert: Alert) {
        alert.id = alert.id || this.defaultId;
        this.subject.next(alert);
    }


    clear(id = this.defaultId) {
        this.subject.next(new Alert({ id }));
    }


  constructor() {}

   
}
