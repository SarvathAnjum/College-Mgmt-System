const passport = require("passport"); //authentication middleware used in Node js
const GoogleStrategy = require("passport-google-oauth20").Strategy; //a plug-in for Passport to enable "Login with Google".

//After successful login, Passport calls serializeUser to determine what data should be stored in the session (i.e., in the cookie). Here the entire user object is stored in the cookie
passport.serializeUser((user, done) => {
  done(null, user);
});

//On every request after login, Passport will call deserializeUser to retrieve the user data from the session.
//Restoring the entire user from the session into req.user.
passport.deserializeUser((user, done) => {
  done(null, user);
});

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.CALLBACK_URL,
    },
    (accessToken, refreshToken, profile, done) => {
      return done(null, profile);
    }
  )
);

//Summary
// | Component           | Purpose                                                |
// | serializeUser       | Save user info into session                            |
// | deserializeUser     | Retrieve user info from session                        |
// | GoogleStrategy      | Handles login via Google                               |
// | done(null, profile) | Finishes the login process and passes user data onward |
