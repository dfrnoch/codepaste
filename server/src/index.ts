import express, { RequestHandler } from "express";
import helmet from "helmet";
import routes from "./routes/v1";
import compression from "compression";
// import { connect } from "mongoose";
// import { dbConnection } from "./databases";

const app: express.Application = express();

const PORT = process.env.PORT || 3000;

// security HTTP headers
app.use(helmet());

app.use(express.json() as RequestHandler);
app.use(express.urlencoded({ extended: true }) as RequestHandler);
app.use(compression());

app.use("/v1", routes);

app.listen(PORT, () => {
  console.log(`server started at http://localhost:${PORT}`);
});

// connect(dbConnection.url, dbConnection.options);
