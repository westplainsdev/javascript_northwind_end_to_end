# Server Shell with Angular SPA'S #

## Server Technology ##

While building out this application, we used a number of different technologies, almost all of them JavaScript based. For example, the site itself is hosted on a Node.js  web server which runs on top of Google's V8 rendering engine. Additional libraries are included using node_modules from the main NPM repository. The Express  middleware has been included. This gives us the ability to have handle requests and responses from a client web browser.

The handing of marking up requested pages falls to an NPM package called ExpressHandlebars . This particular package uses the common Handlebars  templating library to allow the pages to have sections easily data bound to data found on the server side of things. The standard Express view engine (Jade) has been replaced with a server side rendition of Handlebars which still gives the application a master layout page along with variable partial pages.

## Look and Feel ##

To give give the site a nice appearance, Bootstrap 3.x  has been included. The site is using some default markup from Bootstrap for the top menu and the bottom footer. Along with the color and typeface given to us from Bootstrap, the site is also mobile responsive by default due to Bootstraps mobile first incentive.

## Plug and Play with Single Page Applications ##

Moving further up the stack, AngularJS  has been included in this example. As you work through the different sections and start to see more line of business style pages such as an address book and a shopping cart, you will have found where we keep the AngularJS applications. To keep the development of each application simple we've stuck to the single responsibility principal of each single page application (SPA). Hence, if you see an address book, you will only be managing addresses, not making purchases. In reverse, if you're buying items from a shopping cart, you will not be managing addresses. In this fashion we feel that the frame work allows many different SPA's to be created and used in a plug and play fashion. As a final note, all of the AngularJS applications use the more common 3rd party navigation called UI Router.

## Server Side Directories ##
The directory structure of the application is straight forward in design with a configuration folder for the server configuration, npm's nodule folder for local storage of all npm packages used by the server. A public folder which holds the Angular applications, CSS files, additional assets, and a vendor folder for client facing items such as Angular itself. 

There are also a routes folder and a views folder, both of which support the node server. The routes folder contains files for api routes, navigation routes, and application start page routes. 

In the views folder, you will find sub folders for the holding the start pages of the Angular applications, a layouts folder which contain the sites over all physical layout. Partial pages which are server rendered page templates and which typically do not contain Angular code. Last you will find an index page and a generic error page living in the root of the views folder. 

## Client Side Directories  ##
Each single page application is a stand alone project. Because of the nature of the setup, there are a few points which couple the shell with each SPA. One, the start up pages for each SPA are actually located under the Views folder and not in the Public folder. This setup allows the shell application to spin up each startup page when a certain navigation route is selected. Speaking of routing, there is a specific application.js file in the Routes folder which handles the URL routing and which startup page to associate with at runtime. Third, in the main layout, there is a global navigation which has links to each of the SPA's which can be run through the shell. Outside of these three areas, there is very little else which connects the SPA's to the shell. 

Each single page application has its own app.js file. This is the core of the local navigation, configuration and any runtime setup. Angular.js and associated library files come from the Vendor's folder located in the root of the Public folder. Items in the Vendors folder are shared between the SPA's. 

Inside each single page application, we have created folder for features of the application so that controllers and templates are located together. Data access is a folder which contains angular services which may talk to the node server's API layer, or which can talk to 3rd application servers. 

Directive folders will hold any specific Angular UI created items, whereas the Services folders will generally hold files which have specific business logic associated within a SPA. 

## Summary ##
Over all the Shell with Angular application approach allows one to have not only server generated pages, but also allows you the developer to have separate Angular applications for each section of your application. This gives you a separation of concerns which makes development easier in some aspects, allows you to have somewhat better memory management in that they individual applications load and unload on route change. For those applications which are not a true SPA, but are actually a suite of applications, using this approach maybe of a benefit to rapid development and long term maintainability. 