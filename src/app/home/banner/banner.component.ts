import { Component, OnInit } from "@angular/core";
import { BoardGameService } from "../../services/games.service";
import { Game } from "src/assets/game";

@Component({
  selector: "app-banner",
  templateUrl: "./banner.component.html",
  styleUrls: ["./banner.component.css"],
})
export class BannerComponent {
  showInfo: boolean = false;
  BannerstarredGames: Game[] = [];
  scytheGame: Game = {
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
      this.scytheGame = response.games[1];
    });
  }

  handleShowInfo(answer: boolean) {
    this.showInfo = answer;
  }

  starGame() {
    if (this.starredGames.some((item) => item.name == this.scytheGame.name)) {
      this.boardGameService.removeStarredGames(this.scytheGame);
    } else {
      this.boardGameService.addStarredGames(this.scytheGame);
    }
  }

  isStarred() {
    return this.starredGames.some((item) => item.name == this.scytheGame.name);
  }
}
