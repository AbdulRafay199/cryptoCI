import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bloglist',
  templateUrl: './bloglist.component.html',
  styleUrls: ['./bloglist.component.css']
})
export class BloglistComponent {

  constructor(private router: Router) { }

   myblog = [{
    title:"Advantages of Investing in Cryptocurrency",
    para:"Looking to diversify your investment portfolio? Cryptocurrencies offer an exciting opportunity for potential high returns.",
    article:[
    {
        "type": "title",
        "title": "Advantages of Investing in Cryptocurrency"
    },
    {
        "type": "heading",
        "heading": "Diversification and Potential High Returns"
    },
    {
        "type": "para",
        "para": "Looking to diversify your investment portfolio? Cryptocurrencies offer an exciting opportunity for potential high returns."
    },
    {
        "type": "para",
        "para": "Cryptocurrencies have gained significant attention for their remarkable returns over a short period."
    },
    {
        "type": "heading",
        "heading": "24/7 Market and Accessibility"
    },
    {
        "type": "para",
        "para": "Unlike traditional stock markets, the cryptocurrency market operates 24/7, allowing you to trade and monitor your investments at any time."
    },
    {
        "type": "para",
        "para": "This accessibility is particularly appealing to those with busy schedules who can't always trade during traditional market hours."
    },
    {
        "type": "combine",
        "heading": "Decentralization and Security",
        "para": "Cryptocurrencies operate on decentralized networks, which means they are not controlled by any single entity like a government or central bank. Cryptocurrencies operate on decentralized networks, which means they are not controlled by any single entity like a government or central bank. Cryptocurrencies operate on decentralized networks, which means they are not controlled by any single entity like a government or central bank.",
    },
    {
      "type": "heading",
      "heading": "Global Financial Inclusion"
    },
    {
      "type": "para",
      "para": "Cryptocurrencies have the potential to bring financial services to individuals who are unbanked or underbanked, particularly in developing regions."
    },
    {
      "type": "para",
      "para": "This technology can empower millions of people by providing access to banking, remittances, and other financial tools."
    },
    {
        "type": "combine2",
        "heading": "Decentralization and Security",
        "para": "Cryptocurrencies operate on decentralized networks, which means they are not controlled by any single entity like a government or central bank. Cryptocurrencies operate on decentralized networks, which means they are not controlled by any single entity like a government or central bank. Cryptocurrencies operate on decentralized networks, which means they are not controlled by any single entity like a government or central bank.",
    },
    {
        "type": "heading",
        "heading": "Innovation and Technological Advancement"
    },
    {
        "type": "para",
        "para": "Investing in cryptocurrencies means being part of the technological revolution that blockchain and digital currencies are driving."
    },
    {
        "type": "para",
        "para": "Blockchain, the underlying technology of cryptocurrencies, has applications beyond finance, including supply chain, healthcare, and more."
    }
]},{
  title:"The Benefits of Regular Exercise",
  para:"Exercise helps in maintaining a healthy weight, reducing the risk of chronic diseases, and promoting strong muscles and bones.",
  article:[
  {
      "type": "title",
      "title": "The Benefits of Regular Exercise"
  },
  {
      "type": "heading",
      "heading": "Improved Physical Health"
  },
  {
      "type": "para",
      "para": "Engaging in regular exercise has numerous benefits for your physical health."
  },
  {
      "type": "para",
      "para": "Exercise helps in maintaining a healthy weight, reducing the risk of chronic diseases, and promoting strong muscles and bones."
  },
  {
      "type": "heading",
      "heading": "Enhanced Mental Well-being"
  },
  {
      "type": "para",
      "para": "Exercise is not just good for the body; it's also essential for mental well-being."
  },
  {
      "type": "para",
      "para": "Physical activity triggers the release of endorphins, often referred to as 'feel-good' hormones, which can help alleviate stress and boost mood."
  },
  {
      "type": "heading",
      "heading": "Increased Energy Levels"
  },
  {
      "type": "para",
      "para": "Regular physical activity can lead to increased energy levels and reduced feelings of fatigue."
  },
  {
      "type": "para",
      "para": "It enhances the efficiency of your cardiovascular system and improves overall endurance."
  },
  {
      "type": "heading",
      "heading": "Better Sleep Quality"
  },
  {
      "type": "para",
      "para": "Exercise has a positive impact on sleep quality and can help you fall asleep faster and enjoy deeper sleep cycles."
  },
  {
      "type": "para",
      "para": "However, it's important to avoid intense exercise close to bedtime, as it may have the opposite effect."
  },
  {
      "type": "heading",
      "heading": "Social Interaction and Engagement"
  },
  {
      "type": "para",
      "para": "Participating in group activities or sports can provide opportunities for social interaction and engagement."
  },
  {
      "type": "para",
      "para": "Connecting with others through exercise can lead to new friendships and a sense of belonging."
  }
]},{
  title:"The Art of Effective Time Management",
  para:"By managing your time effectively, you can increase productivity, reduce stress, and make room for activities you enjoy.",
  article:[
  {
      "type": "title",
      "title": "The Art of Effective Time Management"
  },
  {
      "type": "heading",
      "heading": "Why Time Management Matters"
  },
  {
      "type": "para",
      "para": "Time management is a crucial skill for achieving success and maintaining a balanced life."
  },
  {
      "type": "para",
      "para": "By managing your time effectively, you can increase productivity, reduce stress, and make room for activities you enjoy."
  },
  {
      "type": "heading",
      "heading": "Setting Clear Goals and Priorities"
  },
  {
      "type": "para",
      "para": "Effective time management begins with setting clear goals and priorities."
  },
  {
      "type": "para",
      "para": "Identify tasks that align with your goals and focus on completing high-priority items first."
  },
  {
      "type": "heading",
      "heading": "Creating a Structured Schedule"
  },
  {
      "type": "para",
      "para": "Creating a structured schedule helps you allocate time for different tasks and activities."
  },
  {
      "type": "para",
      "para": "Use tools like calendars or to-do lists to organize your day and stay on track."
  },
  {
      "type": "heading",
      "heading": "Avoiding Multitasking"
  },
  {
      "type": "para",
      "para": "While multitasking might seem efficient, it often leads to decreased focus and quality of work."
  },
  {
      "type": "para",
      "para": "Instead, practice single-tasking by dedicating your full attention to one task at a time."
  },
  {
      "type": "heading",
      "heading": "Learning to Say No"
  },
  {
      "type": "para",
      "para": "Effective time management involves recognizing your limits and learning to say no when necessary."
  },
  {
      "type": "para",
      "para": "Saying no to tasks that don't align with your goals helps you stay focused on what truly matters."
  },
  {
      "type": "heading",
      "heading": "Embracing Breaks and Rest"
  },
  {
      "type": "para",
      "para": "Taking regular breaks is essential for maintaining productivity and preventing burnout."
  },
  {
      "type": "para",
      "para": "Short breaks can re-energize you and enhance your ability to concentrate on tasks."
  }
]}]

  readmore(item:any) {
    this.router.navigate(['/blog/article'], { state: {data:item} });
  }
}
