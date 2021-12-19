exports.isUser = function(req, res, next) {
    if(req.isAuthenticated()) {
        next();
    } else {
        req.flash('danger', 'Please log in.');
        res.redirect('/users/customer/login');
    }
}

exports.isFarmer = function(req, res, next) {
    if(req.isAuthenticated() && res.locals.user.admin == 2) {
        next();
    } else {
        req.flash('danger', 'Please log in.');
        res.redirect('/users/farmer/login');
    }
}

exports.isAuthority = function(req, res, next) {
    if(req.isAuthenticated() && res.locals.user.admin == 3) {
        next();
    } else {
        req.flash('danger', 'Please log in.');
        res.redirect('/users/farmer/login');
    }
}

exports.isAdmin = function(req, res, next) {
    if(req.isAuthenticated() && res.locals.user.admin == 1) {
        next();
    } else {
        req.flash('danger', 'Please log in as admin.');
        res.redirect('/users/customer/login');
    }
}