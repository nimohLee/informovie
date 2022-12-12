import React from "react";
import SearchForm from "./SearchForm";
import logo from "../inform_logo.png";
import BoxOfficeWrap from './BoxOfficeWrap';

const Home = () => {
    return (
        <main>
            <section>
                <img src={logo} alt="logo" />
                <SearchForm />
            </section>
            <aside>
                <BoxOfficeWrap/>
            </aside>
        </main>
    );
};

export default Home;
