import React from "react"
import PropTypes from "prop-types"

export const About = ()=>{
    return(
        <>
            <header className="container">
                <h1 className="display-1">Bienvenido</h1>
            </header>
            <div className="container">
                <h2 className="display-4 my-3">Mi Barra de Conocimientos:</h2>
            </div>
            <main className="text-center py-4">
                <p>HTML5</p>
                <div className="container my-3">
                    <div className="progress">
                        <div className="progress-bar bg-success w-100" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">100%</div>
                    </div>
                </div>
                <p>CSS3</p>
                <div className="container my-3">
                    <div className="progress">
                        <div className="progress-bar bg-success w-90" role="progressbar" aria-valuenow="80" aria-valuemin="100" aria-valuemax="100">90%</div>
                    </div>
                </div>
                <p>Bootstrap</p>
                <div className="container my-3">
                    <div className="progress">
                        <div className="progress-bar bg-success w-90" role="progressbar" aria-valuenow="80" aria-valuemin="100" aria-valuemax="100">90%</div>
                    </div>
                </div>
                <p>JavaScript</p>
                <div className="container my-3">
                    <div className="progress">
                        <div className="progress-bar bg-success w-80" role="progressbar" aria-valuenow="80" aria-valuemin="100" aria-valuemax="100">85%</div>
                    </div>
                </div>
                <p>ES6</p>
                <div className="container my-3">
                    <div className="progress">
                        <div className="progress-bar bg-success w-80" role="progressbar" aria-valuenow="80" aria-valuemin="100" aria-valuemax="100">85%</div>
                    </div>
                </div>
                <p>REACT JS</p>
                <div className="container my-3">
                    <div className="progress">
                        <div className="progress-bar bg-success w-70" role="progressbar" aria-valuenow="80" aria-valuemin="100" aria-valuemax="100">70%</div>
                    </div>
                </div>
                <p>ejs</p>
                <div className="container my-3">
                    <div className="progress">
                        <div className="progress-bar bg-success w-60" role="progressbar" aria-valuenow="80" aria-valuemin="100" aria-valuemax="100">60%</div>
                    </div>
                </div>
                <p>NodeJs</p>
                <div className="container my-3">
                    <div className="progress">
                        <div className="progress-bar bg-success w-60" role="progressbar" aria-valuenow="80" aria-valuemin="100" aria-valuemax="100">60%</div>
                    </div>
                </div>
            </main>
        </>
    )
}