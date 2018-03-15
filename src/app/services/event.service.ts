import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Event } from '../domain/event';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class EventService {

  constructor(private http: HttpClient) { }

  //This method will return a given event by event ID
  getEvent(id: number): Observable<Event> {

    return this.http.get<Event>(`http://localhost:8080/event/?id=${id}`);

  }

  //This method will return all events currently in the database
  getEvents(): Observable<Event[]> {

    return this.http.get<Event[]>(`http://localhost:8080/event/events`);

  }

}