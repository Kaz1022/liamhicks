import React from "react";
import { useLocation } from "react-router-dom";
import "../../Sass/LiamHicks.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import HeronsSong from "../../img/heronssong.jpg";
import Bluejay from "../../img/bluejay.jpg";
import RavenCalls from "../../img/ravencalls.jpg";
import Trickster from "../../img/trickstar.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAmazon } from "@fortawesome/free-brands-svg-icons";
import NavbarDif from "../NavbarDif";
import Testimonial from "./Testimonial";

function LiamHicks() {
  const location = useLocation();
  const { clickedIndex } = location.state;

  const books = [
    {
      id: 1,
      img: HeronsSong,
      title: "Herons Song",
      url: "https://www.amazon.ca/Herons-Song-Tale-Time-Pontiacs/dp/B08B2M4Z3J/ref=sr_1_2?keywords=brian+baynton&qid=1661813992&sprefix=brian+bayn%2Caps%2C150&sr=8-2",
      story:
        "It is the spring of 1763 and Chief Pontiac is in the early stages of putting together his Indian confederacy. Liam Hicks has arrived in Detroit, looking to catch on with the British army as an independent scout.　Liam’s scouting work with the British army in the recent war against the French, has resulted in a recommendation from Sir William Johnson to the English Commander at Fort Detroit, Major Gladwin.　Liam’s unusual upbringing has exposed him to the best and worst of three cultures—English, French and Native—and he has takes what he believes are the best parts of each and incorporating them into his daily life.　As Pontiac’s War begins to spread, he quickly finds himself caught between the three factions, each fighting for their piece of North America.　Liam is forced to challenge his beliefs in fundamental ways and reflect on life and death and right and wrong like he never has before.",
    },
    {
      id: 2,
      img: Bluejay,
      title: "Song of the Blue Jay",
      url: "https://www.amazon.ca/Song-Blue-Jay-Book-Hicks/dp/B08TSDJ8B3/ref=pd_bxgy_img_sccl_1/132-4673278-4391928?pd_rd_w=vfoPN&content-id=amzn1.sym.17b2b149-58e2-4824-ba79-851c5f351fdc&pf_rd_p=17b2b149-58e2-4824-ba79-851c5f351fdc&pf_rd_r=07B07XWMRSXZDCM2NJ7W&pd_rd_wg=Z3iH1&pd_rd_r=fca4abda-5c1d-4a08-80c7-ae01e30c971f&pd_rd_i=B08TSDJ8B3&psc=1",
      story:
        "Song of the Blue Jay is book two in the Liam Hicks story, following closely behind the events of 'The Heron's Song'.　It is the spring/summer of 1764, one year removed from Pontiac's siege of Fort Detroit. Tensions between the English, French and Native peoples of the area remain high one year removed from Pontiac's attack on Fort Detroit.　Liam has returned to Detroit to resume his role as a scout for the English Army, but first makes plans to go to Aamjiwnaang along the shores of the beautiful St. Clair River he loves, to search for Ashagi's sister Deedeens (Blue Jay).　Liam must determine if Deedeens still believes in the power of Ashagi's dream that she and Liam would be together forever, and find a way to make contact with her without losing his life.　Set in the wilderness of Aamjiwnaang, on the banks of the St. Clair River, Liam's adventures take him throughout the region, including his first trip up the river the French call 'La Tranche' to the author's birthplace of Chatham, Ontario.Song of the Blue Jay seeks to examine historically accurate themes of racism, gender roles, love, life and death, and the need to live the best life you can while you still have it.",
    },
    {
      id: 3,
      img: RavenCalls,
      title: "The Raven Calls",
      url: "https://www.amazon.ca/Raven-Calls-Book-Three-Hicks/dp/B09NJ1CN5Y/ref=d_pd_sim_sccl_2_1/132-4673278-4391928?pd_rd_w=bBt45&content-id=amzn1.sym.7dee2abd-6737-4767-a298-77a3394d8a2a&pf_rd_p=7dee2abd-6737-4767-a298-77a3394d8a2a&pf_rd_r=K2PAY7M3VFJK4VBKKYYS&pd_rd_wg=jo30r&pd_rd_r=0e049fc0-bde3-4964-8358-dfd79aca74ca&pd_rd_i=B09NJ1CN5Y&psc=1",
      story:
        "The Raven Calls is the third book in the Liam Hicks Series, taking place directly after the events of the Song of the Blue Jay.　The summer of 1764 will soon be coming to a close. It has been a tumultuous few months for Liam as he tried to fulfill the wishes of his deceased Heron-brother Ashagi.　Liam is no longer needed by the British army at Fort Detroit due to the absence of Pontiac, which has resulted in relative peace amongst the tribes in the area.　The Raven Calls picks up the story with Liam soon approaching his thirtieth year, wrestling with what he wants his future to look like.　Just when Liam feels he is ready to make a commitment to a new life, an unexpected message arrives which just might turn all his considerations upside down.",
    },
    {
      id: 4,
      img: Trickster,
      title: "Trickster Raven and the Trail to Gitchee-Gami",
      url: "https://www.amazon.ca/Raven-Calls-Book-Three-Hicks/dp/B09NJ1CN5Y/ref=d_pd_sim_sccl_2_1/132-4673278-4391928?pd_rd_w=bBt45&content-id=amzn1.sym.7dee2abd-6737-4767-a298-77a3394d8a2a&pf_rd_p=7dee2abd-6737-4767-a298-77a3394d8a2a&pf_rd_r=K2PAY7M3VFJK4VBKKYYS&pd_rd_wg=jo30r&pd_rd_r=0e049fc0-bde3-4964-8358-dfd79aca74ca&pd_rd_i=B09NJ1CN5Y&psc=1",
      story:
        "pring 1766. An infant dead at childbirth. A despondent mother. Trickster Raven. Shifting allegiances. Continuing conflict.\nThese are the things Liam Hicks must deal with as he navigates his way through a rapidly changing world. Long-held relationships are passing, and new ones need to be formed. Liam soon learns that sometimes his beliefs and the circumstances he is facing do not line up well.\nTrickster Raven has fooled the village midwife and Liam’s Ojibwa partner, Deedeens. Raven leads them to mistakenly believe that Deedeens’ newborn son is dead because she was not big enough to carry the baby of a man Liam’s size to term. Even though Ashagi-Manidoo’s dream that Liam and Deedeens will be together forever still holds much power, Deedeens refuses to see a future with Liam if she cannot deliver him future children.\nAfter many attempts to help Deedeens see things differently, Liam decides he must leave Aamjiwnaang to give her time and space to heal. Liam is offered the opportunity to go north with his fur-trader friend Charles de Langlade who is heading for the Ouisconsin Territory where the beaver can still be found in great numbers. On his return to Michilimackinac, Liam is asked by the new fort commander, Robert Rogers, to head out with an expedition that will be searching for the fabled Northwest Passage. As the spectre of winter looms, will Liam survive the treachery, harsh landscape, and continuing skirmishes with the Sioux so he can return to Deedeens and salvage their relationship.",
    },
  ];

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
          pagination={{ clickable: true }}
          navigation={{ clickable: true }}
          initialSlide={clickedIndex - 1}
        >
          {books.map((book, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="book-info">
                  <div className="book-left">
                    <img src={book.img} alt="" />
                    <a
                      href={book.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="AmazonButton">
                        <FontAwesomeIcon icon={faAmazon} color={"#E4A951"} />{" "}
                        Browse on Amazon
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
  );
}

export default LiamHicks;
