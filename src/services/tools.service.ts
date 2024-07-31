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
}
