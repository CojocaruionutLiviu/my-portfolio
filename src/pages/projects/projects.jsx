import './projects.css'
import React from 'react'
export class Projects extends React.Component {
    render() {
        return (
            <div id="container-projects">
                <div className="repo-cards">
                     <a href="https://github.com/CojocaruionutLiviu/my-portfolio" target="_blank">
                        <img className="img-card" src='https://gh-card.dev/repos/CojocaruionutLiviu/my-portfolio.svg' />
                    </a>
                </div>
                <div className="repo-cards">
                     <a href="https://github.com/CojocaruionutLiviu/my-portfolio" target="_blank">
                        <img className="img-card" src='https://gh-card.dev/repos/CojocaruionutLiviu/my-portfolio.svg' />
                    </a>
                </div>
                <div className="repo-cards">
                     <a href="https://github.com/CojocaruionutLiviu/my-portfolio" target="_blank">
                        <img className="img-card" src='https://gh-card.dev/repos/CojocaruionutLiviu/my-portfolio.svg' />
                    </a>
                </div>
                <div className="repo-cards">
                     <a href="https://github.com/CojocaruionutLiviu/my-portfolio" target="_blank">
                        <img className="img-card" src='https://gh-card.dev/repos/CojocaruionutLiviu/my-portfolio.svg' />
                    </a>
                </div>
            </div>
        )
    }
}