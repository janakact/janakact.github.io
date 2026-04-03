import styled from 'styled-components';
import { Link } from 'react-router-dom';
import bcrlImage from '../assets/bcrl.png';

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

const ProjectImage = styled.img`
  width: 100%;
  max-width: 100%;
  height: auto;
  border-radius: 8px;
`;
// box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

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

export default function BCRLProject() {
  return (
    <ProjectContainer>
      <BackLink to="/">← Back</BackLink>
      <ProjectTitle>Beyond Hard Constraints: Budget-Conditioned Reachability For Safe Offline Reinforcement Learning</ProjectTitle>

      <Authors>
        Janaka Chathuranga Brahmanage, Akshat Kumar
      </Authors>

      <LinksContainer>
        <ProjectLink href="https://arxiv.org/pdf/2603.22292" target="_blank" rel="noopener noreferrer">
          📄 Paper (Extended Version)
        </ProjectLink>
        <ProjectLink href="https://github.com/janakact/bcrl" target="_blank" rel="noopener noreferrer">
          &lt;/&gt; Code
        </ProjectLink>
      </LinksContainer>

      <ProjectImage src={bcrlImage} alt="BCRL Method Overview" />

      <ProjectContent>
        <SectionTitle>Overview</SectionTitle>
        <p>
          Real-world applications of Reinforcement Learning (RL) must balance reward maximization with safety constraints. While safety reachability analysis is a promising alternative to unstable min–max optimization, most reachability-based methods address only hard safety constraints rather than cumulative cost constraints.
        </p>
        <p>
          We propose <strong>Budget-Conditioned Reachability RL (BCRL)</strong>, a novel offline safe RL algorithm that learns a safe policy from a fixed dataset without environment interaction by using dynamic budgets to enforce safety constraints without adversarial optimization.
        </p>

        <SectionTitle>Main Contributions</SectionTitle>
        <ul>
          <li><strong>Budget-Conditioned Reachability</strong>: A framework that applies reachability analysis to continuous domains with cumulative cost constraints. It uses dynamic budgets to estimate persistently safe state–action sets.</li>
          <li><strong>Stabilized Learning</strong>: Enforces safety constraints natively without relying on unstable min–max or Lagrangian optimization.</li>
          <li><strong>Seamless Integration</strong>: Compatible with existing offline RL algorithms (IQL, XQL, SparseQL), requires no generative models or online rollouts, and generalizes to any budget constraint.</li>
          <li><strong>Empirical Success</strong>: Matches or outperforms state-of-the-art baselines on standard offline safe-RL benchmarks and real-world maritime navigation tasks.</li>
        </ul>
      </ProjectContent>
    </ProjectContainer>
  );
}
