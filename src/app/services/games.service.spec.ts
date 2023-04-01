import { TestBed } from "@angular/core/testing";
import { BoardGameService } from "./games.service";

describe("GamesService", () => {
  let service: BoardGameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoardGameService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
