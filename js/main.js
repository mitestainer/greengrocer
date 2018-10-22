// Notes to myself:
// 1. USE MORE FUNCTIONS!
// 2. Don't repeat the same lines so often

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
        onSeason: 1,
        outOfSeason: 3,
        regularPrice: 3.99,
        priceOnSeason: 1.99,
        priceOutOfSeason: 5.99,
        unit: 'unit'
    }, {
        productName: 'Mushroom',
        pic: 'images/mushroom.png',
        onSeason: 2,
        outOfSeason: 1,
        regularPrice: undefined,
        priceOnSeason: undefined,
        priceOutOfSeason: undefined,
        unit: 'tray'
    }, {
        productName: 'Turnip',
        pic: 'images/turnip.png',
        onSeason: 2,
        outOfSeason: 1,
        regularPrice: 2.19,
        priceOnSeason: 1.69,
        priceOutOfSeason: 4.09,
        unit: 'unit'
    }, {
        productName: 'Potato',
        pic: 'images/potato.png',
        onSeason: 2,
        outOfSeason: 0,
        regularPrice: 0.95,
        priceOnSeason: 0.79,
        priceOutOfSeason: 1.29,
        unit: 'kg'
    }, {
        productName: 'Cucumber',
        pic: 'images/cucumber.png',
        onSeason: 1,
        outOfSeason: 3,
        regularPrice: undefined,
        priceOnSeason: undefined,
        priceOutOfSeason: 4.49,
        unit: 'kg'
    }, {
        productName: 'Cabbage',
        pic: 'images/cabbage.png',
        onSeason: 2,
        outOfSeason: 1,
        regularPrice: 0.69,
        priceOnSeason: undefined,
        priceOutOfSeason: undefined,
        unit: 'kg'
    }, {
        productName: 'Strawberry',
        pic: 'images/strawberry.png',
        onSeason: 0,
        outOfSeason: 2,
        regularPrice: 2.99,
        priceOnSeason: 1.89,
        priceOutOfSeason: undefined,
        unit: 'tray'
    }, {
        productName: 'Onion',
        pic: 'images/onion.png',
        onSeason: 0,
        outOfSeason: 1,
        regularPrice: 0.95,
        priceOnSeason: 0.69,
        priceOutOfSeason: 1.79,
        unit: 'kg'
    }, {
        productName: 'Tomato',
        pic: 'images/tomato.png',
        onSeason: 1,
        outOfSeason: 3,
        regularPrice: 1.59,
        priceOnSeason: 0.89,
        priceOutOfSeason: 3.99,
        unit: 'kg'
    }, {
        productName: 'Corn',
        pic: 'images/corn.png',
        onSeason: 1,
        outOfSeason: 3,
        regularPrice: undefined,
        priceOnSeason: undefined,
        priceOutOfSeason: 2.79,
        unit: 'tray'
    }, {
        productName: 'Pineapple',
        pic: 'images/pineapple.png',
        onSeason: 1,
        outOfSeason: 0,
        regularPrice: 1.95,
        priceOnSeason: undefined,
        priceOutOfSeason: 3.95,
        unit: 'unit'
    }, {
        productName: 'Pumpkin',
        pic: 'images/pumpkin.png',
        onSeason: 3,
        outOfSeason: 1,
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
        onSeason: 1,
        outOfSeason: 0,
        regularPrice: 1.99,
        priceOnSeason: undefined,
        priceOutOfSeason: undefined,
        unit: 'kg'
    }, {
        productName: 'Sweet Potato',
        pic: 'images/spotato.png',
        onSeason: 3,
        outOfSeason: 0,
        regularPrice: undefined,
        priceOnSeason: 0.99,
        priceOutOfSeason: 3.95,
        unit: 'kg'
    }, {
        productName: 'Green Pepper',
        pic: 'images/gpepper.png',
        onSeason: 2,
        outOfSeason: 0,
        regularPrice: undefined,
        priceOnSeason: undefined,
        priceOutOfSeason: undefined,
        unit: 'kg'
    }, {
        productName: 'Spinach',
        pic: 'images/spinach.png',
        onSeason: 2,
        outOfSeason: 1,
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
    createLabel.className = 'label label-regular';
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
    productPrice.textContent = 'Price: $' + productList[x].regularPrice + '/' + productList[x].unit;
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
    if (e.target.id != 'checkout' && e.target.className.indexOf('label') !== -1) {
        var a = e.target.children[0];
        if (a.checked === false) {
            a.checked = true;
            removeOptions.removeAttribute('disabled');
        } else {
            a.checked = true;
            removeOptions.removeAttribute('disabled');
        };

        debugger;
        var idSet = e.target.id;
        if (enableSeason.checked) {
            for (var x = 0; x < toggleSeason.length; x++) {
                if (toggleSeason[x].checked) {
                    if (productList[idSet].onSeason == toggleSeason[x].id) {
                        label[idSet].className = 'label label-on-season label-os-selected';
                    } else if (productList[idSet].outOfSeason == toggleSeason[x].id) {
                        label[idSet].className = 'label label-out-of-season label-oos-selected';
                    } else {
                        label[idSet].className = 'label label-regular label-r-selected';
                    }
                }
            }
        } else {
            label[idSet].className = 'label label-regular label-r-selected';
        }
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
            if (enableSeason.checked) {
                for (var x = 0; x < toggleSeason.length; x++) {
                    if (toggleSeason[x].checked) {
                        if (productList[idSet].onSeason == toggleSeason[x].id) {
                            label[idSet].className = 'label label-on-season';
                        } else if (productList[idSet].outOfSeason == toggleSeason[x].id) {
                            label[idSet].className = 'label label-out-of-season';
                        } else {
                            label[idSet].className = 'label label-regular';
                        }
                    }
                }
            } else {
                label[idSet].className = 'label label-regular';
            }
            document.body.removeChild(document.getElementById('above'));
            testing[setId].checked = false;
            scale[setId].textContent = ' ';
            var counter = 0;
            for (var x = 0; x < (label.length - 1); x++) {
                if (label[x].style.backgroundColor !== 'rgb(180, 212, 85)') {
                    counter++;
                }
            }
            if (counter == 0) {
                removeOptions.setAttribute('disabled', 'disabled');
            }
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


// Reset settings 
removeOptions.addEventListener('click', function () {
    for (var x = 0; x < testing.length; x++) {
        label[x].className = 'label label-regular';
        priceTag[x].textContent = 'Price: $' + productList[x].regularPrice + '/' + productList[x].unit;
        if (testing[x].checked) {
            testing[x].checked = false;
            label[x].children[3].textContent = ' ';
        }
    }
    enableSeason.checked = false;
    enableSeason.parentElement.className = 'enable-header enable-fix';
    seasonSpan.textContent = 'Enable Seasons';
    seasonBox.removeAttribute('style');
    for (var x = 0; x < toggleSeason.length; x++) {
        toggleSeason[x].checked = false;
        toggleSeason[x].setAttribute('disabled', 'disabled');
        seasonWrapper[x].className = 'season-wrapper season-wrapper-disabled';
    }
    removeOptions.setAttribute('disabled', 'disabled');
});

// Enable seasons

var enableSeason = document.getElementById('enable-season');
var toggleSeason = document.querySelectorAll('.toggleSeason');
var seasonSpan = document.getElementById('season-span');
var seasonWrapper = document.querySelectorAll('.season-wrapper');
var seasonBox = document.getElementById('season-box');

enableSeason.addEventListener('change', function (e) {
    debugger;
    if (e.target.checked) {
        removeOptions.removeAttribute('disabled');
        enableSeason.parentNode.className = 'enable-header season-wrapper-enabled enable-fix-mobile'; ///
        seasonSpan.textContent = ' Disable Seasons';
        seasonBox.className = 'header-section';
        seasonBox.style.border = '2px solid #c9d1d8';
        for (var x = 0; x < toggleSeason.length; x++) {
            toggleSeason[x].removeAttribute('disabled');
            seasonWrapper[x].className = 'season-wrapper season-wrapper-enabled';
            seasonWrapper[x].lastElementChild.style.color = '#7994b0';
        }
    } else {
        enableSeason.parentNode.className = 'enable-header enable-fix';
        seasonSpan.textContent = ' Enable Seasons';
        seasonBox.removeAttribute('class');
        seasonBox.style.border = '2px solid #e3e8ed';
        for (var x = 0; x < toggleSeason.length; x++) {
            toggleSeason[x].setAttribute('disabled', 'disabled');
            toggleSeason[x].checked = false;
            seasonWrapper[x].className = 'season-wrapper';
            seasonWrapper[x].lastElementChild.style.color = '#c9d1d8';
        }
        var checkedA = 0;
        for (var x = 0; x < testing.length; x++) {
            if (testing[x].checked) {
                checkedA++;
            }
        }
        if (checkedA < 1) {
            removeOptions.setAttribute('disabled', 'disabled');
        }
    }
})

// Setting Seasons

document.getElementById('season-box').addEventListener('click', function (e) {
    if (e.target.className === 'toggleSeason') {
        for (var x = 0; x < toggleSeason.length; x++) {
            if (toggleSeason[x].checked) {
                removeOptions.removeAttribute('disabled');
                for (var y = 0; y < productList.length; y++) {
                    if (productList[y].onSeason === parseInt(toggleSeason[x].id)) {
                        label[y].className = 'label label-on-season';
                        priceTag[y].textContent = 'Price: $' + productList[y].priceOnSeason + '/' + productList[y].unit;
                    } else if (productList[y].outOfSeason === parseInt(toggleSeason[x].id)) {
                        label[y].className = 'label label-out-of-season';
                        priceTag[y].textContent = 'Price: $' + productList[y].priceOutOfSeason + '/' + productList[y].unit;
                    } else {
                        label[y].className = 'label label-regular';
                        priceTag[y].textContent = 'Price: $' + productList[y].regularPrice + '/' + productList[y].unit;
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
            label[x].className = 'label label-regular';
            priceTag[x].textContent = 'Price: $' + productList[x].regularPrice + '/' + productList[x].unit;
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

var closeX = document.createElement('span');
closeX.id = 'close-receipt';
closeX.innerHTML = '<i class="fas fa-times"></i>';
closeX.addEventListener('click', function (e) {
    document.body.removeChild(document.getElementById('above'));
});

// Header buttons
var headerSnippet = document.getElementById('header-snippet');
var optionsButton = document.getElementById('optionsButton');
var howTo = document.getElementById('howTo');

headerSnippet.addEventListener('click', function (e) {
    if (e.target.id === 'optionsButton' || e.target.id === 'howTo') {
        var under = document.getElementById('under');
        under.className = 'under under-visible';
        // Options
        if (e.target.id === 'optionsButton') {
            var forOptions = document.getElementById('for-options');
            forOptions.style.visibility = 'visible';
            forOptions.className = 'snippet-container for-options-mobile';
            document.getElementById('options-title').style.display = 'initial';
            var headerLeft = document.getElementById('header-left');
            headerLeft.className = 'header header-fix-mobile';
            headerLeft.children[0].style.display = 'none';
            document.querySelectorAll('.enable-fix')[0].className = 'enable-fix-mobile';
            var headerRight = document.getElementById('header-right');
            headerRight.className = 'header header-fix-mobile';
            seasonBox.className = 'season-box-fix-mobile';
            document.querySelectorAll('.enable-fix')[0].className = 'enable-fix-mobile';
            var closeOptions = document.getElementById('close-options');
            closeOptions.style.display = 'initial';
            closeOptions.addEventListener('click', function () {
                debugger;
                document.getElementById('options-title').style.display = 'none';
                headerLeft.className = 'header header-fix';
                headerLeft.children[0].style.display = 'initial';
                document.querySelectorAll('.enable-fix-mobile')[0].className = 'enable-fix';
                headerRight.className = 'header header-fix';
                document.querySelectorAll('.enable-fix-mobile')[0].className = 'enable-fix';
                seasonBox.className = 'season-box-fix';
                closeOptions.style.display = 'none';
                forOptions.style.visibility = 'hidden';
                under.className = 'under';
            });
            // How to play
        } else if (e.target.id === 'howTo') {
            var forHowTo = document.getElementById('for-howto');
            forHowTo.style.visibility = 'visible';
            document.getElementById('close-howto').addEventListener('click', function () {
                forHowTo.style.visibility = 'hidden';
                under.className = 'under';
            });
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
