var Topic = new Map();
var mapTopicTitle = new Map();
var mapSectorTitle = new Map();
var mapPestleTitle = new Map();
var mapCountryTitle = new Map();
var mapRegionTitle = new Map();

let width = 800;
let height = 600;

var chartConfig = {
  target: "chart",
  data_url: "jsondata.json",
};
var opts = {
  lines: 9, // The number of lines to draw
  length: 20, // The length of each line
  width: 6, // The line thickness
  radius: 14, // The radius of the inner circle
  color: "#EE3124", // #rgb or #rrggbb or array of colors
  speed: 1.9, // Rounds per second
  trail: 40, // Afterglow percentage
  className: "spinner", // The CSS class to assign to the spinner
};

var target = document.getElementById(chartConfig.target);

function init() {
  var spinner = new Spinner(opts).spin(target);
  console.log(spinner);

  setTimeout(function () {
    d3.json(chartConfig.data_url).then(function (data, error) {
      spinner.stop();
      let body = document.querySelector("body");
      let body_nested = document.getElementById("chart");

      console.log(element.childNodes[3]);
      body.removeChild(body_nested);

      console.log(data);

      chart(data);
    });
  }, 3000);
}
var element = document.querySelector("body");
console.log(element.childNodes[3]);
element.removeChild(element.childNodes[0]);

init();

function chart(data) {
  for (let i = 0; i < data.length; i++) {
    if (Topic.has(data[i].topic)) {
      data[i].country && Topic.get(data[i].topic).Country.add(data[i].country);
      data[i].region && Topic.get(data[i].topic).Region.add(data[i].region);
      data[i].pestle && Topic.get(data[i].topic).Pestle.add(data[i].pestle);

      data[i].sector && Topic.get(data[i].topic).Sector.add(data[i].sector);
      data[i].title && Topic.get(data[i].topic).Title.add(data[i].title);
    } else {
      let value = {
        Country: new Set(),
        Region: new Set(),
        Pestle: new Set(),
        Sector: new Set(),
        Title: new Set(),
      };
      data[i].country && value.Country.add(data[i].country);
      data[i].region && value.Region.add(data[i].region);
      data[i].pestle && value.Pestle.add(data[i].pestle);

      data[i].sector && value.Sector.add(data[i].sector);
      data[i].title && value.Title.add(data[i].title);

      Topic.set(data[i].topic, value);
      mapTopicTitle.set(data[i].topic, { title: data[i].title });
    }
  }

  for (let i = 0; i < data.length; i++) {
    mapSectorTitle.has(data[i].sector) ||
      mapSectorTitle.set(data[i].sector, { title: data[i].title });
  }
  for (let i = 0; i < data.length; i++) {
    mapPestleTitle.has(data[i].pestle) ||
      mapPestleTitle.set(data[i].pestle, { title: data[i].title });
  }

  for (let i = 0; i < data.length; i++) {
    mapCountryTitle.has(data[i].country) ||
      mapCountryTitle.set(data[i].country, { title: data[i].title });
  }
  for (let i = 0; i < data.length; i++) {
    mapRegionTitle.has(data[i].region) ||
      mapRegionTitle.set(data[i].region, { title: data[i].title });
  }
  defaultTopicList(Topic);
  fillRestList();

  let obj = [];
  mapTopicTitle.forEach((value, key) => {
    obj.push({
      text: key,
      title: value.title,
      value: Math.random() * 100 + 100,
      "font-size": Math.floor(Math.random() * 20) + 5,
    });
  });

  trigger(obj);
}

function defaultTopicList(item) {
  //var x = document.getElementById("topic").value;
  for (let [key, value] of item) {
    let list = document.createElement("option");
    document.getElementById("topic").appendChild(list);
    list.innerText = key;
  }
}

function trigger(obj) {
  d3.layout
    .cloud()
    .size([600, 600])
    .words(obj)
    .padding(5)
    .rotate(function () {
      return ~~(Math.random() * 0) * 90;
    })
    .on("end", draw) //call draw
    .start();
}

function draw(words) {
  let tooltip = d3
    .select("body")
    .append("div")
    .style("position", "absolute")
    .style("z-index", "10")
    .style("visibility", "hidden")
    .style("background", "#000")
    .text("a simple tooltip");

  d3.select("#demo1")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(400 ,250)")
    .selectAll("text")
    .data(words)
    .enter()
    .append("text")
    .text((d) => d.text)
    .style("font-size", (d) => d["font-size"] + "px")
    // .style("font-family", (d) => d.font)
    .style("font-family", "courier")
    .style("fill", function () {
      return "hsl(" + Math.random() * 360 + ",100%,50%)";
    })
    .attr("text-anchor", "start")
    .attr(
      "transform",
      (d) => "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")"
    )
    .text(function (d) {
      return d.text;
    });
  //"#DF8A49"
  d3.select("body")
    .select("svg")
    .selectAll("text")
    .on("mouseover", function (d) {
      d3.select("body").select("p").text(d.title);
      tooltip.text(d.text);
      return tooltip
        .html("<b>" + d.text + "</b>")
        .style("visibility", "visible")
        .style("background", "powderblue")
        .classed("dotted", true);
    })
    .on("mousemove", function () {
      return tooltip
        .style("top", d3.event.pageY - 10 + "px")
        .style("left", d3.event.pageX + 10 + "px");
    })
    .on("mouseout", function () {
      return tooltip.style("visibility", "hidden");
    });
}
