//#region CONSTANTS
const express = require('express');
const morgan = require('morgan');
const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');
const serverRouter = require('./routes/serverRoutes');

const app = express();
//#endregion

//#region MIDDLEWARES
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}
app.use(express.json());

/*
express.static: URL'deki /public kısmına gerek kalmadan public klasörüne erişim verir.
For example, if there's an image file at /public/images/logo.png, it can be accessed using the URL http://yourserver.com/images/logo.png
*/
app.use(express.static(`${__dirname}/public`));
app.use((req, res, next) => {
    console.log('Hello from the middleware 👋');
    next();
});

app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    next();
});
//#endregion

//#region ROUTERS
//mounting the routers: kod kalabalığını önlemek için, endpointlerin gruplanması
app.use('/ping', serverRouter);
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);
//#endregion

module.exports = app;
//#endregion