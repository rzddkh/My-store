# MyStore

It is a front end of an e-commerce website for an imaginary store built using Angular.
It can be combined with the previous project(store front api) as a full stack project.

Auth0 has been implemented into this project so you can make your own username and password or sign in using popular social media or services such as Gmail, Facebook, etc.
To place an order, you must sign in; without signing in you can only put items into the cart. You will give a confirmation after your order has been placed. Please do not enter credit card information but you have to the put minimum requirements for the form to be able to submit.

## Components, Services and Flow of the application

### Components:

- Cart component: It is responsible for showing the items that has been added to the cart, their prices and counts, form validation and submiting the order. It is data is provided by _cart service_.

- Confirmation component: It is responsible for showing the purchased items and their counts. It gives confirmation to the customer that their order has been accepted. It is data is provided by _cart service_.

- Page not found component: It is responsible to inform the customer that the address that they have entered is not valid.

- Product-item component: It is the child of _product-list_ component. It will show the items provided by the _product-list_ and add the items to the cart using _cart service_.

- Product-item-details: It will provide more information about each item. Items can be add to the cart in this component as well using _cart service_. It is data is provided by _data service_.

- Product-list component: It is the parent component for _product-item_ and it provides item's data to the product-item component. This component gets its data from _data servic_.

### Services:

- Cart service: It is responible for adding and removing items from the cart, providing total number of items in the cart and providing data to any component that needs to manipulate the cart data.

- Data service: It is responsible for providing the inital data to the application, such as item's name, picture, price, etc.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
