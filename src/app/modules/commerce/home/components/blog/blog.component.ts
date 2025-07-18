import { Component, OnInit } from '@angular/core';
import { BlogService } from './service/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  blogTittle = '';

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.blogService.getBlog().subscribe((data) => {
      if (data.length) this.blogTittle = data[0].title;
    });
  }
}
