import React, { Component } from 'react';
import { ChartData } from "chart.js";
import Chart from "chart.js";
import { BehaviorSubject, Subscription } from "rxjs";
type Props = {
    canvasId: string,
       
    dataLabel:string
    yAxisLabel: string,
    xAxisLabel: string,
    dataLabels: ChartData["labels"],
    newValuesStream:BehaviorSubject<number>
}

type State = {
    currentLoad:number
}
class DynamicChart extends Component<Props,State> {
    subscription?:Subscription
    componentDidMount() {
        const chart = this.drawChart()
        
        this.subscription = this.props.newValuesStream.subscribe({
            next: (newValue) => {
                if (chart.data.datasets?.length === 0) {
                    throw new Error("datassets length is 0")
                }
            chart.data.datasets![0].data?.push(newValue)
            chart.data.labels?.push("a")
                chart.data = {
                    labels: chart.data.labels,
                    datasets: [
                        {
                            label: this.props.dataLabel,
                            data: chart.data.datasets![0].data,
                            fill: true,
                            pointBackgroundColor: "black"
                            //backgroundColor:"red"
                    }]
            }
            chart.update()
            }
        })
    }
    
    componentWillUnmount() {
        this.subscription?.unsubscribe()
    }

    drawChart():Chart {
           const canvas = document.getElementById(this.props.canvasId) as HTMLCanvasElement;

           const ctx = canvas.getContext("2d");

           if (!ctx) {
             throw new Error("Context is undefined");
           }

           const gradient = ctx.createLinearGradient(0, 0, 0, 400);
            gradient.addColorStop(0, "#2196F3");
            gradient.addColorStop(1, "#21CBF3");
           return new Chart(ctx, {
             type: "line",
             data: {
               labels: this.props.dataLabels,
               datasets: [
                 {
                   label: this.props.dataLabel,
                   data: [],
                   fill: true,
                   backgroundColor: gradient,
                   pointBackgroundColor: "black"
                   //backgroundColor:"red"
                 }
               ]
             },
             options: {
               responsive: true,
               scales: {
                 yAxes: [{ display: "hello", scaleLabel: { labelString: this.props.yAxisLabel, display: true } }],
                 xAxes: [{ scaleLabel: { labelString: this.props.xAxisLabel, display: true } }]
               },
               animation:{duration:0}
             }
           });
        
    }
    render() {
        return (
            <div>
                <canvas id={this.props.canvasId}></canvas>
            </div>
        );
    }
}

export default DynamicChart;