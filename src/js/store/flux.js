const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			locations: [],
			episodes: [],
			favorites: []
		},
		actions: {
			getAllCharacters: async () => {
				if (localStorage.getItem('characters')) {
					setStore({characters: JSON.parse(localStorage.getItem('characters'))})
				} else {
					const response = await fetch("https://rickandmortyapi.com/api/character");
					const data = await response.json();
					localStorage.setItem('characters', JSON.stringify(data.results));
					setStore({characters: JSON.parse(localStorage.getItem('characters'))});
				}
			},
			getAllLocations: async () => {
				if (localStorage.getItem('locations')) {
					setStore({locations: JSON.parse(localStorage.getItem('locations'))})
				} else {
					const response = await fetch("https://rickandmortyapi.com/api/location");
					const data = await response.json();
					localStorage.setItem('locations', JSON.stringify(data.results));
					setStore({locations: JSON.parse(localStorage.getItem('locations'))});
				}
			},
			getAllEpisodes: async () => {
				if (localStorage.getItem('episodes')) {
					setStore({episodes: JSON.parse(localStorage.getItem('episodes'))})
				} else {
					const response = await fetch("https://rickandmortyapi.com/api/episode");
					const data = await response.json();
					localStorage.setItem('episodes', JSON.stringify(data.results));
					setStore({episodes: JSON.parse(localStorage.getItem('episodes'))});
				}
			},
			setFavorites: (newFav) => {
				const favorites = getStore().favorites;
				if(!favorites.includes(newFav)){
					setStore({favorites: [...favorites, newFav]});
				}else{
					setStore({favorites: favorites.filter((oldFav) => oldFav != newFav)})
				}
			}
		}
	};
};

export default getState;
