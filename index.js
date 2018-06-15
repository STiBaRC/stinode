var http = require('http');
var https = require('https');
var exports = [];

exports.login = function(username, password, callback) {
	var opts = {
		hostname: "api.stibarc.gq",
		port: "443",
		path: "/createsess.sjs",
		headers: {'User-Agent': 'Mozilla/5.0'},
		method: "POST"
	}
	var req = https.request(opts, function(res) {
		var data = "";
		res.on('data', function(body) {
			data = data+body;
		});
		res.on('end', function() {
			callback(data);
		});
	});
	req.write("username="+username+"&password="+password);
	req.end();
}

exports.logout = function(sess) {
	var opts = {
		hostname: "api.stibarc.gq",
		port: "443",
		path: "/logout.sjs",
		headers: {'User-Agent': 'Mozilla/5.0'},
		method: "POST"
	}
	var req = https.request(opts, function(res) {
	});
	req.write("sess="+sess);
	req.end();
}

exports.createuser = function(user) {
	if ((user['username'] != "" && user['username'] != null && user['username'] != undefined) && (user['password'] != "" && user['password'] != null && user['password'] != undefined)) {
		var opts = {
			hostname: "api.stibarc.gq",
			port: "443",
			path: "/createuser.sjs",
			headers: {'User-Agent': 'Mozilla/5.0'},
			method: "POST"
		}
		var req = https.request(opts, function(res) {
		});
		var str = "";
		str = str + "username=" + user['username'];
		str = str + "&password=" + user['password'];
		str = str + "&password2=" + user['password'];
		if (user['email'] != undefined) {
			str = str + "&email=" + user['email'];
		}
		if (user['name'] != undefined) {
			str = str + "&name=" + user['name'];
		}
		if (user['birthday'] != undefined) {
			str = str + "&birthday=" + user['birthday'];
		}
		if (user['showemail'] != undefined) {
			str = str + "&showemail=true";
		}
		if (user['showname'] != undefined) {
			str = str + "&showname=true";
		}
		if (user['showbday'] != undefined) {
			str = str + "&showbday=true";
		}
		req.write(str);
		req.end();
	}
}

exports.updateuser = function(sess, user) {
	if (sess != "" && sess != undefined) {
		var opts = {
			hostname: "api.stibarc.gq",
			port: "443",
			path: "/updateprofile.sjs",
			headers: {'User-Agent': 'Mozilla/5.0'},
			method: "POST"
		}
		var req = https.request(opts, function(res) {
		});
		var str = "";
		str = str + "sess=" + sess;
		if (user['email'] != undefined) {
			str = str + "&email=" + user['email'];
		}
		if (user['name'] != undefined) {
			str = str + "&name=" + user['name'];
		}
		if (user['birthday'] != undefined) {
			str = str + "&birthday=" + user['birthday'];
		}
		if (user['bio'] != undefined) {
			str = str + "&bio=" + user['bio'];
		}
		if (user['showemail'] != undefined) {
			str = str + "&showemail=true";
		}
		if (user['showname'] != undefined) {
			str = str + "&showname=true";
		}
		if (user['showbday'] != undefined) {
			str = str + "&showbday=true";
		}
		if (user['showbio'] != undefined) {
			str = str + "&showbio=true";
		}
		req.write(str);
		req.end();
	}
}

exports.changepasswd = function(sess, old, newpass) {
	var opts = {
		hostname: "api.stibarc.gq",
		port: "443",
		path: "/updatepasswd.sjs",
		headers: {'User-Agent': 'Mozilla/5.0'},
		method: "POST"
	}
	var req = https.request(opts, function(res) {
	});
	req.write("sess="+sess+"&old="+old+"&new="+newpass+"&new2="+newpass);
	req.end();
}

exports.checksess = function(sess, callback) {
	var opts = {
		hostname: "api.stibarc.gq",
		port: "443",
		path: "/checksess.sjs",
		headers: {'User-Agent': 'Mozilla/5.0'},
		method: "POST"
	}
	var req = https.request(opts, function(res) {
		var data = "";
		res.on('data', function(body) {
			data = data+body;
		});
		res.on('end', function() {
			callback(data);
		});
	});
	req.write("sess="+sess);
	req.end();
}

