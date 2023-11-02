export const updateFavorites = (id, favorites) => {
if(favorites.includes(id)){
	return favorites.filter(fav => fav !== id);
}else{
	return [...favorites, id]
}
};

export const checkFavorites = (id, favorites) => {
return favorites?.includes(id) ? "#fa3e5f" : "white";
};


export const validateString = (value) => {
return value?.length < 3 || value === null ? "Must have at least 3 characters" : null; 
};