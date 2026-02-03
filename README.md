# LocalHelp

A cross-platform, multilingual community help & services app built with Ionic + Angular.
The app allows users to request help or offer services in their local area.

## Initial Languages
- Spanish (first release)
- English
- German
- Brazilian Portuguese

## High-level Features (BDD with Jasmine and Karma specs)
describe('LocalHelp App', () => {
    
    describe('Startup', () => {
      it('should show a splash page on startup');
      it('should check for internet connectivity');
    });  // done

    describe('The Splash Page', () => {
      it('should allow users to choose the language for the app interface');
      it('should allow users to access the login/registration form');
      it('should allow users to access the credits page');
      it('should allow users to see the subscription plans');
    });

    describe('The connectivity service', () => {
      it('Checks the current connectivity status synchronously'); 
      it('Notifies the app whenever connectivity changes');
      it('Reacts to browser‑level events such as online and offline');
      it('Uses the environment’s navigator.onLine value as its initial state');
      it('Exposes a stream of connectivity changes that other parts of the app can subscribe to');
      it('Integrates native connectivity detection via Capacitor when available');
    }); // done

    describe('Language', () => {
        it('should allow users to choose a language');
        it('should allow users to switch languages at any time');
        it('should allow users to translate posts into their language');
    });

    describe('Authentication', () => {
        it('should allow users to login');
        it('should allow users to register');
        it('should load the user preferences');
    });

    describe('User Profile', () => {
        it('should allow logged-in users to edit their profile');
        it('should allow logged-in users to save their preferences');
    });

    describe('Help Requests', () => {
        it('should allow users to view help requests');
        it('should allow logged-in users to create help requests');
        it('should allow logged-in users to filter help requests');
        it('should allow logged-in users to edit their help requests');
        it('should allow logged-in users to delete their help requests');
    });

    describe('Service Offers', () => {
        it('should allow users to view service offers');
        it('should allow logged-in users to create service offers');
        it('should allow logged-in users to filter service offers');
        it('should allow logged-in users to edit their service offers');
        it('should allow logged-in users to delete their service offers');
    });

    describe('Categories', () => {
        it('should allow logged-in users to search existing subcategories');
        it('should suggest matching subcategories as the user types');
        it('should allow users to create a new subcategory if no match is found');
        it('should prevent duplicate subcategories');
    });

    describe('Navigation Menu', () => {
        it('should display a burger-menu icon in the top-left corner of the header');
        it('should open the left-side navbar when the burger-menu icon is tapped');
        it('should close the navbar when the user taps outside the menu');
        it('should close the navbar when the user selects a menu item');
    });
});
