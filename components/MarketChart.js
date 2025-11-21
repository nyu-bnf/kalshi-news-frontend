import React from "react";
import { Platform, View, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";

const screenWidth = Dimensions.get("window").width;

export default function MarketChart() {
  const labels = ["Mon", "Tue", "Wed", "Thu", "Fri"];
  const values = [120, 140, 160, 180, 150];

  if (Platform.OS === "web") {
    // Dynamically import web-only chart libraries
    const ReactChartJS2 = require("react-chartjs-2");
    const ChartJSModule = require("chart.js");

    const Line = ReactChartJS2.Line;
    const ChartJS = ChartJSModule.Chart;

    ChartJS.register(
      ChartJSModule.LineElement,
      ChartJSModule.CategoryScale,
      ChartJSModule.LinearScale,
      ChartJSModule.PointElement,
      ChartJSModule.Tooltip,
      ChartJSModule.Legend,
    );

    // Custom plugin for vertical crosshair line
    const verticalLinePlugin = {
      id: "verticalLine",
      afterDraw: (chart) => {
        if (chart.tooltip?._active?.length) {
          const ctx = chart.ctx;
          const activePoint = chart.tooltip._active[0];
          const x = activePoint.element.x;
          const topY = chart.scales.y.top;
          const bottomY = chart.scales.y.bottom;

          ctx.save();
          ctx.beginPath();
          ctx.setLineDash([5, 5]);
          ctx.moveTo(x, topY);
          ctx.lineTo(x, bottomY);
          ctx.lineWidth = 1;
          ctx.strokeStyle = "#CCCCCC";
          ctx.stroke();
          ctx.restore();
        }
      },
    };

    ChartJS.register(verticalLinePlugin);

    const data = {
      labels,
      datasets: [
        {
          data: values,
          borderColor: "#08C285",
          borderWidth: 2,
          tension: 0.4,
          fill: false,
          pointRadius: 4,
          pointHoverRadius: 6,
          pointBackgroundColor: "#08C285",
          pointBorderColor: "#08C285",
          pointHoverBackgroundColor: "#08C285",
          pointHoverBorderColor: "#08C285",
        },
      ],
    };

    const options = {
      maintainAspectRatio: false,
      responsive: true,
      interaction: {
        mode: "index",
        intersect: false,
      },
      plugins: {
        legend: { display: false },
        tooltip: {
          enabled: true,
          mode: "index",
          intersect: false,
          backgroundColor: "rgba(200, 200, 200, 0.9)",
          titleColor: "#fff",
          bodyColor: "#fff",
          borderWidth: 0,
          displayColors: false,
          padding: 10,
          callbacks: {
            label: function (context) {
              return `${context.parsed.y}`;
            },
            title: function () {
              return "";
            },
          },
        },
      },
      scales: {
        y: {
          display: false,
          grid: { display: false },
        },
        x: {
          grid: { display: false },
          ticks: {
            color: "#9ca3af",
            font: {
              size: 12,
            },
          },
        },
      },
      onHover: (event, chartElement) => {
        event.native.target.style.cursor = chartElement[0]
          ? "pointer"
          : "default";
      },
    };

    return (
      <View
        style={{
          height: 180,
          width: "100%",
        }}
      >
        <Line data={data} options={options} />
      </View>
    );
  }

  // not for web, for ios and android
  return (
    <LineChart
      data={{
        labels,
        datasets: [{ data: values }],
      }}
      width={screenWidth - 40}
      height={180}
      chartConfig={{
        backgroundGradientFrom: "#fff",
        backgroundGradientTo: "#fff",
        color: (opacity = 1) => `rgba(8, 194, 133, ${opacity})`,
        labelColor: () => "#9ca3af",
        propsForDots: {
          r: "4",
          strokeWidth: "2",
          stroke: "#08C285",
        },
      }}
      withInnerLines={false}
      withOuterLines={false}
      bezier
      style={{ borderRadius: 16 }}
    />
  );
}
