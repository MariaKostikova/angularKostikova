import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

export interface Human {
  id?: number;
  nameHunam: string;
  state: string;
  selected: boolean;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  appTitle = 'Выбор получателя';
  public people: Human[] = [
    {
      id: 1,
      nameHunam: 'Темирлан Темирбиев',
      state: 'Супервайзер',
      selected: true,
    },
    {
      id: 2,
      nameHunam: 'Анастасия Морозова',
      state: 'Тестировщик',
      selected: false,
    },
    {
      id: 3,
      nameHunam: 'Александр Пушкин',
      state: 'Разработчик',
      selected: false,
    },
    {
      id: 4,
      nameHunam: 'Темирлан Темирбиев',
      state: 'Супервайзер',
      selected: false,
    },
  ];
  form: FormGroup = new FormGroup({});

  submit() {
    console.log('Form: ', this.form);
    const formData = { ...this.form.value };

    console.log('Form Data: ', formData);
  }
}
