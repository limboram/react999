import React from 'react'
import axios from 'axios'
import SiteInfo from '../components/SiteInfo'
import Header from '../components/Header'
import Title from '../components/Title'
import Loading from '../components/Loading'
import Footer from '../components/Footer'

class Port extends React.Component {
    state = {
        isLoading : true,
        sites : []
    }

    getSites = async () => {
        const { 
            data: {
                data: { ports },
            },
        } = await axios.get("https://limboram.github.io/dothome1/site.json");
        //console.log(sites.data.data.ports);
        this.setState( { ports, isLoading: false });
        // console.log(ports)
    }

    componentDidMount(){
        setTimeout(() => {
            this.getSites();
        },3000);
    }

    render(){
        const { isLoading, ports } = this.state;
        return (
            <div id="wrap">
                <Header />
                { isLoading ? 
                    (
                        <div className="loading">
                        <Loading />
                        </div>
                    ):(
                        <main id="main">
                            <section id="siteCont">
                                <div className="container">
                                    <div className="titleWrap">
                                        <Title text={['Site','Reference','Site Reference']} />
                                    </div>
                                    <div className="siteCont">
                                        { ports.map( port => (
                                            <SiteInfo 
                                                key={port.id}
                                                link={port.link}
                                                image={port.image}
                                                title={port.title}
                                                category={port.category}
                                            />
                                        ) ) }
                                    </div>      
                                </div>
                            </section>
                        </main>
                    )
                }
                <Footer />
            </div>
        )
    }
}

export default Port;