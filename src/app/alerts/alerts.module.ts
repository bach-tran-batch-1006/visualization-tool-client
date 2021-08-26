import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlertsComponent } from './alerts.component';

@NgModule({
    imports: [CommonModule],
    declarations: [AlertsComponent],
    exports: [AlertsComponent]
})

export class AlertsModule { }