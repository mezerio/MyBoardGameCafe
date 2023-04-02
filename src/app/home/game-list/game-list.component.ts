import { Component, OnInit } from "@angular/core";
import { BoardGameService } from "../../services/games.service";
import { Game } from "src/assets/game";

@Component({
  selector: "app-game-list",
  templateUrl: "./game-list.component.html",
  styleUrls: ["./game-list.component.css"],
})
export class GameListComponent implements OnInit {
  boardGames: any[] = [];
  board2Games: any[] = [];
  board34Games: any[] = [];
  board56Games: any[] = [];
  board7pGames: any[] = [];
  showGameDetails: string | undefined;
  clickedGame: Game = {
    description_preview: "",
    year_published: "",
    min_players: "",
    max_players: "",
    min_playtime: "",
    max_playtime: "",
    min_age: "",
    name: "",
    image_url: "",
  };
  starredGames: Game[] = [];

  constructor(private boardGameService: BoardGameService) {
    this.starredGames = boardGameService.getStarredGames();
  }

  ngOnInit() {
    this.boardGameService.getBoardGames(0).subscribe((response) => {
      this.boardGames = response.games;
    });
    this.boardGameService.getBoardGames(2).subscribe((response) => {
      this.board2Games = response.games;
    });
    this.boardGameService.getBoardGames(4).subscribe((response) => {
      this.board34Games = response.games;
    });
    this.boardGameService.getBoardGames(6).subscribe((response) => {
      this.board56Games = response.games;
    });
    this.boardGameService.getBoardGames(7).subscribe((response) => {
      this.board7pGames = response.games;
    });
  }
}
