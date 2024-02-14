import {Injectable, OnInit} from '@angular/core';
import {Observable, Subject, takeUntil, tap, timer} from "rxjs";

@Injectable()
export class PopupService implements OnInit{
  private stopPopup$: Subject<void> = new Subject<void>();

  constructor() {}

  ngOnInit():void {
  }

  isPopUpShow: boolean = false;
  showPopupAfterTenSeconds(): Observable<any> {
    return timer(10000).pipe(
      takeUntil(this.stopPopup$),
      tap(() => {
        this.showPopup();
      })
    );
  }

  stopPopup() {
    this.stopPopup$.next();
  }

  private showPopup() {
    this.isPopUpShow = true;
  }
}
