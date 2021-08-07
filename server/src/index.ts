import express from "express";
import helmet from "helmet";
import routes from "./routes/v1";
import compression from "compression";

const app: express.Application = express();

const PORT = process.env.PORT || 3000;

// security HTTP headers
app.use(helmet());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(compression());

app.use("/v1", routes);

app.listen(PORT, () => {
  console.log(`server started at http://localhost:${PORT}`);
});
