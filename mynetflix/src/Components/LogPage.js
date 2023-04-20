import React from 'react'
import AboutNFleft from "../Components/LoginPage/AboutNFleft";
import AboutNFright from "../Components/LoginPage/AboutNFright"
import Login from "../Components/LoginPage/Login";
import Footer from '../Components/LoginPage/Footer';
import Collapsible from '../Components/LoginPage/Collapsible';
import FooterEnd from '../Components/LoginPage/FooterEnd';
import Line from '../Components/LoginPage/Line';
import EndInfo from '../Components/LoginPage/EndInfo';
function LogPage() {
  const style1 = {
    "backgroundImage": "url(https://netflix-images.manikantp.repl.co/Netflix1.gif)"
  }
  const style2 = {
    "backgroundImage": "url(https://netflix-images.manikantp.repl.co/Netflix2.gif)"
  }
  const style3 = {
    "backgroundImage": "url(https://media.tenor.com/hd7jyV_dMS8AAAAC/netflix-media-services-provider.gif)"
  }
  const style4 = {

    "backgroundImage": "url(https://occ-0-1723-420.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABYjXrxZKtrzxQRVQNn2aIByoomnlbXmJ-uBy7du8a5Si3xqIsgerTlwJZG1vMpqer2kvcILy0UJQnjfRUQ5cEr7gQlYqXfxUg7bz.png?r=420)"
  }

 const data1= "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more on thousands of internet-connected devices.";
 const data2= "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.";
 const data3= "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.";
 const data4= "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.";
 const data5= "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.";
 const data6= "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.";

 const title1 ="What is Netflix?";
 const title2 ="How much does Netflix cost?";
 const title3 ="Where can I watch?";
 const title4 ="How do I cancel?";
 const title5 ="What can I watch on Netflix?";
 const title6 ="Is Netflix good for kids?";

  return (


    <div>
        <Login/>
    <AboutNFleft head1left='Enjoy on your TV.' head2left='Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.' style1={style1} />
    <AboutNFright head1right='Download your shows to watch offline.' head2right='Save your favourites easily and always have something to watch.'style2={style2}/>

    <AboutNFleft head1left='Watch everywhere.' head2left='Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.'style1={style3}/>
    <AboutNFright head1right='Create profiles for children.' head2right='Send children on adventures with their favourite characters in a space made just for them—free with your membership.'style2={style4}/>
    <Footer/>
    <Collapsible data={data1} title={title1}/>
    <Collapsible data={data2} title={title2}/>
    <Collapsible data={data3} title={title3}/>
    <Collapsible data={data4} title={title4}/>
    <Collapsible data={data5} title={title5}/>
    <Collapsible data={data6} title={title6}/>
    <FooterEnd/>
    <Line/>
    <EndInfo backgroundColor={"black"}/>

</div>
  )
}

export default LogPage