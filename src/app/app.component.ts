import {Component, HostListener, TemplateRef} from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {DeviceDetectorService} from 'ngx-device-detector';
import {Meta, Title} from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  host: {
    '(window:resize)': 'onResize($event)'
  }
})

export class AppComponent {
  isMobile = false;
  public modalRef: BsModalRef;

  onResize(event) {
    this.isMobile = this.deviceService.isMobile();
  }

  constructor(private modalService: BsModalService,
              private deviceService: DeviceDetectorService,
              private meta: Meta,
              private title: Title) {
    this.isMobile = this.deviceService.isMobile();
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

  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }


}
