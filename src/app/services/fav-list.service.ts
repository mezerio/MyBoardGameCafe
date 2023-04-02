import { Injectable } from "@angular/core";
import { Game } from "src/assets/game";

@Injectable({
  providedIn: "root",
})
export class FavListService {
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
}
