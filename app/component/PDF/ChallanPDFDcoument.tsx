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
        <View fixed style={styles.header}>
            <Text style={styles.title}>{data.from}</Text>
            <Text style={styles.newline}>{"\n"}</Text>
            <Text style={styles.companyDetails}>
                <Text style={{ fontWeight: "bold" }}>Address:- </Text>
                <Text> {data.fromAddress}</Text>
            </Text>

            <Text style={styles.companyDetails}>
                <Text style={{ fontWeight: "bold" }}>Contact No:- </Text>
                <Text>{data.contact}</Text>
            </Text>

            <Text style={styles.companyDetails}>
                <Text style={{ fontWeight: "bold" }}>Email Id:- </Text>
                <Text >{data.email}</Text>
            </Text>

            <Text style={styles.newline}>{"\n\n"}</Text>
            <View style={styles.rowContainer}>
                <Text style={{ width: "33%" }}>
                    <Text style={[styles.challanDetails, { fontWeight: "bold" }]}>Challan No:</Text>
                    <Text style={styles.challanDetails}>{data.no}</Text>
                </Text>
                <Text style={[styles.challanDetails, { fontSize: 12, fontWeight: "bold", textAlign: "center", width: "33%" }]}>{data.type}</Text>
                <Text style={{ width: "33%" }}>
                    <Text style={[styles.challanDetails, { fontWeight: "bold", textAlign: "right" }]}>Date: </Text>
                    <Text style={styles.challanDetails}>{date}</Text>
                </Text>
            </View>
            <Text style={styles.newline} >{"\n\n\n"}</Text>
            <View style={styles.rowContainer}>
                <View style={styles.paragraph}>
                    <Text style={[styles.challanDetails, { fontWeight: "bold" }]}>{data.to}</Text>
                    <Text style={styles.challanDetails}>{data.toAddress}</Text>
                </View>
                <View style={styles.paragraph}>
                    {data.orderno &&
                        <Text>
                            <Text style={[styles.challanDetails, { fontWeight: "bold" }]}>Order No: </Text>
                            <Text style={styles.challanDetails}>{data.orderno}</Text>
                        </Text>
                    }

                    <Text>
                        <Text style={[styles.challanDetails, { fontWeight: "bold" }]}>Mode of Dispatch: </Text>
                        <Text style={styles.challanDetails}>{data.modeofdispatch}</Text>
                    </Text>
                </View>
            </View>
        </View>
    </>;

    const footer = <>
        <View fixed style={[{ width: "90%", paddingTop: "1%", paddingBottom: "10%", position: "absolute", bottom: 40, fontSize: 11, color: "black", border: "2px solid #DCD7D7", backgroundColor: "#F2F2F2" }]}>
            {/*<HorizontalLine width={535} color="gray" thickness={2} />*/}
            <View style={{ flexDirection: "row", marginRight: 60, width: "100%" }}>
                <Text style={{ width: "50%", paddingLeft: "2%" }}>For Customer</Text>
                <Text style={{ width: "50%", textAlign: "right", paddingRight: "2%" }}>For {data.from}</Text>
            </View>
        </View>
        <View fixed style={{ flexDirection: "row", width: "90%", position: "absolute", bottom: 20, fontSize: 11, color: "black" }}>
            <Text style={{ width: "33%" }} ></Text>
            <Text style={{ width: "34%", textAlign: "center", fontStyle: "italic" }}>{data.website} </Text >
            <Text style={{ width: "33%", textAlign: "right", fontStyle: "italic" }} render={({ pageNumber, totalPages }) => `Page ${pageNumber % (totalPages / 2) === 0 ? (totalPages / 2) : pageNumber % (totalPages / 2)} of ${totalPages / 2}`} />
        </View>
    </>;

    return (
        <Document title="Challan" author={data.madeby} subject="Business Challan" >
            {[0, 1].map((i) => {
                return <Page wrap size="A4" style={styles.page}>
                    <Watermark />
                    {header}
                    <View style={[styles.tableContainer]}>
                        <View fixed style={styles.tableRowEven}>
                            <Text style={[styles.tableCellHeader, { width: "8%" }]}>S.No.</Text>
                            <Text style={[styles.tableCellHeader, { flexGrow: 1, flexBasis: 0 }]}>Item</Text>
                            <Text style={[styles.tableCellHeader, { width: "15%" }]}>Unit</Text>
                            <Text style={[styles.tableCellHeader, { width: "15%" }]}>Quantity</Text>
                        </View>

                        {Object.entries(data.items).map((e, i) => {
                            return (
                                <View style={i % 2 === 0 ? styles.tableRowEven : styles.tableRowOdd}>
                                    <Text style={[styles.tableCellContent, { width: "8%" }]}>{i + 1}</Text>
                                    <View style={[styles.tableCellContent, { flexBasis: 0, flexGrow: 1 }]}>
                                        <Text>{e[1].name}</Text>
                                        <Text style={{ fontStyle: "italic" }} >{e[1].sno?.join(", ")} </Text>
                                    </View>
                                    <Text style={[styles.tableCellContent, { width: "15%" }]}>{e[1].unit}</Text>
                                    <Text style={[styles.tableCellContent, { width: "15%" }]}>{e[1].quantity}</Text>
                                </View>);
                        })}

                        <View style={{ flexDirection: "row", backgroundColor: `hsl(${hue} 0% 11%)`, color: "white" }}>
                            <Text style={[styles.tableCellContent, { width: "8%" }]}></Text>
                            <View style={[styles.tableCellContent, { flexBasis: 0, flexGrow: 1 }]}>
                                <Text style={{ fontSize: 11, fontWeight: "bold", fontStyle: "italic" }} >Total Items</Text>
                            </View>
                            <Text style={[styles.tableCellContent, { width: "15%" }]}></Text>
                            <Text style={[styles.tableCellContent, { width: "15%", fontWeight: "bold", fontStyle: "italic" }]}>{data.items.length}</Text>
                        </View>
                        <View style={{ flexDirection: "row", backgroundColor: `hsl(${hue} 0% 11%)`, color: "white" }}>
                            <Text style={[styles.tableCellContent, { width: "8%" }]}></Text>
                            <View style={[styles.tableCellContent, { flexBasis: 0, flexGrow: 1 }]}>
                                <Text style={{ fontSize: 11, fontWeight: "bold", fontStyle: "italic" }} >Total Quantity</Text>
                            </View>
                            <Text style={[styles.tableCellContent, { width: "15%" }]}></Text>
                            <Text style={[styles.tableCellContent, { width: "15%", fontWeight: "bold", fontStyle: "italic" }]}>{data.items.reduce((acc, item) => acc + item.quantity, 0)}</Text>
                        </View>
                    </View>
                    {footer}
                </Page>
            })}
        </Document >
    );
}