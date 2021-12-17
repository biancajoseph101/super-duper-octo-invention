const db = require('../db');
const City = require('../models/city');

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const main = async () => {
  const cities = [
    {
      name: 'Melbourne',
      url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs3.amazonaws.com%2Fcdn.matadornetwork.com%2Fblogs%2F1%2F2011%2F05%2FMelbourne-Australia-cityscape-destination-1200x900.jpg&f=1&nofb=1',
      description: `While not as showy as its flashy northern sister, Sydney, the progressive state capital of Victoria is one of Australia's coolest metropolitan marvels. There's gourmet foodie offerings, hipster bars, a thriving arts scene, and a vibe that's more European than any of its cosmopolitan rivals.`
    },
    {
      name: 'Cairns',
      url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.tacdn.com%2Fmedia%2Fattractions-content--1x-1%2F0b%2F17%2F20%2F88.jpg&f=1&nofb=1',
      description: `As the main gateway to some of Australia's greatest natural wonders (the Great Barrier Reef, the Daintree rainforest, the Atherton tablelands, and Cape Tribulation), the city of Cairns (pronounced Cahns) deservedly gets a lot of love from adventurers, nature lovers, and sporty types. Most wowing is the snorkelling, scuba diving, bungee jumping, fishing, parasailing, bushwalking and rainforest trekking, but there's also fascinating Aboriginal walks, an established coffee shop scene, and some jolly decent pubs and markets.`
    },
    {
      name: 'Hobart',
      url: 'https://images.unsplash.com/photo-1550985164-a0cfcf77eab2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1773&q=80',
      description: `Hobart is the high-impact Tasmanian capital (and Australia's second-oldest city, after Sydney) that's shaken off its sleepy reputation and emerged as one of the hippest southernmost hotspots. Dominated by Mount Wellington, it comes with a dynamic and daring art scene (most famously David Walsh's incredible Museum of Old and New Art, known as MONA), picturesque waterways, rugged mountains, award-winning gourmet experiences, world-class festivals, and a whole lot of wilderness.`
    },
    {
      name: 'Brisbane',
      url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fassets.atdw-online.com.au%2Fimages%2F1c90315bd317ef26fc2f991fa9dc929b.jpeg%3Frect%3D64%2C1%2C2163%2C1622%26w%3D2048%26h%3D1536&f=1&nofb=1',
      description: `The the sunny state capital of Queensland is one of the country's most up-and-coming cities. Much here is focussed around the Brisbane River - the glittering waterway where you can abseil the Kangaroo Point cliffs, scale the iconic Story Bridge, and rollerblade over floating walkways. But away from the water, it's obvious that this city is loving its Brisvegas label; not least for a new surge of glossy new hotels, creative spaces, swanky shops, and excellent music venues to rival those of its southern cousins.`
    }
  ];

  await City.insertMany(cities);
  console.log('Created cities!');
};

const run = async () => {
  await main();
  db.close();
};

run();
