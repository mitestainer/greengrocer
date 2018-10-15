var productList = [
    {
        productName: 'Apple',
        pic: 'images/apple.png',
        onSeason: 2,
        outOfSeason: 1,
        regularPrice: 3.79,
        priceOnSeason: 1.59,
        priceOutOfSeason: 5.99,
        unit: 'kg'
    }, {
        productName: 'Honey',
        pic: 'images/honey.png',
        onSeason: undefined,
        outOfSeason: undefined,
        regularPrice: undefined,
        priceOnSeason: undefined,
        priceOutOfSeason: undefined,
        unit: 'unit'
    }, {
        productName: 'Grapes', // aka Wild Grapes
        pic: 'images/wgrape.png',
        onSeason: undefined,
        outOfSeason: undefined,
        regularPrice: 3.99,
        priceOnSeason: undefined,
        priceOutOfSeason: 5.99,
        unit: 'unit'
    }, {
        productName: 'Mushroom',
        pic: 'images/mushroom.png',
        onSeason: undefined,
        outOfSeason: undefined,
        regularPrice: undefined,
        priceOnSeason: undefined,
        priceOutOfSeason: undefined,
        unit: 'tray'
    }, {
        productName: 'Turnip',
        pic: 'images/turnip.png',
        onSeason: undefined,
        outOfSeason: undefined,
        regularPrice: 2.19,
        priceOnSeason: undefined,
        priceOutOfSeason: undefined,
        unit: 'unit'
    }, {
        productName: 'Potato',
        pic: 'images/potato.png',
        onSeason: undefined,
        outOfSeason: undefined,
        regularPrice: 0.95,
        priceOnSeason: 0.79,
        priceOutOfSeason: undefined,
        unit: 'kg'
    }, {
        productName: 'Cucumber',
        pic: 'images/cucumber.png',
        onSeason: undefined,
        outOfSeason: 3,
        regularPrice: undefined,
        priceOnSeason: undefined,
        priceOutOfSeason: 4.49,
        unit: 'kg'
    }, {
        productName: 'Cabbage',
        pic: 'images/cabbage.png',
        onSeason: undefined,
        outOfSeason: undefined,
        regularPrice: 0.69,
        priceOnSeason: undefined,
        priceOutOfSeason: undefined,
        unit: 'kg'
    }, {
        productName: 'Strawberry',
        pic: 'images/strawberry.png',
        onSeason: undefined,
        outOfSeason: undefined,
        regularPrice: 2.99,
        priceOnSeason: 1.89,
        priceOutOfSeason: undefined,
        unit: 'tray'
    }, {
        productName: 'Onion',
        pic: 'images/onion.png',
        onSeason: undefined,
        outOfSeason: undefined,
        regularPrice: 0.95,
        priceOnSeason: 0.69,
        priceOutOfSeason: undefined,
        unit: 'kg'
    }, {
        productName: 'Tomato',
        pic: 'images/tomato.png',
        onSeason: undefined,
        outOfSeason: undefined,
        regularPrice: 1.59,
        priceOnSeason: undefined,
        priceOutOfSeason: undefined,
        unit: 'kg'
    }, {
        productName: 'Corn',
        pic: 'images/corn.png',
        onSeason: undefined,
        outOfSeason: undefined,
        regularPrice: undefined,
        priceOnSeason: undefined,
        priceOutOfSeason: 2.79,
        unit: 'tray'
    }, {
        productName: 'Pineapple',
        pic: 'images/pineapple.png',
        onSeason: undefined,
        outOfSeason: undefined,
        regularPrice: 1.95,
        priceOnSeason: undefined,
        priceOutOfSeason: 3.95,
        unit: 'unit'
    }, {
        productName: 'Pumpkin',
        pic: 'images/pumpkin.png',
        onSeason: undefined,
        outOfSeason: undefined,
        regularPrice: 1.99,
        priceOnSeason: 0.99,
        priceOutOfSeason: undefined,
        unit: 'kg'
    }, {
        productName: 'Carrot',
        pic: 'images/carrot.png',
        onSeason: undefined,
        outOfSeason: undefined,
        regularPrice: 1.29,
        priceOnSeason: undefined,
        priceOutOfSeason: undefined,
        unit: 'kg'
    }, {
        productName: 'Eggplant',
        pic: 'images/eggplant.png',
        onSeason: undefined,
        outOfSeason: undefined,
        regularPrice: 1.99,
        priceOnSeason: undefined,
        priceOutOfSeason: undefined,
        unit: 'kg'
    }, {
        productName: 'Sweet Potato',
        pic: 'images/spotato.png',
        onSeason: undefined,
        outOfSeason: undefined,
        regularPrice: undefined,
        priceOnSeason: undefined,
        priceOutOfSeason: 3.95,
        unit: 'kg'
    }, {
        productName: 'Green Pepper',
        pic: 'images/gpepper.png',
        onSeason: undefined,
        outOfSeason: undefined,
        regularPrice: undefined,
        priceOnSeason: undefined,
        priceOutOfSeason: undefined,
        unit: 'kg'
    }, {
        productName: 'Spinach',
        pic: 'images/spinach.png',
        onSeason: undefined,
        outOfSeason: undefined,
        regularPrice: undefined,
        priceOnSeason: undefined,
        priceOutOfSeason: undefined,
        unit: 'unit'
    }
];

