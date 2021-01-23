import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';//para hacer mas seguro los enlnaces externos , como canciones y videos


@Pipe({
  name: 'domSeguro'
})
export class DomSeguroPipe implements PipeTransform {

  constructor(private domSanitizer: DomSanitizer){}

  transform(value: string, url: string): any {
    return this.domSanitizer.bypassSecurityTrustResourceUrl (url+ value );
  }

}
