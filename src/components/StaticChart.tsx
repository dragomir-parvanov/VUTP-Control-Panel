import React, { Component } from 'react';

import Chart, { ChartDataSets, ChartData } from "chart.js"

interface ChartProps {
    canvasId:string
  data: number[]
  dataLabel:string
  yAxisLabel: string,
  xAxisLabel: string,
  dataLabels: ChartData["labels"]
}
export default class StaticChart extends Component<ChartProps> {
  drawChart(): void {
    // creating dataset
      
      
    const canvas = document.getElementById(this.props.canvasId) as HTMLCanvasElement;
    
      
    const ctx = canvas.getContext("2d")

      if (!ctx) {
        throw new Error("Context is undefined")
    }
        
    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, "#2196F3");
    gradient.addColorStop(1, "#21CBF3");

    
    new Chart(ctx, {
      type: "line",
      data: {
        labels:this.props.dataLabels,
        datasets: [
          {
            label: this.props.dataLabel,
            data: this.props.data,
            fill: true,
            backgroundColor: gradient,
            pointBackgroundColor:"black"
            //backgroundColor:"red"
          }
        ]
      },
      options: {
        responsive: true,
        scales: {
          yAxes: [{ display: "hello", scaleLabel: { labelString: this.props.yAxisLabel, display: true } }],
          xAxes:[{scaleLabel:{labelString:this.props.xAxisLabel,display:true}}]
          
        },
        
      }
    });
  }
  componentDidMount() {
    this.drawChart()
  }
  render() {
    return (
      
        <canvas width={"500px"} id={this.props.canvasId}>
        </canvas>

    );
  }
}

