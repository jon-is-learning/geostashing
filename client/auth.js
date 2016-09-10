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

    // const usersSignIn = new Request('/api/users',
    // {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     username: username,
    //     password: pass
    //   }),
    //   headers: { 'content-type': 'application/json'}
    // });

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
    return localStorage.token;
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
    // return !!localStorage.token;
  }
};
