import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-grafic-bar',
  templateUrl: './grafic-bar.component.html',
  styles: [],
})
export class GraficBarComponent  implements OnDestroy{
  @Input() results: any[] = [];
  view: any[] = [700, 400];

  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = true;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  yAxisLabel: string = 'Games';
  showYAxisLabel: boolean = true;
  xAxisLabel: string = 'Votos';

  colorScheme = 'nightLights';

  //intervalo;

  constructor() {
/*     this.intervalo=setInterval(() => {
      console.log('tick');
      
      const newRes = [...this.results];
      
      for (let i in newRes) {
        newRes[i].value = Math.round(Math.random() * 500);
      }
      this.results=[...newRes];
    }, 1500); */
  }
  ngOnDestroy(): void {
   // clearInterval(this.intervalo);
  }

  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}
