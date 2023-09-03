import { Button, WrapperButton } from './FeedbackOptions.styled';
export const FeedbackOptions = ({
  goodeedback,
  neutraleedback,
  badeedback,
}) => {
  return (
    <>
      <WrapperButton>
        <Button onClick={() => goodeedback()}>Good</Button>
        <Button onClick={() => neutraleedback()}>Neutral</Button>
        <Button onClick={() => badeedback()}>Bad</Button>
      </WrapperButton>
    </>
  );
};
