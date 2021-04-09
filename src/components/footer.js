import React from "react"
import PropTypes from "prop-types"

export const Footer = (props)=>{
    return(
        <>
                <footer className="py-4 mt-3 text-center">
                    <code className="text-dark d-block">Curriculum Vitae David Bermúdez</code>
                    <code className="text-dark d-block mt-2">San José Costa Rica</code>
                    <code className="text-dark d-block mt-2">Todos los derechos reservados</code>
                    <code className="text-dark d-block mt-2">2021</code>
                    <div className="mt-3">
                        <a href="https://www.linkedin.com/in/david-berm%C3%BAdez-valverde-ab428b182/" target='_blank'><i class="fab fa-linkedin fa-2x m-2 text-info"></i></a>
                        <a href="https://github.com/DavJosBer" target="_blank"><i class="fab fa-github fa-2x m-2 text-dark"></i></a>
                    </div>
                </footer>
        </>
    )
}