import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from "rxjs";
import {PopupService} from "../../shared/services/popup.service";
declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {


  private popupSubscription!: Subscription;

  constructor(public popUpService: PopupService) {}





  ngOnInit(): void {
    // Подписываемся на показ попапа при инициализации компонента
    this.popupSubscription = this.popUpService.showPopupAfterTenSeconds().subscribe();



    var icons = {
      header: "ui-icon-caret-1-s",
      activeHeader: "ui-icon-caret-1-n"
    };
    $("#accordion").accordion({
      icons: icons
    });
    $("#toggle").button().on("click", function () {
      if ($("#accordion").accordion("option", "icons")) {
        $("#accordion").accordion("option", "icons", null);
      } else {
        $("#accordion").accordion("option", "icons", icons);
      }
    });



  }

  closePopUp(){
    if (this.popUpService.isPopUpShow) {
      this.popUpService.isPopUpShow = false;
    }
  }

  ngOnDestroy() {
    this.popUpService.stopPopup();
    if (this.popupSubscription) {
      this.popupSubscription.unsubscribe();
    }
  }

  protected readonly PopupService = PopupService;
}
