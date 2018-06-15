# stinode
A module for interacting with the STiBaRC web API

# User stuff

## Logging in
A lot of functions, such as commenting or posting, will require you to log in. To log into STiBaRC, you first need an account. If you already have an account, you can log in using the ``login`` function.

``stibarc.login(username, password, callback(c))``

Example:
```
var stibarc = require('stibarc');
var sess = "";
stibarc.login("username", "password", function(c) {
	console.log(c); //C is the session key you will use later. Save it for later.
	sess = c;
});
```

## Registering users
If you don't already have an account, or wish to create one using the API, you use the ``createuser`` function.

``stibarc.createuser(user);``

Example:
```
var stibarc = require('stibarc');
var user = {
	username: "username", //required
	password: "password", //also required
	email: "email", //optional
	name: "name", //optional
	birthday: "bday", //optional
	showemail: "true", //optional, if you don't want it to show, simply don't include it. It will always show if it is present
	showname: "true", //optional, if you don't want it to show, simply don't include it. It will always show if it is present
	showbday: "true" //optional, if you don't want it to show, simply don't include it. It will always show if it is present
}
stibarc.createuser(user);
```

## Updating existing users
If you wish to update an existing account, use the ``updateuser`` function.

``stibarc.updateuser(sess, user);``

Example:
```
var stibarc = require('stibarc');
var sess = "abcdefghijk"; //Session key you retrieved earlier
var user = {
	username: "username", //required
	password: "password", //also required
	email: "email", //optional
	name: "name", //optional
	birthday: "bday", //optional
	bio: "Oofie", //optional
	showemail: "true", //optional, if you don't want it to show, simply don't include it. It will always show if it is present
	showname: "true", //optional, if you don't want it to show, simply don't include it. It will always show if it is present
	showbday: "true", //optional, if you don't want it to show, simply don't include it. It will always show if it is present
	showbio: "true" //optional, if you don't want it to show, simply don't include it. It will always show if it is present
}
stibarc.updateuser(sess, user);
```

## Changing passwords
If you wish to change the password of an account, use the ``changepasswd`` function.

``stibarc.changepasswd(sess, old, newpass);``

Example:
```
var stibarc = require('stibarc');
var sess = "abcdefghijk"; //Session key you retrieved earlier
stibarc.changepasswd(sess, "oldpassword", "newpassword");
```

## Checking if a session is valid

```
var stibarc = require('stibarc');
var sess = "abcdefghijk"; //Session key you retrieved earlier
stibarc.checksess(sess, function(c) {
	console.log(c); //returns good or bad
});
```

## Logging out

```
var stibarc = require('stibarc');
var sess = "abcdefghijk"; //Session key you retrieved earlier
stibarc.logout(sess);
```