exports.checkverify = function(id, callback) {
	var opts = {
		hostname: "api.stibarc.gq",
		port: "443",
		path: "/checkverify.sjs",
		headers: {'User-Agent': 'Mozilla/5.0'},
		method: "POST"
	}
	var req = https.request(opts, function(res) {
		var data = "";
		res.on('data', function(body) {
			data = data+body;
		});
		res.on('end', function() {
			callback(data);
		});
	});
	req.write("id="+id);
	req.end();
}

exports.post = function(sess, title, content, callback) {
	var opts = {
		hostname: "api.stibarc.gq",
		port: "443",
		path: "/postpost.sjs",
		headers: {'User-Agent': 'Mozilla/5.0'},
		method: "POST"
	}
	var req = https.request(opts, function(res) {
		var data = "";
		res.on('data', function(body) {
			data = data+body;
		});
		res.on('end', function() {
			callback(data);
		});
	});
	req.write("sess="+sess+"&title="+encodeURIComponent(title)+"&content="+encodeURIComponent(content.replace(/%0A/g, "%0D%0A")));
	req.end();
}

exports.editpost = function(sess, id, title, content, callback) {
	var opts = {
		hostname: "api.stibarc.gq",
		port: "443",
		path: "/editpost.sjs",
		headers: {'User-Agent': 'Mozilla/5.0'},
		method: "POST"
	}
	var req = https.request(opts, function(res) {
		var data = "";
		res.on('data', function(body) {
			data = data+body;
		});
		res.on('end', function() {
			callback(data);
		});
	});
	req.write("sess="+sess+"&id="+id+"&title="+encodeURIComponent(title)+"&content="+encodeURIComponent(content.replace(/%0A/g, "%0D%0A")));
	req.end();
}

exports.getpost = function(id, callback) {
	var opts = {
		hostname: "api.stibarc.gq",
		port: "443",
		path: "/getpost.sjs",
		headers: {'User-Agent': 'Mozilla/5.0'},
		method: "POST"
	}
	var req = https.request(opts, function(res) {
		var data = "";
		res.on('data', function(body) {
			data = data+body;
		});
		res.on('end', function() {
			callback(JSON.parse(data));
		});
	});
	req.write("id="+id);
	req.end();
}

exports.comment = function(sess, id, content, callback) {
	var opts = {
		hostname: "api.stibarc.gq",
		port: "443",
		path: "/newcomment.sjs",
		headers: {'User-Agent': 'Mozilla/5.0'},
		method: "POST"
	}
	var req = https.request(opts, function(res) {
		var data = "";
		res.on('data', function(body) {
			data = data+body;
		});
		res.on('end', function() {
			callback(data);
		});
	});
	req.write("sess="+sess+"&postid="+id+"&content="+encodeURIComponent(content.replace(/%0A/g, "%0D%0A")));
	req.end();
}

exports.getcomments = function(id, callback) {
	var opts = {
		hostname: "api.stibarc.gq",
		port: "443",
		path: "/getcomments.sjs",
		headers: {'User-Agent': 'Mozilla/5.0'},
		method: "POST"
	}
	var req = https.request(opts, function(res) {
		var data = "";
		res.on('data', function(body) {
			data = data+body;
		});
		res.on('end', function() {
			callback(JSON.parse(data));
		});
	});
	req.write("id="+id);
	req.end();
}

exports.getposts = function(callback) {
	var opts = {
		hostname: "api.stibarc.gq",
		port: "443",
		path: "getposts.sjs",
		headers: {'User-Agent': 'Mozilla/5.0'},
		method: "GET"
	}
	var req = https.request(opts, function(res) {
		var data = "";
		res.on('data', function(body) {
			data = data+body;
		});
		res.on('end', function() {
			callback(data.split("\n"));
		});
	});
	req.write("");
	req.end();
}

exports.gettitle = function(id, callback) {
	var opts = {
		hostname: "api.stibarc.gq",
		port: "443",
		path: "/gettitle.sjs",
		headers: {'User-Agent': 'Mozilla/5.0'},
		method: "POST"
	}
	var req = https.request(opts, function(res) {
		var data = "";
		res.on('data', function(body) {
			data = data+body;
		});
		res.on('end', function() {
			callback(data);
		});
	});
	req.write("id="+id);
	req.end();
}

