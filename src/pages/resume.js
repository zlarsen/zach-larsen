import React from 'react'

import { Icon, Layout, Link, Resume, SEO, WaveSection } from 'src/components'
import { github } from 'src/links'

const ResumePage = () => (
	<Layout activePage="resume">
		<SEO title="Zach Larsen Resume" />
		<Resume>
			<WaveSection disableTopMargin>
				<p>
					Here's an overview of some of the things I've worked on
					since I started building software for the web. For more
					details, download my resume as a PDF, or check out some of
					my code on GitHub!
				</p>
				<p>
					<Link to="/zach-larsen-resume.pdf" external button>
						Download Resume
					</Link>
					&nbsp;
					<Link to={github} secondary button>
						<Icon name="GitHub" /> Visit GitHub
					</Link>
				</p>
			</WaveSection>
			<Resume.Position
				name="Genbloq"
				link="https://genbloq.com"
				start="Feb 2018"
			>
				<Resume.Role name="Senior Software Engineer" />
				<Resume.Description>
					<p>
						Node, TypeScript, PostgreSQL, React, HyperLedger, AWS
						Genbloq provides custom, privileged blockchain solutions
						for companies exploring decentralized approaches to
						network-level problems. Realbloq, the first
						production-grade application built by Genbloq, aims to
						solve the problem of wire fraud by leveraging proven
						traditional technologies augmented by the strengths of
						blockchain.
					</p>
				</Resume.Description>
			</Resume.Position>
			<Resume.Position
				name="Sweetbridge, Inc."
				link="https://sweetbridge.com"
				start="November 2017"
				end="September 2018"
			>
				<Resume.Role name="Software Engineer" />
				<Resume.Description>
					<p>
						Node + Express, GraphQL, PostgreSQL, MongoDB + Mongoose
						ORM, React + Redux, Webpack Sweetbridge sponsors the
						development of blockchain-based economic protocols and
						applications to transform high-friction global supply
						chains into Liquid Value Networks. The Swiss-based
						non-profit foundation is gathering interested industry
						technologists, blockchain projects and open-source
						contributors from around the world to form a blockchain
						alliance. The shared goal is to transform brittle,
						industrial-era commerce through decentralized industry
						ecosystems that create a faster, fairer value exchange,
						unleash working capital, better utilize resources and
						optimize talent for the benefit of all participants. To
						learn more or get involved visit www.sweetbridge.com.
					</p>
				</Resume.Description>
			</Resume.Position>
			<Resume.Position
				name="Aptivada"
				link="https://www.aptivada.com"
				start="August 2016"
				end="November 2017"
			>
				<Resume.Role name="Software Developer" />
				<Resume.Description>
					<p>
						Developing software in an Agile environment. Planning
						projects, versioning software with GitHub, implementing
						a continuous development cycle, and interfacing with
						social media APIs. Led the development of a project that
						brought in over 1.5 million dollars to our clients.
					</p>
				</Resume.Description>
			</Resume.Position>
			<Resume.Position name="Education" subtext="Dixie State University">
				<Resume.Role
					name="Bachelor's degree, Computer Science"
					start="January 2014"
					end="May 2016"
				/>
			</Resume.Position>
		</Resume>
	</Layout>
)

export default ResumePage
