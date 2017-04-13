// Passport Routes  
router.get('/auth/provider', passport.authenticate('provider'));  
router.get('/auth/provider/callback',  
    passport.authenticate('provider', { successRedirect: '/',  
                                        failureRedirect: '/login'}));