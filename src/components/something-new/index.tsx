import type {FC} from "react";
import { BlockTitle, BlockSubTitle } from "../../text/text";
import { SomethingNewFlex, SomethingNewText } from "./something-new";

interface SomethingNewProps {
  title: string;
  descriptionPartOne: string;
  descriptionPartTwo: string;
}

const SomethingNew:FC<SomethingNewProps> = ({
  title,
  descriptionPartOne,
  descriptionPartTwo,
}) => {
  return (
    <>
      <BlockSubTitle>Something new</BlockSubTitle>
      <BlockTitle>{title}</BlockTitle>
      <SomethingNewFlex>
        <SomethingNewText>{descriptionPartOne}</SomethingNewText>
        <SomethingNewText>{descriptionPartTwo}</SomethingNewText>
      </SomethingNewFlex>
    </>
  );
};

export default SomethingNew;
