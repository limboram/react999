import React from 'react';
import Header from '../components/Header';
import Title from '../components/Title';
import Footer from '../components/Footer';

function AboutText({title, desc, image, image2x}){
    return (
        <div>
            <div className="aiLeft">
                <img src={image} srcSet={image2x} alt={title} />
            </div>
            <div className="aiRight">
                <h2>{title}</h2>
                <p>{desc}</p>
            </div>
        </div>
    )
}

const aboutMe = [
    {
        id: 1,
        title: '웹퍼블리셔를 알기 전의 나',
        desc: '“웹퍼블리셔를 알기 전에는 컴퓨터는 게임할 때 사용하는 거, 정보검색할 때 사용하는 거 라고만 생각하고 그마저도 스마트폰이 나오면서 컴퓨터는 쳐다보지도 않게 되었습니다. 스마트폰이 나오면서 컴퓨터에 조금 있던 관심마저 사라져 집에 꼭 컴퓨터가 있어야 할까? 라는 생각도 했습니다."',
        image: '../img/img1.jpg',
        image2x: '../img/img1@2.jpg 2x, ../img/img1@3.jpg 3x'
    },
    {
        id: 2,
        title: '웹퍼블리셔에 관심이 가다',
        desc: '“고등학교를 졸업하고 대학교를 가기위해 선택한 학과는 보육교사였습니다. 보육교사가 되기 위해 2년동안 학교를 열심히 다니고 실습도 했지만, 실습을 하면서 누구를 가르치는 일은 나와 맞지 않구나 라는 생각이 들었고 졸업만 하자 라는 생각으로 졸업을 한 뒤 취업을 하지 않았습니다. 그러던도중 웹퍼블리셔라는 직업을 알게 되었고 흥미가 생겨 웹퍼블리셔가 되기 위해 공부를 시작했습니다.”',
        image: '../img/img2.jpg',
        image2x: '../img/img2@2.jpg 2x, ../img/img2@3.jpg 3x'
    },
    {
        id: 3,
        title: '웹퍼블리셔가 된다면',
        desc: '“전공과는 다른 직업을 선택했고, 주변에서 많이 힘들 텐데 괜찮겠냐 라는 말을 들었음에도 포기하지 않고 그만큼 열심히 배웠습니다. 그럼에도 남들보다 조금 부족할 수 있지만 그 부족함이 겉으로 드러나지 않아 남들은 내가 부족하다는 걸 느끼지 못 하도록 열심히하는 웹퍼블리셔가 되겠습니다.”',
        image: '../img/img3.jpg',
        image2x: '../img/img3@2.jpg 2x, ../img/img3@3.jpg 3x'
    }
]

function About(){
    return (
        <div id="wrap">
            <Header color="white" />
            <main id="main">
                <section id="aboutCont">
                    <div className="container">
                        <div className="titleWrap">
                            <Title text={['about','me','about me']} />
                        </div>
                        <div className="aboutCont">
                            {aboutMe.map((txt) => (
                                <AboutText key={txt.id} title={txt.title} desc={txt.desc} image={txt.image} />
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default About;