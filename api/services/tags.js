const { tagsDao } = require('../dao/index');

async function getTagsList () {
    const tags = await tagsDao.getTagsList();
    return {
        data: tags
    };
}

module.exports = {
    getTagsList
}