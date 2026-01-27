import { useState } from 'react'
import styled from 'styled-components'
import profileImage from './assets/me.jpg'

const MainContainer = styled.table`
  width: 100%;
  max-width: 800px;
  border: 0px;
  border-spacing: 0px;
  border-collapse: separate;
  margin-right: auto;
  margin-left: auto;
`;

const NoPaddingRow = styled.tr`
  padding: 0px;
`;

const NoPaddingCell = styled.td`
  padding: 0px;
`;

const InnerContainer = styled.table`
  width: 100%;
  border: 0px;
  border-spacing: 0px;
  border-collapse: separate;
  margin-right: auto;
  margin-left: auto;
`;

const BioCell = styled.td`
  padding: 2.5%;
  width: 63%;
  vertical-align: middle;
`;

const NameText = styled.p`
  text-align: center;
  font-size: 32px;
  font-weight: 500;
`;

const LinksText = styled.p`
  text-align: center;
`;

const PhotoCell = styled.td`
  padding: 2.5%;
  width: 37%;
  max-width: 37%;
`;

const ProfileImage = styled.img`
  width: 100%;
  max-width: 100%;
  object-fit: cover;
  border-radius: 50%;
`;

const SectionHeader = styled.b`
  padding: 16px;
  width: 100%;
  vertical-align: middle;
`;

const PaperRow = styled.tr`
  background-color: ${props => props.highlight ? '#ffffd0' : 'transparent'};
`;

const ImageCell = styled.td`
  padding: 16px;
  width: 20%;
  vertical-align: middle;
`;

const ContentCell = styled.td`
  padding: 8px;
  width: 80%;
  vertical-align: middle;
`;

const PaperTitle = styled.a`
  font-weight: bold;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HoverOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: ${props => props.isHovered ? 1 : 0};
  transition: opacity 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PaperImg = styled.img`
  width: 100%;
  display: block;
`;

const PaperVideo = styled.video`
  width: 100%;
  height: auto;
  display: block;
