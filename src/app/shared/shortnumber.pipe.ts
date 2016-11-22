import { Pipe, PipeTransform } from '@angular/core';

const allLetters = ['', 'k', 'M', 'B', 'T'];

@Pipe({
  name: 'shortnumber'
})
export class ShortnumberPipe implements PipeTransform {

  transform(value: number, isInteger = false): string {
    if (!value && value !== 0) { return 'NaN'; }

    let exponent = value !== 0 ? Math.ceil(Math.log10(value)) : 0;
    let engineerExponentLevel = Math.max(0, Math.floor((exponent - 1) / 3));
    let engineerExponent = engineerExponentLevel * 3;
    let letter = allLetters[engineerExponentLevel];
    let shortValue = value / Math.pow(10, engineerExponent);

    let fractionDigits = Math.min(2, 3 - (exponent - engineerExponent));
    if (isInteger && engineerExponentLevel === 0) {
      fractionDigits = 0;
    }

    let valueString = shortValue.toFixed(fractionDigits);
    return valueString + letter;
  }

}
