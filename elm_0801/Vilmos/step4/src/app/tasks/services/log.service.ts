import { Injectable } from '@angular/core';

@Injectable()
export class LogService {

  constructor() { }

  public log(message: any){
    console.log(message);
  };

}
