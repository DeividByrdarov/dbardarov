const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: '/',
  title: 'DB.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Deyvid Bardarov',
  role: 'Front End Engineer',
  description:
    'I am a passionate FE developer with a lot of interest in new technologies. I am a good team player with great communication skills. I possesses a customer-centric attitude and am really determined to create a simple friendly user interface.',
  resume: 'https://example.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/deyvid-bardarov-ab594a175',
    github: 'https://github.com/DeividByrdarov',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  // {
  //   name: 'Project 1',
  //   description:
  //     'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
  //   stack: ['SASS', 'TypeScript', 'React'],
  //   sourceCode: 'https://github.com',
  //   livePreview: 'https://github.com',
  // }
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Redux',
  'SASS',
  'Material UI',
  'Git',
  'CI/CD',
  'Jest',
  'Enzyme',
  'Confluence',
  'Atlassian JIRA',
  'React Native',
  'AWS',
  'NodeJS',
  'GraphQL',
  'Docker',
  'Websockets',
  'Webpack',
  'Storybook',
  'Magento',
  'ExpressJS',
  'Fastify',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'me@dbardarov.com',
}

export { header, about, projects, skills, contact }
