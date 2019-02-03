import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-solar-system',
  templateUrl: './solar-system.component.html',
  styleUrls: ['./solar-system.component.css']
})
export class SolarSystemComponent implements OnInit, AfterViewInit {

  private context: CanvasRenderingContext2D;
  private readonly sun: HTMLImageElement = new Image();
  moon: HTMLImageElement = new Image();
  earth: HTMLImageElement = new Image();
  earthOrbitRadius = 105;
  earthRadius = 12;
  moonOrbitRadius = 28.5;
  moonRadius = 3.5;
  canvasWidth: number;
  canvasHeight: number;

  constructor() { 
    this.sun.src = 'assets/images/Canvas_sun.png';
    this.moon.src = 'assets/images/Canvas_moon.png';
    this.earth.src = 'assets/images/Canvas_earth.png';
  }

  ngOnInit() {

  }

  ngAfterViewInit(){
    const canvas = document.getElementById('canvas') as HTMLCanvasElement;
    this.context = canvas.getContext('2d');
    this.canvasWidth = canvas.width;
    this.canvasHeight = canvas.height;    
    this.draw();
  }

  draw(){
    this.context.globalCompositeOperation = 'destination-over';

    //clear canvas
    this.context.clearRect(0, 0, this.canvasWidth, this.canvasHeight);

    this.context.fillStyle = 'rgba(0, 0, 0, 0.4)';
    this.context.strokeStyle = 'rgba(0, 153, 255, 0.4)';
    //save the entire state of the canvas by pushing the current state onto a stack
    this.context.save();
    
    //draw sun
    this.context.translate(-this.canvasWidth / 2, -this.canvasHeight / 2);
    this.sun.onload = () => {
      this.context.drawImage(this.sun, 0, 0, this.canvasWidth, this.canvasHeight);
    }

    //ctx.translate(x, y): move the canvas and its origin x units horizontally and y units vertically on the grid
    //url: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/translate
    this.context.translate(this.canvasWidth / 2, this.canvasHeight / 2);

    //draw test
    this.context.fillRect(0, 0, 100, 100);
    //draw Earth

    this.earth.onload = () => {
      this.context.drawImage(this.earth, -this.earthRadius, -this.earthRadius);
    }    
  }

}
