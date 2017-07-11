$(document).ready( function(){

	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	renderHighlightedRecipes(recipesArray);
	renderActivities(activitiesArray);
	renderActivity(recipe);

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
	/*agregado de Inés Vanessa Pérez Chávez*/
	recipesArray.forEach(function(el){	
		$(".list-recipes").append('<a class="item-recipe" href="#"><span class="attribution"><span class="title-recipe#>' + el.title + ' </span><span class="metadata-recipe"><span class="author-recipe">' + el.source.name + '</span><span class="bookmarks-recipe"><span class="icon-bookmark"></span></span></span></span><img src="' + el.source.url + '"/></a>');
	});
	console.log('Voy a pintar la receta: ', recipe);
}
renderRecipe();



/*
* Función que se encarga de pintar todas las actividades
*/
function renderActivities(activitiesArray) {
	console.log('Activities: ', activitiesArray);

	/*agregado por Inés Vanessa Pérez Chávez*/	
		if(activitiesArray.length > 0){
			$(".wrapper-message").toggle();
		}	
}



/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe) {
	/*agregado de Inés Vanessa Pérez Chávez*/
	activitiesArray.forEach(function(ele){	
		$(".list-activities").append('<a href="#" class="item-activity"><span class="attribution"><span class="avatar"><img src="' + ele.userAvatar + '" class="image-avatar"></span><span class="meta"><span class="author">'+ele.userName+'</span> made<span class="recipe">'+ele.recipeName+'</span>: '+ele.text +'<span class="location">&mdash;'+ele.place+'</span></span></span><div class="bg-image" style="background-image: url("'+ele.image+'")"></div></a>');
	});
}
renderActivity();





