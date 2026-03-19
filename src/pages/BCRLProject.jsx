import styled from 'styled-components'
import { Link } from 'react-router-dom'

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
  margin-bottom: 20px;
`;

const ProjectContent = styled.div`
  font-size: 16px;
  line-height: 1.6;
`;

export default function BCRLProject() {
  return (
    <ProjectContainer>
      <BackLink to="/">← Back</BackLink>
      <ProjectTitle>Budget-Conditioned Reachability For Safe Offline Reinforcement Learning</ProjectTitle>
      <ProjectContent>
        <p>Project page coming soon...</p>
      </ProjectContent>
    </ProjectContainer>
  );
}
