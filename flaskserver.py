from flask import Flask, url_for, request, redirect, abort, render_template
import dao

app = Flask(__name__, static_url_path='', static_folder='./')

# Reference used: https://stackoverflow.com/questions/54446080/how-to-keep-order-of-sorted-dictionary-passed-to-jsonify-function
app.json.sort_keys = False

@app.route('/')
def index():
    return redirect(url_for('static', filename='index.html'))

#read
@app.route('/customers', methods=['GET'])
def get_all_customers():
    return dao.studentDAO.getAllCustomers()

@app.route('/customers/<int:id>', methods=['GET'])
def find_customer_by_id(id):
    return dao.studentDAO.findCustomerByID(id)

#create
@app.route('/customers/', methods=['POST'])
def create_customer():
    jsonstring = request.json
    return dao.studentDAO.createCusomter(jsonstring)

#update
@app.route('/customers/', methods=['PUT'])
def update_customer():
    jsonstring = request.json
    return dao.studentDAO.updateCustomer(jsonstring)

#delete
@app.route('/customers/<int:id>', methods=['DELETE'])
def delete_customer(id):
    return dao.studentDAO.deleteCustomer(id)

#read
@app.route('/pizzas', methods=['GET'])
def get_all_pizzas():
    return dao.studentDAO.getAllPizzas()

@app.route('/pizzas/<int:id>', methods=['GET'])
def find_pizza_by_id(id):
    return dao.studentDAO.findPizzaByID(id)

#create
@app.route('/pizzas/', methods=['POST'])
def create_pizza():
    jsonstring = request.json
    return dao.studentDAO.createPizza(jsonstring)

#update
@app.route('/pizzas/', methods=['PUT'])
def update_pizza():
    jsonstring = request.json
    return dao.studentDAO.updatePizza(jsonstring)

#delete
@app.route('/pizzas/<int:id>', methods=['DELETE'])
def delete_pizza(id):
    return dao.studentDAO.deletePizza(id)

#metrics
@app.route('/basemetrics', methods=['GET'])
def get_metrics():
    return dao.studentDAO.getBaseMetrics()

@app.route('/sizemetrics', methods=['GET'])
def get_size_metrics():
    return dao.studentDAO.getSizeMetrics()

if __name__ == "__main__":
    app.run(debug=True)

