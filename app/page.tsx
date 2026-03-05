
import About from "./components/about";
import Slider from "./components/slider";
import Activities from "./components/activities";
import Partners from "./components/partners";
import Contact from "./components/contact";
import SupportUs from "./components/support-us";
import Testimonials from "./components/testimonials";

export default function HomePage() {
  const slides: ISlide[] = [
    {
      type: "image",
      img: {
        src: "/assets/slides/6.jpg",
        alt: "Transhumance: les brebis traversent un passage clouté, entourées par de nombreux membres du public"
      },
      credits: {
        name: 'Centrale_CM_Moutons_2025',
        licence: 'CC BY-SA 3.0',
        href: 'https://creativecommons.org/licenses/by-sa/3.0/deed.fr',
      },
    },
    {
      type: "image",
      img: {
        src: "/assets/slides/8.jpg",
        alt: "Portrait d'un troupeau de brebis. Quatre d'entre elles se détachent au premier plan"
      },
      credits: {
        name: 'Centrale_CM_Moutons_2025',
        licence: 'CC BY-SA 3.0',
        href: 'https://creativecommons.org/licenses/by-sa/3.0/deed.fr',
      },
    },
    {
      type: "image",
      img: {
        src: "/assets/slides/18.jpg",
        alt: "Le troupeau dans la rue, avec un bus de la ville en arrière-plan"
      }
    },
    {
      type: "image",
      img: {
        src: "/assets/slides/14.png",
        alt: "Des brebis en premier plan sombre, avec des pins lumineux en arrière-plan"
      }
    },
    // {
    //   type: "image",
    //   img: {
    //     src: "/assets/slides/transhumance.jpeg",
    //     alt: "Transhumance"
    //   }
    // },
    // {
    //   type: "image",
    //   img: {
    //     src: "/assets/slides/1.jpeg",
    //     alt: "Une personne âgée nourrit deux brebis"
    //   },
    // },
    // {
    //   type: "image",
    //   img: {
    //     src: "/assets/slides/2.jpg",
    //     alt: "Des brebis dans un jardin sous des pins avec des tables de picnic en arrière-plan"
    //   },
    //   credits: {
    //     name: 'Centrale_CM_Moutons_2025',
    //     licence: 'CC BY-SA 3.0',
    //     href: 'https://creativecommons.org/licenses/by-sa/3.0/deed.fr',
    //   },
    // },
    // {
    //   type: "image",
    //   img: {
    //     src: "/assets/slides/3.jpg",
    //     alt: "Les brebis dans la nature avec des arbres et un terrain pentu et vallonné. Des jeunes marchent vers les brebis, d'autres les observent de près"
    //   },
    //   credits: {
    //     name: 'Centrale_CM_Moutons_2025',
    //     licence: 'CC BY-SA 3.0',
    //     href: 'https://creativecommons.org/licenses/by-sa/3.0/deed.fr',
    //   },
    // },
    {
      type: "image",
      img: {
        src: "/assets/slides/4.jpg",
        alt: "Les brebis sont très proches les unes des autres, leurs visages se touchent, les uns à côté des autres"
      },
      credits: {
        name: 'Centrale_CM_Moutons_2025',
        licence: 'CC BY-SA 3.0',
        href: 'https://creativecommons.org/licenses/by-sa/3.0/deed.fr',
      },
    },
    {
      type: "image",
      img: {
        src: "/assets/slides/5.jpg",
        alt: "Des personnes nourissent les brebis, y compris une jeune fille. L'herbe est hautes, les brebis ont beaucoup à manger"
      },
      credits: {
        name: 'Centrale_CM_Moutons_2025',
        licence: 'CC BY-SA 3.0',
        href: 'https://creativecommons.org/licenses/by-sa/3.0/deed.fr',
      },
    },
    // {
    //   type: "image",
    //   img: {
    //     src: "/assets/slides/7.jpg",
    //     alt: "Les brebis paissent à l'ombre des arbres dans une zone où l'herbe est haute et le soleil brille fort. Des immeubles de résidences sont en arrière-plan"
    //   },
    //   credits: {
    //     name: 'Centrale_CM_Moutons_2025',
    //     licence: 'CC BY-SA 3.0',
    //     href: 'https://creativecommons.org/licenses/by-sa/3.0/deed.fr',
    //   },
    // },
    // {
    //   type: "image",
    //   img: {
    //     src: "/assets/slides/9.jpg",
    //     alt: "Deux brebis vues de côté, un rocher au premier plan et des arbres floutés en arrière-plan"
    //   },
    //   credits: {
    //     name: 'Centrale_CM_Moutons_2025',
    //     licence: 'CC BY-SA 3.0',
    //     href: 'https://creativecommons.org/licenses/by-sa/3.0/deed.fr',
    //   },
    // },
    // {
    //   type: "image",
    //   img: {
    //     src: "/assets/slides/10.jpg",
    //     alt: "Portrait d'une brebis entourée par le corps laineux de ses camarades"
    //   },
    //   credits: {
    //     name: 'Centrale_CM_Moutons_2025',
    //     licence: 'CC BY-SA 3.0',
    //     href: 'https://creativecommons.org/licenses/by-sa/3.0/deed.fr',
    //   },
    // },
    {
      type: "image",
      img: {
        src: "/assets/slides/11.jpg",
        alt: "Des brebis sont assises sous un pin, une jeune personne au premier plan assise de dos"
      }
    },
    // {
    //   type: "image",
    //   img: {
    //     src: "/assets/slides/12.jpg",
    //     alt: "Deux brebis couchées"
    //   }
    // },
    // {
    //   type: "image",
    //   img: {
    //     src: "/assets/slides/13.jpg",
    //     alt: "Des brebis paissent dans une herbe haute remplie de fleurs violettes avec en arrière-plan un bâtiment de type amphithéâtre d'université"
    //   }
    // },
    // {
    //   type: "image",
    //   img: {
    //     src: "/assets/slides/15.png",
    //     alt: "Comparaison droite-gauche de chaque côté de la clôture entre la partie non broutée et la partie broutée par les brebis"
    //   }
    // },
    // {
    //   type: "image",
    //   img: {
    //     src: "/assets/slides/16.png",
    //     alt: "Une seule brebis devant un arbre en fleurs violettes"
    //   }
    // },
    // {
    //   type: "image",
    //   img: {
    //     src: "/assets/slides/17.jpg",
    //     alt: "Deux jeunes brebis allongées au premier plan. Des maisons loin en arrière-plan"
    //   }
    // },
  ]
  return (
    <main>
      <Slider slides={slides} className="w-full h-[80vh]" autoPlay />
      <About className="my-40" />
      <Partners className="my-40" />
      <SupportUs />
      <Testimonials />
    </main>
  );
}
