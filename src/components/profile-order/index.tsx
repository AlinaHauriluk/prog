import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Form, ButtonForm, ErrorForm, SubmittedForm } from "../../box/form";
import {
  ProfileOrderContainer,
  ProfileOrderInput,
  ProfileOrderAdress,
  ProfileOrderWrapper,
  ProfileWrapper
} from "./profile-order";
import { ProfileContainer } from "../../box/absolute-box";
import { TitleProfile } from "../../text/text";
import { Container } from "../../box/absolute-box";
import AOS from "aos";
import "aos/dist/aos.css";

type FormValues = {
  name: string;
  phone: string;
  email: string;
  address: string;
};

const ProfileOrder = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm<FormValues>();

  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <ProfileContainer>
      <TitleProfile>Leave Your Contacts For Delivery</TitleProfile>
      <ProfileOrderContainer data-aos="flip-down">
        <Container>
          <Form onSubmit={onSubmit}>
            <ProfileWrapper>
              <ProfileOrderInput
                {...register("name", { required: true })}
                type="text"
                placeholder="Your Name"
                min="2"
                max="20"
              />
              {errors.name && <ErrorForm>Required field</ErrorForm>}
              <ProfileOrderInput
                type="tel"
                placeholder="Your Phone"
                min="7"
                max="13"
                {...register("phone", { required: true })}
              />
              {errors.phone && <ErrorForm>Required field</ErrorForm>}
              <ProfileOrderInput
                type="email"
                placeholder="Your Email"
                min="8"
                max="20"
                {...register("email", { required: true })}
              />
              {errors.email && <ErrorForm>Required field</ErrorForm>}
            </ProfileWrapper>
            <ProfileOrderWrapper>
              <ProfileOrderAdress
                type="text"
                placeholder="Your Address"
                min="8"
                {...register("address", { required: true })}
              />
              {errors.address && <ErrorForm>Required field</ErrorForm>}
            </ProfileOrderWrapper>
            {isSubmitSuccessful && (
              <SubmittedForm
                onClick={(e) => (e.currentTarget.style.display = "none")}
              >
                We will Contact You as soon as possible
              </SubmittedForm>
            )}
            <ButtonForm>Сheckout</ButtonForm>
          </Form>
        </Container>
      </ProfileOrderContainer>
    </ProfileContainer>
  );
};

export default ProfileOrder;
