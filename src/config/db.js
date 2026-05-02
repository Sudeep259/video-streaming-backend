import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
  "video_app",
  "root",
  "newpassword", // replace
  {
    host: "localhost",
    port: 3306,
    dialect: "mysql",
  }
);