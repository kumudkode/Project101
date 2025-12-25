Nodemon is use for automatically restarting the node application when file changes in the directory are detected. It is a development tool that helps to improve productivity by eliminating the need to manually stop and start the server every time a change is made to the code.

Lets see how to install and use nodemon:
1. First, you need to install nodemon globally on your system using npm. Open your terminal or command prompt and run the following command:
   npm install -g nodemon

2. Once nodemon is installed, you can use it to run your Node.js application. Instead of using the node command to start your application, use the nodemon command followed by the name of your main JavaScript file. For example, if your main file is app.js, you would run:

like before we were keep typing node script.js
now we now just type:
   nodemon app.js

3. Nodemon will start your application and monitor the files in the directory for any changes. If you make any changes to your code and save the file, nodemon will automatically restart the application for you.
