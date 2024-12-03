# MyStore

## Table of Contents

- [About](#about)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installing](#installing)
- [Components, Services and Flow of the application](#components-services-and-flow-of-the-application)
  - [Components](#components)
  - [Services](#services)
- [Build](#build)
- [Running unit tests](#running-unit-tests)
- [Running end-to-end tests](#running-end-to-end-tests)
- [Further help](#further-help)

## About

It is a front end of an e-commerce website for an imaginary store. It is built using Angular.

It can be combined with the _(store front api project)_ as a full stack project.

You will give a confirmation after your order has been placed. Please do not enter real credit card information but you have to the put minimum requirements for the form to be able to submit and place an order.

## Getting Started

### Prerequisites

- npm

```
npm install npm@latest -g
```

- Auth0

  Auth0 has been implemented into this project so you can make your own username and password or sign in using popular social media or services such as Gmail, Facebook, etc.

  To place an order, you must sign in; without signing in you can only put items into the cart.

### Installing

Step by step intallation guide to run and test the project.

1. Clone the repository:

```
git clone https://github.com/rzddkh/My-store.git
```

2. Install npm packages

```
npm install
```

3. Run the development server

```
ng serve
```

4. Navigate to `http://localhost:4200/`

## Components, Services and Flow of the application

### Components:

- Cart component: <br>
  It is responsible for showing the items that has been added to the cart, their prices and counts, form validation and submiting the order. It is data is provided by _cart service_.

- Confirmation component:<br>
  It is responsible for showing the purchased items and their counts. It gives confirmation to the customer that their order has been accepted. It is data is provided by _cart service_.

- Page not found component:<br>
  It is responsible to inform the customer that the address that they have entered is not valid.

- Product-item component:<br>
  It is the child of _product-list_ component. It will show the items provided by the _product-list_ and add the items to the cart using _cart service_.

- Product-item-details:<br>
  It will provide more information about each item. Items can be add to the cart in this component as well using _cart service_. It is data is provided by _data service_.

- Product-list component:<br>
  It is the parent component for _product-item_ and it provides item's data to the _product-item_ component. This component gets its data from _data service_.

### Services:

- Cart service:<br>
  It is responible for adding and removing items from the cart, providing total number of items in the cart and providing data to any component that needs to manipulate the cart data.

- Data service:<br>
  It is responsible for providing the inital data to the application, such as item's name, picture, price, etc.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
