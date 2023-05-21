import { useState } from 'react'

import './Portfolio.css'

import Projects from '../Projects/Projects'
import ProjectPopup from '../ProjectPopup/ProjectPopup'

const Portfolio = ({projectsRef}) => {

  const [activeProject, setActiveProject] = useState(null)

  const onClickProject = (projectData) => {
    setActiveProject(projectData)
  }

  const onCloseProject = () => {
    setActiveProject(null)
  }

    return (
        <section className='portfolio'>
          <Projects
            projectsRef={projectsRef}
            onClickProject={onClickProject}
          />
          <ProjectPopup
            activeProject={activeProject}
            onCloseProject={onCloseProject}
          />
        </section>
    )
}

export default Portfolio