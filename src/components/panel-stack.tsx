
function Tech({image, text}) {
  return <div className="item">
    <img src={image} alt="" className="image" />
    <p>{text}</p>
  </div>;
}

export function PanelStack() {

  const tech = [
    {
      "image": "/logos/logo_web.png",
      "text": "HTML5, CSS3, ES6",
      "description": "J’ai commencé par ces langages sur Codecademy en 2018. J’ai peaufiné mes connaissance grâce à un playground de 6 heures sur YouTube."
      
    },
    {
      "image": "/logos/logo_typescript.png",
      "text": "TypeScript",
      "description": "J’ai construit ma première single page application (Kanban) dans ce language typé. J’ai pu apprendre les interfaces et les inférences des différents types"
    },
    {
      "image": "/logos/logo_sass.png",
      "text": "SCSS",
      "description": "La single page application (Kanban) a également été construite en SCSS. C’est un superset de CSS facile à apprendre et pourvu d’une grande maniabilité"
    },
    {
      "image": "/logos/logo_react.png",
      "text": "React.js",
      "description": "J’ai été formé à ce framework sur Codecademy et j’ai gagné un certificat de completion. À ce jour, e n’ai toujours pas exploré toute les facette de ce pussant framework."
    },
    {
      "image": "/logos/logo_vite.png",
      "text": "Vite.js",
      "description": "Vite.js est un outil de construction d'applications web ultra-rapide et minimaliste pour les développeurs JavaScript. Couplé à webpack, il permet de développer des apps puissantes"
    },
    {
      "image": "/logos/logo_node.png",
      "text": "Node.js",
      "description": "Node.js est une plateforme côté serveur permettant d'exécuter du code JS en dehors d'un navigateur web. Je suis toujours en formation sur Dyma sur cette plateforme."
    },
    {
      "image": "/logos/logo_dart.png",
      "text": "Dart",
      "description": "Dart est un langage de programmation cross-plateforme  orienté objet développé par Google, conçu pour créer des applications web et mobiles. Je compte devenir expert dans les 2 ans."
    },
    {
      "image": "/logos/logo_flutter.png",
      "text": "Flutter",
      "description": "Flutter est un framework open-source de développement d'applications mobiles, créé par Google, qui utilise le langage de programmation Dart. J’ai à ce jour construit 2 application dont une est sur le Google Play Store."
    },
    {
      "image": "/logos/logo_flutterflow.png",
      "text": "FlutterFlow",
      "description": "FlutterFlow est un environnement de développement visuel et basé sur le cloud pour la création rapide d'applications mobiles et web avec Flutter. Je vais développer le site web de mon BDE avec cet outil."
    },
    {
      "image": "/logos/logo_figma.png",
      "text": "Figma",
      "description": "Figma est un logciel que j’ai appris à l’école mais qui est assez similaire à Adobe XD, la prise en main a êtê relativement rapide et l’efficacité êtait au rendez vous. J’ai créé le wireframes de ce portfolio sur cette plateforme"
    },
    {
      "image": "/logos/logo_adobe.png",
      "text": "Suite Adobe",
      "description": "Photoshop, InDesign, sont des logiciels que j’ai appris en école. Illustrator et Adobe Xd sont des logiciels avec lequel j’ai designé une application sociale complète, logo compris "
    },
    {
      "image": "/logos/logo_python.png",
      "text": "Python",
      "description": "Python est un langage de programmation de haut niveau, interprété, orienté objet et multiplateforme. J’en aie pas mal fait tout au long de mon parcours et particulièrement à HETIC. Ça a été mon premier language"
    },
    {
      "image": "/logos/logo_php.png",
      "text": "PHP",
      "description": "PHP est un langage de programmation open-source, principalement utilisé pour le développement web côté serveur, qui peut être intégré directement dans le HTML. J’en aie fait énormément dans mon école."
    },
  ]
  return (
    <div className="panel-stack">
      <div className="titleseemore">
        <div className="title">STACK TECHNOLOGIQUE</div>
        <div className="seemore">Voir plus...</div>
      </div>
      <div className="stackarrow">
        <img className="arrow leftarrow" src="/icons/arrow.png" alt="The left arrow."  style={{transform: "rotate(180deg"}}/>
        <div className="stack">
          {tech.map(({image, text}) =>
            <Tech image={image} text={text} />
          )}
        </div>
        <img className="arrow rightarrow" src="/icons/arrow.png" alt="The right arrow."/>
      </div>
    </div>
  )
}