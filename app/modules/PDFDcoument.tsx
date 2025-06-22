import { Document, Page, Text, View, StyleSheet, Image } from "@react-pdf/renderer";
import { Watermark } from "./Watermark";
import { QuotationData } from "~/routes/quote";
import { useGlobalContext } from "./gcontext";

const styles = StyleSheet.create({
    page: { padding: 30, display: "flex", flexDirection: "column", },
    title: { fontSize: 20, fontWeight: "bold", textAlign: "center", color: "#FF7900" },
    backgroundImage: {},
    header: { display: "flex", flexDirection: "column", justifyContent: "space-between" },
    bodyText: { fontSize: 40, fontStyle: "italic", fontWeight: "bold", marginVertical: 20 },
    rowContainer: { flexDirection: "row", justifyContent: "flex-end", gap: 20 },
    columnContainer: { flexDirection: "column", justifyContent: "space-between" },
    footer: { fontSize: 16, color: "gray", marginBottom: 0, marginTop: "auto" },
    paragraph: { width: "48%", textAlign: "justify", fontSize: 11, backgroundColor: "#FFEFDF", padding: 10, borderRadius: 10, lineHeight: 1.75 },
    pageNumber: { position: "absolute", bottom: 20, right: 40, fontSize: 12 },
    fromto: { fontSize: 14, fontWeight: "bold", color: "#FF7800" },
    companyDetails: { fontSize: 11, textAlign: "center", fontWeight: "bold" },
    tableContainer: { width: "100%", marginVertical: 10 },
    tableRowEven: { flexDirection: "row", backgroundColor: "#FFFFFF" },
    tableRowOdd: { flexDirection: "row", backgroundColor: "#FFEFDF" },
    tableCellHeader: { flexGrow: 1, flexBasis: 0, padding: 8, backgroundColor: "#FF7900", textAlign: "left", fontSize: 14, color: "white" },
    tableCell: { flexGrow: 1, flexBasis: 0, padding: 8, textAlign: "left", fontSize: 12 },
    newline: { lineHeight: 0.25 },
    terms: { textAlign: "justify", fontSize: 11, lineHeight: 1.25 },
    bold: { fontWeight: "bold" },
    qoutationDetails: { textAlign: "justify", fontSize: 11, lineHeight: 1.25, fontWeight: "bold" }

});

export default function PDFDocument(data: QuotationData) {
    /*const data: QuotationData = {
        no: "1",
        date: new Date().toDateString(),
        items: {
            "a": { id: 1, name: "phone", price: 5000, quantity: 2 },
            "b": { id: 2, name: "laptop", price: 50000, quantity: 1 },
            "c": { id: 3, name: "tablet", price: 20000, quantity: 3 }
        },
        intro: "This is with reference to the discussions we had earlier with you regarding your requirement of Matrix Digital IP-PBXS System. Please find below our best offer for the same.",
        terms: ["Payment Terms: 100% advance.", "Delivery Schedule: Within 1-2 days after received the PO along with Advance.", "12 Months offsite warranty from the side of OEM as per their terms.", "Validity: This offer is valid for 30 days."],
        additionalInfo:
            ["Online UPS supply and Network Rack with Accessories like Fan, AC Socket, and networking etc. requirements would be fulfilled by customer."],
        from: "Teen Telecommunication Pvt. Ltd.",
        fromAddress: ["G-57, Vikas Marg, Near Metro Pillar No.41, \nDelhi - 110092"],
        to: "Verma Internationals Ltd.",
        toAddress: ["G-57, Vikas Marg, Near Metro Pillar No.41, \nDelhi - 110092"],
        tax: 18,
        discount: 5
    };*/
    //<Image src="D:\code\react\HelpDesk\remix\helpdesk1\public\headerlogo.png" style={styles.backgroundImage} />
    console.log("data is : ", data);
    return (
        <Document title="Quotation" author="Saurav" subject="Business Quotation" >
            <Page size="A4" style={styles.page}>
                <Watermark />
                <Text style={styles.title}>Teen Telecommunication Pvt. Ltd.</Text>
                <Text style={styles.newline}>{"\n"}</Text>
                <Text>
                    <Text style={styles.companyDetails}>Contact No.</Text>
                    <Text style={styles.terms}>+91 7065577059/60</Text>
                    <Text style={styles.companyDetails}>     Website:</Text>
                    <Text style={styles.terms}>https://teentelecommunication.com</Text>
                </Text>
                <Text style={styles.newline}>{"\n\n\n"}</Text>
                <View style={styles.rowContainer}>

                    <View style={styles.columnContainer}>
                        <Text>
                            <Text style={styles.qoutationDetails}>Qoutation No.</Text>
                            <Text style={styles.terms}>{data.no}</Text>
                        </Text>
                        <Text>
                            <Text style={styles.qoutationDetails}>Date - </Text>
                            <Text style={styles.terms}>{data.date}</Text>
                        </Text>
                    </View>
                </View>
                <Text style={styles.newline} >{"\n\n\n"}</Text>
                <View style={styles.rowContainer}>
                    <View style={styles.paragraph}>
                        <Text style={styles.fromto}>Qoutation by</Text>
                        <Text style={styles.newline}>{"\n"}</Text>
                        <Text style={styles.bold}>{data.from}</Text>
                        <Text>{data.fromAddress}</Text>
                    </View>
                    <View style={styles.paragraph}>
                        <Text style={styles.fromto}>Qoutation to{"\n"}</Text>
                        <Text style={styles.newline}>{"\n"}</Text>
                        <Text style={styles.bold}>{data.to}</Text>
                        <Text>{data.toAddress}</Text>
                    </View>
                </View>
                <Text style={styles.newline}>{"\n\n\n"}</Text>
                <Text style={styles.terms}>{data.intro}</Text>
                <Text style={styles.newline}>{"\n"}</Text>
                < View style={styles.tableContainer}>
                    <View style={styles.tableRowEven}>
                        <Text style={styles.tableCellHeader}>S.No.</Text>
                        <Text style={styles.tableCellHeader}>Item</Text>
                        <Text style={styles.tableCellHeader}>Price</Text>
                        <Text style={styles.tableCellHeader}>Quantity</Text>
                        <Text style={styles.tableCellHeader}>Amount</Text>
                    </View>

                    {Object.entries(data.items).map((e, i) => {
                        return (
                            <View style={i % 2 === 0 ? styles.tableRowEven : styles.tableRowOdd}>
                                <Text style={styles.tableCell}>{i + 1}</Text>
                                <Text style={styles.tableCell}>{e[1].name}</Text>
                                <Text style={styles.tableCell}>Rs.{e[1].price}</Text>
                                <Text style={styles.tableCell}>{e[1].quantity}</Text>
                                <Text style={styles.tableCell}>Rs.{e[1].price * e[1].quantity}</Text>
                            </View>);
                    })}
                </View>
                <View >
                    <Text style={styles.fromto}>Note</Text>
                    <Text style={styles.newline}>{"\n"}</Text>
                    <Text style={styles.terms}>{data.additionalInfo}</Text>
                </View>
                <Text style={styles.newline}>{"\n\n"}</Text>
                <View >
                    <Text style={styles.fromto}>Terms and Conditions</Text>
                    <Text style={styles.newline}>{"\n"}</Text>
                    <Text style={styles.terms}>{data.terms} {"\n"}</Text>
                </View>
                <Text style={styles.pageNumber} render={({ pageNumber }) => `Page ${pageNumber}`} />
            </Page>
        </Document >
    );
}
