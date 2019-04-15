import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneralsService {
  rangeAsc(min, max, step) {
    step = step || 1;
    const input = [];
    for (let i = min; i <= max; i += step) {
      input.push(i);
    }
    return input;
  }

  rangeDesc(min, max, step) {
    step = step || 1;
    const input = [];
    for (let i = max; i >= min; i -= step) {
      input.push(i);
    }
    return input;
  }
}
