import React from "react"
import PropTypes from "prop-types"

export const CV = ()=>{
    return(
        <>
            <div className="container">
                <header>
                <h1 className="display-1">Mí Curriculum</h1>
            </header>
            <main className="text-center py-4 vh-90">
                <div className="row mt-4">
                    <div className="col-md-4 mt-3">
                        <h3 className="mt-2">Información General</h3>
                        <p className="mt-2">Estudiante de Programación y Electrónica</p>
                        <p className="mt-2">Aficionado del IoT,La Automatización, e IA</p>
                    </div>
                    <div className="col-md-4 mt-3">
                        <h3 className="mt-2">Estudios</h3>
                        <p className="mt-2">Técnico Medio FrontEnd - Instituto Nacional de Aprendizaje - 2019-2021</p>
                        <p className="mt-2">Técnico Superior Electrónica en Telecomunicaciones - Colegio Vocacional Monseñor Sanabria (Nocturno) - 2021-2024</p>
                        <p className="mt-2">Bachiller Educación Media - Instituto Juvenil Desamparados - 2017</p>
                    </div>
                    <div className="col-md-4 mt-3">
                        <h3 className="mt-2">Cursos</h3>
                        <p className="mt-2">Full Stack Bootcamp - 4GeeksAcademy/MICITT - 2021</p>
                        <p className="mt-2">Desarrollo Web FrontEnd - Google Activate - 2018</p>
                    </div>
                    
                </div>
            </main>
            </div>
        </>
    )
}