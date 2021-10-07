import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <section className="cards">
           <div className="cards__wrap">
           <h1 className="cards__title">Check out these faculties!</h1>
            <ul className="cards__ul">
                <CardItem
                    src="images/fisip.jpg"
                    text="Fakultas yang mempelajari mulai dari pertahanan, hukum, sosial budaya hingga masalah diplomasi negara"
                    label="Fakultas Ilmu Sosial & Politik"
                    path="/Details"
                />
                <CardItem
                    src="images/ft.jpg"
                    text="Fakultas Teknik adalah fakultas yang berfokus pada ilmu mengkombinasikan ilmu dan teknologi untuk menyelesaikan suatu permasalahan"
                    label="Fakultas Teknik"
                    path="/Details"
                />
                <CardItem
                    src="images/fk.jpg"
                    text="Sfakultas kedokteran adalah sebuah institusi pendidikan tertiari atau bagian dari institusi tersebut, yang terlibat dalam pendidikan pelaku medis masa depan"
                    label="Fakultas Kedokteran"
                    path="/Details"
                />
                <CardItem
                    src="images/fh.jpg"
                    text="Fakultas Hukum mempelajari berbagai sistem hukum yang berkaitan dengan kehidupan kemasyarakatan maupun kegiatan bisnis"
                    label="Fakultas Hukum"
                    path="/Details"
                />
                <CardItem
                    src="images/feb.jpg"
                    text="Fakultas Ekonomi adalah kampus yang modern, dinamis, dan bersahabat sebagai tempat menempa ilmu bagi calon-calon pemimpin bangsa."
                    label="Fakultas Ekonomi & Bisnis"
                    path="/Details"
                />   
            </ul>
           </div>
        </section>
    )
}

export default Cards
