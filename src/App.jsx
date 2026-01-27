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

const SectionHeader = styled.h2`
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

const Venue = styled.em`

`

function Paper({ data }) {
  return (
    <PaperRow>
      <ImageCell>
        <ImageContainer>
          <PaperImg src={data.image} />
        </ImageContainer>
      </ImageCell>
      <ContentCell>
        <PaperTitle href={data.projectPage || data.arxiv}>{data.title}</PaperTitle>
        <br />
        {data.authors}
        <br />
        <Venue>{data.venue}, </Venue>
        {data.projectPage && <><a href={data.projectPage}>project page</a> / </>}
        {data.arxiv && <a href={data.arxiv}>arXiv</a>}
        {data.code && <a href={data.code}>code</a>}
        {data.openreview && <a href={data.openreview}>OpenReview</a>}
        <p>{data.description}</p>
      </ContentCell>
    </PaperRow>
  );
}

const Person = styled.a`

`
const Janaka = ({ link }) => link ? <Person href="https://janakact.github.io/">Janaka Chathuranga Brahmanage</Person> : <b>Janaka Chathuranga Brahmanage</b>
const Akshat = () => <Person href="https://faculty.smu.edu.sg/profile/akshat-kumar-381">Akshat Kumar</Person>
const Jiajing = () => <Person href="https://lingkaching.github.io/">LING Jiajing</Person>

const papersData = [
  {
    title: "Flowpg: action-constrained policy gradient with normalizing flows",
    authors: <><Janaka />, <Jiajing />, <Akshat /></>,
    venue: "NeurIPS 2023",
    projectPage: false,
    arxiv: "https://arxiv.org/abs/2402.05149",
    openreview: "https://openreview.net/forum?id=p1gzxzJ4Y5",
    code: "https://github.com/rlr-smu/flow-pg",
    image: "images/flowpg.jpg",
    description: "Utilizes Normalizing Flows to map policy outputs directly to feasible action spaces, eliminating the need for slow optimization solvers.",
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
                    <SectionHeader>Research</SectionHeader>
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
