import React from "react";
import SearchForm from "./search/SearchForm";
import logo from "../assets/inform_logo.png";
import BoxOfficeWrap from './boxOffice/BoxOfficeWrap';

const Home = () => {
    return (
        <main >
            <section className='flex flex-col justify-center items-center overflow-auto h-screen'>
                <article className='-translate-y-10'>
                    <img src={logo} alt="logo" className='lg:w-96 md:w-60 w-56 -translate-x-28 md:-translate-x-18 lg:translate-x-0'/>
                    <SearchForm />
                </article>
                <BoxOfficeWrap/>
            </section>
        </main>
        
    );
};

export default Home;
