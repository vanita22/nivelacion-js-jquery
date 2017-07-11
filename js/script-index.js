$(document).ready( function(){

	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	renderHighlightedRecipes(recipesArray);

	/*nivel 2*/
	function printNews(el){
		$("#news-title").append('<h4>NUEVAS RECETAS</h4>');
	}
	printNews();

});


/*
* Función que se encarga de pintar TODAS las recetas que tengan 
* marcado el atributo "highlighted" como TRUE
*/
function renderHighlightedRecipes(recipesArray) {
	console.log('Recipes: ', recipesArray);

	/*agregado de Inés Vanessa Pérez*/
	recipesArray.forEach(function(el){		
			if(el.highlighted === true){
				console.log(renderRecipe());
			}		
	});	
}

renderHighlightedRecipes(recipesArray);

/*
* Función que se encarga de pintar UNA recetas que tenga 
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-recipe.html"
*/
function renderRecipe(recipe) {
	console.log('Voy a pintar la receta: ', recipe);
	/*agregado de Inés Vanessa Pérez Chávez*/
	$(".list-recipes").append("<a class='item-recipe' href='#'><span class='attribution'><span class='title-recipe'> TITULO DE LA RECETA (ATRIBUTO 'title' ) </span><span class='metadata-recipe'><span class='author-recipe'> NOMBRE DEL AUTO DE LA RECETA (ATRIBUTO 'source.name') </span><span class='bookmarks-recipe'><span class='icon-bookmark'></span></span></span></span><img src='URL DE LA IMAGEN' /></a>");
}



/*
* Función que se encarga de pintar todas las actividades
*/
function renderActivities(activitiesArray) {
	console.log('Activities: ', activitiesArray);
}

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe) {
	
}





