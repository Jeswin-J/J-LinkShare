import { Table, linkShareDB } from '../database/db.config';

const writeLink = async (data = {}) => {
    const params = {
        TableName: Table,
        Item: data
    }

    try{
        await linkShareDB.put(params).promise()
        return { success: true }
    } catch(error){
        return { success: false}
    }

}


const deleteLinkbyId = async (value, key = 'id') => {
    const params = {
        TableName: Table,
        Key: {
            [key]: parseInt(value)
        }
    }

    try {
        await linkShareDB.delete(params).promise()
        return {  success: true }

    } catch (error) {
        return{ success: false }
    }
}

export {
    writeLink,
    deleteLinkbyId
}