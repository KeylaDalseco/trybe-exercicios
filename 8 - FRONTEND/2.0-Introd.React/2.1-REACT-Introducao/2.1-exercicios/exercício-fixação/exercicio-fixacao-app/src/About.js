import React from "react";

class About extends React.Component {
    render() {
        const nome = 'Keyla Costa Dalseco';
        return (
            <div>
                <h1>{nome}</h1>
                <p>Meu nome é Keyla, sou de Belo Horizonte - MG e estou realizando transição de carreira na trybe!</p>
                <h2>Minhas Habilidades</h2>
                <ul>
                    <li>Comunicação assertiva</li>
                    <li>JS e CSS</li>
                    <li>Trabalho em equipe</li>
                </ul>
            </div>
        );
    }
};

export default About;