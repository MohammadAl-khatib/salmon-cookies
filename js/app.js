`use strict`;

let openingHours = ['6:00 am', '7:00 am', '8:00 am', '9:00 am', '10:00 am', '11:00 am', '12:00 pm', '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm', '5:00 pm', '6:00 pm', '7:00 pm']
let branchArray = [];
let table = document.getElementById("table");

function getRandom(max, min, avg) {

    return Math.floor(Math.random() * (max - min + 1) + min) * Math.round(avg);
}

function CreateBranch(branchName, minCustomers, maxCustomers, avgCookies) {
    this.branchName = branchName;
    this.maxCustomers = maxCustomers;
    this.minCustomers = minCustomers;
    this.avgCookies = avgCookies;
    branchArray.push(this);
    this.avgCookiesPerHourArray = [];
    this.getCookisPerHour();
    this.render();
}

CreateBranch.prototype.getCookisPerHour = function () {

    for (let i = 0; i < openingHours.length; i++) {
        this.avgCookiesPerHourArray[i] = getRandom(this.maxCustomers, this.minCustomers, this.avgCookies);
    }
}

CreateBranch.prototype.render = function () {

    let trElement = document.createElement('tr');
    table.appendChild(trElement);

    let tdElement = document.createElement('td');
    trElement.appendChild(tdElement);
    tdElement.textContent = this.branchName;

    let total = 0;

    for (let i = 0; i < this.avgCookiesPerHourArray.length; i++) {
        let tdElement = document.createElement('td');
        trElement.appendChild(tdElement);
        tdElement.textContent = this.avgCookiesPerHourArray[i];
        total += Number(tdElement.textContent);
    }

    let td2Element = document.createElement('td');
    trElement.appendChild(td2Element);
    td2Element.textContent = total;
}

function tableHeader() {

    let trElement = document.createElement('tr');
    table.appendChild(trElement);

    let thElement = document.createElement('th');
    trElement.appendChild(thElement);
    thElement.textContent = 'Branch Name';

    for (let i = 0; i < openingHours.length; i++) {
        let thElement = document.createElement('th');
        trElement.appendChild(thElement);
        thElement.textContent = openingHours[i];
    }

    let th2Element = document.createElement('th');
    trElement.appendChild(th2Element);
    th2Element.textContent = 'Total';
}

function tableFooter() {

    let trElement = document.createElement('tr');
    table.appendChild(trElement);

    let thElement = document.createElement('th');
    trElement.appendChild(thElement);
    thElement.textContent = 'Total';

    let sumTotals = 0;

    for (let i = 0; i < openingHours.length; i++) {

        let thElement = document.createElement('th');
        trElement.appendChild(thElement);

        for (let j = 0; j < branchArray.length; j++) {
            thElement.textContent = Number(thElement.textContent) + branchArray[j].avgCookiesPerHourArray[i];
        }

        sumTotals += Number(thElement.textContent);
    }

    let th2Element = document.createElement('th');
    trElement.appendChild(th2Element);
    th2Element.textContent = sumTotals;
}

tableHeader();

let seattle = new CreateBranch('Seattle', 23, 65, 6.3);
let tokyo = new CreateBranch('Tokyo', 3, 24, 3.2);
let dubai = new CreateBranch('Dubai', 11, 38, 3.7);
let paris = new CreateBranch('Paris', 20, 38, 2.3);
let lima = new CreateBranch('Lima', 2, 16, 4.6);

tableFooter();


