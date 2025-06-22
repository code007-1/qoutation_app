/*import { Document, Page, PDFViewer, StyleSheet, Text, View } from '@react-pdf/renderer';
import ReactDOM from 'react-dom';
import { useGlobalContext } from '~/modules/gcontext';
import PDFDocument from '~/modules/PDFDcoument';
import { useEffect } from 'react';

export default function PDF1() {
    //const { data } = useGlobalContext();

    // Create styles
    const styles = StyleSheet.create({
        page: {
            flexDirection: 'row',
            backgroundColor: '#E4E4E4'
        },
        section: {
            margin: 10,
            padding: 10,
            flexGrow: 1
        }
    });

    // Create Document Component
    const MyDocument = () => (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.section}>
                    <Text>Section #1</Text>
                </View>
                <View style={styles.section}>
                    <Text>Section #2</Text>
                </View>
            </Page>
        </Document>
    );

    return (
        <div>
            <PDFViewer>
                <MyDocument />
            </PDFViewer>
        </div>
    ); // You return nothing since rendering is handled manually
}
*/

import { ActionFunction, LoaderFunction } from "@remix-run/node";
import { rows } from "~/modules/db";


export const action: ActionFunction = async ({ request, params }) => {
    const query = await request.json();
    if (rows.length === 0) {
        return new Response(JSON.stringify({ error: "No data available" }), { status: 200 });
    }
    else {
        // Filter rows based on the query
        const filteredRows = rows.filter((row: any) => {
            return row.name.toLowerCase().includes(query.toLowerCase());
        });

        //console.log("Filtered rows:", filteredRows);
        // finally create the Response with the correct Content-Type header for a PDF
        let headers = new Headers({ "Content-Type": "application/json" });
        return new Response(JSON.stringify([...filteredRows]), { status: 200, headers });
    };
};
