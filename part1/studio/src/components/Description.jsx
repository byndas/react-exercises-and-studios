import React from 'react';
import {RecipeAuthor} from '/Author'
import styles from './Description.module.css';


const RecipeDescription = () => {

   return (
       <div>
           <div>
               <h1>Recipe Title</h1>
               <p>Short recipe description</p>
           </div>

           <RecipeAuthor />
       </div>);
}

export default RecipeDescription;