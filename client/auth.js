module.exports = {
  signup(username, pass, callback) {
    const cb = callback;

    if (document.cookie) {
      if (cb) {
        console.log('There is a callback!');
        cb(true);

        return;
      }

      this.onChange(true);

      return;
    }

    const endpoint = '/api/users';

    /*global $*/
    $.ajax({
      url: endpoint,
      method: 'POST',
      data: {
        user: username,
        password: pass
      },
      success: () => {
        if (cb) {
          cb(true);

          return;
        }
        this.onChange(true);
      },
      error: (err) => {
        console.log(err);
        if (cb) {
          cb(false);

          return;
        }
      }
    });

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
        if (cb) {
          cb(true);

          return;
        }
        this.onChange(true);
      },
      error: (err) => {
        console.log(err);
        if (cb) {
          cb(false);

          return;
        }
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
    return Boolean(document.cookie);
  },

  deleteAllCookies() {
    const cookies = document.cookie.split(';');

    for (let index = 0; index < cookies.length; index += index + 1) {
      const cookie = cookies[index];
      const eqPos = cookie.indexOf('=');
      const notFound = -1;

      const name = eqPos > notFound
        ? cookie.substr(0, eqPos)
        : cookie;

      document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT`;
    }
  }
};