`;

const Highlight = styled.span`
color: red
`

const Venue = styled.em`
`
// display: inline-block;
// padding: 2px 10px;
// font-size: 13px;
// font-weight: 700;
// border-radius: 6px;
// color: #0c0101;
// vertical-align: middle;
// margin-right: 8px;
// background-color: #e8b2b2;

function Paper({ data }) {
  const links = [
    data.venue && <Venue className="conf-badge ai-badge">{data.venue}</Venue>,
    data.oral && <Highlight>Oral Presentation</Highlight>,
    data.projectPage && <a key="pp" href={data.projectPage}>project page</a>,
    data.arxiv && <a key="arxiv" href={data.arxiv}>arXiv</a>,
    data.code && <a key="code" href={data.code}>code</a>,
    data.openreview && <a key="openreview" href={data.openreview}>OpenReview</a>,
    data.paper && <a key="paper" href={data.paper}>paper</a>,
    data.video && <a key="video" href={data.video}>video</a>,
  ].filter(Boolean);

  return (
    <PaperRow>
      <ImageCell>
        <ImageContainer>
          <PaperImg src={data.image} />
        </ImageContainer>
      </ImageCell>
      <ContentCell>
        <PaperTitle href={data.projectPage || data.arxiv || data.paper}>{data.title}</PaperTitle>
        <br />
        {data.authors}
        <br />
        {links.length > 0 && (
          <>
            {'  '}
            {links.reduce((prev, curr) => [prev, ' | ', curr])}
          </>
        )}
        <p>{data.description}</p>
      </ContentCell>
    </PaperRow>
  );
}

const Person = styled.a`
font-size: 13px;
`
const PersonNoLink = styled.b`
font-size: 13px;
`

const Janaka = ({ link }) => link ? <Person href="https://janakact.github.io/">Janaka Chathuranga Brahmanage</Person> : <PersonNoLink>Janaka Chathuranga Brahmanage</PersonNoLink>
const Akshat = () => <Person href="https://faculty.smu.edu.sg/profile/akshat-kumar-381">Akshat Kumar</Person>
const Jiajing = () => <Person href="https://lingkaching.github.io/">LING Jiajing</Person>
const Anh = () => <Person href="https://scholar.google.com/citations?user=2LMcTUgAAAAJ&hl=en">Anh Quan Pham</Person>
const Thivya = () => <Person href="https://faculty.smu.edu.sg/profile/thivya-kandappu-461">Thivya Kandappu</Person>
const Baihua = () => <Person href="https://faculty.smu.edu.sg/profile/baihua-zheng-341">Baihua Zheng</Person>
const Tien = () => <Person href="https://faculty.smu.edu.sg/profile/mai-anh-tien-461">Tien Anh Mai</Person>
const Surangika = () => <Person href="https://www.massey.ac.nz/massey/expertise/profile.cfm?stref=319722">Surangika Ranathunga</Person>

const papersData = [
  {
    title: "IOSTOM: Offline Imitation Learning from Observations via State Transition Occupancy Matching",
    authors: <><Tien /> <Anh />, <Janaka />, <Akshat /></>,
    venue: "NeurIPS 2025",
    // projectPage: "https://shipnavisim.github.io/",
    arxiv: false,
    openreview: "https://openreview.net/forum?id=OEp1J4V2fN",
    code: "https://github.com/quanganh1999/IOSTOM",
    image: "",
    description: "",
  },
  {
    title: "Leveraging Constraint Violation Signals For Action Constrained Reinforcement Learning",
    authors: <><Janaka />, <Jiajing />, <Akshat /></>,
    venue: "AAAI 2025",
    projectPage: false,
    arxiv: "https://arxiv.org/abs/2502.10431",
    openreview: false,
    code: "https://github.com/rlr-smu/cv-flow",
    image: "",
    description: "",
    oral: true
  },
  {
    title: "ShipNaviSim: Data-Driven Simulation for RealWorld Maritime Navigation",
    authors: <><Anh />, <Janaka />, <Akshat /></>,
    venue: "AAMAS 2025",
    projectPage: "https://shipnavisim.github.io/",
    arxiv: false,
    openreview: false,
    code: "https://github.com/quanganh1999/ShipNaviSim",
    image: "",
    description: "",
  },
  {
    title: "FlowPG: Action-constrained Policy Gradient with Normalizing Flows",
    authors: <><Janaka />, <Jiajing />, <Akshat /></>,
    venue: "NeurIPS 2023",
    projectPage: false,
    arxiv: "https://arxiv.org/abs/2402.05149",
    openreview: "https://openreview.net/forum?id=p1gzxzJ4Y5",
    code: "https://github.com/rlr-smu/flow-pg",
    image: "images/flowpg.jpg",
    description: "",
  },
  {
    title: "A data-driven approach for scheduling bus services subject to demand constraints",
    authors: <><Janaka />, <Thivya />, <Baihua /></>,
    venue: "IEEE TKDE 2022",
    projectPage: false,
    arxiv: false,
    openreview: false,
    code: false,
    paper: "https://ink.library.smu.edu.sg/cgi/viewcontent.cgi?article=8900&context=sis_research",
    image: "",
    description: "",
  },
  {
    title: "MetroWatch: A predictive system to estimate travel attributes using smart card data",
    authors: <><Janaka />, <Thivya />, <Baihua /></>,
    venue: "IEEE ICDE 2023",
    projectPage: false,
    arxiv: false,
    openreview: false,
    code: false,
    paper: "https://ieeexplore.ieee.org/document/10184634",
    image: "",
    description: "",
  },
  {
    title: "Annotating opinions and opinion targets in student course feedback",
    authors: <><Janaka />, Sandareka Ediriweera, Rasantha Hasantha, Prabath Munasinghe, <Surangika /></>,
    venue: "LREC 2018",
    projectPage: false,
    arxiv: false,
    openreview: false,
    code: false,
    paper: "https://aclanthology.org/L18-1425.pdf",
    image: "",
    description: "",
  },
  {
    title: "Opinion target extraction for student course feedback",
    authors: <><Janaka />, Sandareka Ediriweera, Prabath Munasinghe, Rasantha Hasantha, <Surangika /></>,
    venue: "ROCLING 2017",
    projectPage: false,
    arxiv: false,
    openreview: false,
    code: false,
    paper: "https://aclanthology.org/O17-1028.pdf",
    image: "",
    description: "",
  }
];

function App() {
  return (
    <MainContainer>
      <tbody>
        <NoPaddingRow>
          <NoPaddingCell>
            <InnerContainer>
              <tbody>
                <NoPaddingRow>
                  <BioCell>
                    <NameText className="name">Janaka Brahmanage</NameText>
                    <p>Bio:</p>
                    <LinksText>
                      <a href="mailto:janakactsl@gmail.com">Email</a> &nbsp;/&nbsp;
                      <a href="data/Janaka-Brahmanage-cv.pdf">CV</a> &nbsp;/&nbsp;
                      <a href="data/Janaka-Brahmanage-bio.txt">Bio</a> &nbsp;/&nbsp;
                      <a href="https://scholar.google.com/citations?user=E7r7hTUAAAAJ&hl=en">Scholar</a> &nbsp;/&nbsp;
                      <a href="https://twitter.com/janakact">Twitter</a> &nbsp;/&nbsp;
                      <a href="https://github.com/janakact/">Github</a>
                    </LinksText>
                  </BioCell>
                  <PhotoCell>
                    <a href={profileImage}>
                      <ProfileImage alt="profile photo" src={profileImage} className="hoverZoomLink" />
                    </a>
                  </PhotoCell>
                </NoPaddingRow>
              </tbody>
            </InnerContainer>

            <InnerContainer>
              <tbody>
                <tr>
                  <td>
                    For a complete list of publications, please visit my <a href="https://scholar.google.com/citations?user=E7r7hTUAAAAJ&hl=en">Google Scholar</a> page.
                  </td>
                </tr>
              </tbody>
            </InnerContainer>

            <InnerContainer>
              <tbody>
                {papersData.map((paper, index) => (
                  <Paper key={index} data={paper} />
                ))}
              </tbody>
            </InnerContainer>
          </NoPaddingCell>
        </NoPaddingRow>
      </tbody>
    </MainContainer>
  );
}

export default App;
