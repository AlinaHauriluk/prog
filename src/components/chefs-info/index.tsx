import type {FC} from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  ChefsInfoWrapper,
  ChefsInfoPhoto,
  ChefsInfoName,
  ChefsInfoPosition,
} from "./chefs-info";

interface ChefsInfoProps {
  chefs: Array<{ id: number; photo: string; name: string; position: string }>;
}

const ChefsInfo:FC<ChefsInfoProps> = ({ chefs }) => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <>
      {chefs.map((chef) => (
        <ChefsInfoWrapper data-aos="fade-down" key={chef.id}>
          <ChefsInfoPhoto photo={chef.photo} />
          <ChefsInfoName>{chef.name}</ChefsInfoName>
          <ChefsInfoPosition>{chef.position}</ChefsInfoPosition>
        </ChefsInfoWrapper>
      ))}
    </>
  );
};

export default ChefsInfo;
