import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavChangeService {

  constructor() { }

  private navStateSource = new Subject<boolean>();
  navState$ = this.navStateSource.asObservable();

  setNavbarState(state:boolean){
    this.navStateSource.next(state);
  }

}
