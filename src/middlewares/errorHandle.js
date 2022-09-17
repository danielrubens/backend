module.exports = (err, _req, res, _next) => {
  if (err.statusCode === undefined) {
    console.log(err);
    return res.status(500).json({ message: 'Internal server error' });
  }
  console.log(err);
  const { statusCode, message, stack } = err;
  console.log(stack);
  res.status(statusCode).json({ message });
};