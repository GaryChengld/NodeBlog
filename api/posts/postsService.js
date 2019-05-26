const post = {
    title: 'theTitle',
    content: 'theContent'
};

const findById = (id) => {
    console.log("find post by id, id=" + id);
    return new Promise(function (resolve, reject) {
        resolve(post);
    });
};

module.exports = {
    findById
};