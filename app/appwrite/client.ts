import {Account, Client, Databases, Storage} from 'appwrite'

export const appwriteConfig={
    endpoint: import.meta.env.VITE_APPWRITE_API_ENDPOINT,
    projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
    apikey: import.meta.env.VITE_APPWRITE_API_KEY,
    databaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID,
    userCollectionId: import.meta.env.VITE_APPWRITE_USERS_COLLECTION_ID,
    tripCollectionId: import.meta.env.VITE_APPWRITE_TRIPS_COLLECTION_ID
}

const client = new Client()
     .setEndpoint(appwriteConfig.endpoint)
     .setProject(appwriteConfig.projectId)


const account = new Account(client);
const database = new Databases(client);
const storage = new Storage(client);

export {client, account, database,storage};