var cashierNames = ['Azeem Lawson', 'Kamran Mora', 'Wendy Grant', 'Jan Dejesus', 'Hana Macias', 'Kerry Medrano', 'Avery Weir', 'Missy Reed', 'Cyrus Lott', 'Lee Hough'];

// Left side!

var left = document.getElementById('left');

for (var x = 0; x < (productList.length + 1); x++) {
    var createLabel = document.createElement('div');
    createLabel.className = 'label';
    left.appendChild(createLabel);
}

var label = document.querySelectorAll('.label');

for (var x = 0; x < (label.length - 1); x++) {
    // Setting id
    label[x].id = x;
    // Setting checkbox
    var cbox = document.createElement('input');
    cbox.setAttribute('type', 'checkbox');
    cbox.className = 'testing';
    cbox.id = x;
    label[x].appendChild(cbox);
    // Setting product name
    var pHolder = document.createElement('div');
    pHolder.className = 'product-holder';
    var pName = document.createElement('p');
    pName.textContent = productList[x].productName;
    pName.className = 'margin-fix';
    pHolder.appendChild(pName);
    //label[x].appendChild(pName);
    // Setting image
    var productImage = document.createElement('img');
    productImage.src = productList[x].pic;
    productImage.alt = productList[x].productName;
    productImage.className = 'fix';
    pHolder.appendChild(productImage);
    label[x].appendChild(pHolder);
    //label[x].appendChild(productImage);
    // Setting price
    var productPrice = document.createElement('p');
    productPrice.textContent = 'Price: ' + productList[x].regularPrice + '/' + productList[x].unit;
    productPrice.className = 'price-tag';
    label[x].appendChild(productPrice);
    // Setting Input box 
    var inputScale = document.createElement('p');
    inputScale.textContent = ' ';
    inputScale.className = 'scale margin-fix';
    label[x].appendChild(inputScale);
};

var checkout = document.createElement('p');
checkout.innerHTML = '<i class="fas fa-shopping-cart"></i> Checkout';
label[(label.length - 1)].id = 'checkout';
label[(label.length - 1)].appendChild(checkout);

var removeOptions = document.getElementById('removeOptions');

