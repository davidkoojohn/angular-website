import { Directive, OnDestroy, OnInit } from '@angular/core';

@Directive({
  selector: '[appSpy]'
})
export class SpyDirective implements OnInit, OnDestroy{

  constructor() { }

  ngOnInit() {
    console.log("Spy Directive, init!")
  }

  ngOnDestroy() {
    console.log("Spy Directive, destroy!")
  }
}
