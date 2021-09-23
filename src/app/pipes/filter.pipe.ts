import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultPost = [];
    for(const itemT of value){
      if(itemT['Nombre del equipo'].indexOf(arg) > -1){
        resultPost.push(itemT);
      };
    };
    return resultPost;
  }

}
