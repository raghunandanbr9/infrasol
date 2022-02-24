import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prime',
  templateUrl: './prime.component.html',
  styleUrls: ['./prime.component.scss'],
})
export class PrimeComponent implements OnInit {
  primes: any = [];
  constructor() {}

  ngOnInit(): void {
    this.setPrimes();

    this.primes.forEach((prime: any) => {
      this.primesCheck(prime);
    });
  }

  //setting the ranges
  setPrimes() {
    let primeTills = [
      10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000,
    ];
    primeTills.forEach((till) => {
      let obj = { primeTill: till, primeCount: 0, timeTaken: 0 };
      this.primes.push(obj);
    });
  }

  // checking the count and time
  primesCheck(obj: any) {
    let max = obj.primeTill;
    let start = new Date().getTime();
    let store = [];
    let primesCount = 0;
    // Sieve of Erathestenes  applied
    // normal logic is making the page hang for more time. so applied this method
    for (let i = 2; i <= max; ++i) {
      if (!store[i]) {
        primesCount++;
        for (let j = i << 1; j <= max; j += i) {
          store[j] = true;
        }
      }
    }
    let end = new Date().getTime();
    let time = end - start;
    obj.timeTaken = time + 'ms';
    obj.primeCount = primesCount;
  }
}
