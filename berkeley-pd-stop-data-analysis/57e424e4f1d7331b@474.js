// https://observablehq.com/@d3/stacked-normalized-horizontal-bar@474
import define1 from "./a33468b95d0b15b0@692.js";

export default function define(runtime, observer) {
  const main = runtime.module();
  const fileAttachments = new Map([["us-population-state-age.csv",new URL("./files/cacf3b872e296fd3cf25b9b8762dc0c3aa1863857ecba3f23e8da269c584a4cea9db2b5d390b103c7b386586a1104ce33e17eee81b5cc04ee86929f1ee599bfe",import.meta.url)]]);
  main.builtin("FileAttachment", runtime.fileAttachments(name => fileAttachments.get(name)));
  main.variable(observer()).define(["md"], function(md){return(
md`# Stacked Normalized Horizontal Bar Chart

This chart shows proportional population by age for each state using [d3.stackOffsetExpand](https://github.com/d3/d3-shape/blob/master/README.md#stackOffsetExpand), allowing the comparison of demographic distributions. Data: [American Community Survey](/@mbostock/working-with-the-census-api)`
)});
  main.variable(observer("key")).define("key", ["legend","color"], function(legend,color){return(
legend({title: "Age (years)", color, tickSize: 0})
)});
  main.variable(observer("chart")).define("chart", ["d3","width","height","series","color","x","y","formatPercent","formatValue","xAxis","yAxis"], function(d3,width,height,series,color,x,y,formatPercent,formatValue,xAxis,yAxis)
{
  const svg = d3.create("svg")
      .attr("viewBox", [0, 0, width, height])
      .style("overflow", "visible");

  svg.append("g")
    .selectAll("g")
    .data(series)
    .enter().append("g")
      .attr("fill", d => color(d.key))
    .selectAll("rect")
    .data(d => d)
    .join("rect")
      .attr("x", d => x(d[0]))
      .attr("y", (d, i) => y(d.data.name))
      .attr("width", d => x(d[1]) - x(d[0]))
      .attr("height", y.bandwidth())
    .append("title")
      .text(d => `${d.data.name} ${d.key}
${formatPercent(d[1] - d[0])} (${formatValue(d.data[d.key])})`);

  svg.append("g")
      .call(xAxis);

  svg.append("g")
      .call(yAxis);

  return svg.node();
}
);
  main.variable(observer("data")).define("data", ["d3","FileAttachment"], async function(d3,FileAttachment){return(
d3.csvParse(await FileAttachment("us-population-state-age.csv").text(), (d, i, columns) => (d3.autoType(d), d.total = d3.sum(columns, c => d[c]), d)).sort((a, b) => b["<10"] / b.total - a["<10"] / a.total)
)});
  main.variable(observer("series")).define("series", ["d3","data"], function(d3,data){return(
d3.stack()
    .keys(data.columns.slice(1))
    .offset(d3.stackOffsetExpand)
  (data)
    .map(d => (d.forEach(v => v.key = d.key), d))
)});
  main.variable(observer("x")).define("x", ["d3","margin","width"], function(d3,margin,width){return(
d3.scaleLinear()
    .range([margin.left, width - margin.right])
)});
  main.variable(observer("y")).define("y", ["d3","data","margin","height"], function(d3,data,margin,height){return(
d3.scaleBand()
    .domain(data.map(d => d.name))
    .range([margin.top, height - margin.bottom])
    .padding(0.08)
)});
  main.variable(observer("color")).define("color", ["d3","series"], function(d3,series){return(
d3.scaleOrdinal()
    .domain(series.map(d => d.key))
    .range(d3.schemeSpectral[series.length])
    .unknown("#ccc")
)});
  main.variable(observer("xAxis")).define("xAxis", ["margin","d3","x","width"], function(margin,d3,x,width){return(
g => g
    .attr("transform", `translate(0,${margin.top})`)
    .call(d3.axisTop(x).ticks(width / 100, "%"))
    .call(g => g.selectAll(".domain").remove())
)});
  main.variable(observer("yAxis")).define("yAxis", ["margin","d3","y"], function(margin,d3,y){return(
g => g
    .attr("transform", `translate(${margin.left},0)`)
    .call(d3.axisLeft(y).tickSizeOuter(0))
    .call(g => g.selectAll(".domain").remove())
)});
  main.variable(observer("formatPercent")).define("formatPercent", ["d3"], function(d3){return(
d3.format(".1%")
)});
  main.variable(observer("formatValue")).define("formatValue", function(){return(
x => isNaN(x) ? "N/A" : x.toLocaleString("en")
)});
  main.variable(observer("height")).define("height", ["data","margin"], function(data,margin){return(
data.length * 25 + margin.top + margin.bottom
)});
  main.variable(observer("margin")).define("margin", function(){return(
{top: 30, right: 10, bottom: 0, left: 30}
)});
  main.variable(observer("d3")).define("d3", ["require"], function(require){return(
require("d3@5")
)});
  const child1 = runtime.module(define1);
  main.import("legend", child1);
  return main;
}
