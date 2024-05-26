import React from 'react';

const LinksSection = () => {
    const linksData = [
        {
          title: "Music Events",
          links: ["Concerts", "Music Festivals", "Recitals"]
        },
        {
          title: "Art Exhibitions",
          links: ["Student Art Shows", "Guest Artist Exhibits", "Art Galleries"]
        },
        {
          title: "Dance Performances",
          links: ["Dance Shows", "Dance Workshops", "Dance Competitions"]
        },
        {
          title: "Theater Productions",
          links: ["Plays", "Musicals", "Dramatic Readings"]
        },
        {
          title: "Literary Events",
          links: ["Poetry Readings", "Author Talks", "Writing Workshops"]
        },
        {
          title: "Cultural Workshops",
          links: ["Cooking Classes", "Language Workshops", "Traditional Crafts Demonstrations"]
        }
      ];
      

  return (
    <section className="links">
      <div className="links-inner">
        {linksData.map((section, index) => (
          <ul key={index}>
            <li><h3>{section.title}</h3></li>
            {section.links.map((link, i) => (
              <li key={i}><a href="#">{link}</a></li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  );
};

export default LinksSection;
