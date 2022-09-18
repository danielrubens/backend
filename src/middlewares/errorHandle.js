module.exports = (err, _req, res, _next) => {
  console.log(err);
  if (err.statusCode === undefined) {
    return res.status(500).json({ message: 'Internal server error' });
  }
  const { statusCode, message } = err;
  res.status(statusCode).json({ message });
};