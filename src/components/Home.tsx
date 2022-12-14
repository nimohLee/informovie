import React from "react";
import SearchForm from "./search/SearchForm";
import logo from "../assets/inform_logo.png";
import BoxOfficeWrap from './boxOffice/BoxOfficeWrap';

const Home = () => {
    return (
        <main >
            <section className='flex flex-col justify-center items-center overflow-auto h-screen'>
                <article className='-translate-y-10'>
                    <img src={logo} alt="logo" className='w-96'/>
                    <SearchForm />
                </article>
                
                <BoxOfficeWrap/>
            </section>
        </main>
        
    );
};

export default Home;
