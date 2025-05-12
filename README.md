# Web Services and Applications Project
by Céaman Collins

# Project Brief

Write a program that demonstrates that you understand creating and consuming RESTful APIs.

# Project Description

The project I have chosen to do is a pizza customer and order databases that refer to each other and can be read by the user and customer registration and pizza odering interfaces that can be filled out by the user. Additionally the app contains metrics with a pie chart that shows the popularity of the different types of pizza.

The project contains 6 files, splitting the functional parts into more readily accessible parts. The conf file, containing passwords and login details for the DAO, or data access object, the second file, that contains all of the code that communicates with the databases. The third file is the flask server which enables outside communication with the database. Fourth is the html file that creates a user interface for the project, allowing CRUD operations through a web browser by way of the flask server and DAO. The javascript file that contains all the javascript to provide functionality to the webpage. Finally a style sheet that sets things like colours and margains for the elements of the html. Additionally you will find this readme and an image that is used on the web interface.

# Additional information

This project was started in another repository which can be found [here](https://github.com/CeamanCollins/wsaa-coursework) in the project section so some of the inital commits are missing from this repository.

# Hosting

Please find working example at https://ceamancollins.pythonanywhere.com/index.html. It may give an error on the first load, if this happens please refresh.

You can view pizzas [here](https://ceamancollins.pythonanywhere.com/pizzas).
You can view customers [here](https://ceamancollins.pythonanywhere.com/customers).

You can view specific [customers](https://ceamancollins.pythonanywhere.com/customers/1) or [pizzas](https://ceamancollins.pythonanywhere.com/pizzas/1) by adding the id after a forwardslash.