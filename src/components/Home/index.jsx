import Cards from '../cards';
import CardList from '../cards/CardList';
import Images from '../Carousel';

function HomePage() {
  return (
    <div className="container">
      <Images />
      <CardList />
    </div>
  );
}

export default HomePage;
