function ensureIsAdmin(req, res, next) {
  if (req.auth.payload.isAdmin) {
    return next();
  } else {
    return res.status(401).json({ msg: "You need Admin credentials in order to continue" });
  }
}

module.exports = ensureIsAdmin;
