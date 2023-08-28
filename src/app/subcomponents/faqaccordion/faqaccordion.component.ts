import { Component } from '@angular/core';
import {NgFor} from '@angular/common';
import {NgIf} from '@angular/common';
import {CdkAccordionModule} from '@angular/cdk/accordion';

@Component({
  selector: 'app-faqaccordion',
  templateUrl: './faqaccordion.component.html',
  styleUrls: ['./faqaccordion.component.css'],
  standalone: true,
  imports: [CdkAccordionModule, NgFor, NgIf],
})
export class FaqaccordionComponent {
   items = [
    {
      question: "What is cryptocurrency?",
      answer: "The word 'cryptocurrency' describes a kind of digital currency that regulates the generation of new units and encrypts transactions. To function, it makes use of networks and technology. Well-known examples of cryptocurrencies are Bitcoin, Ethereum, and Ripple."
    },
    {
      question: "How Can I Begin Investing in Cryptocurrencies?",
      answer: "To initiate your cryptocurrency investment journey you'll need to follow these steps: 1) Gain an understanding of cryptocurrency fundamentals and the market 2) Choose a safe wallet where you may save your coins 3) Register with a cryptocurrency exchange platform for buying, selling and trading cryptocurrencies 4) Deposit funds into your account. Start trading based on your investment strategy"
    },
    {
      question: "What Sets Your Investment Services Apart?",
      answer: "At Crypto CI our investment services distinguish themselves through personalized approaches, real time insights, risk management strategies and expert guidance. We strive to provide tailored assistance that caters, to needs and preferences."
    },
    {
      question: "Can Cryptocurrencies be considered as investments?",
      answer: "Similar, to any investment cryptocurrencies carry certain risks. The value of cryptocurrencies can exhibit volatility, influenced by a variety of factors. However by conducting research effectively managing risks and gaining an understanding of the market dynamics numerous investors have achieved success, within the realm of cryptocurrency investments."
    },
    {
      question: "How can I stay current with industry trends?",
      answer: "The latest market data, charts, and expert opinions are available to you through our platform. You are given the ability to make informed decisions by providing access to a vast amount of cryptocurrency data."
    },
    {
      question: "What educational resources does your institution offer?",
      answer: "From beginner's guides to expert opinions, we offer a diverse range of educational resources. From fundamental blockchain comprehension to advanced trading tactics, our content caters to investors of diverse skill levels."
    },
    {
      question: "How can I become part of the community?",
      answer: "Joining our community is simple! Simply go to our Community section. Sign up. Once registered you'll be able to participate in discussions, share insights and connect with enthusiasts."
    },
    {
      question: "How can I access assistance when dealing with difficulties?",
      answer: "Contact our support team anytime you need help or face challenges. By providing email and live chat, we ensure immediate support."
    },
    {
      question: "Is my data safe when visiting your site?",
      answer: "Absolutely! We prioritize the safety of your data on our site. Prioritizing your privacy and  security, we strive to ensure their safety. The combination of encryption and security protocols enables a secure browsing and investment experience for you."
    },
    {
      question: "How Can I Begin?",
      answer: "Getting started is a breeze! Simply visit our Sign Up page. Create an account. Once registered you'll gain access, to our materials, up, to date market data and personalized investment services."
    }
  ];
  
  expandedIndex = 0;
}
