var topicValue;

function fillRestList() {
  topicValue = document.getElementById("topic").value;
  sectorValue = document.getElementById("sector").value;
  pestleValue = document.getElementById("pestle").value;
  countryValue = document.getElementById("country").value;
  regionValue = document.getElementById("region").value;

  if (Topic.get(topicValue)) {
    var items = Topic.get(topicValue);
    console.log(items);
    let country = items.Country;
    let pestle = items.Pestle;
    let region = items.Region;
    let sector = items.Sector;

    sectorList(sector);
    pestleList(pestle);
    countryList(country);
    regionList(region);
  }
}

function sectorList(item) {
  const myNode = document.getElementById("sector");
  while (myNode.lastElementChild) {
    myNode.removeChild(myNode.lastElementChild);
  }
  for (let value of item) {
    let list = document.createElement("option");
    document.getElementById("sector").appendChild(list);
    list.innerText = value;
  }
}

function pestleList(item) {
  const myNode = document.getElementById("pestle");
  while (myNode.lastElementChild) {
    myNode.removeChild(myNode.lastElementChild);
  }
  for (let value of item) {
    let list = document.createElement("option");
    document.getElementById("pestle").appendChild(list);
    list.innerText = value;
  }
}

function countryList(item) {
  const myNode = document.getElementById("country");
  while (myNode.lastElementChild) {
    myNode.removeChild(myNode.lastElementChild);
  }
  for (let value of item) {
    let list = document.createElement("option");
    document.getElementById("country").appendChild(list);
    list.innerText = value;
  }
}

function regionList(item) {
  const myNode = document.getElementById("region");
  while (myNode.lastElementChild) {
    myNode.removeChild(myNode.lastElementChild);
  }
  for (let value of item) {
    let list = document.createElement("option");
    document.getElementById("region").appendChild(list);
    list.innerText = value;
  }
}
