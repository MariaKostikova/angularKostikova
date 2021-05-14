import { Component, Input, OnInit } from '@angular/core';
import { Human } from '../app.component';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss'],
})
export class PeopleComponent implements OnInit {
  search = '';
  @Input() people: Human[] = [];
  constructor() {}

  ngOnInit(): void {}
}
