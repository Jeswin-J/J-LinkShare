import { getLinkbyId, getLinks } from "../services/dbRead";
import { deleteLinkbyId, writeLink } from "../services/dbWrite";

function generateId() {
    return Math.floor(1000 + Math.random() * 9000);
}


function checkIdExists(id) {
    const link = getLinkbyId(id);
    if (link) {
        const currentTime = new Date().getTime();
        const linkTime = new Date(link.creationTime).getTime();
        const durationInHours = (currentTime - linkTime) / (1000 * 60 * 60);

        if (durationInHours > link.duration || durationInHours > 6) {
            deleteLinkById(id);
            return false;
        }
        return true; 
    }
    return false;
}


exports.shareLink = async (req, res) => {

    const { url, duration } = req.body;

    let linkId;
    do {
        linkId = generateId();
    } while (!checkIdExists(linkId));

    const newLink = {
        'id': linkId,
        'creationTime': new Date().getTime(),
        'url': url,
        'duration': duration,
    }

    writeLink(linkData)
    .then(result => {
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


