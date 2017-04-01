import {Pipe, PipeTransform} from "@angular/core";
@Pipe({
  name: 'containerType'
})
export class ContainersTypePipe implements PipeTransform {
  transform(value, args){
    if(!!args && !!value){
      return value.filter(container => container.type === args);
    }
    return value;
  }
}