left.addEventListener('click', function (e) {
    if (e.target.id != 'checkout') {
        var a = e.target.children[0];
        if (a.checked === false) {
            a.checked = true;
            removeOptions.removeAttribute('disabled');
        } else {
            a.checked = true;
            removeOptions.removeAttribute('disabled');
        };

        var idSet = e.target.id;
        label[idSet].style.border = '2px dashed #789618';
        // Create container
        var above = document.createElement('div');
        above.id = 'above';
        var itemContainer = document.createElement('div');
        itemContainer.className = 'item-container';
        //
        var itemName = document.createElement('p');
        itemName.textContent = productList[idSet].productName;
        itemContainer.appendChild(itemName);
        //
        var itemPic = document.createElement('img');
        itemPic.src = productList[idSet].pic;
        itemPic.alt = itemName.textContent;
        itemContainer.appendChild(itemPic);
        //
        var itemPrice = document.createElement('p');
        itemPrice.textContent = label[idSet].children[2].textContent;
        itemContainer.appendChild(itemPrice);
        //
        var itemSeason = document.createElement('p');
        var setId = parseInt(e.target.id);
        for (var x = 0; x < toggleSeason.length; x++) {
            if (toggleSeason[x].checked) {
                if (productList[setId].onSeason == toggleSeason[x].id) {
                    itemSeason.textContent = 'On season!';
                } else if (productList[setId].outOfSeason == toggleSeason[x].id) {
                    itemSeason.textContent = 'Out of season!';
                } else {
                    itemSeason.textContent = ' ';
                }
            }
        }
        itemContainer.appendChild(itemSeason);
        //
        var itemScale = document.createElement('div');
        itemScale.id = 'item-scale';
        var itemMinus = document.createElement('span');
        itemMinus.innerHTML = '<i class="fas fa-minus-square"></i>';
        itemScale.appendChild(itemMinus);
        var itemScaleSet = document.createElement('input');
        itemScaleSet.type = 'number';
        itemScaleSet.step = '0.250';
        itemScale.appendChild(itemScaleSet);
        var itemPlus = document.createElement('span');
        itemPlus.innerHTML = '<i class="fas fa-plus-square"></i>';
        itemScale.appendChild(itemPlus);
        itemContainer.appendChild(itemScale);
        // Logic
        itemScaleSet.valueAsNumber = parseFloat(scale[setId].textContent);
        var itemScaleNewValue = 0;
        itemMinus.addEventListener('click', function () {
            if (productList[idSet].unit === 'kg') {
                if (itemScaleSet.value <= 0) {
                    itemScaleSet.value = '';
                    itemScaleNewValue = 0;
                } else if (itemScaleSet.value == parseFloat(scale[setId].textContent)) {
                    itemScaleNewValue = itemScaleSet.valueAsNumber;
                    itemScaleNewValue = (itemScaleNewValue - 0.250);
                    itemScaleSet.value = itemScaleNewValue;
                } else {
                    itemScaleNewValue = (itemScaleNewValue - 0.250);
                    itemScaleSet.value = itemScaleNewValue;
                    if (itemScaleNewValue === 0) {
                        itemScaleSet.value = '';
                    }
                }
            } else {
                if (itemScaleSet.value <= 0) {
                    itemScaleSet.value = '';
                    itemScaleNewValue = 0;
                } else if (itemScaleSet.value == parseFloat(scale[setId].textContent)) {
                    itemScaleNewValue = itemScaleSet.valueAsNumber;
                    itemScaleNewValue--;
                    itemScaleSet.value = itemScaleNewValue;
                } else {
                    itemScaleNewValue--;
                    itemScaleSet.value = itemScaleNewValue;
                    if (itemScaleNewValue === 0) {
                        itemScaleSet.value = '';
                    }
                }
            }
        });
        itemPlus.addEventListener('click', function () {
            if (productList[idSet].unit === 'kg') {
                if (itemScaleSet.value === '') {
                    if (itemScaleNewValue === 0) {
                        itemScaleNewValue = (itemScaleNewValue + 0.250);
                        itemScaleSet.value = itemScaleNewValue;
                    } else {
                        itemScaleNewValue = 0;
                        itemScaleSet.value = itemScaleNewValue;
                    }
                } else {
                    itemScaleNewValue = itemScaleSet.valueAsNumber;
                    itemScaleNewValue = (itemScaleNewValue + 0.250);
                    itemScaleSet.value = itemScaleNewValue;
                }
            } else {
                if (itemScaleSet.value === '') {
                    if (itemScaleNewValue === 0) {
                        itemScaleNewValue++;
                        itemScaleSet.value = itemScaleNewValue;
                    } else {
                        itemScaleNewValue = 0;
                        itemScaleSet.value = itemScaleNewValue;
                    }
                } else {
                    itemScaleNewValue = itemScaleSet.valueAsNumber;
                    itemScaleNewValue++;
                    itemScaleSet.value = itemScaleNewValue;
                }
            }
        });
        //
        var choose = document.createElement('div');
        choose.id = 'choose-container';
        var chooseOK = document.createElement('div');
        chooseOK.id = 'choose-ok';
        chooseOK.className = 'choose-box';
        chooseOK.style.backgroundColor = 'green';
        chooseOK.textContent = 'OK';
        var chooseCancel = document.createElement('div');
        chooseCancel.id = 'choose-cancel';
        chooseCancel.className = 'choose-box';
        chooseCancel.style.backgroundColor = 'red';
        if (scale[setId].textContent === ' ') {
            chooseCancel.textContent = 'Cancel';
        } else {
            chooseCancel.textContent = 'Remove Value';
        }
        choose.appendChild(chooseOK);
        choose.appendChild(chooseCancel);
        itemContainer.appendChild(choose);
        //
        above.appendChild(itemContainer);
        document.body.appendChild(above);
        // Logic
        document.getElementById('choose-ok').addEventListener('click', function () {
            if (itemScaleSet.value == '') {
                alert('set a value');
            } else {
                scale[setId].textContent = itemScaleSet.value;
                document.body.removeChild(document.getElementById('above'));
            }
        });
        document.getElementById('choose-cancel').addEventListener('click', function () {
            label[idSet].style.border = '2px solid #b4d455';
            document.body.removeChild(document.getElementById('above'));
            testing[setId].checked = false;
            if (itemScaleSet.value === '') {
                scale[setId].textContent = ' ';
            } else {
                scale[setId].textContent = ' ';
            }
            removeOptions.setAttribute('disabled', 'disabled');
        });
    }
});

var testing = document.querySelectorAll('.testing');
var scale = document.querySelectorAll('.scale');
var priceTag = document.querySelectorAll('.price-tag');
var selectAll = document.getElementById('select-all');
var setValueAll = document.getElementById('setValueAll');
var inputValueAll = document.getElementById('input-value-all');

// Toggle all boxes

var toggleAll = document.getElementById('toggleAll');
toggleAll.addEventListener('click', function (e) {
    if (e.target.checked) {
        toggleAll.parentNode.className = 'enable-header season-wrapper-a';
        selectAll.textContent = 'Deselect all';
        document.getElementById('setValueAlla').className = 'header-section';
        document.getElementById('setValueAlla').style.border = '2px solid #c9d1d8';
        for (var x = 0; x < testing.length; x++) {
            testing[x].checked = true;
            label[x].style.border = '2px dashed #789618';
            scale[x].removeAttribute('disabled');
        }
        setValueAll.removeAttribute('disabled');
    } else {
        toggleAll.parentNode.className = 'enable-header';
        document.getElementById('setValueAlla').removeAttribute('class');
        document.getElementById('setValueAlla').style.border = '2px solid #e3e8ed';
        selectAll.textContent = 'Select all';
        for (var x = 0; x < testing.length; x++) {
            testing[x].checked = false;
            label[x].style.border = '2px solid #b4d455';
            scale[x].setAttribute('disabled', 'disabled');
            scale[x].textContent = "";
        }
        setValueAll.setAttribute('disabled', 'disabled');
        setValueAll.checked = false;
        inputValueAll.setAttribute('disabled', 'disabled');
        inputValueAll.value = '';
    }
});

