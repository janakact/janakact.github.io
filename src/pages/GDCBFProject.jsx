import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ProjectContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin-right: auto;
  margin-left: auto;
  padding: 20px;
`;

const BackLink = styled(Link)`
  display: inline-block;
  margin-bottom: 20px;
  color: #0066cc;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const ProjectTitle = styled.h1`
  font-size: 32px;
  margin-bottom: 10px;
  line-height: 1.3;
`;

const Authors = styled.div`
  font-size: 18px;
  margin-bottom: 20px;
  color: #555;
`;

const LinksContainer = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 30px;
`;

const ProjectLink = styled.a`
  display: inline-block;
  padding: 8px 16px;
  background-color: #f0f0f0;
  color: #333;
  text-decoration: none;
  border-radius: 4px;
  font-weight: bold;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #e0e0e0;
  }
`;

const SectionTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 15px;
  margin-top: 30px;
  border-bottom: 1px solid #eee;
  padding-bottom: 10px;
`;

const ProjectContent = styled.div`
  font-size: 16px;
  line-height: 1.6;
  color: #333;

  p {
    margin-bottom: 15px;
  }

  ul {
    padding-left: 20px;
    margin-bottom: 20px;
  }

  li {
    margin-bottom: 10px;
  }
`;

export default function GDCBFProject() {
  return (
    <ProjectContainer>
      <BackLink to="/">← Back</BackLink>
      <ProjectTitle>GDCBF: Project Title Placeholder</ProjectTitle>

      <Authors>
        Author One, Author Two
      </Authors>

      <LinksContainer>
        <ProjectLink href="#" target="_blank" rel="noopener noreferrer">
          📄 Paper
        </ProjectLink>
        <ProjectLink href="#" target="_blank" rel="noopener noreferrer">
          &lt;/&gt; Code
        </ProjectLink>
      </LinksContainer>

      <ProjectContent>
        <SectionTitle>Overview</SectionTitle>
        <p>
          Placeholder overview paragraph. Replace with project summary.
        </p>

        <SectionTitle>Main Contributions</SectionTitle>
        <ul>
          <li><strong>Contribution One</strong>: Placeholder description.</li>
          <li><strong>Contribution Two</strong>: Placeholder description.</li>
          <li><strong>Contribution Three</strong>: Placeholder description.</li>
        </ul>
      </ProjectContent>
    </ProjectContainer>
  );
}
