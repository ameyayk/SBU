
/*
 * GET home page.
 */

exports.displayAll = function(req, res){
    res.render('buyer', { title: 'Buyer' });
};