// Set same value to all

setValueAll.addEventListener('change', function (e) {
    if (e.target.checked) {
        inputValueAll.removeAttribute('disabled');
    } else {
        inputValueAll.setAttribute('disabled', 'disabled');
        inputValueAll.value = '';
    }
    inputValueAll.addEventListener('change', function (e) {
        var newValue = e.target.valueAsNumber;
        for (var x = 0; x < scale.length; x++) {
            if (testing[x].checked) {
                scale[x].textContent = newValue;
            } else {
                scale[x].textContent = '';
            }
        }
    })
});



// Enable seasons

var enableSeason = document.getElementById('enable-season');
var toggleSeason = document.querySelectorAll('.toggleSeason');
var seasonSpan = document.getElementById('season-span');
var seasonWrapper = document.querySelectorAll('.season-wrapper');
var seasonBox = document.getElementById('season-box');

enableSeason.addEventListener('change', function (e) {
    for (var x = 0; x < toggleSeason.length; x++) {
        if (e.target.checked) {
            enableSeason.parentNode.className = 'enable-header season-wrapper-a';
            seasonSpan.textContent = ' Disable Seasons';
            toggleSeason[x].removeAttribute('disabled');
            seasonBox.className = 'header-section';
            seasonBox.style.border = '2px solid #c9d1d8';
            seasonWrapper[x].className = 'season-wrapper season-wrapper-a';
            seasonWrapper[x].lastElementChild.style.color = '#7994b0';
        } else {
            enableSeason.parentNode.className = 'enable-header';
            seasonSpan.textContent = ' Enable Seasons';
            toggleSeason[x].setAttribute('disabled', 'disabled');
            toggleSeason[x].checked = false;
            seasonBox.removeAttribute('class');
            seasonBox.style.border = '2px solid #e3e8ed';
            seasonWrapper[x].className = 'season-wrapper';
            seasonWrapper[x].lastElementChild.style.color = '#c9d1d8';
        }
    }
})

// Setting Seasons

document.getElementById('season-box').addEventListener('click', function (e) {
    if (e.target.className === 'toggleSeason') {
        for (var x = 0; x < toggleSeason.length; x++) {
            if (toggleSeason[x].checked) {
                for (var y = 0; y < productList.length; y++) {
                    if (productList[y].onSeason === parseInt(toggleSeason[x].id)) {
                        label[y].style.backgroundColor = 'blue';
                        priceTag[y].textContent = 'Price: ' + productList[y].priceOnSeason + '/' + productList[y].unit;
                    } else if (productList[y].outOfSeason === parseInt(toggleSeason[x].id)) {
                        label[y].style.backgroundColor = 'red';
                        priceTag[y].textContent = 'Price: ' + productList[y].priceOutOfSeason + '/' + productList[y].unit;
                    } else {
                        label[y].style.backgroundColor = '#b4d455';
                        priceTag[y].textContent = 'Price: ' + productList[y].regularPrice + '/' + productList[y].unit;
                    }
                }
            }
        }
    }
});

// Removing seasons

enableSeason.addEventListener('change', function (e) {
    if (e.target.checked === false) {
        for (var x = 0; x < productList.length; x++) {
            label[x].style.backgroundColor = '#b4d455';
            priceTag[x].textContent = 'Price: ' + productList[x].regularPrice + '/' + productList[x].unit;
        }
    }
});

// Right side!

