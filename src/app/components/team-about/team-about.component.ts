import { Component } from '@angular/core';

@Component({
  selector: 'app-team-about',
  templateUrl: './team-about.component.html',
  styleUrls: ['./team-about.component.css']
})
export class TeamAboutComponent {

  teamdetails = [
    {
      bgimg:"https://thetork.com/demos/html/bitrader/assets/images/team/1-dark.png",
      name:"Abdul Rafay",
      domain:"Web developer"
    },
    {
      bgimg:"https://thetork.com/demos/html/bitrader/assets/images/team/2-dark.png",
      name:"Abdul Rafay",
      domain:"Web developer"
    },
    {
      bgimg:"https://thetork.com/demos/html/bitrader/assets/images/team/3-dark.png",
      name:"Abdul Rafay",
      domain:"Web developer"
    },
  ]

}
