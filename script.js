function getAllCustomers(callback){
    $.ajax(
        {
            "url" : "/customers",
            "method": "GET",
            "data": "",
            "dataType": "JSON",
            "success": function(result){
                callback(result)
            },
            "error": function(xhr,status,error){
                console.log("error: "+status+" message: "+error);
            }
        }
    );
}

function getCustomerById(id, callback){
    $.ajax(
        {
            "url" : "/customers/"+id,
            "method": "GET",
            "data": "",
            "dataType": "JSON",
            "success": function(result){
                callback(result)
            },
            "error": function(xhr,status,error){
                console.log("error: "+status+" message: "+error);
            }
        }
    );
}

function createCustomer(customer, callback){
    $.ajax(
        {
            "url" : "/customers/",
            "method": "POST",
            "data": JSON.stringify(customer),
            "dataType": "JSON",
            contentType: "application/json; charset=utf-8",
            "success": function(result){
                callback(result)
                customer.id = result.id
                addCustomerToTable(customer)
            },
            "error": function(xhr,status,error){
                console.log("error: "+status+" message: "+error);
            }
        }
    );
}

function updateCustomer(customer, callback){
    $.ajax(
        {
            "url" : "/customers/",
            "method": "PUT",
            "data": JSON.stringify(customer),
            "dataType": "JSON",
            contentType: "application/json; charset=utf-8",
            "success": function(result){
                callback(result)
            },
            "error": function(xhr,status,error){
                console.log("error: "+status+" message: "+error);
            }
        }
    );
}

function deleteCustomer(id, callback){
    $.ajax(
        {
            "url" : "/customers/"+id,
            "method": "DELETE",
            "data": "",
            "dataType": "JSON",
            contentType: "application/json; charset=utf-8",
            "success": function(result){
                callback(result)
            },
            "error": function(xhr,status,error){
                console.log("error: "+status+" message: "+error);
            }
        }
    );
}

function getAllPizzas(callback){
    $.ajax(
        {
            "url" : "/pizzas",
            "method": "GET",
            "data": "",
            "dataType": "JSON",
            "success": function(result){
                callback(result)
            },
            "error": function(xhr,status,error){
                console.log("error: "+status+" message: "+error);
            }
        }
    );
}

function getPizzaById(id, callback){
    $.ajax(
        {
            "url" : "/pizzas/"+id,
            "method": "GET",
            "data": "",
            "dataType": "JSON",
            "success": function(result){
                callback(result)
            },
            "error": function(xhr,status,error){
                console.log("error: "+status+" message: "+error);
            }
        }
    );
}

function createPizza(pizza, callback){
    $.ajax(
        {
            "url" : "/pizzas/",
            "method": "POST",
            "data": JSON.stringify(pizza),
            "dataType": "JSON",
            contentType: "application/json; charset=utf-8",
            "success": function(result){
                callback(result)
                pizza.id = result.id
                addPizzaToTable(pizza)
            },
            "error": function(xhr,status,error){
                console.log("error: "+status+" message: "+error);
            }
        }
    );
}

function updatePizza(pizza, callback){
    $.ajax(
        {
            "url" : "/pizzas/",
            "method": "PUT",
            "data": JSON.stringify(pizza),
            "dataType": "JSON",
            contentType: "application/json; charset=utf-8",
            "success": function(result){
                callback(result)
            },
            "error": function(xhr,status,error){
                console.log("error: "+status+" message: "+error);
            }
        }
    );
}

function deletePizza(id, callback){
    $.ajax(
        {
            "url" : "/pizzas/"+id,
            "method": "DELETE",
            "data": "",
            "dataType": "JSON",
            contentType: "application/json; charset=utf-8",
            "success": function(result){
                callback(result)
            },
            "error": function(xhr,status,error){
                console.log("error: "+status+" message: "+error);
            }
        }
    );
}

function getSizeMetrics(callback){
    $.ajax(
        {
            "url" : "/sizemetrics",
            "method": "GET",
            "data": "",
            "dataType": "JSON",
            "success": function(result){
                callback(result)
            },
            "error": function(xhr,status,error){
                console.log("error: "+status+" message: "+error);
            }
        }
    );
}

