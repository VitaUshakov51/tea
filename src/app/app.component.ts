import {Component, OnInit} from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit {

  ngOnInit() :void {


    let form = $('form');
    form.bind('submit', function (e:any) {
      e.preventDefault();
      if ($('#name').val().length < 1) {
        alert('Заполните поле Имя');
      } else if ($('#lastName').val().length < 1) {
        alert('Заполните фамилию')
      } else if ($('#phone').val().length < 1) {
        alert('Заполните номер телефона')
      } else if ($('#country').val().length < 1) {
        alert('Заполните страну')
      } else if ($('#index').val().length !== 6) {
        alert('Введите 6 цифр индекса')
      } else if ($('#address').val().length < 1) {
        alert('Заполните адрес')
      } else {
        $('#orderTitle').text('Данные отправлены');
        form.css('display', 'none');
        $('.thanks').removeClass('d-none');
      }
    })
  }



}
