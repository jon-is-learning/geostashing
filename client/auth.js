module.exports = {
  signup(username, pass, callback) {
    const cb = callback;

    if (document.cookie) {
      console.log('There is a token!');
      if (cb) {
        console.log('There is a callback!');
        cb(true);

        return;
      }

      this.onChange(true);

      return;
    }

    const endpoint = `/api/users`;

    $.ajax({
      url: endpoint,
      method: 'POST',
      data: {
        user: username,
        password: pass
      },
      success: (user) => {
        if(cb) { cb(true); }
        this.onChange(true);
      },
      error: function(err) {
        console.log(err);
        if(cb) { cb(false); }
      }
    });


    // const usersSignUp = new Request ('api/users', {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     username: username,
    //     password: pass
    //   }),
    //   headers: { 'content-type' : 'application/json' }
    // })
  },

  login(username, pass, callback) {
    const cb = callback;

    //Look to see if a session(cookie) is assigned
    if (document.cookie) {
      if (cb) {
        cb(true);

        return;
      }
      this.onChange(true);

      return;
    }

    //Make a request to endpoint /api/users/:name
    const endpoint = `/api/users/${username}`;

    $.ajax({
      url: endpoint,
      method: 'POST',
      success: (user) => {
        console.log(user);
        if(cb) { cb(true); }
        this.onChange(true);
      },
      error: function(err) {
        console.log(err);
        if(cb) { cb(false); }
      }
    });

    // const usersSignIn = new Request(endpoint,
    //   {
    //     method: 'POST',
    //     body: JSON.stringify({
    //       username: username,
    //       password: pass
    //     }),
    //     headers: { 'content-type': 'application/json' }
    //   });

    // fetch(usersSignIn)
    //   .then((dbuser) => {
    //     localStorage.token = dbuser;
    //     if(cb) { cb(true); }
    //     this.onChange(true);
    //   })
    //   .catch((err)=> {
    //     if(cb) { cb(false); }
    //     this.onChange(false);
    //   })


  },

  getToken() {
    //This will be get session cookie
    return document.cookie;
  },

  logout(cb) {
    this.deleteAllCookies();
    if (cb) {
      cb();

      return;
    }
    this.onChange(false);

    return;
  },

  loggedIn() {
    //document.cookie instead of localStorage
    return !!document.cookie;
  },

  deleteAllCookies() {
      var cookies = document.cookie.split(";");

      for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
      }
  }
};
