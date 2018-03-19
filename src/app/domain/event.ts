export class Event {

    public id: number;
    public event_title: string;
    public event_description: string;
    public event_date: string;
    public event_time: string;
    public event_address: string;
    public lat: number;
    public long: number;

    constructor(
        id: number, 
        event_title: string, 
        event_description: string,
        event_address: string,
        event_date: string, 
        event_time: string,
        lat: number, 
        lng: number
    ) {
        this.id = id;
        this.event_title = event_title;
        this.event_description = event_description;
        this.event_date = event_date;
        this.event_time = event_time;
        this.event_address = event_address;
        this.lat = lat;
        this.long = lng;
    }


}
