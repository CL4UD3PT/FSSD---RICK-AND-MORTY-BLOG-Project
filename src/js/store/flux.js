const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			character: [],
			location: [],
			episode: [],
			favorites: [],
			dataFiltered: [],
			schema: ''
		},
		actions: {
			getAllCharacter: async () => {
				if (localStorage.getItem('character')) {
					setStore({character: JSON.parse(localStorage.getItem('character'))})
				} else {
					const response = await fetch("https://rickandmortyapi.com/api/character");
					const data = await response.json();
					localStorage.setItem('character', JSON.stringify(data.results));
					setStore({character: JSON.parse(localStorage.getItem('character'))});
				}
			},
			getAllLocation: async () => {
				if (localStorage.getItem('location')) {
					setStore({location: JSON.parse(localStorage.getItem('location'))})
				} else {
					const response = await fetch("https://rickandmortyapi.com/api/location");
					const data = await response.json();
					localStorage.setItem('location', JSON.stringify(data.results));
					setStore({location: JSON.parse(localStorage.getItem('location'))});
				}
			},
			getAllEpisode: async () => {
				if (localStorage.getItem('episode')) {
					setStore({episode: JSON.parse(localStorage.getItem('episode'))})
				} else {
					const response = await fetch("https://rickandmortyapi.com/api/episode");
					const data = await response.json();
					localStorage.setItem('episode', JSON.stringify(data.results));
					setStore({episode: JSON.parse(localStorage.getItem('episode'))});
				}
			},
			getAllFavorites: () => {
				if(localStorage.getItem('favorites')) {
					setStore({favorites: JSON.parse(localStorage.getItem('favorites'))})
				} else {
					localStorage.setItem('favorites', JSON.stringify([]));
				}
			},
			setFavorites: (newFav) => {
				const favorites = getStore().favorites;
				if(!favorites.includes(newFav)){
					setStore({favorites: [...favorites, newFav]});
				}else{
					setStore({favorites: favorites.filter((oldFav) => oldFav != newFav)})
				}
			},
			setDataFiltered: (data) => {
				setStore({dataFiltered: data});
			},
			setSchema: (schemaType) => {
				setStore({schema: schemaType});
			}
		}
	};
};

export default getState;
