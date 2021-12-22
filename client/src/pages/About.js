import React from 'react';

const About = () => {
  return (
    <div className="about">
      <h1>About</h1>
      <p>
        This is information about me and my website. Hello, my name is Bianca
        Joseph. I applied for an Australian work and holiday visa in April 2020
        around when the pandemic started. Due to the unfortunate timing of my
        visa request, the Australian Government Department of Home Affairs took
        longer to process and approve visas due to the travel bans and lockdown
        restrictions. I didn't hear from them for months and figured that my
        application never went through or wasn't approved. Fast forward to
        December 2022, after I had completely forgotten about this visa I had
        applied to, I receive an email saying that my application was granted.
        This truly caught me by surprise as I entered the 5th week of my online
        Software Engineering Immersive course with General Assembly. Our second
        big project for class was coming up, for our project we were to create a
        full stack app of our choice. I decided to kill two birds with one
        stone, and create my project based on Australian cities, atractions and
        travel tips. It has been a fun experience creating this website and
        learning about Australia simultaneously. I hope I can make it out there!
      </p>
      <div className="my-stuff">
        <h3>Personal Links:</h3>
        <div className="links">
          <h4>
            »
            <a href="https://www.linkedin.com/in/biancaclairejoseph/">
              LinkedIn
            </a>
          </h4>
          <h4>
            »<a href="https://www.github.com/biancajoseph101">GitHub</a>
          </h4>
          <h4>
            »
            <a href="https://trello.com/b/C7qTCp66/australia-bucket-list">
              Trello
            </a>
          </h4>
        </div>
      </div>
      <div className="resources-list">
        <h3>Resources:</h3>
        <div className="links">
          <h4>
            »
            <a href="https://bigaustraliabucketlist.com/free-things-to-do-in-melbourne/">
              Descriptions
            </a>
          </h4>
          <h4>
            »
            <a href="https://www.bookmundi.com/t/12-best-cities-to-visit-in-australia">
              Attractions
            </a>
          </h4>
          <h4>
            »<a href="https://www.unsplash.com">Images</a>
          </h4>
          <h4>
            »<a href="https://www.duckduckgo.com">Images</a>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default About;
