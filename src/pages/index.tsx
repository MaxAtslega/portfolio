import Hero from '@/components/pages/root/Hero'
import Section from '@/components/pages/root/Section'
import { NLink } from '@/components/shared/Nav/Nav.styles'
import Project from '@/components/shared/Project'
import Technologies from '@/components/pages/root/Technologies'
import { projects } from '@/constants/projects'

export default function Home() {
  return (
    <div>
      <Hero />
      <Section id={'about_me'} title={'About me'}>
        <p>
          My name is Max Atslega and I am a student from Germany with a passion for building cool digital stuff. Since I
          was 11 years old, I have been fascinated by the world of programming and technology, and have a particular
          interest in web development and backend development.
        </p>
        <p>
          I have focused on developing my skills in web development and backend development. I have experience with
          various web technologies such as HTML, CSS, JavaScript, React, Node.js, Java and Rust. I have also worked with
          different backend frameworks to build RESTful APIs and web applications. In addition to my technical skills, I
          have also developed strong problem-solving and teamwork abilities, which I believe are essential in the field
          of software development. In my free time, I enjoy working on personal projects and expanding my skill set. I
          am currently learning about machine learning and data analysis, and am excited to apply these skills to
          real-world projects.
        </p>
        <p>
          I am eager to continue learning and growing as a developer, and am always looking for new opportunities to
          challenge myself and contribute to meaningful projects. If you would like to get in touch with me, feel free
          to contact me.
        </p>
      </Section>

      <Section id={'projects'} title={'Projects'}>
        <p>
          These are some of my projects, you can find all of them on my{' '}
          <NLink style={{ textDecoration: 'underline dotted' }} href={'https://atslega.dev/github'}>
            GitHub
          </NLink>
          .
        </p>
        {projects.map((project) => (
          <Project
            key={project.title}
            image={project.image}
            title={project.title}
            tags={project.tags}
            description={project.description}
            url={project.url}
          />
        ))}
      </Section>

      <Section id={'technologies'} title={'Technologies I work with'}>
        <Technologies />
      </Section>

      <Section id={'contact'} title={'Get in touch'}>
        <p>
          I am available to connect on{' '}
          <NLink style={{ textDecoration: 'underline dotted' }} href={'https://atslega.dev/linkedin'}>
            LinkedIn
          </NLink>{' '}
          and{' '}
          <NLink style={{ textDecoration: 'underline dotted' }} href={'https://atslega.dev/twitter'}>
            Twitter
          </NLink>
          , or you can reach me directly by email at{' '}
          <NLink style={{ textDecoration: 'underline dotted' }} href={'mailto:hello@atslega.dev'}>
            hello@atslega.dev
          </NLink>
          . Whether you have a question, an opportunity to collaborate, or just want to chat about software development,
          I am always happy to hear from others in the field.
        </p>
      </Section>
    </div>
  )
}
