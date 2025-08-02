import { Document, Page, Text, View, StyleSheet, Image, Link, Font } from "@react-pdf/renderer";
import { Watermark } from "./watermark";
import { QuotationData } from "~/routes/dashboard.quotations.create";
import OxaniumRegular from "../fonts/Oxanium/static/Oxanium-Regular.ttf";
import OxaniumSemiBold from "../fonts/Oxanium/static/Oxanium-SemiBold.ttf";
import OxaniumBold from "../fonts/Oxanium/static/Oxanium-Bold.ttf";
import OxaniumRegularExtraBold from "../fonts/Oxanium/static/Oxanium-ExtraBold.ttf";
import OxaniumExtraLight from "../fonts/Oxanium/static/Oxanium-ExtraLight.ttf";
import OxaniumMedium from "../fonts/Oxanium/static/Oxanium-Medium.ttf";

export default function PDFDocument(data: QuotationData, showCustomerList: boolean = true) {
    const hue = data.pdfColor ? data.pdfColor : "222";

    Font.register({
        //family: 'Oswald',
        //src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf',
        family: "Oxanium",
        fonts: [
            {
                src: OxaniumRegular,
                fontStyle: "normal",
                fontWeight: "normal"
            },
            {
                src: OxaniumExtraLight,
                fontStyle: "normal",
                fontWeight: "ultralight"
            },
            {
                src: OxaniumExtraLight,
                fontStyle: "normal",
                fontWeight: "light"
            },
            {
                src: OxaniumMedium,
                fontStyle: "normal",
                fontWeight: "medium"
            },
            {
                src: OxaniumSemiBold,
                fontStyle: "normal",
                fontWeight: "semibold"
            },
            {
                src: OxaniumBold,
                fontStyle: "normal",
                fontWeight: "bold"
            },
            {
                src: OxaniumRegularExtraBold,
                fontStyle: "normal",
                fontWeight: "ultrabold"
            },
            {
                src: OxaniumRegularExtraBold,
                fontStyle: "normal",
                fontWeight: "heavy"
            },
            {
                src: OxaniumExtraLight,
                fontStyle: "normal",
                fontWeight: "thin"
            },
            {
                src: OxaniumExtraLight,
                fontStyle: "italic",
                fontWeight: 700
            }
        ]
    });

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
        <Document title="Quotation" author={data.madeby} subject="Business Quotation" >
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
                        <Text style={styles.qoutationDetails}>Quotation No:</Text>
                        <Text style={styles.intro}>{data.no}</Text>
                    </Text>
                    <Text>
                        <Text style={styles.qoutationDetails}>Quotation Date: </Text>
                        <Text style={styles.intro}>{date}</Text>
                    </Text>
                </View>
                <Text style={styles.newline} >{"\n\n\n"}</Text>
                <View style={styles.rowContainer}>
                    <View style={styles.paragraph}>
                        <Text style={styles.fromto}>Quotation by</Text>
                        <Text style={styles.newline}>{"\n"}</Text>
                        <Text style={styles.bold}>{data.from}</Text>
                        <Text style={styles.address}>{data.fromAddress}</Text>
                    </View>
                    <View style={styles.paragraph}>
                        <Text style={styles.fromto}>Quotation to{"\n"}</Text>
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
                        {data.discount != 0 && <Text style={[styles.tableCellHeader, { flexGrow: 1, flexBasis: 0 }]}>Discount</Text>}
                        <Text style={[styles.tableCellHeader, { flexGrow: 1, flexBasis: 0 }]}>Amount</Text>
                    </View>

                    {Object.entries(data.items).map((e, i) => {
                        return (
                            <View style={i % 2 === 0 ? styles.tableRowEven : styles.tableRowOdd}>
                                <Text style={styles.tableCellSno}>{i + 1}</Text>
                                <View style={styles.tableCellBox}>
                                    {
                                        e[1].link && data.showLinks
                                            ? <Link style={styles.tableCellLink} src={e[1].link || "#"}>{e[1].name} {e[1].hsn != "" && <> : HSN - {e[1].hsn}</>}</Link>
                                            : <Text style={[styles.tableCellName]} >{e[1].name} {e[1].hsn != "" && <>: HSN - {e[1].hsn}</>}</Text>
                                    }

                                    <Text style={styles.tableCellNameContent}>{e[1].description}</Text>
                                </View>
                                <Text style={styles.tableCell}>{e[1].quantity}</Text>
                                <Text style={styles.tableCell}>Rs.{Number(e[1].price).toLocaleString('en-US')}</Text>
                                {data.discount != 0 && <Text style={styles.tableCell}>{data.discount} %</Text>}
                                <Text style={styles.tableCell}>Rs.{Number((e[1].price * e[1].quantity * (1 - data.discount * 0.01)).toFixed(2)).toLocaleString('en-US')}</Text>
                            </View>);
                    })}
                    <View style={Object.entries(data.items).length % 2 === 0 ? styles.tableRowEven : styles.tableRowOdd}>
                        <Text style={styles.tableCellSno}></Text>
                        <Text style={[styles.tableCellTotals, { width: "40%", textDecoration: "none", fontStyle: "italic" }]}>Taxable Value</Text>
                        <Text style={styles.tableCell}></Text>
                        <Text style={styles.tableCell}></Text>
                        {data.discount != 0 && <Text style={styles.tableCell}></Text>}
                        <Text style={[styles.tableCellTotals, { flexGrow: 1, flexBasis: 0 }]}>Rs.{Number((data.amount * (1 - data.discount * 0.01)).toFixed(2)).toLocaleString('en-US')}</Text>
                    </View>
                    <View style={Object.entries(data.items).length % 2 === 0 ? styles.tableRowOdd : styles.tableRowEven}>
                        <Text style={styles.tableCellSno}></Text>
                        <Text style={[styles.tableCellTotals, { width: "40%", textDecoration: "none", fontStyle: "italic" }]}>Tax @ {data.tax}%</Text>
                        <Text style={styles.tableCell}></Text>
                        <Text style={styles.tableCell}></Text>
                        {data.discount != 0 && <Text style={styles.tableCell}></Text>}
                        <Text style={[styles.tableCellTotals, { flexGrow: 1, flexBasis: 0 }]}>Rs.{Number((data.amount * (1 - data.discount * 0.01) * data.tax * 0.01).toFixed(2)).toLocaleString('en-US')}</Text>
                    </View>
                    <View style={Object.entries(data.items).length % 2 === 0 ? styles.tableRowEven : styles.tableRowOdd}>
                        <Text style={styles.tableCellSno}></Text>
                        <Text style={[styles.tableCellTotals, { width: "40%", textDecoration: "none", fontStyle: "italic" }]}>Total Amount</Text>
                        <Text style={styles.tableCell}></Text>
                        <Text style={styles.tableCell}></Text>
                        {data.discount != 0 && <Text style={styles.tableCell}></Text>}
                        <Text style={[styles.tableCellTotals, { flexGrow: 1, flexBasis: 0 }]}>Rs.{Number((data.amount * (1 + data.tax * 0.01) * (1 - data.discount * 0.01)).toFixed(2)).toLocaleString('en-US')}</Text>
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
                {showCustomerList &&
                    <>
                        <Text break={true} style={{ fontSize: 14, fontWeight: "bold", textAlign: "center" }}>Out Customers List</Text>
                        <Image style={styles.backgroundImage} src={"public/All.jpg"} />
                    </>}
                <Text fixed style={styles.pageNumber} render={({ pageNumber }) => `${data.website}                                                      Page ${pageNumber}`} />
            </Page>
        </Document >
    );
}