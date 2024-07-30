'use client'

import Hero from '@/components/pages/root/Hero'
import Section from '@/components/pages/root/Section'
import { NLink } from '@/components/shared/Nav/Nav.styles'
import Project from '@/components/shared/Project'
import Technologies from '@/components/pages/root/Technologies'
import { projects } from '@/constants/projects'
import social from '@/constants/soical'

export default function Home() {
  return (
    <div>
      <Hero />
      <Section id={'about_me'} title={'About me'}>
        <p>
          My name is Max Atslega, and I am a student from Germany with a passion for building cool digital stuff.
        </p>
        <p>
          I have experience with various technologies such as TypeScript, GoLang, React, Node.js, Java, and Rust, with a strong interest in low-level programming and operating system design. In my free time, I enjoy working on personal projects and expanding my skill set. I am excited to apply these skills to real-world projects.
        </p>
        <p>
          I actively contribute to open-source projects and enjoy working in a team. Through my cultural experiences, I have learned a variety of things that have helped me grow both personally and professionally. I am eager to continue learning and growing as a developer and am constantly looking for new opportunities to challenge myself and contribute to meaningful projects.
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
          <NLink style={{ textDecoration: 'underline dotted' }} href={social.linkedin}>
            LinkedIn
          </NLink>{' '}
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
