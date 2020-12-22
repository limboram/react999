import React from 'react';
import Header from '../components/Header';
import Title from '../components/Title';
import Footer from '../components/Footer';

function ScriptInfo({title, source}){
    return (
        <div className="script">
            <div className="script-left">
                <h3>{title}</h3>
            </div>
            <div className="script-right">
                <div className="view">
                    <iframe title={title} src={source}></iframe>
                </div>
            </div>
        </div>
    )
}

const siteData = [
    {
        id: '1',
        title: 'Tail Animation',
        source: [
            "https://limboram.github.io/dothome1/effect/portfolio/animation01.html"
        ]
    },{
        id: '2',
        title: 'Text animation',
        source: [
            "https://limboram.github.io/dothome1/effect/portfolio/animation02.html"
        ]
    },{
        id: '3',
        title: 'Loading Animation',
        source: [
            "https://limboram.github.io/dothome1/effect/portfolio/animation04.html"
        ]
    },{
        id: '4',
        title: 'Heart Animation',
        source: [
            "https://limboram.github.io/dothome1/effect/portfolio/animation05.html"
        ]
    }
]

function Script(){
    return (
        <div id="wrap">
            <Header color="white" />
            <main id="main">
                <section id="scriptCont">
                    <div className="container">
                        <div className="titleWrap">
                            <Title text={['Animation','reference','Animation Reference']} />
                        </div>
                        <div className="scriptCont">
                            {siteData.map((site) => {
                                console.log(site.source[0])
                                return <ScriptInfo 
                                    key={site.id}
                                    title={site.title}
                                    source={site.source[0]}
                                />
                            })}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default Script;