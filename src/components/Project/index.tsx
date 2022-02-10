import { Typography, Box } from "@mui/material"
import styled from "styled-components"
import { BsGithub, BsStarFill, BsCalendarFill } from "react-icons/bs"
import { BiGitRepoForked, BiLinkExternal } from "react-icons/bi"

interface ContainerProps {
  theme: any
}

const Header = styled.div`
  padding-bottom: 12px;
  display: flex;
  align-items: center;

  svg {
    margin-right: 10px;
  }
`

const Stats = styled.div`
  position: absolute;
  bottom: 15px;
  left: 15px;
  right: 15px;
  font-size: 11px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const StatsItem = styled.div`
  display: flex;
  align-items: center;
  padding-right: 15px;

  svg {
    margin-right: 10px;
  }
`

const StatsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
`

const Container = styled(Box)<ContainerProps>`
  position: relative;
  background: #0b0b0b;
  padding: 15px;
  border-radius: 10px;
  height: 200px;
  cursor: pointer;

  &:hover ${Stats} {
    svg {
      color: ${(props) => props.theme.palette.secondary.main};
    }
  }

  @media only screen and (max-width: 620px) {
    height: 250px;
  }
`

export default function Project() {
  return (
    <Container>
      <Header>
        <BsGithub /> GitHub
      </Header>
      <Typography variant="h3">MaxAtslega/electron-react-nestjs-boilerplate</Typography>
      <Typography variant="body2">
        Packaged Electron + React + NestJS + Webpack + TypeScript + Example User API
      </Typography>
      <Stats>
        <StatsContainer>
          <StatsItem>
            <BsStarFill /> 10
          </StatsItem>
          <StatsItem>
            <BiGitRepoForked /> 10
          </StatsItem>
          <StatsItem>
            <BsCalendarFill /> 10.09.2022
          </StatsItem>
        </StatsContainer>
        <BiLinkExternal />
      </Stats>
    </Container>
  )
}
