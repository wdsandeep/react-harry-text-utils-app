function About(props) {
    // const [myStyle, setMyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // });
    let myStyle = {
        color: props.mode === 'dark' ? 'white' : '#042743',
        backgroundColor: props.mode === 'dark' ? '#042743' : 'white',
    }

    return (
    <div className='container' style={myStyle}>
        <h2 className='my-3'>About Us</h2>
        <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Analyze your text
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body"  style={myStyle}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi rerum ratione velit, quos atque aliquid possimus voluptatum deserunt corrupti pariatur obcaecati suscipit aliquam nobis architecto sit saepe earum commodi deleniti vel qui id accusantium. Adipisci in soluta dolor doloribus et omnis quisquam. Magnam, quos voluptatibus quam odio suscipit expedita aliquam.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Free to Use
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod itaque illo maiores repudiandae distinctio, perspiciatis odio delectus laborum rem culpa illum impedit quidem aspernatur? Suscipit nisi, accusamus dolor voluptate ad quidem atque voluptates earum eligendi animi! Possimus fugit corrupti ipsa exercitationem facilis, quam ad eos consectetur, blanditiis architecto reprehenderit nam eaque voluptatem nostrum aliquid et rerum? Animi id amet mollitia. Facilis ab ut sunt alias ullam eligendi dicta odit, consectetur doloribus esse minima delectus fuga quia sapiente iusto dolor sed!
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Browser Compatible
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores facere eaque vitae, voluptas magni quasi consequuntur dolores veritatis quidem animi cumque qui dolorum, nihil quo corporis in cupiditate? Soluta hic ipsa alias ea obcaecati nemo vero laudantium cum quae perspiciatis iusto error, illo assumenda neque temporibus blanditiis dolores! Voluptates?
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About