import { Pipe, PipeTransform } from '@angular/core';
import {isNullOrUndefined} from "util";
import {Person} from "../models/person.model";

@Pipe({
  name: 'lastnamePipe'
})
export class LastnamePipePipe implements PipeTransform {

  transform(persons: Person[], search: string) {
    if (!isNullOrUndefined(persons) && search.trim() !== "") {
      let filter = persons.filter(
        person => person.lastname.toLowerCase().indexOf(search.toLowerCase()) === 0
      );
      return filter;
    }
    return persons;
  }

}
