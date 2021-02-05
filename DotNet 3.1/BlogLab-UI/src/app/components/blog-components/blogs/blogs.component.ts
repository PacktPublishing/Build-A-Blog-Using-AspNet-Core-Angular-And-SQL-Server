import { Component, OnInit } from '@angular/core';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { BlogPaging } from 'src/app/models/blog/blog-paging.model';
import { Blog } from 'src/app/models/blog/blog.model';
import { PagedResult } from 'src/app/models/blog/paged-result.model';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  pagedBlogResult: PagedResult<Blog>;

  constructor(
    private blogService: BlogService
  ) { }

  ngOnInit(): void {
    this.loadPagedBlogResult(1, 6);
  }

  pageChanged(event: PageChangedEvent) : void {
    this.loadPagedBlogResult(event.page, event.itemsPerPage);
  }

  loadPagedBlogResult(page, itemsPerPage) {
    let blogPaging = new BlogPaging(page, itemsPerPage);

    this.blogService.getAll(blogPaging).subscribe(pagedBlogs => {
      this.pagedBlogResult = pagedBlogs;
    });
  }

}
