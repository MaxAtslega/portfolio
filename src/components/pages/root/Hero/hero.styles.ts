import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: ${(props) => props.theme.spacing.custom(8)};
  margin-bottom: ${(props) => props.theme.spacing.custom(8)};
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const SubTitle = styled.span`
  font-size: ${(props) => props.theme.fontSizes.custom(5)};
  font-weight: bold;
`

export const Title = styled.span`
  font-size: ${(props) => props.theme.fontSizes.custom(7)};
  color: ${(props) => props.theme.colors.primary};
  font-weight: bold;
`

export const ImageContainer = styled.div`
  width: 300px;
  height: 300px;
  margin-right: 15px;
  margin-bottom: 15px;
  position: relative;
  cursor: pointer;
  z-index: 0;

  img {
    width: 100%;
    height: 100%;
    filter: grayscale(1);
  }

  &:before {
    position: absolute;
    display: block;
    top: 15px;
    left: 15px;
    z-index: -1;
    transition-property: all;
    transition-duration: 150ms;
    border: 6px solid ${(props) => props.theme.colors.background.light};
    width: 100%;
    height: 100%;
    content: '';
  }

  &:hover {
    img {
      filter: grayscale(0);
    }
    &:before {
      left: 5px;
      top: 5px;
    }
  }
`
