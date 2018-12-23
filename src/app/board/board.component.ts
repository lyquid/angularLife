import { Component, OnInit } from '@angular/core';
import { Board } from './board';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  board: Board;
  // todo: get this from a form or something
  boardWidth = 20;
  boardHeight = 20;
  requestedPopulation: number = null;
  private defaultPopulation = 50;

  constructor() { }

  ngOnInit() {
    this.board = new Board(this.boardHeight, this.boardWidth, this.defaultPopulation);
    // console.log(this.board.getLayout());
  }
}
