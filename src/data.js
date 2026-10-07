import img1 from '../src/components/img1.jpg';
import img   from '../src/assets/img/room.jpg'
import img2 from '../src/components/img2.jpg';
import img3 from '../src/components/img3.jpg';
import img4 from '../src/components/img4.jpg';
import img5 from '../src/components/img5.jpg';
import img6 from '../src/components/img6.jpg';
import {
    FaWifi,
    FaCoffee,
    FaBath,
    FaParking,
    FaSwimmingPool,
    FaHotdog,
    FaStopwatch,
    FaCocktail,
  } from 'react-icons/fa';
  
  




export const roomData = [
    {
        id:1,
        name:'superior room',
        facilities:[
            {Name:"email"},
            {Name:"email"},
            {Name:"email"}
        ],
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        size:'30', 
        maxperson:'5',
        price:'₹9945',
        images:img1,

    },
    {
        id:2,
        name:'Luxury room',
        
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting, industry.', 
        size:'25',
        maxperson:'4',
        price:'₹7745',
        images:img2,
    },
    {
        id:3,
        name:'Fancy room',
        
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', 
        size:'20',
        maxperson:'4',
        price:'₹6445',
        images:img3,
    },
    {
        id:4,
        name:'Simple room',
       
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', 
        size:'35',
        maxperson:'6',
        price:'₹10045',
        images:img4,
    },
    {
        id:5,
        name:'Family room',
      
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', 
        size:'10',
        maxperson:'2',
        price:'₹4646',
        images:img5,
    },
    {
        id:6,
        name:'Budget room',
       
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', 
        size:'20',
        maxperson:'4',
        price:'₹5476',
        images:img6,
    }
]