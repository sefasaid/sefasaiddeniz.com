import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  base_url = 'http://api.sefasaiddeniz.com/';
  content_per_page = 20;

  constructor(private http: HttpClient) {
  }

  getBlogs(page) {
    const skip = (page - 1) * this.content_per_page;
    return this.http.get(this.base_url + 'blog?_sort=_id:DESC&_start=' + skip + '&_limit=' + this.content_per_page);
  }

  getCount() {
    return this.http.get(this.base_url + 'blog/count');
  }

  getSingle(sef) {
    return this.http.get(this.base_url + 'blog/by_sef/' + sef);
  }
}
