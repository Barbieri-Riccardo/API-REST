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
      Authorization:
        'Bearer BQD50_mu7FVDoRC1XW2ePSNhmF1ytEG94gRtvPUAgFRr8_Uc4XR8rc0MCxCuKm9dQbscCi5dbm5bAHlvVXfny1eC-zGlgP4tbbwCsL-yG5xPwMuBkv5S4V7ScUMrdl-7nhwvWXDIbJgtX1-ilJPLwPz5D4UaA4jgsib2155yrXBmAbetLXu08A'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
 //Ritorno un observable ai componenti che richiedono il servizio
  }
  getTrack(id: string) {
    const url = `https://api.spotify.com/v1/tracks/${id}`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQD50_mu7FVDoRC1XW2ePSNhmF1ytEG94gRtvPUAgFRr8_Uc4XR8rc0MCxCuKm9dQbscCi5dbm5bAHlvVXfny1eC-zGlgP4tbbwCsL-yG5xPwMuBkv5S4V7ScUMrdl-7nhwvWXDIbJgtX1-ilJPLwPz5D4UaA4jgsib2155yrXBmAbetLXu08A'
    });
    
    return this.http.get(url, { headers });
  }
}