
/*
 * GET home page.
 */

exports.register = function(req, res){
    res.render('supplier', { title: 'Supplier' });
};
exports.sample = function(req, res){
    res.render('sample');
};




exports.fileUpload=function(req,res){
    console.log(req.body);
    console.log(req.files);
}