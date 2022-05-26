import React from "react";
import {CtaSection} from "../components/CtaSection";
import {Footer} from "../components/Footer";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { InfoSection } from "../components/InfoSection";
import { ShortlyApp } from "../components/ShortlyApp/ShortlyApp";

export function Home (){
    return(
        <>
            <Header/>
                <main>
                    <Hero/>
                    <ShortlyApp />
                    <InfoSection />
                    <CtaSection />
                </main>
            <Footer/>
        </>
    )
}