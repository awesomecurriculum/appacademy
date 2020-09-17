app.get('/logout', async (req, res) => {
  res.clearCookie('token');
  return res.redirect('/');
});
