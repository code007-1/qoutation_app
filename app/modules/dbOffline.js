/*import PouchDB from 'pouchdb';

const quotationDB = new PouchDB('quotations');
const challanDB = new PouchDB('challan');
const complaintDB = new PouchDB('complaint');

export async function SaveOrUpdate(data, type) {
    if (type === "quotation")
        await quotationDB.put(data).then((response) => {
            console.log("saved data : ", response);
        }).catch((err) => {
            console.error("Error saving data :", err);
        });
}

function ReadData() {
    quotationDB.get(quotation._id).then((doc) => {
        doc.text = "Updated quotation text";
        return quotationDB.put(doc);
    });

    quotationDB.allDocs({ include_docs: true }).then((result) => {
        result.rows.forEach(row => {
            console.log(row.doc);
        });
    });
}*/


function a() {
    throw error("this is error");
}

function b() {
    try { a(); }
    catch (error) {
        console.log("error is ", error);
    };
}

b();
console.log("something");