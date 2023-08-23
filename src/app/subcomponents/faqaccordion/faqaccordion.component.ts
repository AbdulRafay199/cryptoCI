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
      answer: "Cryptocurrency is a digital or virtual form of money that uses cryptography for secure transactions and control of new units."
    },
    {
      question: "How does blockchain technology relate to cryptocurrency?",
      answer: "Blockchain is the underlying technology behind most cryptocurrencies. It's a decentralized and distributed digital ledger that records all transactions across a network of computers."
    },
    {
      question: "How can I buy cryptocurrencies?",
      answer: "You can buy cryptocurrencies on cryptocurrency exchanges using traditional currencies or other cryptocurrencies. Some popular exchanges include Coinbase, Binance, and Kraken."
    },
    {
      question: "Are cryptocurrencies legal?",
      answer: "The legality of cryptocurrencies varies by country. Some countries have embraced them, while others have imposed restrictions or outright bans. It's important to check your local regulations."
    },
    {
      question: "What is Bitcoin?",
      answer: "Bitcoin is the first and most well-known cryptocurrency. It was created in 2009 by an unknown person or group using the pseudonym Satoshi Nakamoto."
    },
    {
      question: "What is mining in the context of cryptocurrencies?",
      answer: "Mining is the process by which new cryptocurrency coins are created and transactions are verified and added to the blockchain. Miners use powerful computers to solve complex mathematical problems."
    },
    {
      question: "What is a wallet?",
      answer: "A cryptocurrency wallet is a software or hardware tool that allows you to store, send, and receive cryptocurrencies. It securely stores your private keys, which are needed to access your coins."
    },
    {
      question: "Are cryptocurrencies secure?",
      answer: "Cryptocurrencies are secured through cryptographic techniques, but they are not immune to security risks. Users need to be cautious about protecting their private keys, using secure wallets, and being aware of phishing scams."
    }
  ];
  
  expandedIndex = 0;
}
