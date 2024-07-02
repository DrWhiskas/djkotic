import React, { useState } from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';

interface HeaderLinks {
	title?: string;
	link: string;
}

interface HeaderProps {
	name?: string;
	image?: string;
}

export default function Header({ ...props }: HeaderProps) {
	const [showLinks, setShowLinks] = useState(false);

	function handleShowLinks() {
		setShowLinks(!showLinks);
		console.log('oui');
	}

	function BuildLink({ ...props }: HeaderLinks) {
		return (
			<Link className="link" to={props.link}>
				{props.title}
			</Link>
		);
	}
	return (
		<header className="header">
			<Link className="header__logo" to="/">
				DJ KOTIC
			</Link>
			<div className="header__container">
				<div className="header__links">
					<BuildLink title="Home" link="/" />
					<BuildLink title="Discover" link="#" />
					<BuildLink title="Playlist" link="#" />
					<BuildLink title="Contact Us" link="#" />
				</div>
				<div className="header__profil">
					<img
						className="header__profil__image"
						src={props.image}
						alt={props.name + "'s image"}
					/>
					<h2 className="header__profil__name">{props.name}</h2>
				</div>
			</div>
			<button className="header__burger" onClick={handleShowLinks}>
				<Menu className="header__burger__icon" />
			</button>
		</header>
	);
}
