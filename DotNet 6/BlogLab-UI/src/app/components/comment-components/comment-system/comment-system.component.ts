import { Component, Input, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { BlogCommentViewModel } from 'src/app/models/blog-comment/blog-comment-view-model.model';
import { BlogComment } from 'src/app/models/blog-comment/blog-comment.model';
import { AccountService } from 'src/app/services/account.service';
import { BlogCommentService } from 'src/app/services/blog-comment.service';

@Component({
  selector: 'app-comment-system',
  templateUrl: './comment-system.component.html',
  styleUrls: ['./comment-system.component.css']
})
export class CommentSystemComponent implements OnInit {

  @Input() blogId: number;

  standAloneComment: BlogCommentViewModel;
  blogComments: BlogComment[];
  blogCommentViewModels: BlogCommentViewModel[];

  constructor(
    private blogCommentService: BlogCommentService,
    public accountService: AccountService
  ) { }

  ngOnInit(): void {
    this.blogCommentService.getAll(this.blogId).subscribe(blogComments => {

      if (this.accountService.isLoggedIn()) {
        this.initComment(this.accountService.currentUserValue.username);
      }

      this.blogComments = blogComments;
      this.blogCommentViewModels = [];

      for (let i=0; i<this.blogComments.length; i++) {
        if (!this.blogComments[i].parentBlogCommentId) {
          this.findCommentReplies(this.blogCommentViewModels, i);
        }
      }

    });
  }

  initComment(username: string) {
    this.standAloneComment = {
      parentBlogCommentId: null,
      content: '',
      blogId: this.blogId,
      blogCommentId: -1,
      username: username,
      publishDate: null,
      updateDate: null,
      isEditable: false,
      deleteConfirm: false,
      isReplying: false,
      comments: []
    };
  }

  findCommentReplies(blogCommentViewModels: BlogCommentViewModel[], index: number) {

    let firstElement = this.blogComments[index];
    let newComments: BlogCommentViewModel[] = [];

    let commentViewModel: BlogCommentViewModel = {
      parentBlogCommentId: firstElement.parentBlogCommentId || null,
      content: firstElement.content,
      blogId: firstElement.blogId,
      blogCommentId: firstElement.blogCommentId,
      username: firstElement.username,
      publishDate: firstElement.publishDate,
      updateDate: firstElement.updateDate,
      isEditable: false,
      deleteConfirm: false,
      isReplying: false,
      comments: newComments
    }

    blogCommentViewModels.push(commentViewModel);

    for (let i=0; i<this.blogComments.length; i++) {
      if (this.blogComments[i].parentBlogCommentId === firstElement.blogCommentId) {
        this.findCommentReplies(newComments, i);
      }
    }
  }

  onCommentSaved(blogComment: BlogComment) {
    let commentViewModel: BlogCommentViewModel = {
      parentBlogCommentId: blogComment.parentBlogCommentId,
      content: blogComment.content,
      blogId: blogComment.blogId,
      blogCommentId: blogComment.blogCommentId,
      username: blogComment.username,
      publishDate: blogComment.publishDate,
      updateDate: blogComment.updateDate,
      isEditable: false,
      deleteConfirm: false,
      isReplying: false,
      comments: []
    }

    this.blogCommentViewModels.unshift(commentViewModel);
  }

}
