import {Component, OnInit} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.scss']
})
export class NotfoundComponent implements OnInit {

  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Sefa Said Deniz | 404');
    this.meta.addTag({name: 'description', content: 'Sefa Said Deniz | 404 Bulunamadı'});
    this.meta.addTag({name: 'author', content: 'sefa said deniz'});
    this.meta.addTag({
      name: 'keywords',
      content: 'Angular, Meta Service, Sefa, Said, Deniz, Sefa Said, sefa said deniz,said deniz, sefa blog'
    });

    this.meta.addTag({property: 'og:title', content: 'Sefa Said Deniz | 404'});
    this.meta.addTag({property: 'og:url', content: 'http://sefasaiddeniz.com'});
    this.meta.addTag({property: 'og:image', content: 'http://sefasaiddeniz.com/me.png', itemprop: 'image'});
    this.meta.addTag({property: 'og:image:url', content: 'http://sefasaiddeniz.com/me.png', itemprop: 'image'});
    this.meta.addTag({property: 'og:image:type', content: 'image/png'});
  }

  ngOnInit() {
  }

}
