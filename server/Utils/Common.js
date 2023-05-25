const terminateProcess = () => {
    process.exit(1);
}

const normalizeMongoDocument = (document) => {
    return JSON.parse(JSON.stringify(document));
}

const cleanUser = (user) => {
    let cleanedUser = {...user};
    delete cleanedUser._id
    delete cleanedUser.password
    delete cleanedUser.address
    delete cleanedUser.orders
    delete cleanedUser.payments
    delete cleanedUser.createdAt
    delete cleanedUser.updatedAt
    delete cleanedUser.__v
    return cleanedUser;
}

module.exports = {
    terminateProcess,
    normalizeMongoDocument,
    cleanUser
}