import { Component, OnInit } from "@angular/core";
import { BoardGameService } from "../../services/games.service";
import { Game } from "src/assets/game";
import { GameListComponent } from "../game-list/game-list.component";
@Component({
  selector: "app-banner",
  templateUrl: "./banner.component.html",
  styleUrls: ["./banner.component.css"],
})
export class BannerComponent {
  showInfo: boolean = false;
  BannerStarredGames: Game[] = [];
  scytheGame: Game | undefined;
  isStarred: boolean = false;

  constructor(private boardGameService: BoardGameService) {}

  ngOnInit() {
    this.boardGameService.getBoardGames().subscribe((response) => {
      this.scytheGame = response.games[1];
    });
  }

  handleShowInfo(answer: boolean) {
    this.showInfo = answer;
  }

  starGame() {
    this.isStarred = !this.isStarred;
  }
}
