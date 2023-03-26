import React from 'react'
import { TechContainer, CardContainer, Container } from '@/components/pages/root/Technologies/technologies.styles'
import { technologies } from '@/constants/technologies'

const Technologies: React.FC = () => {
  return (
    <Container>
      <p>Frameworks</p>
      <TechContainer>
        {technologies.frameworks.map((technologie, index) => {
          return (
            <CardContainer color={technologie.color} key={index}>
              {technologie.icon}
              <span>{technologie.title}</span>
            </CardContainer>
          )
        })}
      </TechContainer>
      <p>Programming languages</p>
      <TechContainer>
        {technologies.languages.map((technologie, index) => {
          return (
            <CardContainer color={technologie.color} key={index}>
              {technologie.icon}
              <span>{technologie.title}</span>
            </CardContainer>
          )
        })}
      </TechContainer>
      <p>More</p>
      <TechContainer>
        {technologies.more.map((technologie, index) => {
          return (
            <CardContainer color={technologie.color} key={index}>
              {technologie.icon}
              <span>{technologie.title}</span>
            </CardContainer>
          )
        })}
      </TechContainer>
    </Container>
  )
}

export default Technologies
