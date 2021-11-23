import "../estilo/PgInicial.css"
export default function PgInicial(props) {
    return (
        <div id="pginicial">
            <section className="introduçãoDaPáginaInicial seçãoDaPgInicial">
                <h2>Subtítulo</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus magnam, dolor, minima neque corporis omnis quaerat enim, voluptas minus magni id blanditiis sequi. Totam suscipit modi dolorem saepe. Eum, autem.</p>
                <button id="botão">Acessar</button>
            </section>
            <section className="slideshow seçãoDaPgInicial">
                <input type="radio" name="slideRadioButton" id="slideRadioButton1" />
                <input type="radio" name="slideRadioButton" id="slideRadioButton2" />
                <input type="radio" name="slideRadioButton" id="slideRadioButton3" />
                <input type="radio" name="slideRadioButton" id="slideRadioButton4" />

                <div className="slider">
                    <div className="slide slide1">
                        <h3>Slide 1</h3>
                        <p>Conteúdo do slide 1</p>
                    </div>
                    <div className="slide slide2">
                        <h3>Slide 2</h3>
                        <p>Conteúdo do slide 2</p>
                    </div>
                    <div className="slide slide3">
                        <h3>Slide 3</h3>
                        <p>Conteúdo do slide 3</p>
                    </div>
                    <div className="slide slide4">
                        <h3>Slide 4</h3>
                        <p>Conteúdo do slide 4</p>
                    </div>
                </div>
                <div className="navigation">
                    <label htmlFor="slideRadioButton1" className="baraSlide"></label>
                    <label htmlFor="slideRadioButton2" className="baraSlide"></label>
                    <label htmlFor="slideRadioButton3" className="baraSlide"></label>
                    <label htmlFor="slideRadioButton4" className="baraSlide"></label>
                </div>
            </section>
        </div>
    )
}