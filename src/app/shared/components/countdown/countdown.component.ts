import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {TimerService} from './timer.service';


@Component({
  selector: 'tev-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss'],
  providers: [TimerService],
})
export class CountdownComponent implements OnInit, OnDestroy {


  @Output()
  onComplete = new EventEmitter<void>();
  @Output()
  onChange = new EventEmitter<number>();
  @Input() init = 10;
  seconds: number;


  constructor(public timer: TimerService) {
  }

  ngOnInit(): void {
    this.timer.restartCountdown(this.init);

    this.timer.countdownEnd$.subscribe(() => {
      this.onComplete.emit();
    });

    this.timer.countdown$
      .subscribe((data) => {
        this.seconds = data;
        this.onChange.emit((data * 100) / this.init);
      });

    this.timer.toogleCountdown();
  }

  start() {
    this.timer.countdown$.subscribe((data) => {});
  }

  ngOnDestroy() {
    this.timer.destroy();
  }

}