var checkoutFoo = document.getElementById('checkout');
checkoutFoo.addEventListener('click', function () {
    var sum = [];

    // Calculate the total

    for (var x = 0; x < scale.length; x++) {
        if (parseFloat(scale[x].textContent) > 0) {
            var stringPrice = priceTag[x].textContent;
            var re = /\d\.[0-9]{2}/g
            var finalPrice = parseFloat(stringPrice.match(re));
            sum.push(parseFloat(parseFloat(scale[x].textContent).toFixed(2)) * finalPrice);
        }
    }
    if (sum.length === 0) {
        alert('select any item first');
    } else {
        function sumValue(arr) {
            var total = 0;
            for (var x = 0; x < arr.length; x++) {
                total += arr[x];
            }
            return total;
        }
    }
    var bill = sumValue(sum).toFixed(2);

    var receipt = document.getElementById('receipt');
    receipt.innerHTML = '';
    receipt.style.display = 'flex';

    // Functions to add lines on the receipt

    function addP(input, className) {
        var p = document.createElement('p');
        p.className = className;
        p.textContent = input;
        receipt.appendChild(p);
    }

    function addItem(first, second) {
        var p = document.createElement('p');
        p.className = 'receiptItem';
        var sp1 = document.createElement('span');
        var sp2 = document.createElement('span');
        sp1.textContent = first;
        sp2.textContent = second;
        p.appendChild(sp1);
        p.appendChild(sp2);
        receipt.appendChild(p);
    }

    function drawLine(input) {
        debugger;
        var p = document.createElement('p');
        p.style.textAlign = 'center';
        p.style.margin = '0';
        receipt.appendChild(p);
        var line = document.createElement('span');
        line.style.display = 'inline-block';
        p.appendChild(line);
        var x;
        do {
            x = line.textContent;
            line.textContent += input;
        } while (line.offsetWidth < line.parentNode.offsetWidth);
        line.textContent = x;
    }

    // Receipt Lines

    addP('Cash receipt'.toUpperCase(), 'title-line'); // Title
    drawLine('*');

    // Date
    var dateSetUp = new Date();
    var dateDay;
    if (dateSetUp.getDate() < 10) {
        dateDay = '0' + dateSetUp.getDate();
    } else {
        dateDay = dateSetUp.getDate();
    };
    var dateMonth = dateSetUp.getMonth() + 1;
    var dateYear = dateSetUp.getFullYear();
    var dateHour;
    if (dateSetUp.getHours() < 10) {
        dateHour = '0' + dateSetUp.getHours();
    } else {
        dateHour = dateSetUp.getHours();
    };
    var dateMinutes;
    if (dateSetUp.getMinutes() < 10) {
        dateMinutes = '0' + dateSetUp.getMinutes();
    } else {
        dateMinutes = dateSetUp.getMinutes();
    };
    var dateSeconds;
    if (dateSetUp.getSeconds() < 10) {
        dateSeconds = '0' + dateSetUp.getSeconds();
    } else {
        dateSeconds = dateSetUp.getSeconds();
    };
    var dateReady = dateDay + '/' + dateMonth + '/' + dateYear + ' - ' + dateHour + ':' + dateMinutes + ':' + dateSeconds;
    addItem('Date:', dateReady);
    addItem('Cashier:', cashierNames[Number((Math.random() * 9).toFixed())]);
    drawLine('-');

    // Items
    var selected = document.querySelectorAll('.testing:checked');
    for (var x = 0; x < selected.length; x++) {
        var idx = selected[x].parentNode.id;
        var purchasedProduct = productList[idx].productName;
        var amountPurchased = label[idx].children[3].textContent;
        var unitOfProduct = productList[idx].unit;
        var sumOfProduct = sum[x].toFixed(2);
        if (unitOfProduct === 'kg') {
            addItem(purchasedProduct + ' (' + amountPurchased + unitOfProduct + ')', sumOfProduct);
        } else {
            addItem(purchasedProduct + ' (' + amountPurchased + ' ' + unitOfProduct + ')', sumOfProduct);
        }
    }
    drawLine('-');

    addItem('Total'.toUpperCase(), bill); // Total

    // Credit card line
    var bankCard = document.createElement('div');
    //////
    var line1 = document.createElement('p');
    line1.style.marginBottom = '0';
    line1.textContent = 'Bank Card';
    var line2 = document.createElement('p');
    line2.style.marginTop = '0';
    line2.textContent = '**** **** **** ' + Math.floor((Math.random() * 8999) + 1000);
    bankCard.appendChild(line1);
    bankCard.appendChild(line2);
    //////
    receipt.appendChild(bankCard);

    drawLine('*');
    addP('Thanks for shopping!');
    sum = [];
});

//MOBILE

