This is a take home project given to me by Symphony Commerce. The challenge was to create a simple store page from a given product feed.

Instruction:
1. clone repo
2. npm install
3. start server: node server.js
4. In browser input: http://localhost:3000/

Tech stack- 
Frontend:
angualar - I used angular as the main framework for this project. To complete this challenge I needed to fetch data from https://sneakpeeq-sites.s3.amazonaws.com/interviews/ce/feeds/store.js and angular has a service called $http that helped me fetch the data and I parse the data and display it with the controller that I have built.

Now that I have retrieved the item data that I wanted, the next problem I need to solve was to display the data with the HTML document. How angular helped me solve this problem cleverly is with the ng-repeat directive and because I had 6 items total from the aggregated data I was able to write a card template once and have ng-repeat directive repeat that snippet of code 6 times, therefore, I wouldn't have to write it multiple times, therefore following the DRY principle.

Another problem with the data that I retrieved was that the price of the item was in pennies and the problem is that no one wants to look at a price tag defined in pennies. How I solved this problem was using angular's currency filter. I also created a custom filter for the name of the item because some item name all capitalized and I wanted to make all the item name consistent.

Bonus question: I created a custom filter to test if an item is less than twenty dollars(less than 1999 pennies) and I created a checkbox when clicked will apply the rest of the logic in order filter out the items that are less than $20 on the store page. 


angular-ui-router - I used ui-router to create a single page application. Ui-router changes the interface of the application based on the state without reloading the page. I created a navigation bar with home and store and when clicked it will change the state params(ui-sref), therefore dynamically changing the page.

bootstrap - I used bootstrap for minimal styling and I also created my own styles.css to override some of the styles that come with bootstrap.

Backend: 
express - I created my server using express. I set up my view engine, middleware, and router.

express-ejs-layouts - Override the default behavior of response.render()

ejs - Used embeded JavaScript to display and persist my initial page(layout.ejs).

body-parser - parse incoming data to JSON

nodemon - I used nodemon to start my server and to monitor any changes to my code source, therefore I wouldn't have to manually restart my server everytime I make changes.

path - I used path to join the root directory with my public directory to serve my static files.

Style guide for commit message: http://karma-runner.github.io/1.0/dev/git-commit-msg.html
