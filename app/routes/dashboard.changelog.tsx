import { useEffect } from "react";
import Header from "~/component/menu/header";
import { useGlobalContext } from "~/modules/gcontext";

export default function ChangeLog() {
    const { setHeaderText } = useGlobalContext()
    useEffect(() => {
        setHeaderText("App Features and Change Logs");
    }, [])

    return (
        <div className="min-h-screen w-screen bg-background">
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
                        <h3 className="text-lg font-semibold text-textPrimary">Version 1.2.1 - 21-09-2025</h3>
                        <ul className="list-disc list-inside text-textSecondary mt-2 font-medium">
                            <li>Feature: Now Actions Button for Edit, Copy and Delete, Instead of seperate columns.</li>
                            <li>Bug: Previous Bills updated with latest data type, So Fixed Amount NAN Error.</li>
                            <li>Bug: Amount previously showed in US Format now in INR Format.</li>
                            <li>Bug: Made By Attribute now stays to first time creator.</li>
                            <li>Bug: Quotation Made by info i.e., User Signature now shows correctly.</li>
                            <li>Bug: Background Color now applies to whole page instead of upto content size</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-textPrimary">Version 1.2.0 - 10-09-2025</h3>
                        <ul className="list-disc list-inside text-textSecondary mt-2 font-medium">
                            <li>Feature: Added user roles and permissions for better access control.</li>
                            <li>Optmization: Improved security by implementing stronger password policies.</li>
                            <li>Optmization: Enhanced UI with better responsiveness and accessibility features.</li>
                            <li>Optmization: Optimized database queries for faster data retrieval.</li>
                            <li>Bug: Fixed bugs related to PDF generation and challan Creation.</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-textPrimary">Version 1.1.0 - 15-08-2025</h3>
                        <ul className="list-disc list-inside text-textSecondary mt-2 font-medium">
                            <li>Feature: Added Addon % on SI Price for quotation creation.</li>
                            <li>Feature: Added Discount % on SI Price for quotation creation.</li>
                            <li>Optimization: Improved performance of the dashboard with lazy loading techniques.</li>
                            <li>Optimization: Updated third-party libraries to their latest versions.</li>
                            <li>Bug: Fixed UI glitches.</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-textPrimary">Version 1.0.0 - 18-07-2025</h3>
                        <ul className="list-disc list-inside text-textSecondary font-medium mt-2">
                            <li>Feature: Initial release of the application with core features.</li>
                            <li>Feature: User authentication and profile management.</li>
                            <li>Feature: Basic CRUD operations for quotations and challans.</li>
                            <li>Feature: PDF generation for quotations and challans.</li>
                            <li>Feature: Notification system for user actions.</li>
                            <li>Feature: Multliple Theme Support.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}