import { Document, Page, Text, View, StyleSheet, Image, Link, Font } from "@react-pdf/renderer";
import { Watermark } from "../watermark";
import { QuotationData } from "~/routes/dashboard.quotations.create";

export default function QuotationPDFDocument(data: QuotationData, showCustomerList: boolean = true) {
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
    const showDiscount = data.items.some((item) => item.discount && item.discount > 0);

    const header = <>
        <View fixed style={styles.header} key={"header"}>
            <Text style={styles.title} key={"header-from"}>{data.from}</Text>
            <Text style={styles.newline} key={"header-newline"}>{"\n"}</Text>
            <Text key={"netsted-text-1"}>
                {data.contact != "" && <><Text style={styles.companyDetails} key={"contactno"}>Contact No: </Text>
                    <Text style={{ fontSize: 10 }} key={"contactnovalue"}>{data.contact}</Text></>}
                {data.email != "" && <><Text style={styles.companyDetails} key={"emailid"}>     Email Id: </Text>
                    <Link src={`mailto:${data.email}`} style={{ fontSize: 11, textDecoration: "underline", color: "#384388" }} key={"emailidvalue"}>{data.email}</Link></>}
            </Text>
        </View>
    </>;

    const footer = <>
        <View fixed style={{ width: "90%", position: "absolute", bottom: 20, fontSize: 10, color: "#6E6E6E" }} key="footer">
            <Text style={{ width: "100%", textAlign: "center" }} key="blankfooterpart1" >This is computer generated quotation, So no need for sign and stamp</Text>
            <Text style={styles.newline}>{"\n"}</Text>
            <View style={{ flexDirection: "row", width: "100%" }} >
                <Text style={{ width: "33%" }} key="blankfooterpart2" ></Text>
                <Text style={{ width: "34%", textAlign: "center", fontStyle: "italic" }} key="footerwebsite">{data.website} </Text >
                <Text style={{ width: "33%", textAlign: "right", fontStyle: "italic" }} render={({ pageNumber, totalPages }) => `Page ${pageNumber} of ${totalPages}`} key="footerpageno" />
            </View>
        </View >
    </>;

    return (
        <Document title="Quotation" author={data.madeby} subject="Business Quotation" key="quotationpdfdocument">
            <Page wrap size="A4" style={styles.page} key="pages">
                <Watermark key={"watermark"} />
                {header}
                <View style={styles.rowContainer} key="rowcontainer-1">
                    <Text key="nested-text-2">
                        <Text style={styles.qoutationDetails} key="quotationno">Quotation No:</Text>
                        <Text style={styles.intro} key="quotationnovalue">{data.no}</Text>
                    </Text>
                    <Text key="nested-text-3">
                        <Text style={styles.qoutationDetails} key="quotationdate">Quotation Date: </Text>
                        <Text style={styles.intro} key="quotationdatevalue">{date}</Text>
                    </Text>
                </View>
                <Text style={styles.newline} key="newline-text-3" >{"\n\n\n"}</Text>
                <View style={styles.rowContainer} key="rowcontainer-2">
                    <View style={styles.paragraph} key="nested-view-1">
                        <Text style={styles.fromto} key="quotationby">Quotation by</Text>
                        <Text style={styles.newline} key="newline-text-4">{"\n"}</Text>
                        <Text style={styles.bold} key="quotationfrom">{data.from}</Text>
                        <Text style={styles.address} key="quotationfromaddress">{data.fromAddress}</Text>
                    </View>
                    <View style={styles.paragraph} key="nested-view-2">
                        <Text style={styles.fromto} key="quotationto">Quotation to{"\n"}</Text>
                        <Text style={styles.newline} key="newline-text-5">{"\n"}</Text>
                        <Text style={styles.bold} key="quotationtovalue">{data.to}</Text>
                        <Text style={styles.address} key="quotationaddress">{data.toAddress}</Text>
                    </View>
                </View>
                {data.intro !== "" &&
                    <>
                        <Text style={styles.newline} key="newline-text-6">{"\n\n\n"}</Text>
                        <Text style={styles.intro} key="quotatintro">{data.intro}</Text>
                        <Text style={styles.newline} key={"newline-text-7"}>{"\n"}</Text>
                    </>
                }
                <View style={styles.tableContainer} key="nested-view-3">
                    <View style={styles.tableRowEven} key="nested-view-4">
                        <Text style={[styles.tableCellHeader, { width: "8%" }]} key="sno">S.No.</Text>
                        <Text style={[styles.tableCellHeader, { width: "40%" }]} key="item">Item</Text>
                        <Text style={[styles.tableCellHeader, { flexGrow: 1, flexBasis: 0 }]} key="quantity">Quantity</Text>
                        <Text style={[styles.tableCellHeader, { flexGrow: 1, flexBasis: 0 }]} key="price">Price</Text>
                        {showDiscount && <Text style={[styles.tableCellHeader, { flexGrow: 1, flexBasis: 0 }]} key="discount">Discount</Text>}
                        <Text style={[styles.tableCellHeader, { flexGrow: 1, flexBasis: 0 }]} key="amount">Amount</Text>
                    </View>

                    {Object.entries(data.items).map((e, i) => {
                        return (
                            <View style={i % 2 === 0 ? styles.tableRowEven : styles.tableRowOdd} key="nested-view-5">
                                <Text style={styles.tableCellSno} key="snovalue">{i + 1}</Text>
                                <View style={styles.tableCellBox} key="nested-view-6">
                                    {
                                        e[1].link && data.showLinks
                                            ? <Link style={styles.tableCellLink} src={e[1].link || "#"} key="linknamehsn">{e[1].name} {e[1].hsn != "" && <> : HSN - {e[1].hsn}</>}</Link>
                                            : <Text style={[styles.tableCellName]} key="namehsn">{e[1].name} {e[1].hsn != "" && <>: HSN - {e[1].hsn}</>}</Text>
                                    }
                                    <Text style={styles.tableCellNameContent} key="description">{e[1].description}</Text>
                                </View>
                                <Text style={styles.tableCell} key="quantityvalue">{e[1].quantity}</Text>
                                <Text style={styles.tableCell} key="pricevalue">Rs.{Math.round(e[1].price * (1 + 0.01 * (e[1].addon ?? 0))).toLocaleString("en-IN")}</Text>
                                {showDiscount && <Text style={styles.tableCell} key="discountvalue">{e[1].discount} %</Text>}
                                <Text style={styles.tableCell} key="amountvalue">Rs.{Math.round(e[1].price * (1 + 0.01 * (e[1].addon ?? 0)) * e[1].quantity * (1 - e[1].discount * 0.01)).toLocaleString("en-IN")}</Text>
                            </View>);
                    })}
                    <View style={Object.entries(data.items).length % 2 === 0 ? styles.tableRowEven : styles.tableRowOdd} key="nested-view-7">
                        <Text style={styles.tableCellSno} key="blank1"></Text>
                        <Text style={[styles.tableCellTotals, { width: "40%", textDecoration: "none", fontStyle: "italic" }]} key="taxablevalue">Taxable Value</Text>
                        <Text style={styles.tableCell} key="blank2"></Text>
                        <Text style={styles.tableCell} key="blank3"></Text>
                        {showDiscount && <Text style={styles.tableCell} key="blank4"></Text>}
                        <Text style={[styles.tableCellTotals, { flexGrow: 1, flexBasis: 0 }]} key="blank5">Rs.{Math.round(data.amount).toLocaleString("en-IN")}</Text>
                    </View>
                    <View style={Object.entries(data.items).length % 2 === 0 ? styles.tableRowOdd : styles.tableRowEven} key="nested-view-8">
                        <Text style={styles.tableCellSno} key="blank4"></Text>
                        <Text style={[styles.tableCellTotals, { width: "40%", textDecoration: "none", fontStyle: "italic" }]} key="blank5">Tax @ {data.tax}%</Text>
                        <Text style={styles.tableCell} key="blank6"></Text>
                        <Text style={styles.tableCell} key="blank7"></Text>
                        {showDiscount && <Text style={styles.tableCell} key="blank8"></Text>}
                        <Text style={[styles.tableCellTotals, { flexGrow: 1, flexBasis: 0 }]} key="blank9">Rs.{(Math.round(data.amount * data.tax * 0.01)).toLocaleString("en-IN")}</Text>
                    </View>
                    <View style={Object.entries(data.items).length % 2 === 0 ? styles.tableRowEven : styles.tableRowOdd} key="nested-view-9">
                        <Text style={styles.tableCellSno} key="blank8"></Text>
                        <Text style={[styles.tableCellTotals, { width: "40%", textDecoration: "none", fontStyle: "italic" }]} key="blank9">Total Amount</Text>
                        <Text style={styles.tableCell} key="blank10"></Text>
                        <Text style={styles.tableCell} key="blank11"></Text>
                        {showDiscount && <Text style={styles.tableCell} key="blank12"></Text>}
                        <Text style={[styles.tableCellTotals, { flexGrow: 1, flexBasis: 0 }]} key="blank13">Rs.{Math.round(data.amount * (1 + data.tax * 0.01)).toLocaleString("en-IN")}</Text>
                    </View>
                </View>
                {data.additionalInfo !== "" && <View key="nested-view-10">
                    <Text style={styles.fromto} key="note">Note</Text>
                    <Text style={styles.newline} key="blank12">{"\n"}</Text>
                    <Text style={styles.terms} key="blank13">{data.additionalInfo}</Text>
                </View>}
                <Text style={styles.newline} key="blank14">{"\n\n"}</Text>
                {data.terms !== "" && <View key="nested-view-11">
                    <Text style={styles.fromto} key="termsandconditions">Terms and Conditions</Text>
                    <Text style={styles.newline} key="blank13">{"\n"}</Text>
                    <Text style={styles.terms} key="termsandconditionsvalue">{data.terms} {"\n"}</Text>
                </View>}
                <Text style={styles.newline} key="blank15">{"\n\n\n"}</Text>
                {(data.bankInfo && data?.bankInfo != "") && <View key="nested-view-12">
                    <Text style={styles.fromto} key="bankinfot">Bank Details {"\n"}</Text>
                    <Text style={styles.terms} key="bankinfotext">{data.bankInfo} {"\n"}</Text>
                </View>}
                <Text style={styles.newline} key="blank15">{"\n\n\n"}</Text>
                {data.madeByInfo !== "" && <View key="nested-view-12">
                    <Text style={styles.terms} key="userSignature">{data.madeByInfo} {"\n"}</Text>
                </View>}
                {showCustomerList &&
                    <>
                        <Text break={true} style={{ fontSize: 14, fontWeight: "bold", textAlign: "center" }} key="customerlist">Our Customers List</Text>
                        <Image style={styles.backgroundImage} src={"public/All.jpg"} key="image" />
                    </>}
                {footer}
            </Page>
        </Document >
    );
}