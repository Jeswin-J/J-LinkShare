const { getLinkbyId, getLinks } = require("../services/dbRead");
const { deleteLinkbyId, writeLink } = require("../services/dbWrite");

function generateId() {
    return Math.floor(1000 + Math.random() * 9000);
}


exports.shareLink = async (req, res) => {

    const { url, duration } = req.body;

    let linkId = generateId();

    const newLink = {
        'id': linkId,
        'creationTime': new Date().getTime(),
        'url': url,
        'duration': duration,
    }

    writeLink(newLink)
    .then(result => {
        console.log(result);
        if (result.success) {
            res.status(200).json({ message: 'Link Shared successfully', id: result.id });
        } else {
            res.status(500).json({ error: 'Error Sharing Link... Please try again after sometime!' });
        }
    })
    .catch(error => {
        console.error('Error writing link to the database:', error);
        res.status(500).json({ error: 'Error Sharing link!' });
    });
}


exports.viewLink = async (req, res) => {
    const { id } = req.body;

    try {
        const item = await getLinkbyId(id);
        if (item.success && item.data.url) {

            const timestamp = item.data.creationTime;
            const date = new Date(timestamp);
            const year = date.getFullYear();
            const month = String(date.getMonth() + 1).padStart(2, '0');
            const day = String(date.getDate()).padStart(2, '0');
            const hours = String(date.getHours()).padStart(2, '0');
            const minutes = String(date.getMinutes()).padStart(2, '0');
            const seconds = String(date.getSeconds()).padStart(2, '0');
            const created_on = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

            res.status(200).json({ url: item.data.url, created_on: created_on });
        } else {
            res.status(400).json({ error: 'Invalid Passkey' });
        }
    } catch (error) {
        console.error('Error retrieving link:', error);
        res.status(500).json({ error: 'Error retrieving link' });
    }
}

