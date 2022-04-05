import { useForm, Controller } from "react-hook-form";
import {
  ReservationSection,
  ReservationTitle,
  ReservationWrapper,
} from "./reservation";
import { FlexColumnContainer } from "../../box/flex-box";
import "react-datepicker/dist/react-datepicker.css";
import { ErrorForm, SubmittedForm } from "../../box/form";
import {
  ButtonForm,
  Form,
  Calendar,
  DatepickerContainer,
  InputTime,
  InputPerson,
} from "../../box/form";
import { BlockSubTitle } from "../../text/text";

type FormValues = {
  date: Date;
  time: string;
  persons: string;
};

const Reservation = () => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors, submitCount, isSubmitSuccessful },
  } = useForm<FormValues>();

  const onSubmit = handleSubmit((data) => console.log(data, { submitCount }));

  return (
    <ReservationSection>
      <FlexColumnContainer>
        <BlockSubTitle>5 Stars</BlockSubTitle>
        <ReservationTitle>Make a Reservation</ReservationTitle>
        <Form onSubmit={onSubmit}>
          <ReservationWrapper>
            <Controller
              name="date"
              defaultValue={new Date()}
              control={control}
              render={({ field }) => (
                <DatepickerContainer>
                  <Calendar
                    selected={field.value}
                    dateFormat="dd/MM/yyyy"
                    minDate={new Date()}
                    scrollableYearDropdown
                    onChange={(e) => field.onChange(e)}
                  />
                </DatepickerContainer>
              )}
            />

            <InputTime
              type="time"
              defaultValue="10:00"
              min="10:00"
              max="22:00"
              step="1800"
              {...register("time", { required: true })}
            />
            {errors.time && <ErrorForm>Required field</ErrorForm>}

            <InputPerson
              type="number"
              placeholder="persons"
              max="6"
              min="1"
              {...register("persons", { required: true })}
            />
            {errors.persons && <ErrorForm>Required field</ErrorForm>}
            {isSubmitSuccessful && (
              <SubmittedForm
                onClick={(e) => (e.currentTarget.style.display = "none")}
              >
                We will Contact You as soon as possible
              </SubmittedForm>
            )}
          </ReservationWrapper>
          <ButtonForm>Make a Reservation</ButtonForm>
        </Form>
      </FlexColumnContainer>
    </ReservationSection>
  );
};

export default Reservation;
