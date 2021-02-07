import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CinemaService {
public host:string="http://localhost:8081"
  constructor(private httpClient:HttpClient) { }

  public getVilles(){
    return this.httpClient.get(this.host+"/villes");
  }
  getCinemas(ville) {
    return this.httpClient.get(ville._links.cinemas.href);
  }
  getSalles(cinema) {
    return this.httpClient.get(cinema._links.salles.href);
  }
  getProjections(salle) {
    let url = salle._links.projections.href.replace("{?projection}","");
    return this.httpClient.get(url+"?projection=p1");
  }
  getTicketsPlaces(projection) {
    let url = projection._links.tickets.href.replace("{?projection}","");
    return this.httpClient.get(url+"?projection=p2");
  }
}
