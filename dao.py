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
    def createCusomter(self, values):
        cursor = self.getCursor()
        sql = "INSERT INTO customers (Name, Address, Phone, Email) values (%s, %s, %s, %s)"
        cursor.execute(sql, values)
        self.connection.commit()
        newid = cursor.lastrowid
        self.closeAll()
        return newid
    def getAllCustomers(self):
        cursor = self.getCursor()
        sql = "select * from customers"
        cursor.execute(sql)
        result = cursor.fetchall()
        self.closeAll()
        return result
    def findCustomerByID(self, id):
        cursor = self.getCursor()
        sql = "select * from customers where ID = %s"
        values = [id]
        cursor.execute(sql, values)
        result = cursor.fetchall()
        self.closeAll()
        return result 
    def updateCustomer(self, values):
        cursor = self.getCursor()
        sql = "UPDATE customers SET name = %s, address = %s, phone = %s, email = %s WHERE id = %s"
        cursor.execute(sql,values)
        self.connection.commit()
        self.closeAll()
        return "Update done!"
    def deleteCustomer(self, id):
        cursor = self.getCursor()
        sql = "DELETE FROM customers WHERE ID = %s"
        values = [id]
        cursor.execute(sql,values)
        self.closeAll()
        return "Deleted"
    def createPizza(self, values):
        cursor = self.getCursor()
        sql = "INSERT INTO pizzas (size, base, toppings, customer) values (%s, %s, %s, %s)"
        cursor.execute(sql, values)
        self.connection.commit()
        newid = cursor.lastrowid
        self.closeAll()
        return newid
    def getAllPizzas(self):
        cursor = self.getCursor()
        sql = "select * from pizzas"
        cursor.execute(sql)
        result = cursor.fetchall()
        self.closeAll()
        return result
    def findPizzaByID(self, id):
        cursor = self.getCursor()
        sql = "select * from pizzas where ID = %s"
        values = [id]
        cursor.execute(sql,values)
        result = cursor.fetchall()
        self.closeAll()
        return result 
    def updatePizza(self, values):
        cursor = self.getCursor()
        sql = "UPDATE pizzas SET size= %s, base = %s, toppings = %s, customer = %s WHERE id = %s"
        cursor.execute(sql,values)
        self.connection.commit()
        self.closeAll()
        return "Update done!"
    def deletePizza(self, id):
        cursor = self.getCursor()
        sql = "DELETE FROM pizzas WHERE ID = %s"
        values = [id]
        cursor.execute(sql,values)
        self.closeAll()
        return "Deleted"

studentDAO = StudentDAO()