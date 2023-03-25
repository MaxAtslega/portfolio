import styled from 'styled-components'
import Image from 'next/image'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: relative;

  padding-bottom: ${({ theme }) => theme.spacing.custom(2)};
`

export const ImageContainer = styled(Image)`
  width: 35%;
  height: auto;
  filter: grayscale(1);
  cursor: pointer;

  &:hover {
    filter: grayscale(0);
  }
`

export const Content = styled.div`
  width: 65%;
  margin-left: ${({ theme }) => theme.spacing.custom(2)};
`

export const Title = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: bold;
`

export const Tags = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;
`

export const Tag = styled.li`
  background: ${({ theme }) => theme.colors.background.light};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  list-style: none;
  margin-right: ${(props) => props.theme.spacing.sm};
  padding: 5px 10px;
  border-radius: 10px;
`

export const TagIcon = styled.li`
  font-size: ${({ theme }) => theme.fontSizes.md};
  margin-right: ${(props) => props.theme.spacing.sm};
`

export const Header = styled.div`
  display: flex;
  margin-bottom: ${(props) => props.theme.spacing.sm};
  align-items: center;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  svg {
    padding-right: ${(props) => props.theme.spacing.custom(0.5)};
  }
`
