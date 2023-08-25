import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit{
    myblog: any;

    constructor(private route: ActivatedRoute, private route2: Router) { }
  
    ngOnInit() {
    //   this.myblog = history.state;
      this.myblog = history.state.data;
      console.log(this.myblog)
    }

    goback(){
        this.route2.navigate(['/blog']);
    }
  
}
