import Hero from '@/components/pages/root/Hero'
import Section from '@/components/pages/root/Section'
import { NLink } from '@/components/shared/Nav/Nav.styles'
import Project from '@/components/shared/Project'
import Technologies from '@/components/pages/root/Technologies'

export default function Home() {
  return (
    <div>
      <Hero />
      <Section id={'about_me'} title={'About me'}>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
          clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
          consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet.
        </p>
      </Section>

      <Section id={'projects'} title={'Projects'}>
        <p>
          These are some of my projects, you can find all of them on my{' '}
          <NLink style={{ textDecoration: 'underline' }} href={'https.//atslega.dev/github'}>
            GitHub
          </NLink>
          .
        </p>
        <Project />
        <Project />
        <Project />
        <Project />
      </Section>

      <Section id={'technologies'} title={'Technologies I work with'}>
        <Technologies />
      </Section>

      <Section id={'contact'} title={'Get in touch'}>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
          clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
          consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet.
        </p>
      </Section>
    </div>
  )
}
