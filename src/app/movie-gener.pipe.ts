import { Pipe, PipeTransform } from '@angular/core';
import { Action } from 'rxjs/internal/scheduler/Action';

@Pipe({
  name: 'movieGener'
})
export class MovieGenerPipe implements PipeTransform {

  transform(value: any,movie :any): any {
    if(movie.actor=='Rajanikanth'){
      return value + ' :Mas';
    }
if(value[0]==='a' || value[0]==='g'|| value[0]==='k')
{

return value+': Action';
}
else{
  return value+':Comedy';
}
   
  }

}
