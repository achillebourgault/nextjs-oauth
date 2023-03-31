import passport from "passport";
import passportSteam from "passport-steam";

const SteamStrategy = passportSteam.Strategy;

passport.serializeUser(function(user, done) {
	done(null, user);
});

passport.deserializeUser(function(obj, done) {
	done(null, obj);
});

passport.use(new SteamStrategy({
	returnURL: `${process.env.DOMAIN}/api/auth/return`,
	realm: `${process.env.DOMAIN}`,
	apiKey: `${process.env.STEAM_API_KEY}`
}, (_, profile, done) => {
	// If you want to fetch more data, do it here.
	return done(null, profile);
}));

export default passport;
