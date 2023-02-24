const eatMeal = (searchField) => {
  const url  =`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchField}`;
  fetch(url)
  .then(res => res.json())
  .then(data => displayMeals(data.meals))
}


const displayMeals = meals =>{
  // console.log(meals)
  // Meals container 
  const mealsContainer = document.getElementById("meals-container");
  mealsContainer.innerText = ''
  meals.forEach(meal =>{
    // console.log(meal)
    const mealDiv = document.createElement("div")
    //add class col
    mealDiv.classList.add("col");

    mealDiv.innerHTML = `
          <div class="card h-100">
              <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions}</p>
                <!-- Button trigger modal ---------- -->
            <button onclick="mealDetail(${meal.idMeal})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#mealdetailsModal">
              Details
            </button>
              </div>
          </div>
    `

    mealsContainer.appendChild(mealDiv)
  })
}

const buttonMeals = () =>{
  const searchField = document.getElementById("searchField").value;
  eatMeal(searchField)
}

const mealDetail = idMeal =>{
  const url  =`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
  fetch(url)
  .then(res =>res.json())
  .then(data => disPlayDetailsMeals(data.meals[0]))
}
//dissplay Meal details function 
const disPlayDetailsMeals = meal =>{
  document.getElementById("mealdetailsModalLabel").innerText=meal.strMeal;
  const mealBody = document.getElementById("mealdetailsModalBody")
  mealBody.innerHTML = `
    <img class="img-fluid" src=${meal.strMealThumb} />
  `
}

//eat meal function decleration
eatMeal('rice')



 