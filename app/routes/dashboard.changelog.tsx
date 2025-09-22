import { useEffect } from "react";
import Header from "~/component/menu/header";
import { useGlobalContext } from "~/modules/gcontext";

export default function ChangeLog() {
    const { setHeaderText } = useGlobalContext()
    useEffect(() => {
        setHeaderText("App Features and Change Logs");
    }, [])

    return (
        <div className="h-screen w-screen bg-background">
            <Header />
            <div className="mx-10">
                <div className="space-y-6 overflow-y-auto">
                    <div>
                        <h3 className="font-semibold text-textPrimary text-lg">Features</h3>
                        <ul className="list-disc list-inside text-textSecondary mt-2 font-medium">
                            <li>Dynamically Create and Edit almost every part of Quotations, Challans for any type of product with enhanched flexibility.</li>
                            <li>Record Complaints, Edit it's Stats or Delete it.</li>
                            <li>Attach Customer List as Goodwill Sign.</li>
                            <li>Read, filter thorugh various fields for advance search.</li>
                            <li>Delete old made quotation according to user role and permissions.</li>
                            <li>Have different profiles that can be used while creating quotation or challans as different vendors.</li>
                            <li>Real Time Data Sync and Access to all quotations and challans from any device from anywhere in world (software with internet connection is required).</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-textPrimary">Version 1.2.2 - 19-09-2025</h3>
                        <ul className="list-disc list-inside text-textSecondary mt-2 font-medium">
                            <li>Total Quantity and Items now shows correctly in challan creation section.</li>
                            <li>Bill No field addded in Challan section.</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-textPrimary">Version 1.2.1 - 18-09-2025</h3>
                        <ul className="list-disc list-inside text-textSecondary mt-2 font-medium">
                            <li>Previous Bills updated with latest data type, So Fixed Amount NAN Error</li>
                            <li>Amount previously showed in US Format now in INR Format.</li>
                            <li>Made By Attribute now stays to first time creator.</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-textPrimary">Version 1.2.0 - 10-09-2025</h3>
                        <ul className="list-disc list-inside text-textSecondary mt-2 font-medium">
                            <li>Added user roles and permissions for better access control.</li>
                            <li>Improved security by implementing stronger password policies.</li>
                            <li>Enhanced UI with better responsiveness and accessibility features.</li>
                            <li>Fixed bugs related to PDF generation and challan Creation.</li>
                            <li>Optimized database queries for faster data retrieval.</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-textPrimary">Version 1.1.0 - 15-08-2025</h3>
                        <ul className="list-disc list-inside text-textSecondary mt-2 font-medium">
                            <li>Added Addon % on SI Price for quotation creation.</li>
                            <li>Added Discount % on SI Price for quotation creation.</li>
                            <li>Improved performance of the dashboard with lazy loading techniques.</li>
                            <li>Fixed UI glitches.</li>
                            <li>Updated third-party libraries to their latest versions.</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-textPrimary">Version 1.0.0 - 18-07-2025</h3>
                        <ul className="list-disc list-inside text-textSecondary font-medium mt-2">
                            <li>Initial release of the application with core features.</li>
                            <li>User authentication and profile management.</li>
                            <li>Basic CRUD operations for quotations and challans.</li>
                            <li>PDF generation for quotations and challans.</li>
                            <li>Notification system for user actions.</li>
                            <li>Multliple Theme Support.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}