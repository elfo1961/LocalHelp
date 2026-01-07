# LocalHelp

A multilingual community help & services app built with Ionic + Angular.

## Initial Languages
- Spanish (first release)
- English
- Brazilian Portuguese

## High-level Features (BDD with Jasmine and Karma specs)
### describe('LocalHelp App', () => {
####  describe('Startup', () => {
-    it('should show a splash page on startup', () => {});
-    it('should check for internet connectivity', () => {});
####  });

####  describe('Language', () => {
-    it('should allow users to choose a language', () => {});
-    it('should allow users to switch languages at any time', () => {});
####  });

####  describe('Authentication', () => {
-    it('should allow users to login', () => {});
-    it('should allow users to register', () => {});
####  });

####  describe('User Profile', () => {
-    it('should allow logged-in users to edit their profile', () => {});
####  });

####  describe('Help Requests', () => {
-    it('should allow users to view help requests', () => {});
-    it('should allow logged-in users to create help requests', () => {});
-    it('should allow logged-in users to filter help requests', () => {});
-    it('should allow logged-in users to edit their help requests', () => {});
-    it('should allow logged-in users to delete their help requests', () => {});
####  });

#### describe('Service Offers', () => {
-    it('should allow users to view service offers', () => {});
-    it('should allow logged-in users to create service offers', () => {});
-    it('should allow logged-in users to filter service offers', () => {});
-    it('should allow logged-in users to edit their service offers', () => {});
-    it('should allow logged-in users to delete their service offers', () => {});
####  });

####  describe('Categories', () => {
-    it('should allow logged-in users to search existing subcategories', () => {});
-    it('should suggest matching subcategories as the user types', () => {});
-    it('should allow users to create a new subcategory if no match is found', () => {});
-    it('should prevent duplicate subcategories', () => {});
####  });

### });