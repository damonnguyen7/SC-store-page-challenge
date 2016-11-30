module.exports = {
  landingPage: function(req, res) {
    res.render('layout');
  },
  home: function(req, res) {
    console.log('at home page!');
  },
  store: function(req, res) {
    console.log('at store page!')
  }
}