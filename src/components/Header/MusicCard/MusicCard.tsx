import React from "react";
import './musicCard.css'
import { Link } from "react-router-dom";

interface MusicCardProps {
	title?: string;
	artist?: string;
	album?: string;
	cover?: string;
	preview?: string;
    music?: string
}

export default function MusicCard({...props}: MusicCardProps){
    return (
			<article className="music-card">
				<img
					className="music-card__cover"
					src={props.cover}
					alt={props.title}
				/>
				<span className="music-card__title">{props.title}</span>
				<span className="music-card__artist">{props.artist}</span>
			</article>
		);
}