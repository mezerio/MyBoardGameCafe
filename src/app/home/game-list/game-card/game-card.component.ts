import { Component, Input, OnInit } from "@angular/core";
import { BoardGameService } from "src/app/services/games.service";
import { Game } from "src/assets/game";

@Component({
  selector: "app-game-card",
  templateUrl: "./game-card.component.html",
  styleUrls: ["./game-card.component.css"],
})
export class GameCardComponent implements OnInit {
  @Input() gameList: Game[] | undefined;
  @Input() playerNumber: string | undefined;
  @Input() largePosters: boolean = false;
  boardGames: any[] | undefined;
  board2Games: any[] | undefined;
  board34Games: any[] | undefined;
  board56Games: any[] | undefined;
  board7pGames: any[] | undefined;
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

  onGameClicked(game: Game, event: { stopPropagation: () => void }) {
    this.onEvent(event);
    this.clickedGame = game;
    if (this.clickedGame.min_players == "7") {
      this.showGameDetails = this.clickedGame.min_players;
    } else {
      this.showGameDetails = this.clickedGame.max_players;
    }
    console.log(this.clickedGame, "shutup mehi");
  }
  onLargeGameClicked(game: Game, event: { stopPropagation: () => void }) {
    this.onEvent(event);

    this.clickedGame = game;
    this.showGameDetails = "0";
    console.log(this.clickedGame, "shtup meufiu");
  }
  hidePopUp() {
    this.showGameDetails = "8";
  }
  onEvent(event: { stopPropagation: () => void }) {
    event.stopPropagation();
  }

  starGame(game: Game) {
    console.log(this.playerNumber);
    if (this.starredGames?.some((item) => item.name == game.name)) {
      this.boardGameService.removeStarredGames(game);
    } else {
      this.boardGameService.addStarredGames(game);
    }
  }
  isStarred(game: Game) {
    return this.starredGames.some((item) => item.name == game.name);
  }
}
