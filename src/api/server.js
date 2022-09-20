const app = require('./app');

const PORT = process.env.PORT_BACK || 4000;

console.log(process.env);

app.listen(PORT, () => {
  console.log(`
  ***************************
  Server running on port ${PORT}
  CTRL+C to stop server......
  ***************************
  `);
});
