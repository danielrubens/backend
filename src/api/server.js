const app = require('./app');

const PORT = process.env.PORT_BACKEND || 5001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}.
  Ctrl+C to stop server`);
});
