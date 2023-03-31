import { Component, OnInit } from "@angular/core";
import { BoardGameService } from "../services/games.service";

@Component({
  selector: "app-banner",
  templateUrl: "./banner.component.html",
  styleUrls: ["./banner.component.css"],
})
export class BannerComponent {
  boardGames: any[] | undefined;

  constructor(private boardGameService: BoardGameService) {}

  ngOnInit() {
    this.boardGameService.getBoardGames().subscribe((response) => {
      this.boardGames = response.games;
    });
  }
}
