import { Component,Output, EventEmitter,Input } from '@angular/core';


@Component({
  selector: 'app-blogcard',
  templateUrl: './blogcard.component.html',
  styleUrls: ['./blogcard.component.css']
})
export class BlogcardComponent {

  @Input() item={
    image:"",
    title:"",
    para:"",
    article:[{}]
  };
  @Output() readmore = new EventEmitter<any>()
  
}