function getBaseMetrics(callback){
    $.ajax(
        {
            "url" : "/basemetrics",
            "method": "GET",
            "data": "",
            "dataType": "JSON",
            "success": function(result){
                callback(result)
            },
            "error": function(xhr,status,error){
                console.log("error: "+status+" message: "+error);
            }
        }
    );
}

function hideAll(){
    document.getElementById('charts').style.display="none"
    document.getElementById('viewAllPizzas').style.display="none"
    document.getElementById('viewAllCustomers').style.display="none"
    document.getElementById('registerForm').style.display="none"
    document.getElementById('orderForm').style.display="none"
    document.getElementById('registerInputID').style.display="none"
}

function clearRegisterForm(){
    var form = document.getElementById('registerForm')
    form.querySelector('input[name="id"]').disabled=false
    form.querySelector('input[name="id"]').value=''
    form.querySelector('input[name="name"]').value=''
    form.querySelector('input[name="address"]').value=''
    form.querySelector('input[name="phone"]').value=''
    form.querySelector('input[name="email"]').value=''
}

function clearOrderForm(){
    var form = document.getElementById('orderForm')
    form.querySelector('input[name="orderId"]').disabled=false
    form.querySelector('select[name="size"]').value='12"'
    form.querySelector('select[name="base"]').value='normal'
    form.querySelector('input[name="toppings"]').value=''
    form.querySelector('select[name="customer"]').value=''
    form.querySelector('select[name="status"]').value='ordered'
}

function showViewAllPizzas(){
    hideAll()
    document.getElementById('viewAllPizzas').style.display="inline-block"
}

function showViewAllCustomers(){
    hideAll()
    document.getElementById('viewAllCustomers').style.display="inline-block"
}

function showRegisterForm(){
    hideAll()
    clearRegisterForm()
    document.getElementById('create_label').style.display="inline-block"
    document.getElementById('update_label').style.display="none"
    document.getElementById('doCreateCustomerButton').style.display="inline-block"
    document.getElementById('doUpdateCustomerButton').style.display="none"
    document.getElementById('registerForm').style.display="block"
}

function showOrderForm(){
    hideAll()
    clearOrderForm()
    removeOptions()
    getAllCustomers(populateCustomerId)
    document.getElementById('orderInputID').style.display="none"
    document.getElementById('updateLabelPizza').style.display="none"
    document.getElementById('orderForm').style.display="inline-block"
    document.getElementById('doCreatePizzaButton').style.display="inline-block"
    document.getElementById('doUpdatePizzaButton').style.display="none"
    document.getElementById('orderForm').querySelector('select[name="status"]').value = "ordered"
    document.getElementById('orderForm').querySelector('select[name="status"]').disabled=true
}

// Reference used:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function

async function showUpdatePizza(button){
    hideAll()
    removeOptions()
    getAllCustomers(populateCustomerId)
    await resolveAfterDelay()
    document.getElementById('orderInputID').style.display="block"
    document.getElementById('updateLabelPizza').style.display="block"
    document.getElementById('orderForm').style.display="inline-block"
    document.getElementById('doCreatePizzaButton').style.display="none"
    document.getElementById('doUpdatePizzaButton').style.display="block"
    document.getElementById('orderForm').querySelector('select[name="status"]').disabled=false
    var rowElement = button.parentNode.parentNode
    pizza = getPizzaFromRow(rowElement)
    populateFormWithPizza(pizza)
}

function showUpdateCustomer(button){
    hideAll()
    document.getElementById('create_label').style.display="none"
    document.getElementById('update_label').style.display="inline-block"
    document.getElementById('registerInputID').style.display="block"
    document.getElementById('registerForm').style.display="block"
    document.getElementById('doCreateCustomerButton').style.display="none"
    document.getElementById('doUpdateCustomerButton').style.display="inline-block"
    var rowElement = button.parentNode.parentNode
    customer = getCustomerFromRow(rowElement)
    populateFormWithCustomer(customer)
}

