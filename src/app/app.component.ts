import { Component } from '@angular/core'
import { AppStore } from './app.store'

@Component({
  selector: 'app-root',
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <div>Component Store v11</div>
      <pre>{{ vm.items | json }}</pre>
    </ng-container>
  `,
})
export class AppComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: AppStore) {}
}
