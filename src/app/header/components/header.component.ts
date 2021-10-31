import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements AfterViewInit {
  title = 'Лучшие книги со всего света';

  constructor() { }

  @ViewChild('appTitle')
  titleElement!: ElementRef<HTMLHeadingElement>;

  ngAfterViewInit(): void {
    this.titleElement.nativeElement.textContent = this.title;
  }

}
