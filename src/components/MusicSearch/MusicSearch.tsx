import React, { useState } from 'react';
import MusicCard from '../MusicCard/MusicCard';
import { searchMusic } from '../../services/deezerService';
import './musicSearch.css';

export default function MusicSearch() {
	const [query, setQuery] = useState('');
	const [musics, setMusics] = useState<
		Array<{
			id: number;
			title: string;
			artist: { name: string };
			album: { cover: string };
			preview: string;
		}>
	>([]);

	const [currentAudio, setCurrentAudio] = useState<HTMLAudioElement | null>(
		null
	);

	async function handleSearch() {
		const results = await searchMusic(query);
		setMusics(results);
		console.log(results);
	}

	function handlePlay(audio: HTMLAudioElement) {
		if (currentAudio && currentAudio !== audio) {
			currentAudio.pause();
			currentAudio.currentTime = 0;
		}
		setCurrentAudio(audio);
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
			<div className="music-search__list">
				{musics.map((music, key) => (
					<li className="music-search__list__item" key={music.id}>
						<MusicCard
							title={music.title}
							cover={music.album.cover}
							artist={music.artist.name}
							preview={music.preview}
							onPlay={handlePlay}
						/>
					</li>
				))}
			</div>
		</div>
	);
}
