import { Users } from '../../database/models';

export const getUser = async (id) => await Users.findByPk(id).then(result => result.get({plain: true}))