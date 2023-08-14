import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usdInr',
})
export class UsdInrPipe implements PipeTransform {
  transform(value: number, value2: String, val3: String): number {
    if (val3 == 'USD')
      if (value2 == 'INR') return value / 79.677056;
      else if (value2 == 'GBP') return value / 0.876893;
    if (val3 == 'GBP')
      if (value2 == 'INR') return value / (79.677056 / 0.876893);
      else if (value2 == 'USD') return value * 0.876893;
    if (val3 == 'INR')
      if (value2 == 'USD') return value * 79.677056;
      else if (value2 == 'GBP') return value * (79.677056 / 0.876893);
    return value;
  }
}
