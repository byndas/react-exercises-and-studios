export default function BookList() {
   let pageTitle = "Norton Anthology of Ancient Music";
   let book1 = "https://m.media-amazon.com/images/I/81hwRITxd1L._SY522_.jpg";
   let book2 = "https://m.media-amazon.com/images/I/91F6NVlGGjL._SY522_.jpg";
   let book3 = "https://m.media-amazon.com/images/I/61Z4f5F+iFL._SY522_.jpg";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="The Shape of a Life by Shing-Tung Yau" />
         <img src={book2} alt="Trust by Hernan Diaz" />
         <img src={book3} alt="Polymath: The Aquarian Enlightenment by Robert Edward Grant" />
      </div>
   );
}