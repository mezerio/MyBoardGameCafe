import { Component, OnInit } from "@angular/core";
import { BoardGameService } from "../services/games.service";

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
  board6pGames: any[] | undefined;

  constructor(private boardGameService: BoardGameService) {}

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
    this.boardGameService.get6pBoardGames().subscribe((response) => {
      this.board6pGames = response.games;
    });
  }
}
