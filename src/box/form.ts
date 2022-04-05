import styled, { keyframes } from "styled-components";
import { pulse } from "react-animations";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FlexCenter } from "./flex-box";

export const Form = styled.form`
  width: 100%;
`;
export const Calendar = styled(DatePicker)`
  background: ${({ theme }) => theme.colors.transparent};
  height: 40px;
  border: solid 2px ${({ theme }) => theme.colors.secondary};
  outline: none;
  display: inline-block;
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSize.medium};
  text-align: center;
  letter-spacing: 2.8px;
  cursor: pointer;
  width: 210px;
`;
export const DatepickerContainer = styled.div`
  margin-right: 20px;

  @media(max-width: 426px){
    margin-bottom: 20px;
    margin-right: 0;
    margin-top: -20px;
  }
`;
export const Input = styled.input`
  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.transparent};
  border: solid 2px ${({ theme }) => theme.colors.secondary};
  outline: none;
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSize.mediumMedium};
  text-align: center;
`;
export const InputTime = styled(Input)`
  width: 180px;
  height: 40px;

  @media(max-width: 426px){
    margin-bottom: 20px;
    width: 210px;
  }
`;

export const InputPerson = styled(Input)`
  width: 210px;
  height: 40px;
  margin-left: 20px;

  ::placeholder {
    color: ${({ theme }) => theme.colors.primary};
    text-align: center;
    letter-spacing: 1.6px;
  }

  @media(max-width: 426px){
    margin-left: 0;
  }
`;
export const ButtonForm = styled.button`
  width: 216px;
  height: 48px;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.primary};
  border: none;
  outline: none;
  margin-top: 42px;
  font-size: ${({ theme }) => theme.fontSize.mediumMedium};
  cursor: pointer;
  display: block;
  margin: 40px auto 0 auto;

  :hover {
    animation: 3s ${keyframes`${pulse}`} infinite;
  }
`;
export const ErrorForm = styled(FlexCenter)`
  width: 25%;
  height: 40px;
  font-size: ${({ theme }) => theme.fontSize.mediumMedium};
  position: fixed;
  z-index: 2;
  top: 50%;
  left: 50%;
  transform:translate(-50%, -50%);
  font-weight: 600;
  background-color: ${({ theme }) => theme.colors.secondary};
  border: solid 2px ${({ theme }) => theme.colors.backgroundSectionTwo};
  padding: 10px;
`
export const SubmittedForm = styled(FlexCenter)`
  width: 65%;
  height: 70px;
  font-size: ${({ theme }) => theme.fontSize.mediumMedium};
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 2;
  transform:translate(-50%, -50%);
  font-weight: 600;
  background-color: ${({ theme }) => theme.colors.backgroundSectionTwo};
  border: solid 2px ${({ theme }) => theme.colors.secondary};
  cursor: pointer;
  padding: 10px;
`
export const TextareaForm = styled.textarea`
  background-color: ${({ theme }) => theme.colors.backgroundSectionTwo};
  border: solid 2px ${({ theme }) => theme.colors.secondary};
  outline: none;
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSize.mediumMedium};
  text-align: center;
  padding: 20px;
  line-height: 28px;
  resize: none;

  ::placeholder {
    color: ${({ theme }) => theme.colors.colorText};
    text-align: center;
    letter-spacing: 1.6px;
    font-size: ${({ theme }) => theme.fontSize.mediumMedium};
    padding-top: 40px;
  }
`