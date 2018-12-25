import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// import { BoardComponent } from '../board/board.component';

@Component({
  // providers: [BoardComponent],
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(
    private breakpointObserver: BreakpointObserver) {}

  /* play(): void {
    this.boardComponent.play();
  }

  pause(): void {
    this.boardComponent.pause();
  }*/

  /* reset(): void {
    this.boardComponent.reset();
  } */

  /* isPaused?(): boolean {
    return this.boardComponent.isPaused();
  } */
}
