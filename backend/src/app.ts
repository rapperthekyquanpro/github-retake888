import express from 'express';
import 'express-async-errors'
import { json } from 'body-parser';
import cookieSession from 'cookie-session';

// import { currentUserRouter } from './routes/current-user';
import { signinRouter } from './routers/signin';
import { signupRouter } from './routers/signup';
// import { signoutRouter } from './routes/signout';
import { NotFoundError } from './errors/not-found-error';
import { errorHandler } from './middlewares/error-handler';

const app = express();
app.set('trust proxy', true);
app.use(json());
app.use(
    cookieSession({
        signed: false,
        secure: true
    })
);

// app.use(currentUserRouter);
app.use(signinRouter);
app.use(signupRouter);
// app.use(signoutRouter);

app.all('*', async (req, res) => {
    throw new NotFoundError();
  });

app.use(errorHandler);

export { app }