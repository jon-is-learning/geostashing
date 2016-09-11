module.exports = {
  signup(username, pass, callback) {
    const cb = callback;

    if (localStorage.token) {
      console.log('There is a token!');
      if (cb) {
        console.log('There is a callback!');
        cb(true);

        return;
      }

      this.onChange(true);

      return;
    }


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
          success: (dbuser) => {
            
          },
          error: function(err) {
            console.log(err);
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
    // delete localStorage.token;
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
  }
};
