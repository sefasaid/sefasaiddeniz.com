import {Component, OnInit} from '@angular/core';
import {BlogService} from '../blog.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  base_url = this.blogService.base_url;
  total_pages = 0;
  page = 1;
  content_per_page = this.blogService.content_per_page;

  blogs: any[] = [];

  constructor(private blogService: BlogService,
              private route: ActivatedRoute,
              private router: Router,
              private title: Title,
              private meta: Meta) {
    this.title.setTitle('Sefa Said Deniz | Kendime notlar,kodlar ve fazlası');

    this.meta.updateTag({name: 'description', content: 'Sefa Said Deniz | Kendime notlar,kodlar ve fazlası'});
    this.meta.addTag({name: 'author', content: 'sefa said deniz'});
    this.meta.addTag({
      name: 'keywords',
      content: 'Angular, Meta Service, Sefa, Said, Deniz, Sefa Said, sefa said deniz,said deniz, sefa blog'
    });
    this.meta.addTag({property: 'og:title', content: 'Sefa Said Deniz | Kendime notlar,kodlar ve fazlası'});
    this.meta.addTag({property: 'og:url', content: 'http://sefasaiddeniz.com/blog'});
    this.meta.addTag({property: 'og:image', content: 'http://sefasaiddeniz.com/me.png', itemprop: 'image'});
    this.meta.addTag({property: 'og:image:url', content: 'http://sefasaiddeniz.com/me.png', itemprop: 'image'});
    this.meta.addTag({property: 'og:image:type', content: 'image/png'});
  }

  counter(i: number) {
    return new Array(i);
  }

  ngOnInit() {

    const my_page = this.route.snapshot.queryParams['page'];
    if (my_page !== undefined && my_page > 0) {
      this.page = my_page;
    }
    this.blogService.getCount().subscribe((res: any) => {
      this.total_pages = Math.ceil(res / this.content_per_page);
      if (this.page <= this.total_pages) {
        this.blogService.getBlogs(this.page).subscribe((result: any) => {
          this.blogs = result;
        });
      } else {
        this.router.navigate(['blog']);
      }
    });
  }

  getType(blog_type, type) {
    return type + '-' + blog_type;
  }

}
