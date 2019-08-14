import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "ownDate"
})
export class OwnDatePipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    return "Év: " + value.getFullYear() + " hónap: " + (value.getMonth() + 1);
  }
}