function getPizzaFromRow(rowElement){
    var pizza={}
    pizza.id = rowElement.cells[0].firstChild.textContent
    pizza.size = rowElement.cells[1].firstChild.textContent
    pizza.base = rowElement.cells[2].firstChild.textContent
    pizza.toppings = rowElement.cells[3].firstChild.textContent
    pizza.customer = rowElement.cells[4].firstChild.textContent
    return pizza
}

function getCustomerFromRow(rowElement){
    var customer={}
    customer.id = rowElement.cells[0].firstChild.textContent
    customer.name = rowElement.cells[1].firstChild.textContent
    customer.address = rowElement.cells[2].firstChild.textContent
    customer.phone = rowElement.cells[3].firstChild.textContent
    customer.email = rowElement.cells[4].firstChild.textContent
    return customer
}

function doUpdatePizza(){
    var pizza = getPizzaFromForm()
    var rowElement = document.getElementById('pizza'+pizza.id)
    setPizzaInRow(rowElement, pizza)
    updatePizza(pizza,doNothing())
    showViewAllPizzas()
}

function doUpdateCustomer(){
    var customer = getCustomerFromForm()
    var rowElement = document.getElementById('customer'+customer.id)
    setCustomerInRow(rowElement, customer)
    updateCustomer(customer,doNothing())
    showViewAllCustomers()
}

function setPizzaInRow(rowElement, pizza){
    rowElement.cells[0].firstChild.textContent = pizza.id
    rowElement.cells[1].firstChild.textContent = pizza.size 
    rowElement.cells[2].firstChild.textContent = pizza.base
    rowElement.cells[3].firstChild.textContent = pizza.toppings
    rowElement.cells[4].firstChild.textContent = pizza.status
    rowElement.cells[5].firstChild.textContent = pizza.customer
}

function setCustomerInRow(rowElement, customer){
    rowElement.cells[0].firstChild.textContent = customer.id
    rowElement.cells[1].firstChild.textContent = customer.name
    rowElement.cells[2].firstChild.textContent = customer.address
    rowElement.cells[3].firstChild.textContent = customer.phone
    rowElement.cells[4].firstChild.textContent = customer.email
}

function getPizzaFromRow(rowElement){
    var pizza={}
    pizza.id = rowElement.cells[0].firstChild.textContent
    pizza.size = rowElement.cells[1].firstChild.textContent
    pizza.base = rowElement.cells[2].firstChild.textContent
    pizza.toppings = rowElement.cells[3].firstChild.textContent
    pizza.status = rowElement.cells[4].firstChild.textContent
    pizza.customer = rowElement.cells[5].firstChild.textContent
    return pizza
}

function populateFormWithPizza(pizza){
    var form = document.getElementById('orderForm')
    form.querySelector('input[name="orderId"]').disabled = true
    form.querySelector('input[name="orderId"]').value = pizza.id
    form.querySelector('select[name="size"]').value = pizza.size
    form.querySelector('select[name="base"]').value = pizza.base
    form.querySelector('input[name="toppings"]').value = pizza.toppings
    form.querySelector('select[name="status"]').value = pizza.status
    form.querySelector('select[name="customer"]').value = pizza.customer
    form.querySelector('select[name="status"]').disabled = false
}

function populateFormWithCustomer(customer){
    var form = document.getElementById('registerForm')
    form.querySelector('input[name="id"]').disabled = true
    form.querySelector('input[name="id"]').value = customer.id
    form.querySelector('input[name="name"]').value = customer.name
    form.querySelector('input[name="address"]').value = customer.address
    form.querySelector('input[name="phone"]').value = customer.phone
    form.querySelector('input[name="email"]').value = customer.email
}

