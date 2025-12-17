import React from "react";

const Accueil = () => {
  return (
    <div>
      <h1>Bienvenue chez maïté</h1>

      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/8-lCVMAZBhM?si=3x3IzmiYOZ21TmdA"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default Accueil;
