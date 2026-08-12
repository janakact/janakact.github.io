import styled from 'styled-components';
import conceptImage from '../assets/gdcbf-concept.png?url';
import criticImage from '../assets/gdcbf.png?url';

const ProjectContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin-right: auto;
  margin-left: auto;
  padding: 20px;
`;

const BackLink = styled.a`
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

const Venue = styled.div`
  font-size: 16px;
  color: #777;
  margin-bottom: 10px;
`;

const Authors = styled.div`
  font-size: 18px;
  margin-bottom: 5px;
  color: #555;
`;

const AuthorLink = styled.a`
  color: #555;
`;

const FootNote = styled.div`
  font-size: 14px;
  color: #777;
  margin-bottom: 20px;
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

const Caption = styled.p`
  font-size: 14px;
  color: #777;
  margin-top: 8px;
  margin-bottom: 25px;
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
      <BackLink href="/">← Back</BackLink>
      <ProjectTitle>Persistent Safety Set Guided Offline Safe Reinforcement Learning</ProjectTitle>

      <Venue>IJCAI 2026</Venue>

      <Authors>
        <AuthorLink href="https://github.com/AyanRoy24">Ayan Choudhury</AuthorLink><sup>*</sup>,{' '}
        <AuthorLink href="https://janakact.github.io/">Janaka Chathuranga Brahmanage</AuthorLink><sup>*</sup>,{' '}
        <AuthorLink href="https://faculty.smu.edu.sg/profile/akshat-kumar-381">Akshat Kumar</AuthorLink>,{' '}
        <AuthorLink href="https://scholar.google.com/citations?user=ILUqgKEAAAAJ&hl=en">Praveen Paruchuri</AuthorLink>
      </Authors>
      <FootNote>
        <sup>*</sup> Ayan Choudhury and Janaka Brahmanage contributed equally to this work.
        <br />
        International Institute of Information Technology, Hyderabad
        &nbsp;·&nbsp; Singapore Management University
      </FootNote>

      <LinksContainer>
        <ProjectLink href="/papers/ijcai2026_gdcbf.pdf" target="_blank" rel="noopener noreferrer">
          📄 Paper
        </ProjectLink>
        <ProjectLink href="https://ayanroy24.github.io/GDCBF/" target="_blank" rel="noopener noreferrer">
          &lt;/&gt; Code
        </ProjectLink>
      </LinksContainer>

      <ProjectImage src={conceptImage} alt="Value propagation with vs. without persistent safety" />
      <Caption>
        Value propagation with vs. without persistent safety. The figure shows a trajectory that
        briefly leaves the feasible region. Prior methods allow value propagation through unsafe
        states by enforcing safety only at policy extraction. Our approach enforces safety within the
        Bellman update, blocking value propagation through unsafe transitions.
      </Caption>

      <ProjectContent>
        <SectionTitle>Abstract</SectionTitle>
        <p>
          Offline safe reinforcement learning learns high-return policies that satisfy hard safety
          constraints using only a pre-collected dataset. This setting is challenging due to the
          inability to explore, and the risk of propagating value errors through unsafe state-space
          regions. To address this, <em>first</em>, we characterize the safe state region by
          developing a framework for learning control barrier functions (CBFs) using a novel
          generalized Bellman operator, yielding a <em>persistent safety set</em>, from which the
          agent can remain safe indefinitely. <em>Second</em>, we show that several existing safety
          set estimation methods (e.g., reachability-constrained RL) can be formulated within our CBF
          learning framework, highlighting its generality. We further propose a new CBF that ensures
          safety under environment dynamics uncertainty, unlike standard CBFs designed for
          deterministic settings. <em>Third</em>, we propose a new reward maximization algorithm that
          effectively exploits our learned persistent safety set for reward critic estimation.
          Empirical results on standard benchmarks show that our approach achieves state-of-the-art
          safety with fewer constraint violations while maintaining competitive returns.
        </p>

        <SectionTitle>Main Contributions</SectionTitle>
        <ul>
          <li>
            <strong>Generalized Bellman operator for CBF learning</strong>: A framework for learning
            discrete-time CBFs from offline data via a generalized Bellman operator. The operator is a
            contraction, and its fixed point is the maximal forward-invariant safe set — a valid
            persistent safety certificate. Several existing CBF formulations (maximum, smooth,
            additive) are special cases of it.
          </li>
          <li>
            <strong>Robust CBFs under stochastic dynamics</strong>: An asymmetric-aggregation
            (expectile / percentile) update that approximates the worst-case future violation without
            a transition model, satisfying the robust discrete CBF condition where standard
            deterministic CBFs fail.
          </li>
          <li>
            <strong>Forward-invariant safety enforcement</strong>: The learned CBF is used as an
            explicit safety critic inside offline actor–critic learning, so both value estimation and
            policy improvement stay in barrier-certified safe regions. This prevents reward leakage —
            value propagating through unsafe transitions — instead of enforcing safety only at policy
            extraction time.
          </li>
          <li>
            <strong>Empirical validation</strong>: State-of-the-art constraint satisfaction with
            competitive returns on Safety Gym, Bullet Gym, and MetaDrive offline safe-RL benchmarks;
            near-zero cost across tasks where baselines that filter only at policy extraction violate
            constraints.
          </li>
        </ul>

        <SectionTitle>Reward Leakage</SectionTitle>
        <ProjectImage src={criticImage} alt="Reward critic vs safety critic distributions" />
        <Caption>
          Reward critic Q<sub>r</sub>(s,a) vs. safety critic Q<sub>h</sub>(s,a) distributions for
          Swimmer Velocity. The red dashed line at Q<sub>h</sub>(s,a) = 0 marks the safety boundary:
          points to the left are safe, those to the right are unsafe. <strong>Left</strong>:
          CBF<sub>smooth</sub> prevents reward leakage — Q<sub>r</sub>(s,a) is low when
          Q<sub>h</sub>(s,a) &gt; 0. <strong>Right</strong>: FISOR shows reward leakage —
          Q<sub>r</sub>(s,a) stays high even for unsafe pairs.
        </Caption>
      </ProjectContent>
    </ProjectContainer>
  );
}
