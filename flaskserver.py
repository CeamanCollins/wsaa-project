from flask import Flask, url_for, request, redirect, abort
import dao

app = Flask(__name__, static_url_path='', static_folder='staticpages')

@app.route('/')
def index():
    return "Welcome to speedy pizzas, try /pizzas or /menu"

@app.route('/customers', methods=['GET'])
def get_all_customers():
    return dao.studentDAO.getAllCustomers()

@app.route('/customers/<int:id>', methods=['GET'])
def find_customer_by_id(id):
    return dao.studentDAO.findCustomerByID(id)

#create
@app.route('/customers', methods=['POST'])
def create_customer():
    jsonstring = request.json
    return dao.studentDAO.createCusomter(jsonstring)

#update
@app.route('/customers/<int:id>', methods=['PUT'])
def update_customer(id):
    jsonstring = request.json
    return dao.studentDAO.updateCustomer(jsonstring)

#delete
@app.route('/customers/<int:id>', methods=['DELETE'])
def delete_customer(id):
    return dao.studentDAO.deleteCustomer(id)

@app.route('/pizzas', methods=['GET'])
def get_all_pizzas():
    return dao.studentDAO.getAllPizzas()

@app.route('/pizzas/<int:id>', methods=['GET'])
def find_pizza_by_id(id):
    return dao.studentDAO.findPizzaByID(id)

#create
@app.route('/pizzas', methods=['POST'])
def create_pizza():
    jsonstring = request.json
    return dao.studentDAO.createPizza(jsonstring)

#update
@app.route('/pizzas/<int:id>', methods=['PUT'])
def update_pizza(id):
    jsonstring = request.json
    return dao.studentDAO.updatePizza(jsonstring)

#delete
@app.route('/pizzas/<int:id>', methods=['DELETE'])
def delete_pizza(id):
    return dao.studentDAO.deletePizza(id)

if __name__ == "__main__":
    app.run(debug=True)