// Header buttons
var headerSnippet = document.getElementById('header-snippet');
var optionsButton = document.getElementById('optionsButton');
var howTo = document.getElementById('howTo');
headerSnippet.addEventListener('click', function (e) {
    if (e.target.id === 'optionsButton' || e.target.id === 'howTo') {
        var above = document.createElement('div');
        above.id = 'above';
        document.body.appendChild(above);
        var snippetContainer = document.createElement('div');
        snippetContainer.className = 'snippet-container';
        var title = document.createElement('p');
        title.style.fontWeight = 'bold';

        // Options
        if (e.target.id === 'optionsButton') {
            title.textContent = 'Options';
            snippetContainer.appendChild(title);

            var int1 = document.createElement('div');
            int1.className = 'options-fix';
            var int2 = document.createElement('input');
            int2.setAttribute('type', 'checkbox');
            int2.id = 'toggleAlla';
            int2.className = 'mobile-button';
            int1.appendChild(int2);
            var int3 = document.createElement('label');
            int3.className = 'enable-header';
            int3.htmlFor = 'toggleAlla';
            var int4 = document.createElement('span');
            int4.textContent = 'Enable All';
            int3.appendChild(int4);
            int1.appendChild(int3);

            var intA1 = document.createElement('div');
            intA1.className = 'options-fix';
            intA1.style.border = 'none';
            var intA = document.createElement('input');
            intA.setAttribute('type', 'checkbox');
            intA.setAttribute('disabled', 'disabled');
            intA.id = 'setValueAllb';
            intA.className = 'mobile-button';
            intA1.appendChild(intA);
            var intB = document.createElement('label');
            intB.className = 'enable-header';
            intB.htmlFor = 'setValueAllb';
            var intC = document.createElement('span');
            intC.textContent = 'Set Value to All';
            intB.appendChild(intC);
            intA1.appendChild(intB);
            var intD = document.createElement('div');
            intD.className = 'snippet-value-all';
            var intMinus = document.createElement('span');
            intMinus.innerHTML = '<i class="fas fa-minus-square"></i>';
            intMinus.id = 'snippetMinus';
            intD.appendChild(intMinus);
            var intE = document.createElement('input');
            intE.setAttribute('type', 'number');
            intE.setAttribute('disabled', 'disabled');
            intE.id = 'inputb'
            intD.appendChild(intE);
            var intPlus = document.createElement('span');
            intPlus.innerHTML = '<i class="fas fa-plus-square"></i>';
            intPlus.id = 'snippetPlus';
            intD.appendChild(intPlus);
            intA1.appendChild(intD);
            var intE = document.createElement('button');
            intE.className = 'enable-header';
            intE.textContent = 'OK';
            intE.id = 'intOK';
            intE.setAttribute('disabled', 'disabled');
            intA1.appendChild(intE);
            int1.appendChild(intA1);

            snippetContainer.appendChild(int1);

            var snippetSeasons = document.createElement('div');
            snippetSeasons.className = 'options-fix';
            var seasonbutton = document.createElement('input');
            seasonbutton.id = 'seasonbutton';
            seasonbutton.className = 'mobile-button';
            seasonbutton.setAttribute('type', 'checkbox');
            snippetSeasons.appendChild(seasonbutton);
            var enableSeasonA = document.createElement('label');
            enableSeasonA.htmlFor = 'seasonbutton';
            enableSeasonA.textContent = 'Enable Seasons';
            enableSeasonA.className = 'enable-header';
            snippetSeasons.appendChild(enableSeasonA);
            var snippetholderS = document.createElement('div');
            snippetholderS.id = 'snippet-season-holder';

            function createSeason(seasonName) {
                var snippetS = document.createElement('label');
                snippetS.htmlFor = seasonName;
                snippetS.id = 'snippet-' + seasonName;
                snippetS.className = 'snippet-season';
                var seasonSelect = document.createElement('input');
                seasonSelect.setAttribute('type', 'radio');
                seasonSelect.className = 'snippet-toggle';
                seasonSelect.name = 'season';
                seasonSelect.setAttribute('disabled', 'disabled');
                seasonSelect.id = seasonName;
                snippetS.appendChild(seasonSelect);
                var seasonImage = document.createElement('img');
                seasonImage.src = 'images/' + seasonName + '.png';
                seasonImage.className = 'season-mobile';
                snippetS.appendChild(seasonImage);
                var seasonTitle = document.createElement('span');
                seasonTitle.textContent = seasonName;
                snippetS.appendChild(seasonTitle);
                snippetholderS.appendChild(snippetS);
                snippetSeasons.appendChild(snippetholderS);
            }
            createSeason('spring');
            createSeason('summer');
            createSeason('autumn');
            createSeason('winter');

            snippetContainer.appendChild(snippetSeasons);

            // Hot to play
        } else if (e.target.id === 'howTo') {
            title.textContent = 'How To Play';
            snippetContainer.appendChild(title);
            var howToPlay = document.createElement('p');
            howToPlay.innerHTML = '<ol><li>Tap a product to select</li><li>Input a value of how much of that product you want to buy</li><li>Click \'OK\' to send the value</li><li>If you want to remove the value, tap the product again and select \'Remove value\'</li><li>Tap the \'Checkout\' button to discover how much you will pay for the products</li><li>You can print your receipt by tapping the total value</li><li>Repeat the process if you want to make another purchase</li></ol>';
            snippetContainer.appendChild(howToPlay);
        }


        var closeX = document.createElement('span');
        closeX.id = 'close-receipt';
        closeX.innerHTML = '<i class="fas fa-times"></i>';
        closeX.addEventListener('click', function (e) {
            document.body.removeChild(document.getElementById('above'));
        });
        snippetContainer.appendChild(closeX);
        above.appendChild(snippetContainer);

        // Logic

        // Toggle All
        var toggleAlla = document.getElementById('toggleAlla');
        var setValueAllb = document.getElementById('setValueAllb');

        toggleAlla.addEventListener('change', function (e) {
            for (var x = 0; x < testing.length; x++) {
                if (e.target.checked) {
                    setValueAllb.removeAttribute('disabled');
                    testing[x].checked = true;
                    label[x].style.border = '2px dashed #789618';
                    removeOptions.removeAttribute('disabled');
                } else {
                    setValueAllb.setAttribute('disabled', 'disabled');
                    testing[x].checked = false;
                    label[x].style.border = '2px solid #b4d455';
                }
            }
        });

        // Set value to all
        var inputb = document.getElementById('inputb');
        var intE = document.getElementById('intOK');
        setValueAllb.addEventListener('change', function (e) {
            if (e.target.checked === true) {
                inputb.removeAttribute('disabled');
                intE.removeAttribute('disabled');
                var inputThisValue = 0;
                document.getElementById('snippetMinus').addEventListener('click', function (e) {
                    inputThisValue--;
                    inputb.value = inputThisValue;
                    if (inputThisValue < 1) {
                        inputThisValue = 0;
                        inputb.value = '';
                    }
                });
                document.getElementById('snippetPlus').addEventListener('click', function (e) {
                    inputThisValue++;
                    inputb.value = inputThisValue;
                });
            } else {
                inputb.setAttribute('disabled', 'disabled');
                intE.setAttribute('disabled', 'disabled');
            }
            var intValue;
            inputb.addEventListener('change', function (e) {
                intValue = e.target.value;
                console.log(intValue);
                if (intValue < 1) {
                    e.target.value = '';
                    intValue = '';
                }
            });
            document.getElementById('intOK').addEventListener('click', function (e) {
                if (inputb.value == '') {
                    alert('set a value first');
                } else {
                    for (var x = 0; x < scale.length; x++) {
                        scale[x].textContent = inputb.value;
                    }
                    document.body.removeChild(document.getElementById('above'));
                }
            });
        });

        // Select season
        var snippetToggle = document.querySelectorAll('.snippet-toggle');
        document.getElementById('seasonbutton').addEventListener('click', function (e) {
            if (e.target.checked === true) {
                for (var x = 0; x < snippetToggle.length; x++) {
                    snippetToggle[x].removeAttribute('disabled');
                }
            } else {
                for (var x = 0; x < snippetToggle.length; x++) {
                    snippetToggle[x].setAttribute('disabled', 'disabled');
                    snippetToggle[x].checked = false;
                    label[x].style.backgroundColor = '#b4d455';
                    priceTag[x].textContent = 'Price: ' + productList[x].regularPrice + '/' + productList[x].unit;
                    removeOptions.setAttribute('disabled', 'disabled');
                }
            }
        });
        document.getElementById('snippet-season-holder').addEventListener('click', function (e) {
            if (e.target.className === 'snippet-toggle') {
                for (var x = 0; x < snippetToggle.length; x++) {
                    if (snippetToggle[x].checked) {
                        for (var y = 0; y < productList.length; y++) {
                            if (productList[y].onSeason === x) {
                                label[y].style.backgroundColor = 'blue';
                                priceTag[y].textContent = 'Price: ' + productList[y].priceOnSeason + '/' + productList[y].unit;
                                removeOptions.removeAttribute('disabled');
                            } else if (productList[y].outOfSeason === x) {
                                label[y].style.backgroundColor = 'red';
                                priceTag[y].textContent = 'Price: ' + productList[y].priceOutOfSeason + '/' + productList[y].unit;
                                removeOptions.removeAttribute('disabled');
                            } else {
                                label[y].style.backgroundColor = '#b4d455';
                                priceTag[y].textContent = 'Price: ' + productList[y].regularPrice + '/' + productList[y].unit;
                            }
                        }
                    }
                }
            }
        });
    }
});

