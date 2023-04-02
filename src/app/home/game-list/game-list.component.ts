import { Component, OnInit } from "@angular/core";
import { BoardGameService } from "../../services/games.service";
import { Game } from "src/assets/game";

@Component({
  selector: "app-game-list",
  templateUrl: "./game-list.component.html",
  styleUrls: ["./game-list.component.css"],
})
export class GameListComponent implements OnInit {
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
    this.boardGameService.getBoardGames().subscribe((response) => {
      this.boardGames = response.games;
    });
    this.boardGameService.get2BoardGames().subscribe((response) => {
      this.board2Games = response.games;
    });
    this.boardGameService.get34BoardGames().subscribe((response) => {
      this.board34Games = response.games;
    });
    this.boardGameService.get56BoardGames().subscribe((response) => {
      this.board56Games = response.games;
    });
    this.boardGameService.get7pBoardGames().subscribe((response) => {
      this.board7pGames = response.games;
    });
  }

  onGameClicked(game: Game) {
    this.clickedGame = game;
    if (this.clickedGame.min_players == "7") {
      this.showGameDetails = this.clickedGame.min_players;
    } else {
      this.showGameDetails = this.clickedGame.max_players;
    }
    console.log(this.clickedGame);
  }
  onLargeGameClicked(game: Game) {
    this.clickedGame = game;
    this.showGameDetails = "0";
    console.log(this.clickedGame);
  }
  hidePopUp() {
    this.showGameDetails = "8";
  }
  onEvent(event: { stopPropagation: () => void }) {
    event.stopPropagation();
  }
  // starGame(game: Game) {
  //   console.log("star game");
  //   console.log(this.starredGames?.includes(game));

  //   if (this.starredGames?.includes(game)) {
  //     const index = this.starredGames.indexOf(game);
  //     this.starredGames.splice(index, 1);
  //   } else {
  //     this.starredGames?.push(game);
  //   }
  //   console.log(this.starredGames);
  // }
  // isStarred(game: Game) {
  //   return this.starredGames?.includes(game);
  // }

  starGame(game: Game) {
    console.log("star game");
    console.log(this.starredGames.some((item) => item.name == game.name));
    console.log(this.starredGames, "bef");

    if (this.starredGames?.some((item) => item.name == game.name)) {
      this.boardGameService.removeStarredGames(game);
    } else {
      this.boardGameService.addStarredGames(game);
    }
    console.log(this.starredGames, "after");
  }
  isStarred(game: Game) {
    return this.starredGames.some((item) => item.name == game.name);
  }
}
