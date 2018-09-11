import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numero'
})
export class NumeroPipe implements PipeTransform {

  transform(value: any, decimales: any, moneda?: any): any {
    let redondeo;
    const factor = Math.pow(10, decimales);
    if(value < 0){
      redondeo = (Math.round(-value * factor) / factor ) * -1;
    } else {
      redondeo = Math.round(value * factor ) / factor;
    }

    const formateo = new Intl.NumberFormat('es-ES', {minimumFractionDigits: decimales})
                         .format(redondeo);

    return moneda ? formateo + " " + moneda : formateo;
  }

}
