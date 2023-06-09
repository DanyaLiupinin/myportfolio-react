import './ProjectPopup.css'

import ImageCarousel from '../ImageCarousel/ImageCarousel'

import closeButton from '../../images/close-button.svg'



const ProjectPopup = ({ activeProject, onCloseProject }) => {


    return (
        activeProject !== null &&
        <>
            <div className='overlay'></div>
            <div className={`projectPopup`}>
                <button className='projectPopup__close-button' type='button' onClick={() => onCloseProject()}>
                    <img className='projectPopup__close-button-image' src={closeButton} alt='close button'></img>
                </button>
                <ImageCarousel
                    images={activeProject.images}
                />
                <div className='projectPopup__info'>
                    <h3 className='projectPopup__title'>{activeProject.title}</h3>
                    <p className='projectPopup__description'>{activeProject.description}</p>

                    <div className='projectPopup__skills'>
                        <p className='projectPopup__skill'>Stack:</p>
                        {
                            activeProject.stack.map((skill, i) => {
                                return (
                                    <p className='projectPopup__skill' key={i}>{skill},</p>
                                )
                            })
                        }
                    </div>
                    <div className='projectPopup__buttons'>
                        <a className={`projectPopup__button ${activeProject.github === 'no' ? 'projectPopup__button_disabled' : ''}`} target="_blank" rel="noopener noreferrer" href={activeProject.github}
                            disabled={false}>
                            {`${activeProject.github === 'no' ? 'no github :(' : 'GitHub'}`}</a>
                        <a className='projectPopup__button' target="_blank" rel="noopener noreferrer" href={activeProject.browser}>Website</a>
                    </div>
                </div>

            </div>
        </>

    )
}

export default ProjectPopup