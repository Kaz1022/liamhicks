import React from 'react';
import { useLocation } from 'react-router-dom';
import '../../Sass/LiamHicks.scss';
import { Swiper, SwiperSlide }  from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import HeronsSong from '../../img/heronssong.jpg';
import Bluejay from '../../img/bluejay.jpg';
import RavenCalls from '../../img/ravencalls.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAmazon } from '@fortawesome/free-brands-svg-icons';
import NavbarDif from '../NavbarDif';
import Testimonial from './Testimonial';



function LiamHicks() {

  const location = useLocation();
  const { clickedIndex } = location.state;

  const books = [
    {
      id: 1,
      img: HeronsSong,
      title:"Herons Song",
      url: "https://www.amazon.ca/Herons-Song-Tale-Time-Pontiacs/dp/B08B2M4Z3J/ref=sr_1_2?keywords=brian+baynton&qid=1661813992&sprefix=brian+bayn%2Caps%2C150&sr=8-2",
      story: "Liam Hicks has arrived in Detroit, looking to catch on with the British army as an independent scout. It is the spring of 1763 and Pontiac is in the early stages of putting together his Indian confederacy. Liam’s scouting work with the British army in the recent war against the French, has resulted in a recommendation from Sir William Johnson to the English Commander at Fort Detroit, Major Gladwin.Liam’s unusual upbringing has exposed him to the best and worst of the three cultures—English, French and Native—who continue to fight for their piece of North America. The relationships he has developed with people from these cultures has caused him to take what he believes are the best parts of each and incorporate them into his daily life. As he begins his scouting duties at Detroit, some of his beliefs are challenged, and as Pontiac’s War begins to spread, he is made to reflect on life and death, right and wrong, like he has never done before."
    },
    {
      id: 2,
      img: Bluejay,
      title:"Song of The Blue Jay",
      url: "https://www.amazon.ca/Song-Blue-Jay-Book-Hicks/dp/B08TSDJ8B3/ref=pd_bxgy_img_sccl_1/132-4673278-4391928?pd_rd_w=vfoPN&content-id=amzn1.sym.17b2b149-58e2-4824-ba79-851c5f351fdc&pf_rd_p=17b2b149-58e2-4824-ba79-851c5f351fdc&pf_rd_r=07B07XWMRSXZDCM2NJ7W&pd_rd_wg=Z3iH1&pd_rd_r=fca4abda-5c1d-4a08-80c7-ae01e30c971f&pd_rd_i=B08TSDJ8B3&psc=1",
      story: "Song of The Blue Jay is book two in the Liam Hicks story following closely on where the the first book, 'The Heron's Song, finishes. It is the spring/summer of 1764, one year removed from Pontiac's siege of Fort Detroit. Liam has returned to Detroit to resume his role as a scout for the English Army, but first makes plans to go to Aamjiwnaang along the shores of the beautiful St. Clair River he loves, to search for Ashagi's sister Deedeens (Blue Jay). Liam must determine if Deedeens still believes in the power of Ashagi's dream in which it was foretold she and Liam would be together forever. Liam made a solemn vow to his Heron brother Ashagi, as he lay dying, that he would seek out Deedeens and make his (Ashagi's) dream a reality. Tensions between the English, French and Native peoples of the area remain high one year removed from Pontiac's attack on Fort Detroit. With his friend Ashagi no longer around to help him navigate through these difficulties, Liam must find a way to make contact with Deedeens without sacrificing his life. The appearance of the hated Frenchmen Armand Ouellette and Guy Allard serve to make his task far more difficult than he could have imagined. Like Liam's first adventure, Song of the Blue Jay is set in the wilderness of Aamjiwnaang, on the banks of the St. Clair River, but once again has him travelling throughout the region, including his first trip up the river the French call La Tranche to the site of what is present day Chatham, Ontario. Also, like the The Heron's Song, Song of the Blue Jay examines underlying themes of racism, man versus woman, love, life and death, and the need to live the best life you can while you still have it."
    },
    {
      id: 3,
      img: RavenCalls,
      title:"The Raven Calls",
      url: "https://www.amazon.ca/Raven-Calls-Book-Three-Hicks/dp/B09NJ1CN5Y/ref=d_pd_sim_sccl_2_1/132-4673278-4391928?pd_rd_w=bBt45&content-id=amzn1.sym.7dee2abd-6737-4767-a298-77a3394d8a2a&pf_rd_p=7dee2abd-6737-4767-a298-77a3394d8a2a&pf_rd_r=K2PAY7M3VFJK4VBKKYYS&pd_rd_wg=jo30r&pd_rd_r=0e049fc0-bde3-4964-8358-dfd79aca74ca&pd_rd_i=B09NJ1CN5Y&psc=1",
      story:"The Raven Calls is the third book in the Liam Hicks Series following closely on the story lines established in my first book, The Heron's Song and my second book, Song of the Blue Jay. The summer of 1764 will soon be coming to a close. It has been a tumultuous two or three months which started with Liam trying to fulfill the wishes of his deceased Heron brother Ashagi, who dreamed his sister Deedeens and Liam would be together forever. Later on, Liam is informed that he is no longer needed by the British army at Fort Detroit due to the absence of Pontiac, which has resulted in relative peace amongst the tribes in the area. After finding Deedeens in the village of Little Thunder, Liam discovers she has already betrothed herself to the Ojibwa warrior Waawaate. With nowhere else to go, Liam decides, with the permission of the village elders, to establish a temporary camp on the St. Clair River across from the Little Thunder's village while he decides his next steps. A series of events resulting in much death and upheaval, ultimately results in Liam and Deedeens having the chance to consider their future together.The Raven Calls picks up the story in the final month of the summer of 1764 with Liam, soon approaching his thirtieth year, wrestling with what he wants his future to look like. Will it be built around his newly started relationship with Deedeens? Will he accept the offer to join a fur trading company out of Detroit owned by James Sterling - a man he met through his friend Robert Rogers? Will he plant his roots in Aamjiwnaang, on the beautiful St. Clair River and give up the life he has been living for the past ten years? Just when Liam feels he is ready to make a commitment to a new life, an unexpected message arrives which just might turn all his life considerations upside down."
    }
  ]


  return (
    <>
      <NavbarDif />
      <div className="lh-wrapper">
        <div className="series-title">
          <h1>Liam Hicks Book Series</h1>
        </div>
        {/* slider */}
        <Swiper
          modules={[Pagination, Navigation]}
          slidesPerView={1}
          pagination={{clickable: true}}
          navigation={{clickable: true}}
          initialSlide={clickedIndex-1}
        >
          {books.map((book, index) => {
            return(
              <SwiperSlide key={index}>
                <div className="book-info">
                  <div className="book-left">
                    <img src={book.img} alt="" />
                    <a href={book.url} target="_blank" rel="noopener noreferrer">
                    <button className="AmazonButton">
                      <FontAwesomeIcon icon={faAmazon} color={"#E4A951"}  /> Browse on Amazon
                    </button>
                    </a>
                  </div>
                  <div className="book-right">
                    <span>{book.title}</span>
                    <span>{book.story}</span>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div>
        <Testimonial />
      </div>
    </>
  )
}

export default LiamHicks