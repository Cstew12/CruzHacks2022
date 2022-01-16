// This file contains the code to construct a Cloud Firestore client
// and access the database through an API.

const Firestore = require('@google-cloud/firestore');
const path = require('path')

class FirestoreDB {
    constructor() {
        this.firestore = new Firestore({
            projectId: 'fitfinder-bee3f',
            keyFilename: path.join(__dirname, './account_credentials.json')
        })
    }

    // Adds a new document to category given object.
    async add(category, id) {
        const ref = this.firestore.collection(category).doc(id.identifier);
        await ref.set(id);
    }

    async edit(category, id, field, change_to_be_made) {
        return
    }

    // Deletes a document from category given object.
    async delete(category, id) {
        const ref = this.firestore.collection(category).doc(id.identifier);
        await ref.delete();
    }

    // Gets a document from category given object.
    async get(category, id) {
        const ref = this.firestore.collection(category).doc(id.identifier);
        const result = await ref.get();

        if (!result.exists) {
            console.log("Failed to get User Data: User does not exist!")
            return null;
        }

        else {
            const data = await result.data();
            return data;
        }
    }
}

module.exports = new FirestoreDB();


