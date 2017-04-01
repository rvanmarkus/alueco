import {Pipe, PipeTransform} from "@angular/core";
@Pipe({
  name: 'filterWhenInText'
})
export class SeachInTextPipe implements PipeTransform {
  transform(items, value){
    if(!!items && !!value){
      const output =items.filter(textItem => this.isValueInItem(value, textItem));
      return output;
    }
    return items;
  }

  private isValueInItem(string : string, value: string) {
    return value.toLowerCase().indexOf(string.toLowerCase()) > -1;
  }

}
