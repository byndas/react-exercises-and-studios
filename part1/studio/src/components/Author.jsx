// import styles from './Description.module.css';
// import React from 'react';

const RecipeAuthor = () => {
    const authorLink = "https://therealfooddietitians.com/easy-garlic-hummus/";
    const authorPhoto = "https://therealfooddietitians.com/wp-content/uploads/2021/08/stacie-about-2-100x100.jpeg";
    const authorName = "Stacie Hassing";

    return (
        <div className = {styles.recipeAuthorBlock}>
           {/* <img src={authorPhoto} alt = "Reasonable alt text" className={styles.imageUpdates} /> */}
           <div>
              <h3>{authorName}</h3>
              {/* <a href={authorLink}>Blog name</a> */}
           </div>
        </div>
     );
}
export default RecipeAuthor;