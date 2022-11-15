function ensureIsAdmin(req, res, next) {
  if (req.auth.payload.isAdmin) {
    console.log("ensured");
    return next();
  } else {
    console.log("not ensured");
    return res.status(401).json({ msg: "You need Admin credentials in order to continue" });
  }
}

module.exports = ensureIsAdmin;
