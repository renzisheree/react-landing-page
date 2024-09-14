/* eslint-disable react/prop-types */
import styled from "styled-components";
const AvatarWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  @media (max-width: 1240px) {
    width: 60%;
    height: 60%;
  }
`;

const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  border: 5px solid white;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
  @media (max-width: 1240px) {
    width: 60%;
    height: 60%;
  }
`;

const CustomAvatar = ({ src, alt, className }) => {
  return (
    <AvatarWrapper className={className}>
      <AvatarImage src={src} alt={alt} />
    </AvatarWrapper>
  );
};
export default CustomAvatar;
