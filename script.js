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
            "url" : "/customers/"+customer.id,
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
            "url" : "/customers/"+customer.id,
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
            "url" : "/pizzas/"+pizza.id,
            "method": "POST",
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
    document.getElementById('registerForm').style.display="block"
}
function showOrderForm(){
    hideAll()
    document.getElementById('orderForm').style.display="block"
}
function showUpdatePizza(){
    hideAll()
    document.getElementById('orderForm').style.display="block"
}
function showUpdateCustomer(){
    document.getElementById('viewAllPizzas').style.display="none"
    document.getElementById('viewAllCustomers').style.display="none"
    document.getElementById('registerForm').style.display="none"
    document.getElementById('orderForm').style.display="block"
}
function showCreateCustomer(){
    document.getElementById('')
}

function processGetAllPizzas(result){
console.log("in process")
console.log(result)
}
getAllPizzas(processGetAllPizzas)
//getAll()
