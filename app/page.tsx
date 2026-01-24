
import Slider from "./components/slider";

export default function Home() {
  const slides: ISlide[] = [
    {
      type: "image",
      img: {
        src: "/assets/slides/main.png",
        alt: "Moutons Marseillais"
      }
    },
    {
      type: "image",
      img: {
        src: "/assets/slides/transhumance.jpeg",
        alt: "Transhumance"
      }
    },
    {
      type: "image",
      img: {
        src: "/assets/slides/logo-board.png",
        alt: "Logos des partenaires"
      }
    }
  ]
  return (
    <Slider slides={slides} className="w-full h-[80vh]" autoPlay />
  );
}
