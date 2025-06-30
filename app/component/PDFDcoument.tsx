import { Document, Page, Text, View, StyleSheet, Image, Link, Font } from "@react-pdf/renderer";
import { Watermark } from "./Watermark";
import { QuotationData } from "~/routes/dashboard.quote";

const hue = "222";

const styles = StyleSheet.create({
    page: { padding: 30, display: "flex", flexDirection: "column", fontFamily: "Times-Roman", fontStyle: "normal" },
    title: { fontSize: 20, fontWeight: "bold", textAlign: "center", color: `hsl(${hue} 100% 72%)` },
    backgroundImage: { height: "25px", width: "auto" },
    header: { display: "flex", flexDirection: "column", justifyContent: "space-between" },
    bodyText: { fontSize: 40, fontStyle: "italic", fontWeight: "bold", marginVertical: 20 },
    rowContainer: { display: "flex", flexDirection: "row", justifyContent: "space-between", gap: 20 },
    columnContainer: { flexDirection: "column", justifyContent: "center" },
    footer: { fontSize: 16, color: "gray", marginBottom: 0, marginTop: "auto" },
    paragraph: { width: "48%", textAlign: "justify", fontSize: 11, backgroundColor: `hsl(${hue} 100% 97%)`, padding: 10, borderRadius: 5, lineHeight: 1.25 },
    pageNumber: { position: "absolute", bottom: 20, right: 40, fontSize: 12 },
    fromto: { fontSize: 11, color: `hsl(${hue} 100% 60%)` },
    companyDetails: { fontSize: 11, textAlign: "center", fontWeight: "bold" },
    intro: { textAlign: "justify", fontSize: 10, lineHeight: 1.25 },
    terms: { textAlign: "justify", fontSize: 10, lineHeight: 1.25, color: "#6E6E6E" },
    bold: { fontSize: 9, fontWeight: "bold" },
    qoutationDetails: { textAlign: "justify", fontSize: 10, lineHeight: 1.25, fontWeight: "bold" },
    newline: { lineHeight: 0.25 },
    address: { fontSize: 9 },

    tableContainer: { width: "100%", marginVertical: 10 },
    tableRowEven: { flexDirection: "row", backgroundColor: "#FFFFFF" },
    tableRowOdd: { flexDirection: "row", backgroundColor: `hsl(${hue} 100% 97%)` },
    tableCellHeader: { padding: 8, backgroundColor: `hsl(${hue} 100% 65%)`, textAlign: "left", fontSize: 11, color: "white" },
    tableCellBox: { width: "40%", padding: 8, textAlign: "left" },
    tableCellName: { fontSize: 10, color: "#384388", fontStyle: "italic", textDecoration: "none" },
    tableCellNameContent: { fontSize: 10, color: "#6E6E6E" },
    tableCell: { flexGrow: 1, flexBasis: 0, padding: 8, textAlign: "left", fontSize: 10 },
    tableCellSno: { width: "8%", padding: 8, textAlign: "left", fontSize: 10, color: "#505050" },
    tableCellTotals: { padding: 8, textAlign: "left", fontSize: 10, fontWeight: "bold", color: "#505050" },
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

    return (
        <Document title="Quotation" author={data.madeby} subject="Business Quotation" >
            <Page wrap size="A4" style={styles.page}>
                <Watermark />
                <View fixed>
                    <Text style={styles.title}>Teen Telecommunication Pvt. Ltd.</Text>
                    <Text style={styles.newline}>{"\n"}</Text>
                    <Text>
                        <Text style={styles.companyDetails}>Contact No: </Text>
                        <Text style={{ fontSize: 10 }}>+91 7065577059/60</Text>
                        <Text style={styles.companyDetails}>     Website: </Text>
                        <Link style={{ fontSize: 11, textDecoration: "underline", color: "#384388" }}>https://teentelecommunication.com</Link>
                    </Text>
                </View>
                <Text style={styles.newline}>{"\n\n\n"}</Text>
                <View style={styles.rowContainer}>

                    <Image cache src="public\ttc.png" style={styles.backgroundImage} />

                    <View style={styles.columnContainer}>
                        <Text>
                            <Text style={styles.qoutationDetails}>Qoutation No:</Text>
                            <Text style={styles.intro}>{data.no}</Text>
                        </Text>
                        <Text>
                            <Text style={styles.qoutationDetails}>Qoutation Date: </Text>
                            <Text style={styles.intro}>{data.date}</Text>
                        </Text>
                    </View>
                </View>
                <Text style={styles.newline} >{"\n\n\n"}</Text>
                <View style={styles.rowContainer}>
                    <View style={styles.paragraph}>
                        <Text style={styles.fromto}>Qoutation by</Text>
                        <Text style={styles.newline}>{"\n"}</Text>
                        <Text style={styles.bold}>{data.from}</Text>
                        <Text style={styles.address}>{data.fromAddress}</Text>
                    </View>
                    <View style={styles.paragraph}>
                        <Text style={styles.fromto}>Qoutation to{"\n"}</Text>
                        <Text style={styles.newline}>{"\n"}</Text>
                        <Text style={styles.bold}>{data.to}</Text>
                        <Text style={styles.address}>{data.toAddress}</Text>
                    </View>
                </View>
                <Text style={styles.newline}>{"\n\n\n"}</Text>
                <Text style={styles.intro}>{data.intro}</Text>
                <Text style={styles.newline}>{"\n"}</Text>
                < View style={styles.tableContainer}>
                    <View style={styles.tableRowEven}>
                        <Text style={[styles.tableCellHeader, { width: "8%" }]}>S.No.</Text>
                        <Text style={[styles.tableCellHeader, { width: "40%" }]}>Item</Text>
                        <Text style={[styles.tableCellHeader, { flexGrow: 1, flexBasis: 0 }]}>Quantity</Text>
                        <Text style={[styles.tableCellHeader, { flexGrow: 1, flexBasis: 0 }]}>Price</Text>
                        <Text style={[styles.tableCellHeader, { flexGrow: 1, flexBasis: 0 }]}>Discount</Text>
                        <Text style={[styles.tableCellHeader, { flexGrow: 1, flexBasis: 0 }]}>Amount</Text>
                    </View>

                    {Object.entries(data.items).map((e, i) => {
                        return (
                            <View style={i % 2 === 0 ? styles.tableRowEven : styles.tableRowOdd}>
                                <Text style={styles.tableCellSno}>{i + 1}</Text>
                                <View style={styles.tableCellBox}>
                                    <Link style={styles.tableCellName} src={e[1].link || "#"}>{e[1].name} : HSN - {e[1].hsn}</Link>
                                    <Text style={styles.tableCellNameContent}>{e[1].description}</Text>
                                </View>
                                <Text style={styles.tableCell}>{e[1].quantity}</Text>
                                <Text style={styles.tableCell}>Rs.{e[1].price}</Text>
                                <Text style={styles.tableCell}>{data.discount} %</Text>
                                <Text style={styles.tableCell}>Rs.{e[1].price * e[1].quantity * (1 - data.discount * 0.01)}</Text>
                            </View>);
                    })}
                    <View style={Object.entries(data.items).length % 2 === 0 ? styles.tableRowEven : styles.tableRowOdd}>
                        <Text style={styles.tableCellSno}></Text>
                        <Text style={[styles.tableCellTotals, { width: "40%", textDecoration: "none", fontStyle: "italic" }]}>Taxable Value</Text>
                        <Text style={styles.tableCell}></Text>
                        <Text style={styles.tableCell}></Text>
                        <Text style={styles.tableCell}></Text>
                        <Text style={[styles.tableCellTotals, { flexGrow: 1, flexBasis: 0 }]}>Rs.{(data.amount * (1 - data.discount * 0.01)).toFixed(2)}</Text>
                    </View>
                    <View style={Object.entries(data.items).length % 2 === 0 ? styles.tableRowOdd : styles.tableRowEven}>
                        <Text style={styles.tableCellSno}></Text>
                        <Text style={[styles.tableCellTotals, { width: "40%", textDecoration: "none", fontStyle: "italic" }]}>Tax @ {data.tax}%</Text>
                        <Text style={styles.tableCell}></Text>
                        <Text style={styles.tableCell}></Text>
                        <Text style={styles.tableCell}></Text>
                        <Text style={[styles.tableCellTotals, { flexGrow: 1, flexBasis: 0 }]}>Rs.{(data.amount * (1 - data.discount * 0.01) * data.tax * 0.01).toFixed(2)}</Text>
                    </View>
                    <View style={Object.entries(data.items).length % 2 === 0 ? styles.tableRowEven : styles.tableRowOdd}>
                        <Text style={styles.tableCellSno}></Text>
                        <Text style={[styles.tableCellTotals, { width: "40%", textDecoration: "none", fontStyle: "italic" }]}>Total Amount</Text>
                        <Text style={styles.tableCell}></Text>
                        <Text style={styles.tableCell}></Text>
                        <Text style={styles.tableCell}></Text>
                        <Text style={[styles.tableCellTotals, { flexGrow: 1, flexBasis: 0 }]}>Rs.{(data.amount * (1 + data.tax * 0.01) * (1 - data.discount * 0.01)).toFixed(2)}</Text>
                    </View>
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
                <Text fixed style={styles.pageNumber} render={({ pageNumber }) => `Page ${pageNumber}`} />
            </Page>
        </Document >
    );
}
