## Welcome to Becoming Plant Based

Plant based nutrition is quickly becoming a popular way of eating for numerous reasons.  The Becoming Plant Based application assists users in calculating their nutritional needs based on their own height, weight, and activity level.  With this application the user is also able to see recipes with particular nutritional qualities, search for recipes, and add their own favorite recipes to their profile.  Users can also research more about plant based nutrition through links to documentaries and informational websites.

The target users for this application are people new to plant based eating or those wanting to continue this lifestyle.



## Home
Users begin at the home page where they are asked to log in or register through the 0Auth process.
![logIn](C:\Users\newforce37\workspace\capstone\my-app\public\logIn.jpg)
Once logged in the user is directed to their personal dashboard where they must enter their personal data to see their individual calculations.
Upon submitting this information the user is directed to a personal nutrition report.
![input](public\inputForm.gif)

## Personal Nutrition Report

On the user's report they can see the total calories, grams of protein, fat, carbohydrates and several micronutrients. The user can also click on the see recipes button to see recipes by nutrient.
![report](./home/report.jpg)
## Recipes

If the user clicks on the recipes tab in the navigation bar they will see several choices to see all recipes, search for new recipes, see their own saved recipes, or add a recipe of their own.
![recipes](./home/recipes.jpg)
When the user chooses to search for a new recipe, they can enter a keyword like soup or rice, and they will see results of ten recipes matching that search term.
To add a recipe, the user will enter a title, a corresponding url for the
recipe, and drop down menus to select meal type and nutrients included in the recipe.
![add recipe](./home/addrecipe.jpg)

## Resources

When the resources tab is clicked the user will be directed to a list of links for various documentaries and informational websites.
![resources](.home/resources.jpg)
## TECHNICAL NOTES

I used React Bootstrap and Microlinks for styling, Charts-js for graphs, and Select for the dropdown menus.

This project was built with the following:

*  [React](https://www.reactjs.org "React's Homepage")
*  [React Bootstrap](https://react-bootstrap.github.io/ "Bootstrap Homepage")
*  [Microlinks](https://microlink.io/docs/sdk/integrations/react)
*  [ChartsJs](https://www.chartjs.org/docs/latest/)
*  [React Select](https://react-select.com/home)


### Using this APP

Fork the directory from https://github.com/jengwen/Plant-Based-Nutrition-App to your own local repository.



You will need to install the following to run the program locally:

```npm install
npm install --save react-chartjs-2 chart.js
npm install @microlink/react styled-components --save
npm install react-select
```
In the project directory, you can run:

```npm start```

Which runs the app in the development mode.
Open http://localhost:3000 to view it in the browser. The page will reload if you make edits.
You will also see any lint errors in the console.

You must also run the following command in a separate command prompt to initiate the database. These steps will let you run a json server with the nutrition.json from the api directory, and allow all of the fetch calls in modules to interact with that data. ```
cd api
json-server -p 5001 -w nutrition.json
```

## Author

This application was created by Jennifer Johnson see more <https://github.com/jengwen>











