import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

import { Event } from '../domain/event';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class EventService {

  constructor(private http: HttpClient) { }

  //This method will return a given event by event ID
  getEvent(id: number): Observable<Event> {

    return this.http.get<Event>(`https://popout-back.herokuapp.com/event/?id=${id}`);

  }

  //This method will return all events currently in the database
  getEvents(): Observable<Event[]> {

    return this.http.get<Event[]>(`https://popout-back.herokuapp.com/allEvents`);

  }

  //This method will submit a new event
  newEvent(event: Event): void {

    var url = 'https://popout-back.herokuapp.com/newEvent';
    const req =  this.http.post(url, {
        event_title: event.event_title,
        event_description: event.event_description,
        event_type: event.event_type,
        event_host: event.event_host,
        event_address:  event.event_address,
        event_date:  event.event_date,
        event_time:  event.event_time,
        lat:  event.lat,
        lng:  event.long
      }
    ).subscribe()

  }

}
