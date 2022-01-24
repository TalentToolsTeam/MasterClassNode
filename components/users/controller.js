module.exports.getMessage = async () => {
    return `Hello World`;
};

module.exports.getCustomMessage = async (vars) => {
    return `Hello ${vars.name}`;
};