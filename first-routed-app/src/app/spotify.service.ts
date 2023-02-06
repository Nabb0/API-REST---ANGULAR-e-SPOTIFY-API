import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//Dichiaro che il servizio è iniettabile agli altri componenti a partire dal componente root
@Injectable({
  providedIn: 'root'  
})
export class SpotifyService {
   //url per oauth: https://developer.spotify.com/console/get-search-item/
  //Ottengo il modulo HttpClient
  constructor(private http: HttpClient) { }

  searchTrack(query: string) {
    const url = `https://api.spotify.com/v1/search?q=${query}&type=track`;
    const headers = new HttpHeaders({
      Authorization:'Bearer BQAG3qUl4j4bO6swb5AOm3Rz-_G03dwnbdlwuZ_9p037e745Kvh43y0TsPpvRaHdqJNqpOYmOdICH12Nac2qhwOJmnrPVNviz43iSMXlZ_UHqgsucZ-9m6mwm_UQ0NhKfBGybVqtZ_uriScZjAWrPzg9tgyzoX3wb5EGxtwvB8RF4lUWwZPA17dvCV0c1xxiqwoX'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
 //Ritorno un observable ai componenti che richiedono il servizio
  }
}

