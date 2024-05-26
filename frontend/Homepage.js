import React from 'react';
import './App.css';
import NavigationBar from './Navbar';
import Showcase from './Showcase';
import CardSection from './CardSection';
import Section from './Section';
import CarbonSection from './CarbonSection';
import FollowSection from './FollowSection';
import LinksSection from './LinksSection';
import Footer from './Footer';
import './HomePage.css';

const App = () => {
  const cardData1 = [
    {
      image: 'https://tse4.mm.bing.net/th?id=OIP.wBztuGi5ULI3AndERPqrGwAAAA&pid=Api&P=0&h=180',
      title: 'Music Concert',
      description: 'Melodic Magic: Experience the Ultimate Music Concert!',
      link: '#'
    },
    {
      image: 'https://tse4.mm.bing.net/th?id=OIP.d5IZ-z_cpZ7wkSi8w5oYUgHaE3&pid=Api&P=0&h=180',
      title: 'Art Exhibition',
      description: 'Artistry Unveiled: Dive into Our Spectacular Art Exhibition!',
      link: '#'
    },
    {
      image: 'https://tse1.mm.bing.net/th?id=OIP.y8sHetoefV4tOj9aRqh-8gHaE7&pid=Api&P=0&h=180',
      title: 'Dance Showcase',
      description: 'Dance Extravaganza: Step into the World of Elegance and Rhythm!',
      link: '#'
    },
    {
      image: 'https://tse3.mm.bing.net/th?id=OIP.5rwrMe0D3FO4A-ps60uSFgHaE8&pid=Api&P=0&h=180',
      title: 'Theater Performance',
      description: 'Dramatic Delight: Witness the Spellbinding Theater Performance!',
      link: '#'
    }
  ];

  const cardData2 = [
    {
      image: 'https://tse1.mm.bing.net/th?id=OIP._NoWpRlO85OhmkODZv-EjwHaE8&pid=Api&P=0&h=180',
      title: 'Poetry Slam',
      description: 'Words Unleashed: Join the Thrilling Poetry Slam Event!',
      link: '#'
    },
    {
      image: 'https://tse4.mm.bing.net/th?id=OIP.amWnKHFZvo6M0Y9Q9GZjVAHaEK&pid=Api&P=0&h=180',
      title: 'Film Screening',
      description: "Cinematic Bliss: Don't Miss Our Captivating Film Screening!",
      link: '#'
    },
    {
      image: 'https://rivierabarcrawltours.com/wp-content/uploads/2019/12/cooking-classes-paris-pic.jpg',
      title: 'Cooking Workshop',
      description: 'Culinary Adventure: Embark on a Flavorful Cooking Workshop!',
      link: '#'
    },
    {
      image: 'http://basecampadventure.com/wp-content/uploads/2015/11/Nepal-Heritage-Tour-III.jpg',
      title: 'Cultural Heritage Tour',
      description: 'Journey Through Time: Explore Our Rich Cultural Heritage Tour!',
      link: '#'
    }
  ];

  return (
    <div className="App">
      <NavigationBar />
      <Showcase />
      <CardSection cards={cardData1} />
      <Section />
      <CardSection cards={cardData2} />
      <CarbonSection />
      <FollowSection />
      <LinksSection />
      <Footer />
    </div>
  );
};

export default App;
