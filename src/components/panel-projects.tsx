interface CardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

export function Card({title, description, image}: CardProps) {
  return (
  <div className="card">
    <img src={image} alt="" className="thumbnail" />
    <div className="text">
      <div className="title">{title}</div>
      <div className="description">
        {description}
      </div>
    </div>
  </div>
  )
}

export function PanelProjects () {
  const shortDescription = [
    {
      "title" : "PROJET VENTURA",
      "description": "C'est mon premier gros projet d'émulateur de macOS aur le web",
      "image": "/screenshots/thumbnail_ventura.png",
      "link": "https://yohanndcz.github.io/Projet_VENTURA/"
    },
    {
      "title": "PROJET KANBAN",
      "description": "C’est un deuxième gros projet qui est un management de tâches, un 'Kanban'",
      "image": "/screenshots/thumbnail_kanban.png",
      "link": "kanban-woad.vercel.app/"
    },
    {
      "title": "PROJET DECIMAL",
      "description": "C’est mon premier projet design. C'est celui là que je vais choisir pour le projet FlutterFlow.",
      "image": "/screenshots/thumbnail_decimal.png",
      "link": "https://xd.adobe.com/view/898ecf43-a066-48de-af2c-8c2a27df0bc7-dcdd/"
    },
    {
      "title": "PROJET MYTEAM",
      "description": "C’est mon deuxième projet écrit en Flutter.",
      "image": "/screenshots/thumbnail_myteam.png",
      "link": ""
    },
    {
      "title": "PROJET DESIGNO",
      "description": "Projet de 7 pages qui m’a pris 3 jours avec responsive en mobile first écrit en HTML, CSS, Javacript avec form validation.",
      "image": "/screenshots/thumbnail_designo.png",
      "link": "https://yohanndcz.github.io/designo-multiplepage-website/"
    },
    {
      "title": "PROJET SKILLED",
      "description": "Landing page responsive d’application faite en une après-midi.",
      "image": "/screenshots/thumbnail_skilled.png",
      "link": "https://yohanndcz.github.io/Skilled-LandingPage/"
    },
    {
      "title": "PROJET POPULY",
      "description": "Landing page d’application designée par mes soin et fait en un jour.",
      "image": "/screenshots/thumbnail_populy.png",
      "link": "https://yohanndcz.github.io/Populy-LandingPage/"
    },
    {
      "title": "YOUTUBE CLONE",
      "description": "Projet Youtube clone: mon tout premier grand projet ! Il s’agit là de la front page de YouTube, codé en plain HTML & CSS.",
      "image": "/screenshots/thumbnail_youtube.png",
      "link": "https://yohanndcz.github.io/YouTube-Mirror/"
    },
    {
      "title": "TWITTER CLONE",
      "description": "Mon deuxième projet de clone, mais cette fois, de Twitter !",
      "image": "/screenshots/thumbnail_twitter.png",
      "link": "https://yohanndcz.github.io/Twitter-Mirror/"
    },
    {
      "title": "GOOGLE CLONE",
      "description": "Mon dernier projet de clone à ce jour, celui de reproduire la front pae de Google...",
      "image": "/screenshots/thumbnail_google.png",
      "link": "https://yohanndcz.github.io/Google-Mirror/"
    }
  ]
  return (
    <div className="other-project">
      <div className="titleseemore">
        <div className="title">AUTRES PROJETS</div>
        <div className="seemore">Voir plus...</div>
      </div>
      <div className="cardsarrow">
        <img className="arrow leftarrow" src="/icons/arrow.png" alt="The left arrow."  style={{transform: "rotate(180deg"}}/>
        <div className="cards">
          {shortDescription.slice(4, 10).map(({title, description, image, link}) => (
            <Card key={title} title={title} description={description} image={image} link={link} />
          ))}
        </div>
        <img className="arrow rightarrow" src="/icons/arrow.png" alt="The right arrow."/>
      </div>
    </div>
  )
}
