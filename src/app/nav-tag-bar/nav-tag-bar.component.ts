import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-tag-bar',
  templateUrl: './nav-tag-bar.component.html',
  styleUrls: ['./nav-tag-bar.component.scss']
})
export class NavTagBarComponent implements OnInit {
  listTags: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
