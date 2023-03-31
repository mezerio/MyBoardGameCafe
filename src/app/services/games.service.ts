import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class BoardGameService {
  private apiUrl = "https://api.boardgameatlas.com/api";
  private apiKey = "2HqxF4Qxrg";

  constructor(private http: HttpClient) {}

  getBoardGames(): Observable<any> {
    return this.http.get(`${this.apiUrl}/search?client_id=${this.apiKey}`);
  }
  get2BoardGames(): Observable<any> {
    return this.http.get(
      `${this.apiUrl}/search?min_players=2&max_players=2&client_id=${this.apiKey}`
    );
  }
  get34BoardGames(): Observable<any> {
    return this.http.get(
      `${this.apiUrl}/search?min_players=3&max_players=4&client_id=${this.apiKey}`
    );
  }
  get56BoardGames(): Observable<any> {
    return this.http.get(
      `${this.apiUrl}/search?min_players=5&max_players=6&client_id=${this.apiKey}`
    );
  }
  get6pBoardGames(): Observable<any> {
    return this.http.get(
      `${this.apiUrl}/search?min_players=6&client_id=${this.apiKey}`
    );
  }
}
