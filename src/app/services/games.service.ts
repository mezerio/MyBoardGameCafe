import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Game } from "src/assets/game";

@Injectable({
  providedIn: "root",
})
export class BoardGameService {
  private apiUrl = "https://api.boardgameatlas.com/api";
  private apiKey = "2HqxF4Qxrg";
  private starredGames: Game[] = [];

  addStarredGames(starredGame: Game): void {
    this.starredGames.push(starredGame);
  }

  getStarredGames(): Game[] {
    return this.starredGames;
  }

  removeStarredGames(starredGame: Game): void {
    const index = this.starredGames.indexOf(starredGame);
    this.starredGames.splice(index, 1);
  }
  constructor(private http: HttpClient) {}

  getBoardGames(): Observable<any> {
    return this.http.get(`${this.apiUrl}/search?client_id=${this.apiKey}`);
  }
  get2BoardGames(): Observable<any> {
    return this.http.get(
      `${this.apiUrl}/search?max_players=2&client_id=${this.apiKey}`
    );
  }
  get34BoardGames(): Observable<any> {
    return this.http.get(
      `${this.apiUrl}/search?max_players=4&client_id=${this.apiKey}`
    );
  }
  get56BoardGames(): Observable<any> {
    return this.http.get(
      `${this.apiUrl}/search?max_players=6&client_id=${this.apiKey}`
    );
  }
  get7pBoardGames(): Observable<any> {
    return this.http.get(
      `${this.apiUrl}/search?min_players=7&client_id=${this.apiKey}`
    );
  }
}
