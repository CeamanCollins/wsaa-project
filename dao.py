import mysql.connector
import conf

class StudentDAO:
    host = ""
    user = ""
    password = ""
    database = ""
    connection = ""
    cursor =""

    def __init__(self):
        self.host=conf.sql['host']
        self.user=conf.sql['user']
        self.password=conf.sql['password']
        self.database=conf.sql['database']

    def getCursor(self):
        self.connection = mysql.connector.connect(
        host=self.host,
        user=self.user,
        password=self.password,
        database=self.database
        )
        self.cursor = self.connection.cursor()
        return self.cursor
    
    def closeAll(self):
        self.connection.close()
        self.cursor.close()

    def createCusomter(self, customer):
        values = (customer['name'], customer['address'], customer['phone'], customer['email'])
        cursor = self.getCursor()
        sql = "INSERT INTO customers (Name, Address, Phone, Email) values (%s, %s, %s, %s)"
        cursor.execute(sql, values)
        newid = cursor.lastrowid
        customer['id'] = newid
        self.connection.commit()
        self.closeAll()
        return customer
    
    def getAllCustomers(self):
        cursor = self.getCursor()
        sql = "select * from customers"
        cursor.execute(sql)
        result = cursor.fetchall()
        self.closeAll()
        result = self.convertToDict(result)
        return result
    
    def findCustomerByID(self, id):
        cursor = self.getCursor()
        sql = "select * from customers where ID = %s"
        values = (id,)
        cursor.execute(sql, values)
        result = cursor.fetchall()
        self.closeAll()
        return result
    
    def updateCustomer(self, customer):
        values = (customer['name'], customer['address'], customer['phone'], customer['email'], customer['id'])
        cursor = self.getCursor()
        sql = "UPDATE customers SET name = %s, address = %s, phone = %s, email = %s WHERE id = %s"
        cursor.execute(sql,values)
        self.connection.commit()
        self.closeAll()
        return "Update done!"
    
    def deleteCustomer(self, id):
        cursor = self.getCursor()
        sql = "DELETE FROM customers WHERE ID = %s"
        values = (id,)
        cursor.execute(sql,values)
        self.connection.commit()
        self.closeAll()
        return "Deleted"
    
    def createPizza(self, pizza):
        cursor = self.getCursor()
        values=(pizza['size'], pizza['base'], pizza['toppings'], pizza['status'], pizza['customer'])
        sql = "INSERT INTO pizzas (Size, Base, Toppings, Status, Customer) values (%s, %s, %s, %s, %s)"
        cursor.execute(sql, values)
        newid = cursor.lastrowid
        pizza["id"] = newid
        self.connection.commit()
        self.closeAll()
        return pizza
    
    def getAllPizzas(self):
        cursor = self.getCursor()
        sql = "select * from pizzas"
        cursor.execute(sql)
        result = cursor.fetchall()
        self.closeAll()
        result = self.convertPizzaToDict(result)
        return result
    
    def findPizzaByID(self, id):
        cursor = self.getCursor()
        sql = "select * from pizzas where ID = %s"
        values = (id,)
        cursor.execute(sql,values)
        result = cursor.fetchall()
        self.closeAll()
        result = self.convertPizzaToDict(result)
        return result
    
    def updatePizza(self, pizza):
        cursor = self.getCursor()
        values = (pizza['size'], pizza['base'], pizza['toppings'], pizza['status'], pizza['customer'], pizza['id'])
        sql = "UPDATE pizzas SET Size = %s, Base = %s, Toppings = %s, Status = %s, Customer = %s WHERE ID = %s"
        cursor.execute(sql,values)
        self.connection.commit()
        self.closeAll()
        return "Update done!"
    
    def deletePizza(self, id):
        cursor = self.getCursor()
        sql = "DELETE FROM pizzas WHERE ID = %s"
        values = (id,)
        cursor.execute(sql,values)
        self.connection.commit()
        self.closeAll()
        return "Deleted"
    
    def getSizeMetrics(self):
        cursor = self.getCursor()
        sql = "SELECT size, COUNT(size) FROM pizzas GROUP BY size;"
        cursor.execute(sql)
        result = cursor.fetchall()
        self.closeAll()
        return result
    
    def getBaseMetrics(self):
        cursor = self.getCursor()
        sql = "SELECT base, COUNT(base) FROM pizzas GROUP BY base;"
        cursor.execute(sql)
        result = cursor.fetchall()
        self.closeAll()
        return result

    def convertCustomerToDict(self, data):
        result = []
        for row in data:
            result.append({
                'id': row[0],
                'name': row[1],
                'address': row[2],
                'phone': row[3],
                'email': row[4]
            })
        return result
    
    def convertPizzaToDict(self, data):
        result = []
        for row in data:
            result.append({
                'id': row[0],
                'size': row[1],
                'base': row[2],
                'toppings': row[3],
                'status': row[4],
                'customer': row[5]
            })
        return result

studentDAO = StudentDAO()