'use client'

import Head from 'next/head'

const DOMAIN = 'https://atslega.dev'
const siteName = 'Max Atslega'
const ogType = 'website'

interface Props {
  title: string
}

export default function SEO({ title }: Props) {
  const description =
    'Here you can find examples of my work, skills, and experiences as a developer. I am passionate about building cool digital stuff and am always looking for new challenges and opportunities.'
  const canonical = DOMAIN

  return (
    <Head>
      <title key="title">{`${title} – ${siteName}`}</title>
      <meta name="description" content={description} />

      <meta key="og_type" property="og:type" content={ogType} />
      <meta key="og_title" property="og:title" content={title} />
      <meta key="og_description" property="og:description" content={description} />
      <meta key="og_locale" property="og:locale" content={'en'} />
      <meta key="og_site_name" property="og:site_name" content={siteName} />
      <meta key="og_url" property="og:url" content={canonical} />
      <meta key="og_site_name" property="og:site_name" content={siteName} />
      <meta key="og_image:alt" property="og:image:alt" content={`${title} | ${siteName}`} />

      <meta name="robots" content="index,follow" />

      <meta key="twitter:card" name="twitter:card" content="summary_large_image" />
      <meta key="twitter:title" property="twitter:title" content={siteName} />
      <meta key="twitter:description" property="twitter:description" content={description} />

      <link rel="canonical" href={canonical} />

      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="apple-mobile-web-app-title" content={siteName} />
      <meta name="application-name" content={siteName} />
      <meta name="msapplication-TileColor" content="#00aba9" />
      <meta name="theme-color" content="#ffffff" />
    </Head>
  )
}
