function getTopicList(item) {
  let obj = [];
  mapTopicTitle.forEach((value, key) => {
    obj.push({
      text: key,
      title: value.title,
      value: Math.random() * 100 + 100,
      "font-size": Math.floor(Math.random() * 20) + 5,
    });
  });
  console.log("topic", mapTopicTitle);

  d3.select("svg").html("");

  trigger(obj);
}

function getSectorList(item) {
  let map = Topic.get(item);
  let sector = map.Sector;
  let obj = [];

  sector.forEach((value, key) => {
    obj.push({
      text: value,
      title: mapSectorTitle.get(value).title,
      value: Math.random() * 100 + 100,
      "font-size": Math.floor(Math.random() * 20) + 5,
    });
  });
  console.log(obj[0].text, obj[0].title);
  d3.select("svg").html("");
  d3.select("p").html("");
  trigger(obj);
}

function getPestleList(item) {
  let map = Topic.get(item);
  let pestle = map.Pestle;
  let obj = [];

  pestle.forEach((value, key) => {
    obj.push({
      text: value,
      title: mapPestleTitle.get(value).title,
      value: Math.random() * 100 + 100,
      "font-size": Math.floor(Math.random() * 20) + 5,
    });
  });
  console.log(obj[0].text, obj[0].title);
  d3.select("svg").html("");
  d3.select("p").html("");
  trigger(obj);
}

function getCountryList(item) {
  let map = Topic.get(item);
  let country = map.Country;
  let obj = [];

  country.forEach((value, key) => {
    obj.push({
      text: value,
      title: mapCountryTitle.get(value).title,
      value: Math.random() * 100 + 100,
      "font-size": Math.floor(Math.random() * 20) + 5,
    });
  });
  console.log(obj[0].text, obj[0].title);
  d3.select("svg").html("");
  d3.select("p").html("");
  trigger(obj);
}

function getRegionList(item) {
  let map = Topic.get(item);
  let region = map.Region;
  let obj = [];

  region.forEach((value, key) => {
    obj.push({
      text: value,
      title: mapRegionTitle.get(value).title,
      value: Math.random() * 100 + 100,
      "font-size": Math.floor(Math.random() * 20) + 5,
    });
  });
  console.log(obj[0].text, obj[0].title);
  d3.select("svg").html("");
  d3.select("p").html("");
  trigger(obj);
}
