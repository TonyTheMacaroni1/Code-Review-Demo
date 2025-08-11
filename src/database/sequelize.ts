import { Sequelize, SequelizeOptions } from 'sequelize-typescript';
import config from 'config';
import { Options, PoolOptions } from 'sequelize';
import { models } from './models';

const {
  database,
  dialect,
  dialectOptions,
  host,
  logging,
  longRunningPool,
  password,
  pool,
  port,
  username,
}: Options & { longRunningPool: PoolOptions } = config.get(`database`);

const databaseOptions: SequelizeOptions = {
  database,
  define: {
    underscored: true,
  },
  dialect,
  dialectOptions: {
    multipleStatements: true,
    useUTC: true,
    ...dialectOptions,
  },
  host,
  // eslint-disable-next-line no-console
  logging: logging ? console.log : false,
  minifyAliases: dialect === `postgres`,
  models,
  password,
  pool,
  port,
  username,
};

export const sequelize = new Sequelize(databaseOptions);

export default sequelize;
