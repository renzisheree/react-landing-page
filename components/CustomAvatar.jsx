/* eslint-disable react/prop-types */
import styled from "styled-components";
const AvatarWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const CustomAvatar = ({ src, alt, className }) => {
  return (
    <AvatarWrapper className={className}>
      <AvatarImage src={src} alt={alt} />
    </AvatarWrapper>
  );
};
export default CustomAvatar;
