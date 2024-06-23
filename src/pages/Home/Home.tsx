import React from "react";
import './home.css'
import Header from "../../components/Header/Header";
import MusicSearch from "../../components/MusicSearch/MusicSearch";

export default function Home(){
    return (
			<section className="home">
				<Header
					name="DrWhiskas"
					image="https://i.pinimg.com/1200x/c1/b8/da/c1b8daaa2d3b11e79a0ad2e7a75f7aeb.jpg"
				/>
                <MusicSearch/>
			</section>
		);
}