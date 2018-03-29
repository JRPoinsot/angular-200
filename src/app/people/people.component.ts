import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AddDialogComponent } from './add-dialog/add-dialog.component';
import { PeopleService } from '../shared/people-service';
import 'rxjs/add/operator/mergeMap';
import { Store, Select } from 'ngxs';
import { SetPeople, AppState, FilterPeople, LoadPeople } from '../app.state';
import { Observable } from 'rxjs/Observable';


@Component({
    selector: 'sfeir-people',
    templateUrl: './people.component.html',
    styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

    private addDialog: MatDialogRef<AddDialogComponent>;
    people;
    search$: Observable<string>;

    dialogStatus = 'inactive';
    view = 'card';

    constructor(private store: Store, public dialog: MatDialog, private _peopleService: PeopleService) {}


    /**
     * OnInit implementation
     */
    ngOnInit() {
      this.store.select(AppState.filteredPeople)
      .subscribe(p => this.people = p);
      this.search$ = this.store.select(AppState.search);
      this.store.dispatch(new LoadPeople());
    }

    delete(person: any) {
        this._peopleService.delete(person.id)
            .subscribe( (people) => this.people = people);
    }

    add(person: any) {
        this._peopleService.update(person)
            .mergeMap( res => this._peopleService.fetch())
            .subscribe( (people: any[]) => {
                this.people = people;
                this.hideDialog();
            });
    }

    showDialog() {
        this.dialogStatus = 'active';
        this.addDialog = this.dialog.open(AddDialogComponent, {
            width: '450px',
            data: {}
          });

          this.addDialog.afterClosed().subscribe(person => {
            this.dialogStatus = 'inactive';
            if (person) {
                this.add(person);
            }
          });
    }

    hideDialog() {
        this.dialogStatus = 'inactive';
        this.addDialog.close();
    }

    switchView() {
        this.view = (this.view === 'card') ? 'list' : 'card';
    }

    onSearch(search) {
      this.store.dispatch(new FilterPeople(search));
  }
}


