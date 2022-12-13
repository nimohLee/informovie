import React from "react";
import SearchForm from "./SearchForm";
import logo from "../inform_logo.png";
import BoxOfficeWrap from './BoxOfficeWrap';

const Home = () => {
    return (
        <main >
            <section className='flex flex-col justify-center items-center overflow-auto min-h-screen'>
                <article className='-translate-y-36'>
                    <img src={logo} alt="logo" className='w-96'/>
                    <SearchForm />
                </article>
                
                <BoxOfficeWrap/>
            </section>
        </main>
        
    );
};

export default Home;