// Reset settings 
removeOptions.addEventListener('click', function () {
    removeOptions.setAttribute('disabled', 'disabled');
    for (var x = 0; x < testing.length; x++) {
        priceTag[x].textContent = 'Price: ' + productList[x].regularPrice + '/' + productList[x].unit;
        label[x].style.backgroundColor = '#b4d455';
        if (testing[x].checked) {
            testing[x].checked = false;
            label[x].children[3].textContent = ' ';
            label[x].style.border = '2px solid #b4d455';
        }
    }
});


// Mobile receipt

var receiptSnippet = document.createElement('div');
receiptSnippet.style.display = 'flex';
receiptSnippet.id = 'recepit-snippet';
receiptSnippet.className = 'receipt';

var snippetCheckout = document.getElementById('snippet-checkout');
var snippetSum = [];
snippetCheckout.addEventListener('click', function () {
    receiptSnippet.innerHTML = '';
    // Calculate the total

    for (var x = 0; x < scale.length; x++) {
        if (parseFloat(scale[x].textContent) > 0) {
            var stringPrice = priceTag[x].textContent;
            var re = /\d\.[0-9]{2}/g
            var finalPrice = parseFloat(stringPrice.match(re));
            snippetSum.push(parseFloat(parseFloat(scale[x].textContent).toFixed(2)) * finalPrice);
        }
    }
    if (snippetSum.length === 0) {
        alert('select anaay item first');
    } else {
        function sumValue(arr) {
            var total = 0;
            for (var x = 0; x < arr.length; x++) {
                total += arr[x];
            }
            return total;
        }
    }
    var bill = sumValue(snippetSum).toFixed(2);


    var snippetTotal = document.getElementById('snippet-total');
    snippetTotal.innerHTML = 'The total is <strong>$ ' + bill + '</strong><br /><span>(Tap here to print your receipt)</span>';

    // Functions to add lines on the snippet receipt

    function addP(input, className) {
        var p = document.createElement('p');
        p.className = className;
        p.textContent = input;
        receiptSnippet.appendChild(p);
    }

    function addItem(first, second) {
        var p = document.createElement('p');
        p.className = 'receiptItem';
        var sp1 = document.createElement('span');
        var sp2 = document.createElement('span');
        sp1.textContent = first;
        sp2.textContent = second;
        p.appendChild(sp1);
        p.appendChild(sp2);
        receiptSnippet.appendChild(p);
    }

    function drawLine(input) {
        var p = document.createElement('p');
        p.style.textAlign = 'center';
        p.style.margin = '0';
        receiptSnippet.appendChild(p);
        var line = document.createElement('span');
        line.style.display = 'inline-block';
        line.className = 'line-snippet';
        p.appendChild(line);
    }

    // Receipt Lines

    addP('Cash receipt'.toUpperCase(), 'title-line'); // Title

    drawLine('*');

    // Date
    var dateSetUp = new Date();
    var dateDay;
    if (dateSetUp.getDate() < 10) {
        dateDay = '0' + dateSetUp.getDate();
    } else {
        dateDay = dateSetUp.getDate();
    };
    var dateMonth = dateSetUp.getMonth() + 1;
    var dateYear = dateSetUp.getFullYear();
    var dateHour;
    if (dateSetUp.getHours() < 10) {
        dateHour = '0' + dateSetUp.getHours();
    } else {
        dateHour = dateSetUp.getHours();
    };
    var dateMinutes;
    if (dateSetUp.getMinutes() < 10) {
        dateMinutes = '0' + dateSetUp.getMinutes();
    } else {
        dateMinutes = dateSetUp.getMinutes();
    };
    var dateSeconds;
    if (dateSetUp.getSeconds() < 10) {
        dateSeconds = '0' + dateSetUp.getSeconds();
    } else {
        dateSeconds = dateSetUp.getSeconds();
    };
    var dateReady = dateDay + '/' + dateMonth + '/' + dateYear + ' - ' + dateHour + ':' + dateMinutes + ':' + dateSeconds;
    addItem('Date:', dateReady);
    addItem('Cashier:', cashierNames[Number((Math.random() * 9).toFixed())]);
    drawLine('-');

    // Items
    var selected = document.querySelectorAll('.testing:checked');
    for (var x = 0; x < selected.length; x++) {
        var idx = selected[x].parentNode.id;
        var purchasedProduct = productList[idx].productName;
        var amountPurchased = label[idx].children[3].textContent;
        var unitOfProduct = productList[idx].unit;
        var sumOfProduct = snippetSum[x].toFixed(2);
        if (unitOfProduct === 'kg') {
            addItem(purchasedProduct + ' (' + amountPurchased + unitOfProduct + ')', sumOfProduct);
        } else {
            addItem(purchasedProduct + ' (' + amountPurchased + ' ' + unitOfProduct + ')', sumOfProduct);
        }
    }
    drawLine('-');

    addItem('Total'.toUpperCase(), bill); // Total

    // Credit card line
    var bankCard = document.createElement('div');
    //////
    var line1 = document.createElement('p');
    line1.textContent = 'Bank Card';
    var line2 = document.createElement('p');
    line2.textContent = '**** **** **** ' + Math.floor((Math.random() * 8999) + 1000);
    bankCard.appendChild(line1);
    bankCard.appendChild(line2);
    //////
    receiptSnippet.appendChild(bankCard);

    drawLine('*');
    addP('Thanks for shopping!');

    snippetSum = [];
});

