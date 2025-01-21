// import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Latest from "../Header/Latest";
import Navbar from "../Header/Navbar";
import LeftSite from "../LeftSite/LeftSite";
import RightSite from "../RightSite/RightSite";
import MiddleSite from "../MiddleSite/MiddleSite";

const HomeLayout = () => {
    return (
        <div className="space-y-4">
            <header>
                <Header></Header>
                <Latest></Latest>
                <Navbar></Navbar>
            </header> 
            <main className="grid grid-cols-4 gap-3">
                <aside className="border">
                    <LeftSite></LeftSite>
                </aside>
                <section className="col-span-2">
                    <MiddleSite></MiddleSite>
                </section>
                <aside>
                    <RightSite></RightSite>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayout;