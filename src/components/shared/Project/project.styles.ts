import styled from 'styled-components'
import Image from 'next/image'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: relative;
  cursor: pointer;

  padding-bottom: ${({ theme }) => theme.spacing.custom(2)};

  ${(props) => props.theme.media.lg} {
    justify-content: left;
    flex-direction: column;
  }
`

export const ImageContainer = styled(Image)`
  width: 35%;
  height: auto;
  cursor: pointer;

  ${(props) => props.theme.media.lg} {
    width: 100%;
    padding-bottom: ${({ theme }) => theme.spacing.custom(2)};
  }
`

export const Content = styled.div`
  width: 65%;
  margin-left: ${({ theme }) => theme.spacing.custom(2)};

  ${(props) => props.theme.media.lg} {
    margin: 0;
    width: 100%;
  }
`

export const Title = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: bold;

  ${(props) => props.theme.media.xs} {
    font-size: ${({ theme }) => theme.fontSizes.md};
  }
`

export const Tags = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;
  flex-wrap: wrap;
`

export const Tag = styled.li`
  background: ${({ theme }) => theme.colors.background.light};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  list-style: none;
  margin-right: ${(props) => props.theme.spacing.sm};
  padding: 5px 10px;
  border-radius: 10px;
  margin-bottom: ${(props) => props.theme.spacing.sm};
`

export const TagIcon = styled.li`
  font-size: ${({ theme }) => theme.fontSizes.md};
  margin-right: ${(props) => props.theme.spacing.sm};
  margin-bottom: ${(props) => props.theme.spacing.sm};
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
