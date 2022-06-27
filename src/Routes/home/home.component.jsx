import {Outlet} from 'react-router-dom'

import Directory from "../../components/directory/directory.component";
const Home = () => {
  const categories = [
    {
      id: 1,
      title: "hats",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    },
    {
      id: 2,
      title: "jackets",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    },
    {
      id: 3,
      title: "sneakers",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    },
    {
      id: 4,
      title: "womens",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
    },
    {
      id: 5,
      title: "mens",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
    },
    // {
    //   id: 1,
    //   title: 'Chassis',
    //   imageUrl: 'https://kartstore-donmateo970.netlify.app/assets/van_files/chassis.jpg'
    // },
    // {
    //   id: 2,
    //   title: 'Engine',
    //   imageUrl:  'https://kartstore-donmateo970.netlify.app/assets/van_files/engines.jpg'
    // },
    // {
    //   id: 3,
    //   title: 'Oil & Chems',
    //   imageUrl: 'https://kartstore-donmateo970.netlify.app/assets/van_files/oils&&chemicals.jpg'
    // },
    // {
    //   id: 4,
    //   title: 'Parts',
    //   imageUrl: 'https://kartstore-donmateo970.netlify.app/assets/van_files/parts.jpg'
    // },
    // {
    //   id: 5,
    //   title: 'Safety Gear',
    //   imageUrl: 'https://kartstore-donmateo970.netlify.app/assets/van_files/neck.jpg'
    // },
    // {
    //   id: 6,
    //   title: 'Turn-key Karts',
    //   imageUrl: 'https://www.theracelab.ca/wp-content/uploads/2021/12/S5205767-1024x683.jpg'
    // },
    // {
    //   id: 7,
    //   title: 'Classifieds',
    //   imageUrl: 'https://th.bing.com/th/id/OIP.Bfr8WvP64ipPxQqxo28kfQHaE7?pid=ImgDet&rs=1'
    // }
  ];

  return (
    <div>
        <Outlet />
        <Directory categories={categories} />
    </div>
  );
};

export default Home;
