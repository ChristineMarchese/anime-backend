const app = require('./app');

app.listen(3333, () => {
    console.log(`I'm listening at PORT 3333`);
})

// your server must be running in order to make a request