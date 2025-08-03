import { Document, Page, Text, View, StyleSheet, Image, Link, Font } from "@react-pdf/renderer";
import { Watermark } from "~/component/watermark";
import { ChallanData } from "~/routes/dashboard.challan.create";

export default function PDFDocument(data1: ChallanData) {
    const data: ChallanData = {
        no: "123",
        date: "2023-10-01",
        items: [{
            id: 1, name: "first", quantity: 5,
            sno: ["123", "1233", "432", "12", "412"]
        }],
        from: "Teen Telecommunication Pvt. Ltd.",
        fromAddress: "G-57, 3rd Floor, Vikas Marg, Laxmi Nagar, Near Metro Pillar No. 41",
        to: "M/s Someone",
        toAddress: "At Some Place",
        madeby: "Unknown",
        contact: "+91 12312312312312",
        email: "",
        website: "https://teentelecommunication.com",
        pdfColor: "222",
        type: "Delivery Challan",
        category: "Delivery Challan"
    };

    const hue = data.pdfColor ? data.pdfColor : "222";

    const styles = StyleSheet.create({
        page: { padding: 30, display: "flex", flexDirection: "column", fontStyle: "normal" },
        title: { textAlign: "center", color: `hsl(${hue} 100% 72%)` },
        backgroundImage: { height: "auto", width: "100%" },
        header: { marginBottom: 15 },
        bodyText: { fontSize: 40, fontStyle: "italic", fontWeight: "bold", marginVertical: 20 },
        rowContainer: { display: "flex", flexDirection: "row", justifyContent: "space-between", gap: 20 },
        columnContainer: { flexDirection: "column", justifyContent: "center" },
        footer: { fontSize: 16, color: "gray", marginBottom: 0, marginTop: "auto" },
        paragraph: { width: "48%", textAlign: "justify", fontSize: 11, backgroundColor: `hsl(${hue} 100% 97%)`, padding: 10, lineHeight: 1.25 },
        pageNumber: { position: "absolute", bottom: 20, right: 40, fontSize: 10, color: "#6E6E6E" },
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
        tableCellLink: { fontSize: 9, color: "#384388", fontStyle: "italic", textDecoration: "none" },
        tableCellName: { fontSize: 9, color: "#505050", fontStyle: "italic", textDecoration: "none" },
        tableCellNameContent: { fontSize: 9, color: "#6E6E6E" },
        tableCell: { flexGrow: 1, flexBasis: 0, padding: 8, textAlign: "left", fontSize: 9, color: "#6E6E6E" },
        tableCellSno: { width: "8%", padding: 8, textAlign: "left", fontSize: 9, color: "#505050" },
        tableCellTotals: { padding: 8, textAlign: "left", fontSize: 9, fontWeight: "bold", color: "#505050" },
    });
    var dated = data.date.split("-");
    const date = dated[2] + "-" + dated[1] + "-" + dated[0];

    return (
        <Document title="Challan" author={data.madeby} subject="Business Challan" >
            <Page wrap size="A4" style={styles.page}>
                <Watermark />
                <View fixed style={styles.header}>
                    <Text style={styles.title}>{data.from}</Text>
                    <Text style={styles.newline}>{"\n"}</Text>
                    <Text>
                        <Text style={styles.companyDetails}>Contact No: </Text>
                        <Text style={{ fontSize: 10 }}>{data.contact}</Text>
                        <Text style={styles.companyDetails}>     Email Id: </Text>
                        <Link src={`mailto:${data.email}`} style={{ fontSize: 11, textDecoration: "underline", color: "#384388" }}>{data.email}</Link>
                    </Text>
                </View>
                <View style={styles.rowContainer}>
                    <Text>
                        <Text style={styles.qoutationDetails}>Challan No:</Text>
                        <Text style={styles.intro}>{data.no}</Text>
                    </Text>
                    <Text style={{ fontWeight: "bold" }}>{data.type}</Text>
                    <Text>
                        <Text style={styles.qoutationDetails}>Challan Date: </Text>
                        <Text style={styles.intro}>{date}</Text>
                    </Text>
                </View>
                <Text style={styles.newline} >{"\n\n\n"}</Text>
                <View style={styles.rowContainer}>
                    <View style={styles.paragraph}>
                        <Text style={styles.fromto}>Challan by</Text>
                        <Text style={styles.newline}>{"\n"}</Text>
                        <Text style={styles.bold}>{data.from}</Text>
                        <Text style={styles.address}>{data.fromAddress}</Text>
                    </View>
                    <View style={styles.paragraph}>
                        <Text style={styles.fromto}>Challan to{"\n"}</Text>
                        <Text style={styles.newline}>{"\n"}</Text>
                        <Text style={styles.bold}>{data.to}</Text>
                        <Text style={styles.address}>{data.toAddress}</Text>
                    </View>
                </View>
                <Text style={styles.newline}>{"\n\n\n"}</Text>

                <Text style={styles.newline}>{"\n"}</Text>
                < View style={styles.tableContainer}>
                    <View style={styles.tableRowEven}>
                        <Text style={[styles.tableCellHeader, { width: "8%" }]}>S.No.</Text>
                        <Text style={[styles.tableCellHeader, { width: "40%" }]}>Item</Text>
                        <Text style={[styles.tableCellHeader, { flexGrow: 1, flexBasis: 0 }]}>Quantity</Text>
                        <Text style={[styles.tableCellHeader, { flexGrow: 1, flexBasis: 0 }]}>Price</Text>

                        <Text style={[styles.tableCellHeader, { flexGrow: 1, flexBasis: 0 }]}>Amount</Text>
                    </View>

                    {Object.entries(data.items).map((e, i) => {
                        return (
                            <View style={i % 2 === 0 ? styles.tableRowEven : styles.tableRowOdd}>
                                <Text style={styles.tableCellSno}>{i + 1}</Text>
                                <View style={styles.tableCellBox}>
                                    <Text style={[styles.tableCellName]} >{e[1].name}</Text>
                                    <Text style={styles.tableCellNameContent}>{e[1].sno}</Text>
                                </View>
                                <Text style={styles.tableCell}>{e[1].quantity}</Text>
                            </View>);
                    })}
                    <View style={Object.entries(data.items).length % 2 === 0 ? styles.tableRowEven : styles.tableRowOdd}>
                        <Text style={styles.tableCellSno}></Text>
                        <Text style={[styles.tableCellTotals, { width: "40%", textDecoration: "none", fontStyle: "italic" }]}>Taxable Value</Text>
                        <Text style={styles.tableCell}></Text>
                        <Text style={styles.tableCell}></Text>
                    </View>
                    <View style={Object.entries(data.items).length % 2 === 0 ? styles.tableRowOdd : styles.tableRowEven}>
                        <Text style={styles.tableCellSno}></Text>
                        <Text style={styles.tableCell}></Text>
                        <Text style={styles.tableCell}></Text>
                    </View>
                </View>
                <Text fixed style={styles.pageNumber} render={({ pageNumber }) => `${data.website}                                                      Page ${pageNumber}`} />
            </Page>
        </Document >
    );
}