import { Users } from '../../database/models';

export const getUser = async (id) => await Users.findByPk(id).then(result => result.get({plain: true}))

export const getUserFirstAndLastName = async (id) => {
    const first_name = await Users.findAll({
        where: { id },
    }).then(result => result[0].first_name)

        const last_name = Users.findAll({
        where: { id },
    }).then(result => result[0].lastName);

    console.log(first_name + ` ` + last_name);

    return first_name + ` ` + last_name;
} 