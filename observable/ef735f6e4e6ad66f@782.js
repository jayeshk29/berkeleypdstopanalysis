// https://observablehq.com/@jayeshk29/berkeley-pd-stop-data-analysis@782
import define1 from "./50064204b82fdf22@349.js";
import define2 from "./57e424e4f1d7331b@474.js";
import define3 from "./a33468b95d0b15b0@692.js";

export default function define(runtime, observer) {
  const main = runtime.module();
  const fileAttachments = new Map([["stack_graph_final.csv",new URL("./files/620b6bdf3d676488c3d6b63d89fcf93c2adfb9e794da90a12cdf1a0954c05568c12b8ccdb935ececd2d6e500ce6912c27078b7bfd3a4fc7d0513dda876d6e68f",import.meta.url)],["Berkeley_PD - Sheet2 (2).csv",new URL("./files/1e6c97ea87aae0446e095cfef5e1d2dac83af8a1e4d19f3c4c28174364b946fa461756dce1c9f15aa5c13d0218d2d400888e1867cf0610e344878d679e0c7645",import.meta.url)],["Berkeley_PD - Sheet5.csv",new URL("./files/4a79fc65daa3c8048db3eb9b9924b86269b6c608235dbe3a5aa4b61e4515867f50a44b9c519337a17e7dd7a29acdbf861b762deb214ee9b858c891263591eb73",import.meta.url)],["Berkeley_PD - Sheet6.csv",new URL("./files/4ee0a692ab5a8468b4effd3cad8775f7d0234c26946f57e84f6e9cdbf98c967ea0dcbcadd6482c9b1f40321f04fc6624fb8ff73898b281525acbff9bde3e4b6b",import.meta.url)],["Berkeley_PD - sheet7.csv",new URL("./files/bcbd853558c904580b221fba3346413f0c278aac2dd10e2b3e7e6dc596b57ef3fcdca569764754318f900c845116d2fa3b7ba75827bd544d9a24392721d2d9ff",import.meta.url)],["Berkeley_PD - sheet8.csv",new URL("./files/5caa738c6b8712bfdba870724a4bc79cc905c7d6a3ef9e16f1899bc1330445db88c48f57bdba6328529b5c6eacc596b91c78b0494b5df9341b7ea0df85ae3e0c",import.meta.url)]]);
  main.builtin("FileAttachment", runtime.fileAttachments(name => fileAttachments.get(name)));
  main.variable(observer()).define(["md"], function(md){return(
md`# Berkeley PD Stop Data Analysis`
)});
  main.variable(observer()).define(["md"], function(md){return(
md `_The github repo containing the Jupytr notebook and accompanying data in this analysis can be found [here](https://github.com/jayeshk29/berkeleypdstopanalysis)_.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`The [2010 Bay Area Census](http://www.bayareacensus.ca.gov/cities/Berkeley.htm) estimates that Berkeley's population is about 112,580 people. About **60%** (66,996) of the city's residents identify as **White**. Only about **10%** (11,241) residents identify as **Black or African American**.

**Five** years ago, the Daily Cal published [this](https://www.dailycal.org/2015/09/30/civil-rights-leaders-say-berkeley-police-disproportionately-stop-search-people-of-color/) article that found that Berkeley PD was disproportionately stopping and searching more black people in the city. 

It took Berkeley PD **three years** to [confirm](https://www.dailycal.org/2018/03/12/berkeley-police-stop-search-black-residents-often-police-review-commission-finds/) this finding in 2018.

Yesterday, I read [this article](https://www.nytimes.com/interactive/2020/06/03/us/minneapolis-police-use-of-force.html) in the Times about the disproportionate use of police force in Minneapolis. 

So I decided to conduct a similar analysis on stop data in Berkeley, curious to see what had changed since that report from 2015.

Stop data from [the City of Berkeley](https://data.cityofberkeley.info/Public-Safety/Berkeley-PD-Stop-Data/6e9j-pj9p) shows that, in 2019, a black person was:
- **6 times more likely to stopped** by Berkeley PD compared to a white person when adjusted for relative population size. 
- **19 times more likely to be subjected to a car search** compared to a white person.
- **Almost 9 times more likely to be arrested** compared to a white person during these stops.
  - Black men were **12 times more likely to be arrested** compared to white men.

`
)});
  main.variable(observer("key")).define("key", ["legend","color"], function(legend,color){return(
legend({title: "Race", color, tickSize: 0})
)});
  main.variable(observer()).define(["md"], function(md){return(
md`### **(2019) Black people in Berkeley as share of...**`
)});
  main.variable(observer()).define(["chart1"], function(chart1){return(
chart1
)});
  main.variable(observer()).define(["md"], function(md){return(
md`**1 out of 10** Berkeley residents is black. 

Consistently, each year, at least **1 out of 3** people arrested in Berkeley is black.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`### **Arrests**`
)});
  main.variable(observer()).define(["chart2"], function(chart2){return(
chart2
)});
  main.variable(observer()).define(["md"], function(md){return(
md`### **Stop Reason**`
)});
  main.variable(observer()).define(["chart3"], function(chart3){return(
chart3
)});
  main.variable(observer()).define(["md"], function(md){return(
md`When stopped, Black men in Berkeley were **12 times** more likely to be arrested in 2019 than white men.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`Black people were also **19 times** more likely to have their cars searched during a stop.`
)});
  main.variable(observer()).define(["html","chart4","chart5","chart6"], function(html,chart4,chart5,chart6){return(
html`<div style="display: flex; align-items: center; font-size: 15px">
<b> Berkeley Population </b>
 <div style="flex-basis:2%;"></div>
 <div style="flex-basis:40%;">${chart4}</div>

 <div style="flex-basis:18%;"></div>

<b> Arrests (Men) </b>
 <div style="flex-basis:2%;"></div>
 <div style="flex-basis:40%">${chart5}</div>

 <div style="flex-basis:18%;"></div>

<b> Car Searches </b>
 <div style="flex-basis:2%;"></div>
 <div style="flex-basis:40%">${chart6}</div>


</div>`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`## Next time`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`Which neighborhoods do stops occur in?`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`## Utilities`
)});
  const child1 = runtime.module(define1).derive([{name: "data_pop", alias: "data"},"color","margin","height","width"], main);
  main.import("chart", "chart4", child1);
  const child2 = runtime.module(define1).derive([{name: "data_men_arrests", alias: "data"},"color","margin","height","width"], main);
  main.import("chart", "chart5", child2);
  const child3 = runtime.module(define1).derive([{name: "data_car_searches", alias: "data"},"color","margin","height","width"], main);
  main.import("chart", "chart6", child3);
  const child4 = runtime.module(define2).derive([{name: "data_here", alias: "data"},"color","margin"], main);
  main.import("chart", "chart1", child4);
  const child5 = runtime.module(define2).derive([{name: "data_arrests", alias: "data"},"color","margin"], main);
  main.import("chart", "chart2", child5);
  const child6 = runtime.module(define2).derive([{name: "data_stop_types", alias: "data"},"color","margin"], main);
  main.import("chart", "chart3", child6);
  main.variable(observer("data_arrests")).define("data_arrests", ["d3","FileAttachment"], async function(d3,FileAttachment){return(
d3.csvParse(await FileAttachment("Berkeley_PD - Sheet2 (2).csv").text(), (d, i, columns) => (d3.autoType(d), d.total = d3.sum(columns, c => d[c]), d))
)});
  main.variable(observer("data_here")).define("data_here", ["d3","FileAttachment"], async function(d3,FileAttachment){return(
d3.csvParse(await FileAttachment("stack_graph_final.csv").text(), (d, i, columns) => (d3.autoType(d), d.total = d3.sum(columns, c => d[c]), d))
)});
  main.variable(observer("data_stop_types")).define("data_stop_types", ["d3","FileAttachment"], async function(d3,FileAttachment){return(
d3.csvParse(await FileAttachment("Berkeley_PD - Sheet5.csv").text(), (d, i, columns) => (d3.autoType(d), d.total = d3.sum(columns, c => d[c]), d))
)});
  main.variable(observer("data_pop")).define("data_pop", ["d3","FileAttachment"], async function(d3,FileAttachment){return(
d3.csvParse(await FileAttachment("Berkeley_PD - Sheet6.csv").text(), d3.autoType)
)});
  main.variable(observer("data_men_arrests")).define("data_men_arrests", ["d3","FileAttachment"], async function(d3,FileAttachment){return(
d3.csvParse(await FileAttachment("Berkeley_PD - sheet7.csv").text(), d3.autoType)
)});
  main.variable(observer("data_car_searches")).define("data_car_searches", ["d3","FileAttachment"], async function(d3,FileAttachment){return(
d3.csvParse(await FileAttachment("Berkeley_PD - sheet8.csv").text(), d3.autoType)
)});
  main.variable(observer("d3")).define("d3", ["require"], function(require){return(
require("d3@5")
)});
  main.variable(observer("margin")).define("margin", function(){return(
{top: 10, right: 200, bottom: 20, left: 100}
)});
  main.variable(observer("color")).define("color", ["d3"], function(d3){return(
d3.scaleOrdinal([`#CC6677`, `#88ccee`, `#E3D4D2`])
)});
  main.variable(observer("width")).define("width", function(){return(
200
)});
  main.variable(observer("height")).define("height", function(){return(
300
)});
  const child7 = runtime.module(define3);
  main.import("legend", child7);
  return main;
}
