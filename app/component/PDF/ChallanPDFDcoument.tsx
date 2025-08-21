import { Document, Page, Text, View, StyleSheet, Image, Link, Font } from "@react-pdf/renderer";
import { Watermark } from "~/component/watermark";
import { ChallanData } from "~/routes/dashboard.challan.create";
import { Svg, Line } from '@react-pdf/renderer';

export default function ChallanPDFDocument(data: ChallanData) {
    /*const data: ChallanData = {
        no: "12312312sad213123asd",
        date: "2023-10-01",
        items: [{
            id: 1, name: "MATRIX NXDBM VOCODER 64", quantity: 5,
            sno: ["123", "1233", "432", "12", "412"],
            unit: "pcs"
        },
        {
            id: 1, name: "MATRIX PENX 6S EPABX SYSTEM", quantity: 5,
            sno: ["123", "1233", "432", "12", "412", "123", "1233", "432", "12", "412", "123", "1233", "432", "12", "412", "123", "1233", "432", "12", "412"],
            unit: "pcs"
        },
        {
            id: 1, name: "MATRIX NXDBM VOCODER 64", quantity: 5,
            sno: ["123", "1233", "432", "12", "412"],
            unit: "pcs"
        },
        {
            id: 1, name: "MATRIX PENX 6S EPABX SYSTEM", quantity: 5,
            sno: ["123", "1233", "432", "12", "412", "123", "1233", "432", "12", "412", "123", "1233", "432", "12", "412", "123", "1233", "432", "12", "412"],
            unit: "pcs"
        },
        {
            id: 1, name: "MATRIX NXDBM VOCODER 64", quantity: 5,
            sno: ["123", "1233", "432", "12", "412"],
            unit: "pcs"
        },
        ],
        from: "Teen Telecommunication Pvt. Ltd.",
        fromAddress: "G-57, Vikas Marg, Laxmi Nagar, Near Metro Pillar No. 41, Delihi - 110092",
        to: "M/s Someone",
        toAddress: "At Some Place",
        madeby: "Unknown",
        contact: "+91 7669976659/+91 7669976660",
        email: "sales@teentelecommunication.com",
        website: "https://teentelecommunication.com",
        pdfColor: "222",
        type: "Delivery Challan",
        category: "Delivery Challan",
        orderno: "",
        modeofdispatch: "Courier",
    };*/
    const hue = data.pdfColor ? data.pdfColor : "222";

    const styles = StyleSheet.create({
        page: { padding: 30, display: "flex", paddingBottom: 125 },
        title: { textAlign: "center", color: `hsl(${hue} 0% 0%)`, fontWeight: "bold" },
        header: { marginBottom: 15 },
        rowContainer: { display: "flex", flexDirection: "row", justifyContent: "space-between", gap: 20 },
        paragraph: { width: "48%", textAlign: "justify", fontSize: 11, backgroundColor: `hsl(${hue} 0% 95%)`, padding: 10, lineHeight: 1.25 },
        companyDetails: { fontSize: 11, textAlign: "center" },
        intro: { textAlign: "justify", fontSize: 10, lineHeight: 1.25 },
        bold: { fontSize: 9, fontWeight: "bold" },
        challanDetails: { fontSize: 10, lineHeight: 1.25 },
        newline: { lineHeight: 0.25 },
        address: { fontSize: 9 },

        tableContainer: { width: "100%", fontSize: 11 },
        tableRowEven: { flexDirection: "row", backgroundColor: "#FFFFFF", color: `hsl(${hue} 0% 0%)` },
        tableRowOdd: { flexDirection: "row", backgroundColor: `hsl(${hue} 0% 95%)`, color: `hsl(${hue} 0% 0%)` },
        tableCellHeader: { padding: 8, backgroundColor: `hsl(${hue} 0% 11%)`, textAlign: "left", color: "white" },
        tableCellContent: { padding: 8, textAlign: "left", fontSize: 10 },
    });
    var dated = data.date.split("-");
    const date = dated[2] + "-" + dated[1] + "-" + dated[0];

    const HorizontalLine = ({ width = 500, color = 'black', thickness = 0.5 }) => (
        <Svg height="10" width={width.toString()}>
            <Line
                x1="0"
                y1="5"
                x2={width.toString()}
                y2="5"
                strokeWidth={thickness}
                stroke={color}
            />
        </Svg>
    );

    const header = <>
        <View fixed style={styles.header} key="nested-view-1">
            <Text style={styles.title} key="challan-from">{data.from}</Text>
            <Text style={styles.newline} key="blank1">{"\n"}</Text>
            <Text style={styles.companyDetails} key="nested-view-2">
                <Text style={{ fontWeight: "bold" }} key="address">Address:- </Text>
                <Text key="addressvalue"> {data.fromAddress}</Text>
            </Text>

            <Text style={styles.companyDetails} key="nested-view-3">
                <Text style={{ fontWeight: "bold" }} key="contact">Contact No:- </Text>
                <Text key="contactvalue">{data.contact}</Text>
            </Text>

            <Text style={styles.companyDetails} key="companydetail">
                <Text style={{ fontWeight: "bold" }} key="emailid">Email Id:- </Text>
                <Text key="emailvalue">{data.email}</Text>
            </Text>

            <Text style={styles.newline} key="blank2">{"\n\n"}</Text>
            <View style={styles.rowContainer} key="nested-view-4">
                <Text style={{ width: "33%" }} key="nested-text-1">
                    <Text style={[styles.challanDetails, { fontWeight: "bold" }]} key="challanno">Challan No:</Text>
                    <Text style={styles.challanDetails} key="challannovalue">{data.no}</Text>
                </Text>
                <Text style={[styles.challanDetails, { fontSize: 12, fontWeight: "bold", textAlign: "center", width: "33%" }]} key="type">{data.type}</Text>
                <Text style={{ width: "33%" }} key="nested-text-2">
                    <Text style={[styles.challanDetails, { fontWeight: "bold", textAlign: "right" }]} key="date">Date: </Text>
                    <Text style={styles.challanDetails} key="datevalue">{date}</Text>
                </Text>
            </View>
            <Text style={styles.newline} key="blank3">{"\n\n\n"}</Text>
            <View style={styles.rowContainer} key="nested-view-5">
                <View style={styles.paragraph} key="nested-view-6">
                    <Text style={[styles.challanDetails, { fontWeight: "bold" }]} key="to">{data.to}</Text>
                    <Text style={styles.challanDetails} key="tovalue">{data.toAddress}</Text>
                </View>
                <View style={styles.paragraph} key="nested-view-7">
                    {data.orderno &&
                        <Text key="nested-text-3">
                            <Text style={[styles.challanDetails, { fontWeight: "bold" }]} key="orderno">Order No: </Text>
                            <Text style={styles.challanDetails} key="ordernovalue">{data.orderno}</Text>
                        </Text>
                    }

                    <Text key="nested-text-4">
                        <Text style={[styles.challanDetails, { fontWeight: "bold" }]} key="modeofdispacth">Mode of Dispatch: </Text>
                        <Text style={styles.challanDetails} key="modeofdispatchvalue">{data.modeofdispatch}</Text>
                    </Text>
                </View>
            </View>
        </View>
    </>;

    const footer = <>
        <View fixed style={[{ width: "90%", paddingTop: "1%", paddingBottom: "10%", position: "absolute", bottom: 40, fontSize: 11, color: "black", border: "2px solid #DCD7D7", backgroundColor: "#F2F2F2" }]} key="footerview">
            {/*<HorizontalLine width={535} color="gray" thickness={2} />*/}
            <View style={{ flexDirection: "row", marginRight: 60, width: "100%" }} key="nested-view-8">
                <Text style={{ width: "50%", paddingLeft: "2%" }} key="forcustomersignature">For Customer</Text>
                <Text style={{ width: "50%", textAlign: "right", paddingRight: "2%" }} key="fromussignature">For {data.from}</Text>
            </View>
        </View>
        <View fixed style={{ flexDirection: "row", width: "90%", position: "absolute", bottom: 20, fontSize: 11, color: "black" }} key="nested-view-9">
            <Text style={{ width: "33%" }} key="blank4"></Text>
            <Text style={{ width: "34%", textAlign: "center", fontStyle: "italic" }} key="website">{data.website} </Text >
            <Text style={{ width: "33%", textAlign: "right", fontStyle: "italic" }} render={({ pageNumber, totalPages }) => `Page ${pageNumber % (totalPages / 2) === 0 ? (totalPages / 2) : pageNumber % (totalPages / 2)} of ${totalPages / 2}`} key="pagenumber" />
        </View>
    </>;

    return (
        <Document title="Challan" author={data.madeby} subject="Business Challan" key="challanpdf">
            {[0, 1].map((i) => {
                return <Page wrap size="A4" style={styles.page} key={`page${i}`}>
                    <Watermark key="watermark" />
                    {header}
                    <View style={[styles.tableContainer]} key="nested-view-10">
                        <View fixed style={styles.tableRowEven} key="nested-view-11">
                            <Text style={[styles.tableCellHeader, { width: "8%" }]} key="sno">S.No.</Text>
                            <Text style={[styles.tableCellHeader, { flexGrow: 1, flexBasis: 0 }]} key="item">Item</Text>
                            <Text style={[styles.tableCellHeader, { width: "15%" }]} key="unit">Unit</Text>
                            <Text style={[styles.tableCellHeader, { width: "15%" }]} key="quantity">Quantity</Text>
                        </View>

                        {
                            Object.entries(data.items).map((e, i) => {
                                return (
                                    <View style={i % 2 === 0 ? styles.tableRowEven : styles.tableRowOdd} key="nested-view-12">
                                        <Text style={[styles.tableCellContent, { width: "8%" }]} key="snovalue">{i + 1}</Text>
                                        <View style={[styles.tableCellContent, { flexBasis: 0, flexGrow: 1 }]} key="nested-text-5">
                                            <Text key="name">{e[1].name}</Text>
                                            <Text style={{ fontStyle: "italic" }} key="serialnovalue">{e[1].sno?.join(", ")} </Text>
                                        </View>
                                        <Text style={[styles.tableCellContent, { width: "15%" }]} key="unitvalue">{e[1].unit}</Text>
                                        <Text style={[styles.tableCellContent, { width: "15%" }]} key="quantityvalue">{e[1].quantity}</Text>
                                    </View>);
                            })
                        }

                        <View style={{ flexDirection: "row", backgroundColor: `hsl(${hue} 0% 11%)`, color: "white" }} key="nested-view-13">
                            <Text style={[styles.tableCellContent, { width: "8%" }]} key="blank5"></Text>
                            <View style={[styles.tableCellContent, { flexBasis: 0, flexGrow: 1 }]} key="nested-view-14">
                                <Text style={{ fontSize: 11, fontWeight: "bold", fontStyle: "italic" }} key="totalitems">Total Items</Text>
                            </View>
                            <Text style={[styles.tableCellContent, { width: "15%" }]} key="nested-text-6"></Text>
                            <Text style={[styles.tableCellContent, { width: "15%", fontWeight: "bold", fontStyle: "italic" }]} key="totalitemsvalue">{data.items.length}</Text>
                        </View>
                        <View style={{ flexDirection: "row", backgroundColor: `hsl(${hue} 0% 11%)`, color: "white" }} key="nested-view-16">
                            <Text style={[styles.tableCellContent, { width: "8%" }]} key="blank6"></Text>
                            <View style={[styles.tableCellContent, { flexBasis: 0, flexGrow: 1 }]} key="nested-view-15">
                                <Text style={{ fontSize: 11, fontWeight: "bold", fontStyle: "italic" }} key="totalquantityvalue">Total Quantity</Text>
                            </View>
                            <Text style={[styles.tableCellContent, { width: "15%" }]} key="blank7"></Text>
                            <Text style={[styles.tableCellContent, { width: "15%", fontWeight: "bold", fontStyle: "italic" }]} key="quantityvalue">{data.items.reduce((acc, item) => acc + item.quantity, 0)}</Text>
                        </View>
                    </View >
                    {footer}
                </Page >
            })}
        </Document >
    );
}