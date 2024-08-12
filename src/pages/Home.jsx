import {
  BrandsAssociated,
  CarouselComponent,
  InfoBox,
  ReviewGifs,
} from "../components/Home/index";

const Home = () => {
  return (
    <center>
      <CarouselComponent />
      <InfoBox />
      <BrandsAssociated />
      <ReviewGifs />
    </center>
  );
};

export default Home;
