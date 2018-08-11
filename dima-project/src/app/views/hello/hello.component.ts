import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent implements OnInit {
  public btnTitle = 'Hello click';
  public title: string;
  isUsers: boolean;
  users: Array<any> = [
    {firsName: 'Dima', lastName: 'Glubokiy'},
    {firsName: 'Vanya', lastName: 'hjfgdb'},
    {firsName: 'Vanya', lastName: 'hjfgdb'},
    {firsName: 'Pety', lastName: 'GFdbdfbdlubokiy'},
    {firsName: 'Pety', lastName: 'GFdbdfbdlubokiy'},
    {firsName: 'Bob', lastName: 'Edgdf'},
  ];

  constructor() {
    this.title = 'Dima';
  }

  ngOnInit() {
    this.isUsers = true;
  }
}
