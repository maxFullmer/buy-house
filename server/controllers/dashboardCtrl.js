

module.exports = {
    gethouseList: (req, res) => {
        const db = req.app.get('db');
        
        db.get_houseList().then(houseList => {
            res.status(200).send(houseList)
        })
    },

    gethouseInfo: (req, res) => {
        const db = req.app.get('db');
        const {id} = req.params;

        db.get_houseInfo([id]).then(house => {
            res.status(200).send(house)
        })
    },

    // update_houseInfo(): (req, res) => {
    //     const db = req.app.get('db');
    // }
}