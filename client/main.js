Template.login.events({
    'click .btn-signin': function(event){
        event.preventDefault();
        var username = $('[type=username]').val();
        var password = $('[type=password]').val();
        Meteor.loginWithPassword(username, password, function(error){
            if(error){
                console.log(error.reason);
            } else {
                Router.go("home");
            }
        });
    }
});

Template.header.events({
    'click .btn-signout': function(){
        event.preventDefault();
        Meteor.logout();
        Router.go('login');
    }
})

Template.register.events({
    'click .btn-signup': function(event){
        event.preventDefault();
        var username = $('[type=username]').val();
        var email = $('[type=email]').val();
        var password = $('[type=password]').val();
        var re_password = $('[name=re_password]').val();

        if (password == re_password){
            Accounts.createUser({
                username: username,
                password: password,
                email: email
            }, function(error){
                if(error){
                    console.log(error.reason); // Output error if registration fails
                } else {
                    Router.go("home"); // Redirect user if registration succeeds
                }
            });
        }
        else
        {
            alert("passwords does not match");
        }
    }
});