exports.getuser = function(id, callback) {
	var opts = {
		hostname: "api.stibarc.gq",
		port: "443",
		path: "/v2/getuser.sjs",
		headers: {'User-Agent': 'Mozilla/5.0'},
		method: "POST"
	}
	var req = https.request(opts, function(res) {
		var data = "";
		res.on('data', function(body) {
			data = data+body;
		});
		res.on('end', function() {
			callback(JSON.parse(data));
		});
	});
	req.write("id="+id);
	req.end();
}

exports.getusername = function(sess, callback) {
	var opts = {
		hostname: "api.stibarc.gq",
		port: "443",
		path: "/getusername.sjs",
		headers: {'User-Agent': 'Mozilla/5.0'},
		method: "POST"
	}
	var req = https.request(opts, function(res) {
		var data = "";
		res.on('data', function(body) {
			data = data+body;
		});
		res.on('end', function() {
			callback(data);
		});
	});
	req.write("sess="+sess);
	req.end();
}

exports.getuserposts = function(id, callback) {
	var opts = {
		hostname: "api.stibarc.gq",
		port: "443",
		path: "/getuserposts.sjs",
		headers: {'User-Agent': 'Mozilla/5.0'},
		method: "POST"
	}
	var req = https.request(opts, function(res) {
		var data = "";
		res.on('data', function(body) {
			data = data+body;
		});
		res.on('end', function() {
			callback(data.split("\n"));
		});
	});
	req.write("id="+id);
	req.end();
}

exports.search = function(q, callback) {
	var opts = {
		hostname: "api.stibarc.gq",
		port: "443",
		path: "/postsearch.sjs",
		headers: {'User-Agent': 'Mozilla/5.0'},
		method: "POST"
	}
	var req = https.request(opts, function(res) {
		var data = "";
		res.on('data', function(body) {
			data = data+body;
		});
		res.on('end', function() {
			callback(data.split("\n"));
		});
	});
	req.write("q="+q);
	req.end();
}

exports.getnotifs = function(callback) {
	var opts = {
		hostname: "api.stibarc.gq",
		port: "443",
		path: "/getnotifs.sjs",
		headers: {'User-Agent': 'Mozilla/5.0'},
		method: "POST"
	}
	var req = https.request(opts, function(res) {
		var data = "";
		res.on('data', function(body) {
			data = data+body;
		});
		res.on('end', function() {
			callback(data.split("\n"));
		});
	});
	req.write("");
	req.end();
}

exports.getusernotifs = function(id, callback) {
	var opts = {
		hostname: "api.stibarc.gq",
		port: "443",
		path: "/getusernotifs.sjs",
		headers: {'User-Agent': 'Mozilla/5.0'},
		method: "POST"
	}
	var req = https.request(opts, function(res) {
		var data = "";
		res.on('data', function(body) {
			data = data+body;
		});
		res.on('end', function() {
			callback(data.split("\n"));
		});
	});
	req.write("id="+id);
	req.end();
}

exports.getimage = function(id, callback) {
	var opts = {
		hostname: "api.stibarc.gq",
		port: "443",
		path: "/getimage.sjs",
		headers: {'User-Agent': 'Mozilla/5.0'},
		method: "POST"
	}
	var req = https.request(opts, function(res) {
		var data = "";
		res.on('data', function(body) {
			data = data+body;
		});
		res.on('end', function() {
			callback(data);
		});
	});
	req.write("id="+id);
	req.end();
}

exports.saveimage = function(id, filename) {
	var opts = {
		hostname: "api.stibarc.gq",
		port: "443",
		path: "/getimage.sjs",
		headers: {'User-Agent': 'Mozilla/5.0'},
		method: "POST"
	}
	var req = https.request(opts, function(res) {
		var data = "";
		res.on('data', function(body) {
			data = data+body;
		});
		res.on('end', function() {
			var b64string = data.split(";base64,")[1];
			var buf = Buffer.from(b64string, 'base64');
			var fs = require('fs');
			if (filename == undefined || filename == "") {
				var ext = data.split("data:image/")[1].split(";base64,")[0];
				filename = "image."+ext;
			}
			fs.writeFileSync(filename, buf, 'binary');
		});
	});
	req.write("id="+id);
	req.end();
}

module.exports = exports;