import Header from "~/component/header";
import Quote from "./quote";

export default function Dashboard() {
    return (
        <>
            <div className="h-screen w-screen">
                <Header />
                <Quote />
            </div>
        </>
    );
}