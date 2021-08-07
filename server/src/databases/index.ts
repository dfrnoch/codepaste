import config from "../configs/main.json";
import { dbConfig } from "../interfaces/db.interface";

const { host, port, database }: dbConfig = config.get("dbConfig");

export const dbConnection = {
  url: `mongodb://${host}:${port}/${database}`,
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  },
};
