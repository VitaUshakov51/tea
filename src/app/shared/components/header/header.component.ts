import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $('#search').bind('click', function (e: any) {
      e.preventDefault();
      alert('Поиск пока недоступен :(');
    })
  }

}
