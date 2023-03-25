import {
  Container,
  ImageContainer,
  Content,
  Title,
  Tags,
  Tag,
  TagIcon,
  Header,
} from '@/components/shared/Project/project.styles'
import { AiFillTag } from 'react-icons/ai'
import { BsGithub } from 'react-icons/bs'

const Project: React.FC = () => {
  return (
    <Container>
      <ImageContainer width={600} height={300} src={'/assets/altrogge.png'} alt={'Image'} />
      <Content>
        <Header>
          <BsGithub />
          <span>GitHub</span>
        </Header>
        <Title>MaxAtslega/MühleAltrogge</Title>
        <p>
          Since flexbox is a whole module and not a single property, it involves a lot of things including its whole set
          of properties. Some of them are meant to be set on the container (parent element, known as “flex container”)
        </p>
        <Tags>
          <TagIcon>
            <AiFillTag />
          </TagIcon>
          <Tag>WebDevelopment</Tag>
          <Tag>React</Tag>
        </Tags>
      </Content>
    </Container>
  )
}

export default Project
