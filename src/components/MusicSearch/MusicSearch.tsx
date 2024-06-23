import React, { useState } from 'react';
import MusicCard from '../Header/MusicCard/MusicCard';
import { searchMusic } from '../../services/deezerService';
import './musicSearch.css'

export default function MusicSearch() {
	const [query, setQuery] = useState('');
	const [musics, setMusics] = useState<
		Array<{
			id: number;
			title: string;
			artist: { name: string };
			album: { cover: string };
		}>
	>([]);

	async function handleSearch() {
		const results = await searchMusic(query);
		setMusics(results);
	}
return (
	<div className="music-search">
		<h1 className="music-search__title">Search Music</h1>
		<input
			className="music-search__input"
			type="text"
			value={query}
			onChange={(e) => setQuery(e.target.value)}
			placeholder="Enter song or artist"
		/>
		<button className="music-search__btn" onClick={handleSearch}>
			Search
		</button>
		{musics.map((music, key) => (
			<li className="className='music-search__list" key={music.id}>
				<MusicCard
					title={music.title}
					cover={music.album.cover}
					artist={music.artist.name}
				/>
			</li>
		))}
	</div>
);

}
/*
<ul>
			{musics.map((music) => (
				<li key={music.id}>
					<img
						src={music.album.cover}
						alt={music.title}
						style={{ width: '50px', height: '50px' }}
					/>
					{music.title} by {music.artist.name}
				</li>
			))}
		</ul>
        */