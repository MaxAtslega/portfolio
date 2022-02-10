import type { NextPage } from "next"
import { Box, Grid, List, ListItem, ListItemIcon, ListItemText, Typography, Link as MuiLink } from "@mui/material"
import Section from "@components/Section"
import Layout from "@components/Layout"
import Image from "next/image"
import Project from "@components/Project"
import Link from "next/link"

import { AiFillThunderbolt } from "react-icons/ai"
import styled from "styled-components"
import { getAllPosts } from "../src/lib/ghost"

const ListProject = styled.ul`
  margin-top: 10px;
  list-style: none;
  padding: 0;
`

const ListProjectItem = styled.li`
  list-style: none;
  display: flex;
  justify-content: left;
  align-items: center;
  padding: 6px 0;

  p:first-child {
    padding-right: 25px;
  }
`

export async function getStaticProps() {
  const posts = await getAllPosts()
  return { props: { posts } }
}

const Home: NextPage = ({ posts }: { posts: any }) => (
  <Layout title="Start">
    <main>
      <Typography variant="h1">Max Atslega</Typography>
      <Typography sx={{ fontSize: "1.25em" }} color={"#808080"} variant="h2">
        Hobby full-stack Developer
      </Typography>

      <Section id={"about_me"}>
        <Typography variant="h2">About me</Typography>
        <Typography variant="body1">
          I am a student from Germany with a passion for building digital cool stuff. I am currently 17 years old and
          since I was 11 years old, I have been been interested in programming and technology. I am a full-stack
          open-source Developer and a knack for all things launching products, from planing, designing and hosting. You
          can find me on{" "}
          <a href={"https://github.com/MaxAtslega"} style={{ color: "#ffffff", textDecorationStyle: "dotted" }}>
            Github
          </a>{" "}
          or on{" "}
          <a href={"https://twitter.com/MaxAtslega"} style={{ color: "#ffffff", textDecorationStyle: "dotted" }}>
            Twitter
          </a>
          {"."}
          <br />
          <br />
          In addition to IT, my hobbies include going to the gym, cycling, walking with my dog, travelling and feeling
          the freedom. My true passion is to help others.
          <br />
          <br />
          <br />
          <a href={"mailto:hello@atslega.network"} style={{ color: "#ffffff", textDecorationStyle: "dotted" }}>
            hello@atslega.network
          </a>
        </Typography>
      </Section>
      <Section id={"technologies"}>
        <Typography variant="h2">What I do</Typography>
        <Box sx={{ span: { marginRight: "10px !important" } }}>
          <Image
            width={"55px"}
            height={"20px"}
            alt="Bash"
            src="https://img.shields.io/badge/Bash-121011.svg?logo=gnu-bash&logoColor=white"
          />

          <Image
            width={"51px"}
            height={"20px"}
            alt="CSS"
            src="https://img.shields.io/badge/CSS-1572B6.svg?logo=css3&logoColor=white"
          />
          <Image
            width={"59px"}
            height={"20px"}
            alt="HTML"
            src="https://img.shields.io/badge/HTML-E34F26.svg?logo=html5&logoColor=white"
          />
          <Image
            width={"53px"}
            height={"20px"}
            alt="Java"
            src="https://img.shields.io/badge/Java-007396.svg?logo=java&logoColor=white"
          />
          <Image
            width={"85px"}
            height={"20px"}
            alt="JavaScript"
            src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?logo=javascript&logoColor=black"
          />
          <Image
            width={"61px"}
            height={"20px"}
            alt="LaTeX"
            src="https://img.shields.io/badge/LaTeX-008080.svg?logo=LaTeX&logoColor=white"
          />
          <Image
            width={"69px"}
            height={"20px"}
            alt="Node.js"
            src="https://img.shields.io/badge/Node.js-43853D.svg?logo=node.js&logoColor=white"
          />
          <Image
            width={"49px"}
            height={"20px"}
            alt="PHP"
            src="https://img.shields.io/badge/PHP-777BB4.svg?logo=php&logoColor=white"
          />
          <Image
            width={"67px"}
            height={"20px"}
            alt="Python"
            src="https://img.shields.io/badge/Python-14354C.svg?logo=python&logoColor=white"
          />
          <Image
            width={"53px"}
            height={"20px"}
            alt="SASS"
            src="https://img.shields.io/badge/Sass-hotpink.svg?logo=SASS&logoColor=white"
          />
          <Image
            width={"51px"}
            height={"20px"}
            alt="SQL"
            src="https://img.shields.io/badge/SQL-4479A1.svg?logo=mysql&logoColor=white"
          />
          <Image
            width={"83px"}
            height={"20px"}
            alt="SVG+XML"
            src="https://img.shields.io/badge/SVG%2BXML-e0982c.svg?logo=svg&logoColor=white"
          />
          <Image
            alt="TypeScript"
            width={"87px"}
            height={"20px"}
            src="https://img.shields.io/badge/TypeScript-007ACC.svg?logo=typescript&logoColor=white"
          />
          <Image
            alt="Powershell"
            width={"89px"}
            height={"20px"}
            src="https://img.shields.io/badge/PowerShell-5391FE.svg?logo=powershell&logoColor=white"
          />

          <Image
            width={"43px"}
            height={"20px"}
            alt="Go"
            src="https://img.shields.io/badge/Go-00ADD8.svg?logo=go&logoColor=white"
          />
          <Image
            width={"53px"}
            height={"20px"}
            alt="Rust"
            src="https://img.shields.io/badge/Rust-000000.svg?logo=rust&logoColor=white"
          />
          <Image
            width={"71px"}
            height={"20px"}
            alt="Arduino"
            src="https://img.shields.io/badge/-Arduino-00979D?logo=Arduino&logoColor=white"
          />
          <Image
            width={"97px"}
            height={"20px"}
            alt="Linux"
            src="https://img.shields.io/badge/Linux%20Server-FCC624.svg?logo=Linux&logoColor=black"
          />
          <Image
            width={"71px"}
            height={"20px"}
            alt="VMware"
            src="https://img.shields.io/badge/VMware-607078.svg?logo=VMware&logoColor=white"
          />
          <Image
            width={"77px"}
            height={"20px"}
            alt="Proxmox"
            src="https://img.shields.io/badge/Proxmox-E57000.svg?logo=Proxmox&logoColor=white"
          />
          <Image
            width={"59px"}
            height={"20px"}
            alt="React"
            src="https://img.shields.io/badge/React-20232a.svg?logo=react&logoColor=%2361DAFB"
          />
          <Image
            width={"73px"}
            height={"20px"}
            alt="Electron"
            src="https://img.shields.io/badge/Electron-20232e.svg?logo=electron&logoColor=white"
          />
          <Image
            width={"77px"}
            height={"20px"}
            alt="GraphQL"
            src="https://img.shields.io/badge/GraphQL-E10098?logo=GraphQL&logoColor=white"
          />
        </Box>
        <List>
          <ListItem sx={{ padding: "2px 0" }} disablePadding disableGutters>
            <ListItemIcon sx={{ minWidth: "40px", fontSize: "20px", color: "#FE5E41" }}>
              <AiFillThunderbolt />
            </ListItemIcon>
            <ListItemText primary="Develop highly interactive Front end / User Interfaces for your web and mobile applications" />
          </ListItem>
          <ListItem sx={{ padding: "2px 0" }} disablePadding disableGutters>
            <ListItemIcon sx={{ minWidth: "40px", fontSize: "20px", color: "#FE5E41" }}>
              <AiFillThunderbolt />
            </ListItemIcon>
            <ListItemText primary="Progressive Web Applications (PWA) and SPA" />
          </ListItem>
          <ListItem sx={{ padding: "2px 0" }} disablePadding disableGutters>
            <ListItemIcon sx={{ minWidth: "40px", fontSize: "20px", color: "#FE5E41" }}>
              <AiFillThunderbolt />
            </ListItemIcon>
            <ListItemText primary="Self-Hosting" />
          </ListItem>
        </List>
      </Section>
      <Section id={"projects"}>
        <Typography variant="h2">Open-Source Projects</Typography>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            {Array.from(Array(6)).map((_, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Project />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Section>
      <Section id={"about_me"}>
        <Typography variant="h2">Blog Posts</Typography>
        <Typography variant="body1">
          I love to develop cool Stuff and I love to write. So I created a Blog to share my experience with you. Here is
          a list of my recent blog posts:
        </Typography>
        <ListProject>
          <ListProjectItem>
            <Typography variant="body2">Sept 5, 2022</Typography>
            <Link passHref href={"/blog/1"}>
              <MuiLink variant="body1">Building GitHub Apps with Golang</MuiLink>
            </Link>
          </ListProjectItem>
          <ListProjectItem>
            <Typography variant="body2">Jan 5, 2022</Typography>
            <Link passHref href={"/blog/1"}>
              <MuiLink variant="body1">Building GitHub Apps with Golang</MuiLink>
            </Link>
          </ListProjectItem>
        </ListProject>
      </Section>
      <Section id={"about_me"}>
        <Typography variant="h2">Server Status</Typography>
        <a
          href="https://www.abuseipdb.com/user/67517"
          title="AbuseIPDB is an IP address blacklist for webmasters and sysadmins to report IP addresses engaging in abusive behavior on their networks"
        >
          <img
            src="https://www.abuseipdb.com/contributor/67517.svg"
            style={{
              width: "274px",
              borderRadius: "5px",
              borderTop: "5px solid #058403",
              borderRight: "5px solid #111",
              borderBottom: "5px solid #111",
              borderLeft: "5px solid #058403",
              padding: "5px",
              background:
                "#35c246 linear-gradient(rgba(255,255,255,0), rgba(255,255,255,.3) 50%, rgba(0,0,0,.2) 51%, rgba(0,0,0,0))",
              boxShadow: "2px 2px 1px 1px rgba(0, 0, 0, .2)",
            }}
            alt="AbuseIPDB Contributor Badge"
          />
        </a>
      </Section>
      <Section id={"Contact"}>
        <Typography variant="h2">Reach Out to me</Typography>
        <Typography variant="body1">
          You can reach out to me through my mail address at{" "}
          <a href={"mailto:max@atslega.network"} style={{ color: "#ffffff", textDecorationStyle: "dotted" }}>
            max@atslega.network
          </a>
        </Typography>
      </Section>
    </main>
  </Layout>
)

export default Home
