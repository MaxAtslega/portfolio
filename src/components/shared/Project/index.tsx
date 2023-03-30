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
import { useRouter } from 'next/router'

interface Props {
  title: string
  description: string
  tags: string[]
  url: string
  image: any
}

const Project: React.FC<Props> = ({ title, description, tags, image, url }: Props) => {
  const router = useRouter()

  return (
    <Container onClick={() => router.push(url)}>
      <ImageContainer width={600} height={300} src={image} alt={'Image'} />
      <Content>
        <Header>
          <BsGithub />
          <span>GitHub</span>
        </Header>
        <Title>{title}</Title>
        <p>{description}</p>
        <Tags>
          <TagIcon>
            <AiFillTag />
          </TagIcon>
          {tags.map((tag, index) => (
            <Tag key={index}>{tag}</Tag>
          ))}
        </Tags>
      </Content>
    </Container>
  )
}

export default Project
