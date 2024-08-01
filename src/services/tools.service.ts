import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ToolsService {

  constructor(private _router: Router) { }

  navigate(path: string) {
    this._router.navigate([path])
  }

  dateCreator(date: Date, time: Date): string[] {

    const year: string = date.getFullYear().toString();
    const month: string = (date.getMonth() + 1).toString().padStart(2, '0');
    const day: string = date.getDate().toString().padStart(2, '0');

    const finalDate: string = `${day}/${month}/${year}`

    const hour = time.getHours().toString().padStart(2, '0')
    const minute = time.getMinutes().toString().padStart(2, '0')
    console.log(minute)
    const finalTime = `${hour}:${minute}`
    return [finalDate, finalTime]
  }
}
