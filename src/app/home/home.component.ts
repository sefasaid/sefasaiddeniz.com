import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';
import {NavigationEnd, Router} from '@angular/router';

declare let ga: Function;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  constructor(private title: Title,
              private meta: Meta,
              public router: Router) {

    this.title.setTitle('Sefa Said Deniz | Kişisel Website & Blog');
    this.meta.addTag({name: 'description', content: 'Sefa Said Deniz | Kişisel Website & Blog'});
    this.meta.addTag({name: 'author', content: 'sefa said deniz'});
    this.meta.addTag({
      name: 'keywords',
      content: 'Angular, Meta Service, Sefa, Said, Deniz, Sefa Said, sefa said deniz,said deniz, sefa blog'
    });

    this.meta.addTag({property: 'og:title', content: 'Sefa Said Deniz | Kişisel Website & Blog'});
    this.meta.addTag({property: 'og:url', content: 'http://sefasaiddeniz.com'});
    this.meta.addTag({property: 'og:image', content: 'http://sefasaiddeniz.com/me.png', itemprop: 'image'});
    this.meta.addTag({property: 'og:image:url', content: 'http://sefasaiddeniz.com/me.png', itemprop: 'image'});
    this.meta.addTag({property: 'og:image:type', content: 'image/png'});
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        ga('set', 'page', event.urlAfterRedirects);
        ga('send', 'pageview');
      }
    });
  }
}
