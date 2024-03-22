const RecipeAuthor = () => {
   let authorLink = "https://www.blogger.com/profile/11119693459213190159";
   let authorPhoto = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhziOIfcx0LZYLmFfEC-LNr2e3J8PgfRwGWhSG4gnDjeoKsUXutkiOY3AaprZLQvW5hbC99_Djyw23or8RCC5ei9bpGdGJhH_nryhW82uzcGOcJq9AajC-iqcU4TtQB9Q/s220/DSC00085.jpg";
   let authorName = "Turkish Cook";

   return (
      <div>
         <img src={authorPhoto} alt = "female portrait photo" style={{objectFit: "contain", borderRadius: "50%"}} />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}></a>
         </div>
      </div>
   );
}

const RecipeIngredients = () => {
   const ingredients = ["spinach", "onion", "flour", "chicken stock", "egg", "yogurt", "oil"];
   return(
      <div>
         <h3>Recipe Ingredients</h3>
         <ul>
            <li>{ingredients[0]}</li>
            <li>{ingredients[1]}</li>
            <li>{ingredients[2]}</li>
            <li>{ingredients[3]}</li>
            <li>{ingredients[4]}</li>
            <li>{ingredients[5]}</li>
            <li>{ingredients[6]}</li>
         </ul>
      </div>
   );
}

const RecipeDescription = () => {
   return (
      <div>
         <div>
            <h1>Spinach Soup </h1>
            <p>A healthy and nutritious recipe from my mom.</p>
         </div>
         <div className="recipePhotoBlock">
            <RecipeIngredients />
            <RecipeAuthor />
         </div>
      </div>
   );
}

const RecipePhoto = () => {
   return (
      <img src="https://3.bp.blogspot.com/_tqAuwGaWySU/SaDsEj8KadI/AAAAAAAAFJ4/izxcH2focRk/s1600-h/Spinach+Soup+(Ispanak+Corbasi).JPG" alt="" className="imageUpdates"/>
   );
}

export default function RecipeDisplay () {
   return(
      <div className="recipePhotoBlock">
         <RecipePhoto />
         <div>
            <RecipeDescription />
         </div>
      </div>
   );
}