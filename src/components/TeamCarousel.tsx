import { Carousel } from "@mantine/carousel";
import { useMediaQuery } from "@mantine/hooks";
import Autoplay from "embla-carousel-autoplay";
import { createStyles, Paper, useMantineTheme } from "@mantine/core";
import { useRef } from "react";

const useStyles = createStyles((theme) => ({
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundColor: "transparent",
    backgroundPosition: "center"
  },
}));

interface CardProps {
  image: string;
}

function Card({ image }: CardProps) {
  const { classes } = useStyles();

  return (
    <Paper sx={{ backgroundImage: `url(${image})` }} className={classes.card} />
  );
}

export type TeamCarouselProps = { id: number; image: string }[];

export default function TeamCarousel() {
  const teams:TeamCarouselProps = [
    {
      id: 1,
      image: "/teams/bronco-transparent.png",
    },
    {
      id: 2,
      image: "./teams/IVC.png",
    },
    {
      id: 3,
      image: "./teams/csusb-transparent.png",
    },
    {
      id: 4,
      image: "/teams/LBSU.png",
    },
    {
      id: 5,
      image: "/teams/VVC.png",
    },
    {
      id: 6,
      image: "/teams/CalStateLA.svg",
    },
  ];

  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`);
  const slides = teams.map((team) => (
    <Carousel.Slide key={team.id}>
      <Card {...team} />
    </Carousel.Slide>
  ));
  const autoplay = useRef(Autoplay({ delay: 3500 }));
  return (
    <Carousel
      slideSize="33%"
      breakpoints={[{ slideSize: "26%" }]}
      height={mobile ? 100 : 150}
      slideGap="sm"
      align="center"
      slidesToScroll={mobile ? 3 : 3}
      loop
      dragFree
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}
      withControls={false}
    >
      {slides}
    </Carousel>
  );
}
