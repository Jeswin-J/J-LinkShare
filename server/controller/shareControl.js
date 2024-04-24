const { getLinkbyId, getLinks } = require("../services/dbRead");
const { deleteLinkbyId, writeLink } = require("../services/dbWrite");

function generateId() {
    return Math.floor(1000 + Math.random() * 9000);
}


exports.shareLink = async (req, res) => {

    const { url, description } = req.body;
    
    console.log("\n////// --  POST REQUEST TO SHARE LINK  -- //////\n");

    let linkId = generateId();

    const newLink = {
        'id': linkId,
        'creationTime': new Date().getTime(),
        'url': url,
        'description': description,
    }

    writeLink(newLink)
    .then(result => {
        console.log(result);
        if (result.success) {
            res.status(200).json({ message: 'Link Shared successfully', access_key: result.id });
        } else {
            res.status(500).json({ error: 'Error Sharing Link... Please try again after sometime!' });
        }
    })
    .catch(error => {
        console.log("\n////// --  ERROR WRITING TO DB  -- //////\n");
        res.status(500).json({ error: 'Error Sharing link!' });
    });
}


exports.viewLink = async (req, res) => {
    const { accessKey } = req.body;

    console.log("\n////// -->  POST REQUEST TO VIEW LINK  <-- //////\n");

    try {
        const item = await getLinkbyId(accessKey);
        console.log(item);
        if (item.success && item.data.url) {

            const timestamp = item.data.creationTime;
            const date = new Date(timestamp);
            const year = date.getFullYear();
            const month = String(date.getMonth() + 1).padStart(2, '0');
            const day = String(date.getDate()).padStart(2, '0');
            const hours = String(date.getHours()).padStart(2, '0');
            const minutes = String(date.getMinutes()).padStart(2, '0');
            const seconds = String(date.getSeconds()).padStart(2, '0');
            const created_on = `${day}-${month}-${year}`;
            const created_at = `${hours}:${minutes}:${seconds} Hrs`;

            res.status(200).json({ 
                url: item.data.url, 
                description: item.data.description, 
                created_on: created_on,
                created_at: created_at });
        } else {
            res.status(400).json({ error: 'Invalid Passkey' });
        }
    } catch (error) {
        console.log("\n////// -->  ERROR RETRIEVING LINK FROM DB <-- //////\n");
        res.status(500).json({ error: 'Error retrieving link' });
    }
}

