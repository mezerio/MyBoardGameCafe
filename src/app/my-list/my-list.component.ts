import { Component } from "@angular/core";
import { BoardGameService } from "../services/games.service";
import { Game } from "src/assets/game";

@Component({
  selector: "app-my-list",
  templateUrl: "./my-list.component.html",
  styleUrls: ["./my-list.component.css"],
})
export class MyListComponent {
  starredGames: Game[] = [];

  constructor(private boardGameService: BoardGameService) {
    this.starredGames = boardGameService.getStarredGames();
  }

  removeStar(game: Game) {
    this.boardGameService.removeStarredGames(game);
  }
}
