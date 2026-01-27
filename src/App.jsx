import { useState } from 'react'
import styled from 'styled-components'
import profileImage from './assets/me.jpg'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './stylesheet.css'

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


function Paper() {
  return <td style="padding:8px;width:80%;vertical-align:middle">
    <a href="https://m-niemeyer.github.io/nexf/">
      <span class="papertitle">NExF: Learning Neural Exposure Fields for View Synthesis</span>
    </a>
    <br>
      <a href="https://m-niemeyer.github.io/">Michael Niemeyer</a>,
      <a href="https://campar.in.tum.de/Main/FabianManhardt">Fabian Manhardt</a>,
      <a href="http://www.lix.polytechnique.fr/Labo/Marie-Julie.RAKOTOSAONA/">Marie-Julie Rakotosaona</a>,
      <a href="https://moechsle.github.io">Michael Oechsle</a>,
      <a href="https://ait.ethz.ch/people/ctsalico">Christina Tsalicoglou</a>,
      <a href="https://scholar.google.com/citations?user=ml3laqEAAAAJ&hl=ja">Keisuke Tateno</a>,
      <strong>Jonathan T. Barron</strong>,
      <a href="https://federicotombari.github.io/">Federico Tombari</a>
      <br>
        <em>NeurIPS</em>, 2025
        <br>
          <a href="https://m-niemeyer.github.io/nexf/">project page</a>
          /
          <a href="https://arxiv.org/abs/2510.08279">arXiv</a>
          <p></p>
          <p>
            Learning a neural field that optimizes exposure for each 3D point enables high-quality 3D-consistent view synthesis despite extreme exposure variation during capture.
          </p>
        </td>
      </tr>
}

      function App() {
  const [count, setCount] = useState(0)

      return (
      <>
        <MainContainer>
          <tbody>
            <NoPaddingRow>
              <NoPaddingCell>
                <InnerContainer>
                  <tbody>
                    <NoPaddingRow>
                      <BioCell>
                        <NameText className="name">
                          Janaka Brahmanage
                        </NameText>
                        <p>
                          Bio:
                        </p>
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
              </NoPaddingCell>
            </NoPaddingRow>
          </tbody>
        </MainContainer>
      </>
      )
}

      export default App
