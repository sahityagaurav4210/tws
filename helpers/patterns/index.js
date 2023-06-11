const Patterns = Object.freeze({
  email: new RegExp(
    /(^[a-zA-Z0-9\.\_\-]{3,}[\@]{1}[a-z]{4,}[\.]{1}[a-z]{3,}$)/
  ),
  password: new RegExp(/(^[A-Za-z0-9\@\$\#]{8,}$)/),
});

module.exports = Patterns;
