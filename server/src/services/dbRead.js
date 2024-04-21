import { Table, linkShareDB } from '../database/db.config';


const getLinkbyId = async (value, key = "id") => {
    const params = {
        TableName: Table,
        Key: {
            [key]: parseInt(value)
        }
    }

    try {
        const { Item = {} } =  await linkShareDB.get(params).promise()
        return { success: true, data: Item }
    } catch (error) {
        return {  success: false, data: null}        
    }
}


const getLinks = async () => {
    const params = {
        TableName: Table
    }

    try{
        const { Items = [] } = await linkShareDB.scan(params).promise()
        return { success: true, data: Items }

    } catch(error){
        return { success: false, data: null }
    }
}


export {
    getLinkbyId,
    getLinks
}
