import { Model, ModelCtor } from 'sequelize-typescript';
import * as _models from '.';

export * from './users';

export const models: ModelCtor[] = (Object.values(_models) as ModelCtor[])
  .filter(model => !!model && model?.prototype instanceof Model);
