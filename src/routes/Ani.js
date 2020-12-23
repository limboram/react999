import React from 'react';
import Header from '../components/Header';
import Title from '../components/Title';
import Footer from '../components/Footer';

function AniInfo({title, source}){
    return (
        <div className="aniCont">
            <div className="ani">
                <iframe title={title} src={source} frameborder="0" scrolling="no"></iframe>
                <h3>{title}</h3>
            </div> 
        </div>
    )
}
const aniData = [
    {
        id: '1',
        title: 'CSS Animation',
        source: [
            "https://limboram.github.io/dothome1/effect/portfolio/animation01.html"
        ]
    },{
        id: '2',
        title: 'CSS Animation',
        source: [
            "https://limboram.github.io/dothome1/effect/portfolio/animation06.html"
        ]
    },{
        id: '3',
        title: 'CSS Animation',
        source: [
            "https://limboram.github.io/dothome1/effect/portfolio/animation05.html"
        ]
    },{
        id: '4',
        title: 'CSS Animation',
        source: [
            "https://limboram.github.io/dothome1/effect/portfolio/animation04.html"
        ]
    },{
        id: '5',
        title: 'GSAP Animation',
        source: [
            "https://limboram.github.io/dothome1/effect/portfolio/animation03.html"
        ]
    },{
        id: '6',
        title: 'SVG Animation',
        source: [
            "https://limboram.github.io/dothome1/effect/portfolio/animation02.html"
        ]
    }
]

function Ani(){
    return (
        <div id="wrap">
            <Header color="white" />
            <main id="main">
                <section id="aniCont">
                    <div class="container">
                        <div className="titleWrap">
                            <Title text={['animation','book','animation book']}/>
                        </div>
                        <div className="aniCont">
                            {aniData.map((txt)=>{
                                return <AniInfo 
                                    key={txt.id} title={txt.title} source={txt.source[0]}
                                />
                            })}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
};

export default Ani;