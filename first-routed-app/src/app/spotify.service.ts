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
      Authorization:'Bearer BQC8giy97mlckvJBHDnq7jeRacZ351viHbxZS1uKEa-UV6QkOgJBgFFLzBIXxPg3h02Lb_V1_ivORGnkjch19u7zxTPlYMb3doI7O5sCDiCnIhK5PEU51E9cc3BbzEXdzVyXXRAR5f88oJW88kcgDuzuHwtJbDBDPRclH4L-Cj5jspQ-Rsda62dsKvbgvIcT3R3v'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
 //Ritorno un observable ai componenti che richiedono il servizio
  }
}

