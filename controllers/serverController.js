//#region ROUTE HANDLERS
exports.pingServer = (req, res) => {
    res.status(200).json({
        status: 'success',
        message: 'pong 🏓'
    });
};
//#endregion
