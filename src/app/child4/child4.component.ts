import { Component, OnInit } from '@angular/core';

export class Theme {
  name: string;
  css: string;
}

@Component({
  selector: 'app-child4',
  templateUrl: './child4.component.html',
  styleUrls: ['./child4.component.scss'],
})
export class Child4Component implements OnInit {
  selectedTheme: Theme;
  themes: Theme[] = [
    { name: 'dark theme', css: 'dark-theme' },
    { name: 'test theme', css: 'test-theme' },
  ];
  constructor() {}

  ngOnInit(): void {
    this.selectedTheme = this.themes[0];
  }
}
