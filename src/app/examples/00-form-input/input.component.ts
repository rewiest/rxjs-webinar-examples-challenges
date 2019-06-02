import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map } from 'rxjs/internal/operators';
import { ValueTransformer } from '@angular/compiler/src/util';

@Component({
  selector: 'app-input',
  template: `
    <mat-form-field class="search">
      <input name="search" [formControl]="searchControl" type="search" matInput placeholder="Search Query">
    </mat-form-field>
    <h3>{{queryString}}</h3>
  `,
  styles: [`
    .search {
      width: 100%;
      max-width: 500px;
      margin-left: 15px;
    }
  `]
})
export class InputComponent implements OnInit {
  searchControl: FormControl = new FormControl('');
  queryString;

  ngOnInit() {
    this.searchControl.valueChanges
      .pipe(
        map(value => value.toUpperCase())
      )
      .subscribe(value => this.queryString = value);
  }
}
