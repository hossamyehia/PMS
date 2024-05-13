import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor() { }

  isAttrExist<T>(attr: T): T | null{
    return attr? attr : null;
  }
}
