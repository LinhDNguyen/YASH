Router.configure({
  layoutTemplate: 'main',
});

Router.route('/', {
  name: 'home',
  template: 'home',
});

Router.route('/register', {
  name: 'register',
  template: 'register',
  layoutTemplate: 'plain',
});

Router.route('/login', {
  name: 'login',
  template: 'login',
  layoutTemplate: 'plain',
});

Router.onBeforeAction(function () {
  if (!Meteor.user() && !Meteor.loggingIn()) {
      this.redirect('/login');
  } else {
      // required by Iron to process the route handler
      this.next();
  }
}, {
    except: ['login','register']
});