function getPizzaFromForm(){
    var form = document.getElementById('orderForm')
    var pizza = {}
    pizza.id = form.querySelector('input[name="orderId"]').value
    pizza.size = form.querySelector('select[name="size"]').value
    pizza.base = form.querySelector('select[name="base"]').value
    pizza.toppings = form.querySelector('input[name="toppings"]').value
    pizza.status = form.querySelector('select[name="status"]').value
    pizza.customer = form.querySelector('select[name="customer"]').value
    return pizza
}

function getCustomerFromForm(){
    var form = document.getElementById('registerForm')
    var customer = {}
    customer.id = form.querySelector('input[name="id"]').value
    customer.name = form.querySelector('input[name="name"]').value
    customer.address = form.querySelector('input[name="address"]').value
    customer.phone = form.querySelector('input[name="phone"]').value
    customer.email = form.querySelector('input[name="email"]').value
    return customer
}

function addPizzaToTable(pizza){
    var tableElement = document.getElementById('pizzaTable')
    var rowElement = tableElement.insertRow(-1)
    
    rowElement.setAttribute('id', 'pizza'+pizza.id)
    
    var cell1 = rowElement.insertCell(0);
    cell1.innerHTML = pizza.id
    var cell2 = rowElement.insertCell(1);
    cell2.innerHTML = pizza.size
    var cell3 = rowElement.insertCell(2);
    cell3.innerHTML = pizza.base
    var cell4 = rowElement.insertCell(3);
    cell4.innerHTML = pizza.toppings
    var cell4 = rowElement.insertCell(4);
    cell4.innerHTML = pizza.status
    var cell4 = rowElement.insertCell(5);
    cell4.innerHTML = pizza.customer
    var cell5 = rowElement.insertCell(6);
    cell5.innerHTML = '<button onclick="showUpdatePizza(this)">Update</button>'
    var cell6 = rowElement.insertCell(7);
    cell6.innerHTML = '<button onclick=doDeletePizza(this)>Delete</button>'
}

function addCustomerToTable(customer){
    var tableElement = document.getElementById('customerTable')
    var rowElement = tableElement.insertRow(-1)

    rowElement.setAttribute('id','customer'+customer.id)

    var cell1 = rowElement.insertCell(0);
    cell1.innerHTML = customer.id
    var cell2 = rowElement.insertCell(1);
    cell2.innerHTML = customer.name
    var cell3 = rowElement.insertCell(2);
    cell3.innerHTML = customer.address
    var cell4 = rowElement.insertCell(3);
    cell4.innerHTML = customer.phone
    var cell4 = rowElement.insertCell(4);
    cell4.innerHTML = customer.email
    var cell5 = rowElement.insertCell(5);
    cell5.innerHTML = '<button onclick="showUpdateCustomer(this)">Update</button>'
    var cell6 = rowElement.insertCell(6);
    cell6.innerHTML = '<button onclick=doDeleteCustomer(this)>Delete</button>'
}

function doCreatePizza(){
    pizza = getPizzaFromForm()
    createPizza(pizza, doNothing)
    showViewAllPizzas()
}

function doCreateCustomer(){
    customer = getCustomerFromForm()
    createCustomer(customer, doNothing)
    showViewAllCustomers()
}

function doDeletePizza(buttonElement){
    var tableElement = document.getElementById('pizzaTable')
    var index = buttonElement.parentNode.parentNode.rowIndex;
    var rowElement = buttonElement.parentNode.parentNode;
    id = rowElement.cells[0].innerHTML
    console.log(id)
    tableElement.deleteRow(index)
    deletePizza(id)
}

function doDeleteCustomer(buttonElement){
    var tableElement = document.getElementById('customerTable')
    var index = buttonElement.parentNode.parentNode.rowIndex;
    var rowElement = buttonElement.parentNode.parentNode;
    id = rowElement.cells[0].innerHTML
    tableElement.deleteRow(index)
    deleteCustomer(id)
}

function processGetAllPizzasResponse(result){
    for (pizza of result){
        displayPizza = convertServerPizzaToDisplayPizza(pizza)
        addPizzaToTable(displayPizza)
    }
}

