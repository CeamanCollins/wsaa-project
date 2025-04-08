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
            "url" : "/customers",
            "method": "POST",
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
function updateCustomer(customer, callback){
    $.ajax(
        {
            "url" : "/customers/"+customer.id,
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
                console.log(result);
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
                addPizzaToTable(result)
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
            "url" : "/pizzas/"+pizza.id,
            "method": "PUT",
            "data": JSON.stringify(pizza),
            "dataType": "JSON",
            contentType: "application/json; charset=utf-8",
            "success": function(result){
                callback(result)
                var tableElement = document.getElementById('pizzaTable')
                var rowElement = tableElement.
                addPizzaToTable(result)
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
                console.log(result);
                callback(result)
            },
            "error": function(xhr,status,error){
                console.log("error: "+status+" message: "+error);
            }
        }
    );
}
function hideAll(){
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
    form.querySelector('input[name="customer"]').value=''
    form.querySelector('select[name="status"]').value='ordered'
}
function showViewAllPizzas(){
    hideAll()
    document.getElementById('viewAllPizzas').style.display="block"
}
function showViewAllCustomers(){
    hideAll()
    document.getElementById('viewAllCustomers').style.display="block"
}
function showRegisterForm(){
    hideAll()
    clearRegisterForm()
    document.getElementById('registerForm').style.display="block"
}
function showOrderForm(){
    hideAll()
    clearOrderForm()
    document.getElementById('orderInputID').style.display="none"
    document.getElementById('updateLabelPizza').style.display="none"
    document.getElementById('orderForm').style.display="block"
    document.getElementById('orderForm').querySelector('select[name="status"]').value = "ordered"
    document.getElementById('orderForm').querySelector('select[name="status"]').disabled=true
}
function showUpdatePizza(button){
    hideAll()
    document.getElementById('orderInputID').style.display="block"
    document.getElementById('updateLabelPizza').style.display="block"
    document.getElementById('orderForm').style.display="block"
    document.getElementById('doCreatePizzaButton').style.display="none"
    document.getElementById('doUpdatePizzaButton').style.display="block"
    document.getElementById('orderForm').querySelector('select[name="status"]').disabled=false
    var rowElement = button.parentNode.parentNode
    pizza = getPizzaFromRow(rowElement)
    populateFormWithPizza(pizza)
}
function showUpdateCustomer(button){
    hideAll()
    document.getElementById('registerInputID').style.display="block"
    document.getElementById('registerForm').style.display="block"
    var rowElement = button.parentNode.parentNode
    customer = getCustomerFromRow(rowElement)
    populateFormWithCustomer(customer)
}
function showCreateCustomer(){
    hideAll()
    document.getElementById('registerForm').style.display="block"
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
function populateFormWithPizza(pizza){
    var form = document.getElementById('orderForm')
    form.querySelector('input[name="orderId"]').disabled = true
    form.querySelector('input[name="orderId"]').value = pizza.id
    form.querySelector('select[name="size"]').value = pizza.size
    form.querySelector('select[name="base"]').value = pizza.base
    form.querySelector('input[name="toppings"]').value = pizza.toppings
    form.querySelector('select[name="status"]').disabled = pizza.status
    form.querySelector('select[name="status"]').disabled = false
    form.querySelector('select[name="customer"]').value = pizza.customer
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
function populateFormWithCustomer(customer){
    var form = document.getElementById('registerForm')
    form.querySelector('input[name="id"]').disabled = true
    form.querySelector('input[name="id"]').value = customer.id
    form.querySelector('input[name="name"]').value = customer.name
    form.querySelector('input[name="address"]').value = customer.address
    form.querySelector('input[name="phone"]').value = customer.phone
    form.querySelector('input[name="email"]').value = customer.email
}
// function doDeletePizza(buttonElement){
//     var tableElement = document.getElementById('pizzaTable')
//     var index = buttonElement.parentNode.parentNode.rowIndex;
//     tableElement.deleteRow(index)
// }
// function doDeleteCustomer(buttonElement){
//     var tableElement = document.getElementById('customerTable')
//     var index = buttonElement.parentNode.parentNode.rowIndex;
//     tableElement.deleteRow(index)
// }
function doUpdatePizza(buttonElement){
    var pizza = getPizzaFromForm()
    var rowElement = document.getElementById('pizza'+pizza.id)
    setPizzaInRow(rowElement,pizza)
    updatePizza(pizza)
    showViewAllPizzas()
}
function doUpdateCustomer(buttonElement){
    var customer = getCustomerFromForm()
    var rowElement = document.getElementById('customer'+customer.id)
    setPizzaInRow(rowElement,pizza)
    updateCustomer(customer)
    showViewAllCustomers()
}
function setPizzaInRow(rowElement, pizza){
    rowElement.cells[0] = pizza.id
    rowElement.cells[1] = pizza.size 
    rowElement.cells[2] = pizza.base
    rowElement.cells[3] = pizza.toppings
    rowElement.cells[4] = pizza.status
    rowElement.cells[5] = pizza.customer
}
function setCustomerinRow(rowElement, customer){
    rowElement.cells[0] = customer.id
    rowElement.cells[1] = customer.name
    rowElement.cells[2] = customer.address
    rowElement.cells[3] = customer.phone
    rowElement.cells[4] = customer.email
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
    form.querySelector('input[name="customer"]').value = pizza.customer
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
    pizza.customer = form.querySelector('input[name="customer"]').value
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
    return pizza
}
function addPizzaToTable(pizza){
    var tableElement = document.getElementById('pizzaTable')
    var rowElement = tableElement.insertRow(-1)
    
    rowElement.setAttribute('pizzaId',pizza.id)
    
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
    cell6.innerHTML = '<button onclick=doDeletePizza(this)>delete</button>'
}
function addCustomerToTable(customer){
    var tableElement = document.getElementById('customerTable')
    var rowElement = tableElement.insertRow(-1)

    rowElement.setAttribute('customerId',customer.id)

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
    cell6.innerHTML = '<button onclick=doDeleteCustomer(this)>delete</button>'
}
function doCreatePizza(){
    pizza = getPizzaFromForm()
    console.log(JSON.stringify(pizza))
    createPizza(pizza, doNothing())
    addPizzaToTable(pizza)
    showViewAllPizzas()
}
function doCreateCustomer(){
    customer = getCustomerFromForm()
    console.log(JSON.stringify(customer))
    addCustomerToTable(customer)
    showViewAllCustomers()
    createCustomer(customer)
}
function doDeletePizza(buttonElement){
    var tableElement = document.getElementById('pizzaTable')
    var index = buttonElement.parentNode.parentNode.rowIndex;
    var rowElement = buttonElement.parentNode.parentNode;
    id = rowElement.getAttribute('pizzaId')
    tableElement.deleteRow(index)
    deletePizza(id)
}
function doDeleteCustomer(buttonElement){
    var tableElement = document.getElementById('customerTable')
    var index = buttonElement.parentNode.parentNode.rowIndex;
    var rowElement = buttonElement.parentNode.parentNode;
    id = rowElement.getAttribute('customerId')
    tableElement.deleteRow(index)
    deleteCustomer(id)
}
function processGetAllPizzas(result){
    console.log(result)
}
function processGetAllCustomers(result){
    console.log(result)
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
    displayPizza.id = pizza[0]
    displayPizza.size = pizza[1]
    displayPizza.base = pizza[2]
    displayPizza.toppings = pizza[3]
    displayPizza.status = pizza[4]
    displayPizza.customer = pizza[5]
    return displayPizza
}
function convertServerCustomertoDisplayCustomer(customer){
    displayCustomer = {}
    displayCustomer.id = customer[0]
    displayCustomer.name = customer[1]
    displayCustomer.address = customer[2]
    displayCustomer.phone = customer[3]
    displayCustomer.email = customer[4]
    return displayCustomer
}
function doNothing(result){
    console.log("nothing:"+result)
    return "done"
}
