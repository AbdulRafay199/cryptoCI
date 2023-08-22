import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-teamcard',
  templateUrl: './teamcard.component.html',
  styleUrls: ['./teamcard.component.css']
})
export class TeamcardComponent {

  @Input() item = {
    bgimg:"Loading",
    name:"Loading",
    domain:"Loading"
  };
}
