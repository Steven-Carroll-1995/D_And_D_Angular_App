import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

public constructor(private titleService: Title) {}

  public setTitle( newTitle) {
    this.titleService.setTitle( newTitle );
  }

  ngOnInit() {
    this.setTitle('D&D App');
  }

}