var snippetPrice = document.getElementById('snippet-price');
snippetPrice.addEventListener('click', function () {
    var above = document.createElement('div');
    above.id = 'above';
    document.body.appendChild(above);
    above.appendChild(receiptSnippet);
    var lineSnippet = document.querySelectorAll('.line-snippet');
    for (var x = 0; x < lineSnippet.length; x++) {
        if (x === 0 || x === 3) {
            var y;
            do {
                y = lineSnippet[x].textContent;
                lineSnippet[x].textContent += '*';
            } while (lineSnippet[x].offsetWidth < lineSnippet[x].parentNode.offsetWidth)
            lineSnippet[x].textContent = y;
        } else {
            var y;
            do {
                y = lineSnippet[x].textContent;
                lineSnippet[x].textContent += '-';
            } while (lineSnippet[x].offsetWidth < lineSnippet[x].parentNode.offsetWidth)
            lineSnippet[x].textContent = y;
        }
    }
    var closeReceipt = document.createElement('div');
    var closeX = document.createElement('span');
    closeX.id = 'close-receipt';
    closeX.innerHTML = '<i class="fas fa-times"></i>';
    closeX.addEventListener('click', function (e) {
        document.body.removeChild(document.getElementById('above'));
    });
    closeReceipt.appendChild(closeX);
    above.appendChild(closeReceipt);
});