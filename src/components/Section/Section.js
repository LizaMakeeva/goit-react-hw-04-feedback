import { Topic, Wrapper } from './Section.styled';
export const Section = ({ title, children }) => {
  return (
    <Wrapper>
      <Topic>{title}</Topic>;{children}
    </Wrapper>
  );
};
