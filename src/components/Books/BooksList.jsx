import React from 'react'
import Book from './Book';
import '../../Sass/BooksIntro.scss';
import HeronsSong from '../../img/heronssong.jpg';
import Bluejay from '../../img/bluejay.jpg';
import RavenCalls from '../../img/ravencalls.jpg';


function BooksList() {

  const books = [
    {
      id: 1,
      img: HeronsSong,
      url: "https://www.amazon.ca/Herons-Song-Tale-Time-Pontiacs/dp/B08B2M4Z3J/ref=sr_1_2?keywords=brian+baynton&qid=1661813992&sprefix=brian+bayn%2Caps%2C150&sr=8-2"
    },
    {
      id: 2,
      img: Bluejay,
      url: "https://www.amazon.ca/Song-Blue-Jay-Book-Hicks/dp/B08TSDJ8B3/ref=pd_bxgy_img_sccl_1/132-4673278-4391928?pd_rd_w=vfoPN&content-id=amzn1.sym.17b2b149-58e2-4824-ba79-851c5f351fdc&pf_rd_p=17b2b149-58e2-4824-ba79-851c5f351fdc&pf_rd_r=07B07XWMRSXZDCM2NJ7W&pd_rd_wg=Z3iH1&pd_rd_r=fca4abda-5c1d-4a08-80c7-ae01e30c971f&pd_rd_i=B08TSDJ8B3&psc=1"
    },
    {
      id: 3,
      img: RavenCalls,
      url: "https://www.amazon.ca/Raven-Calls-Book-Three-Hicks/dp/B09NJ1CN5Y/ref=d_pd_sim_sccl_2_1/132-4673278-4391928?pd_rd_w=bBt45&content-id=amzn1.sym.7dee2abd-6737-4767-a298-77a3394d8a2a&pf_rd_p=7dee2abd-6737-4767-a298-77a3394d8a2a&pf_rd_r=K2PAY7M3VFJK4VBKKYYS&pd_rd_wg=jo30r&pd_rd_r=0e049fc0-bde3-4964-8358-dfd79aca74ca&pd_rd_i=B09NJ1CN5Y&psc=1"
    }
  ]

  const myBooks = books.map((book) => {
    return (
      <Book
        key={book.id}
        id={book.id}
        img={book.img}
        url={book.url}
      />
    )
  });

  return (
   <div className="bookslist">
    {myBooks}
   </div>
  )
}

export default BooksList