function processGetAllCustomersResponse(result){
    for (customer of result){
        displayCustomer = convertServerCustomertoDisplayCustomer(customer)
        addCustomerToTable(displayCustomer)
    }
}

function convertServerPizzaToDisplayPizza(pizza){
    displayPizza = {}
    displayPizza.id = pizza['id']
    displayPizza.size = pizza['size']
    displayPizza.base = pizza['base']
    displayPizza.toppings = pizza['toppings']
    displayPizza.status = pizza['status']
    displayPizza.customer = pizza['customer']
    return displayPizza
}

function convertServerCustomertoDisplayCustomer(customer){
    displayCustomer = {}
    displayCustomer.id = customer['id']
    displayCustomer.name = customer['name']
    displayCustomer.address = customer['address']
    displayCustomer.phone = customer['phone']
    displayCustomer.email = customer['email']
    return displayCustomer
}

// Code generated contextually by Copilot
// This function populates the customer select element with the customers
function populateCustomerId(result){
    var select = document.querySelector("#customerSelect")
    for (customer of result){
        let displayCustomer = convertServerCustomertoDisplayCustomer(customer)
        let option = document.createElement("option");
        option.text = displayCustomer.name;
        option.value = displayCustomer.id;
        select.appendChild(option);
    }
}

// Code generated contextually by Copilot
// This function removes all options from the customer select element
function removeOptions() {
    var selectElement = document.querySelector("#customerSelect")
    var L = selectElement.options.length - 1;
    for(i = L; i >= 0; i--) {
       selectElement.remove(i);
    }
 }

function doNothing(result){
    return "done"
}

// Reference used:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
function resolveAfterDelay(){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("done");
        }, 1000)
    });
}

function initHighcharts(){
    getSizeMetrics(processSizeMetricsResponse)
    getBaseMetrics(processBaseMetricsResponse)
}

// Reference used:
// https://www.highcharts.com/demo/highcharts/pie-chart
// Code generated contextually by Copilot
function processSizeMetricsResponse(result){
    var data1 = result.map(function(item) {
        return {
            name: item[0],
            y: item[1]
        };
    });
    Highcharts.chart({
        chart: {
            renderTo: 'container1',
            type: 'pie',
            zooming: {
                type: 'xy'
            },
            panning: {
                enabled: true,
                type: 'xy'
            },
            panKey: 'shift'
        },
        title: {
            text: 'Pizza Size Metrics'
        },
        tooltip: {
            valueSuffix: '%'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: [{
                    enabled: true,
                    distance: 20
                }, {
                    enabled: true,
                    distance: -40,
                    format: '{point.percentage:.1f}%',
                    style: {
                        fontSize: '1.2em',
                        textOutline: 'none',
                        opacity: 0.7
                    },
                    filter: {
                        operator: '>',
                        property: 'percentage',
                        value: 10
                    }
                }]
            }
        },
        series:[{
            name:'Percentage',
            colorByPoint:true,
            data:data1
        }]
    });
}

function processBaseMetricsResponse(result){
    var data2 = result.map(function(item) {
        return {
            name: item[0],
            y: item[1]
        };
    });
    Highcharts.chart({
        chart: {
            renderTo: 'container2',
            type: 'pie',
            zooming: {
                type: 'xy'
            },
            panning: {
                enabled: true,
                type: 'xy'
            },
            panKey: 'shift'
        },
        title: {
            text: 'Pizza Base Metrics'
        },
        tooltip: {
            valueSuffix: '%'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: [{
                    enabled: true,
                    distance: 20
                }, {
                    enabled: true,
                    distance: -40,
                    format: '{point.percentage:.1f}%',
                    style: {
                        fontSize: '1.2em',
                        textOutline: 'none',
                        opacity: 0.7
                    },
                    filter: {
                        operator: '>',
                        property: 'percentage',
                        value: 10
                    }
                }]
            }
        },
        series:[{
            name:'Percentage',
            colorByPoint:true,
            data:data2
        }]
    

    });
}

function showHighcharts(){
    initHighcharts()
    hideAll()
    document.getElementById('charts').style.display="inline-block"
}