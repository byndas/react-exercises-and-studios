import {RecipeAuthor} from '/Author.jsx'
import styles from './Description.module.css';


function RecipeDescription() {

   return (
       <div>
           <div>
               <h1>HUMMUS</h1>
               <p>FIVE INGREDIENT HUMMUS</p>
           </div>

           <RecipeAuthor />
       </div>);
}

export default RecipeDescription;