import {Component, OnInit} from '@angular/core';
import {BlogService} from '../blog.service';
import {ActivatedRoute} from '@angular/router';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-blog-single',
  templateUrl: './blog-single.component.html',
  styleUrls: ['./blog-single.component.scss']
})
export class BlogSingleComponent implements OnInit {

  base_url = this.blogService.base_url;

  blog: {
    'title': 'Test Blog',
    'content': 'ilk blog ',
    'createdAt': '2018-09-13T08:22:07.805Z',
    'updatedAt': '2018-09-13T19:02:34.794Z',
    'active': true,
    'type': 'info',
    'short': 'ilk blog',
    'sef': 'test-blog',
    '_id': '5b9a1e2f8698c5673d03413b',
    '__v': 0,
    'user': {
      'confirmed': true,
      'blocked': false,
      '_id': '5b9a1a7a461c3964ea7df65a',
      'username': 'Sefa Said Deniz',
      'email': 'sefasaiddeniz1@gmail.com',
      'role': '5b9a19ea1e8b7264362c897e',
      'createdAt': '2018-09-13T08:06:18.329Z',
      'updatedAt': '2018-09-13T08:23:16.511Z',
      '__v': 0,
      'id': '5b9a1a7a461c3964ea7df65a',
      'profile': null
    },
    'id': '5b9a1e2f8698c5673d03413b',
    'image': {
      '_id': '5b9a1e2f8698c5673d03413c',
      'name': '1454905_original.jpg',
      'sha256': 'QZz2safg0c9mUfuKur58ZWJiWxX_Rr+mJupusuSgSck',
      'hash': 'c3683b53a58d41f79ca8a29cd99f521d',
      'ext': '.jpg',
      'mime': 'image/jpeg',
      'size': '159.77',
      'url': '/uploads/c3683b53a58d41f79ca8a29cd99f521d.jpg',
      'provider': 'local',
      'related': [
        '5b9a1e2f8698c5673d03413b'
        ],
      'createdAt': '2018-09-13T08:22:07.878Z',
      'updatedAt': '2018-09-13T08:22:07.924Z',
      '__v': 0,
      'id': '5b9a1e2f8698c5673d03413c'
    }
  };

  constructor(private blogService: BlogService,
              private route: ActivatedRoute,
              private title: Title,
              private meta: Meta) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.blogService.getSingle(params['sef']).subscribe((res: any) => {
        this.blog = res;
        this.title.setTitle('Sefa Said Deniz | ' + res.title);

        this.meta.updateTag({name: 'description', content: 'Sefa Said Deniz | ' + res.title + ' | ' + res.content});
        this.meta.addTag({name: 'author', content: 'sefa said deniz'});
        this.meta.addTag({
          name: 'keywords',
          content: 'Angular, Meta Service, Sefa, Said, Deniz, Sefa Said, sefa said deniz,said deniz, sefa blog,' + res.title
        });
        this.meta.addTag({property: 'og:title', content: 'Sefa Said Deniz |' + res.title});
        this.meta.addTag({property: 'og:url', content: 'http://sefasaiddeniz.com/blog/' + params['sef']});
        this.meta.addTag({property: 'og:image', content: 'http://api.sefasaiddeniz.com/' + res.image.url, itemprop: 'image'});
        this.meta.addTag({property: 'og:image:url', content: 'http://api.sefasaiddeniz.com/' + res.image.url, itemprop: 'image'});
        this.meta.addTag({property: 'og:image:type', content: 'image/png'});
      });
    });
  }

  getType(blog_type, type) {
    return type + '-' + blog_type;
  }
}
