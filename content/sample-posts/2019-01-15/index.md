---
title: "Cookbook"
cover: "https://i.gyazo.com/51e676e81da0754f2696a0e173f8b651.png"
author: "casper"
date: "2018-12-10"
category: "Project"
tags:
    - react
    - apollo
    - graphql
    - less
    - prisma
---

[<img src="https://raw.githubusercontent.com/Lambda-School-Labs/Labs8-Cookbook/master/cookbook/src/designs/Logo/LogoWithTextBlue.png">](https://www.your-cookbook.us/)    
###### Click logo to view Cookbook

##### Team:
 * Vu Cao
 * Katie Gorbell
 * Arthur Pisakhov
 * Braden Walker

Cookbook is a web application centered around extracting recipes you find online and scheduling them for dates as well as meal times. Functionality includes a grocery list of ingredients to buy and step-by-step guide on creating each meal plan! Personal focus was on the Database(Prisma) and connection of Front-End to Back-End (Apollo).

With Cookbook, you can save recipes from any website onto your account to view all in one place. Recipes can be scheduled for any number of dates and meal of the day. You can view all information about a recipe including scheduled time, cook time, servings, ingredients, and instructions. Recipes from allrecipes.com and geniuskitchen.com support a checklist for the list of instructions. You can also view a calendar that shows when all of your recipes are scheduled. You can reschedule recipes and copy the previous week’s recipes for easy scheduling! If you choose to support the Cookbook team by purchasing a subscription through the Settings page, you can generate a grocery list for any date range of recipes that are from allrecipes.com or geniuskitchen.com.

Users can add a recipe they find online into our app and our scraper will retrieve all the necessary data for that recipe and store it in our
backend server. Users can modify the meal and date of each recipe and as well as a generated grocery check-list for premium members.

##### Stack:
- React.js:
    - Based on **reusable components** to build an entire app
    - Allows each team member to work on a separate component at one time
    - High performance with the **virtual DOM**
    - Powerful **dev tools** for faster debugging
    - Stable future. It’s backed by a **strong company** and has a **large community**
    - **Code is shared** between web and mobile apps

- Apollo Client:
    - Works well with React.js due to use of components
    - **Tracks `loading` and `error` states** automatically so we can easily handle each
    - Comes with an **intelligent cache** out of the box, so data is normalized and consistent across components
    - Apollo Links make the client extensible to accomodate more advanced features.
    - GraphQL Client that sends a query request to server. After server responds it will feed the data back to Apollo which will then pass it back into our frontend client(React).

- LESS:
    - **Variables** keep styling consistent and allow for easy app-wide changes
    - **Mixins** allow styling to be reused and makes code DRY
    - **Nesting** elements greatly organizes code and maximizes readability
    - Values can be calculated with **arithmetic operations**

- GraphQL:
    - GraphQL the identity is separate from how you fetch it, whereas in REST API the endpoint you call is the identity of that object.
    - Useful in our specific project because certain endpoints have different id’s based on recipe or ingredients involved.
    - Can traverse from the entry point to related data while in REST you have multiple endpoints to call to fetch these related data’s. Especially prominent in our project because many recipes will have a common ingredient amongst one another. eg; salt.

- Prisma:
    -  Prisma **supports many of the popular known databases** such as MySQL, MongoDB, PostgreSQL, etc. 
    - Prisma acts as the bridge between all the databases and the backend server, GraphQL. It can access multiple databases simultaneously and simplifies that use by letting the user read and write data to the database using their preferred programming language. 
    - Prisma analyses our database schema and **generates a user-friendly data-model** that can easily generate mutations and queries. 
    - Prisma also turns our DB into a **GraphQL API**.
    - **No boilerplate** for CRUD or filters.


<iframe width="560" height="315" src="https://www.youtube.com/embed/kwAseuJUqoI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>