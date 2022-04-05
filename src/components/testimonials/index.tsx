import { useEffect } from "react";
import { Container } from "../../box/absolute-box";
import AOS from "aos";
import "aos/dist/aos.css";
import TinySlider from "tiny-slider-react";
import "tiny-slider/dist/tiny-slider.css";
import {
  TestimonialsSection,
  TestimonialsSubTitle,
  TestimonialsTitle,
  TestimonialsQuote,
  TestimonialsText,
  TestimonialsClientName,
  TestimonialsClient,
} from "./testimonials";

const dataTestimonials = [
  {
    id: 1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum tac ligula sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum tac ligula sapien",
    name: "James Smith",
    occupation: "client",
  },
  {
    id: 2,
    text: "Vivamus luctus diam eu neque rutrum, vitae aliquet dolor venenatis. Nulla consequat fringilla massa. Vivamus luctus diam eu neque rutrum, vitae aliquet dolor venenatis. Nulla consequat fringilla massa. Vivamus luctus diam eu neque rutrum, vitae aliquet dolor venenatis. Nulla consequat fringilla massa.",
    name: "Kate Smith",
    occupation: "actress",
  },
  {
    id: 3,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus diam eu neque rutrum, vitae aliquet dolor venenatis. Nulla consequat fringilla massa.",
    name: "Bob Adames",
    occupation: "client",
  },
];

const Testimonials = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const settings = {
    lazyload: true,
    nav: false,
    mouseDrag: true,
    controls: false,
    speed: 2500,
    autoplay: true,
    autoplayButtonOutput: false,
  };

  return (
    <TestimonialsSection>
      <Container>
        <TestimonialsSubTitle>What they say</TestimonialsSubTitle>
        <TestimonialsTitle data-aos="flip-down">Testimonials</TestimonialsTitle>
        <TestimonialsQuote />
        <TinySlider settings={settings}>
          {dataTestimonials.map((testimonial) => (
            <div key={testimonial.id}>
              <TestimonialsText>{testimonial.text}</TestimonialsText>
              <TestimonialsClientName>
                {testimonial.name}
                <TestimonialsClient>
                  {testimonial.occupation}
                </TestimonialsClient>
              </TestimonialsClientName>
            </div>
          ))}
        </TinySlider>
      </Container>
    </TestimonialsSection>
  );
};

export default Testimonials;
