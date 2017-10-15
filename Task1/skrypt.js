function calcSum (price, amount) {
    return parseFloat(price)*amount; 
}

var Crisps = {"price":25, "weight":0.12,}
var Chocolate = {"price":20, "weight":0.1,}
var Lemonade = {"price":15, "weight":2,}
var Pasta = {"price":20, "weight":1,}
var Rice = {"price":30, "weight":1,}
var Salt = {"price":5, "weight":1,}
var Tomato = {"price":25, "weight":1,}
var Potato = {"price":5, "weight":1,}
var Carrot = {"price":5, "weight":1,}
var Onion = {"price":5, "weight":1,}
var Tea = {"price":10, "weight":0.1,}
var Beer = {"price":15, "weight":0.5,}
var Coffee = {"price":40, "weight":0.2,}
var Cake = {"price":80, "weight":1,}
var Sugar = {"price":10, "weight":1,}

var table = document.getElementById("market");
var row = document.getElementsByClassName("item");
var addNew = document.querySelector("div.buttons input[name=add]");

var sum = document.querySelector("td[class=sum]");
var amount = document.getElementsByClassName("amount");
var price = document.getElementsByClassName("price");
var weight = document.getElementsByClassName("weight");

var bill = function (row) {
    var sameRow = row.parentNode.parentNode; 
    var select = sameRow.querySelector("select[name=Items]");
    var selectedIndex = select.selectedIndex;
    var selectedItem = select[selectedIndex].value;
    var selectedPrice = sameRow.querySelector(".price").innerText;
    var selectedAmount = sameRow.querySelector(".amount").value;
    var selectedSum = sameRow.querySelector(".sum").innerText;
    sameRow.querySelector(".hidden").innerHTML = selectedItem + "  " + selectedPrice + " * " + selectedAmount + " = " + selectedSum + " grn";
};
amount[0].onchange = function () {
    sum.innerText = calcSum (price[0].innerText,amount[0].value);
    bill (this);
};
bill(amount[0]);
var currentItem = document.querySelector("select[name=Items]");
currentItem.onchange = function () {
    var selected = currentItem.options[currentItem.selectedIndex].value; 
    weight[0].innerText = eval(selected).weight;
    price[0].innerText = eval(selected).price;
    sum.innerText = calcSum (price[0].innerText,amount[0].value);
    bill (this);      
};

addNew.onclick = function () {
    var newRow = row["0"].cloneNode(true);
    var amount = newRow.querySelector("td input[class=amount]");
    amount.value = 1;
    var price = newRow.querySelector("td[class=price]");
    price.innerText = Beer.price;
    var weight = newRow.querySelector("td[class=weight]");
    weight.innerText = Beer.weight;
        
    var currentItem = newRow.querySelector("select[name=Items]");
    currentItem.onchange = function () {
        var selected = currentItem.options[currentItem.selectedIndex].value; 
        weight.innerText = eval(selected).weight;
        price.innerText = eval(selected).price;
        sum.innerText = calcSum (price.innerText,amount.value);
        bill (this);      
    };

    var sum = newRow.querySelector("td[class=sum]");
    sum.innerText = calcSum (price.innerText,amount.value);
    amount.onchange = function () {
        sum.innerText = calcSum (price.innerText,amount.value);
        bill (this);
    }
    table.appendChild(newRow);
    bill (amount);
};

var showBill = function (sameButton) {
    var sameBill = sameButton.parentNode.parentNode;
    alert(sameBill.querySelector(".hidden").innerHTML);
};

var billAll = function () {
    var billMass = document.querySelectorAll(".hidden");
    var sumMass = document.querySelectorAll(".sum");
    var total = 0;
    var allOrder = "";
    for (var i=0; i<billMass.length; i++) {
        allOrder += billMass[i].innerHTML + "</br>";
        total += parseInt(sumMass[i].innerHTML);
    }
    document.querySelector(".bill").innerHTML = allOrder + "</br><p>Total = " + total + " grn</p>";
}