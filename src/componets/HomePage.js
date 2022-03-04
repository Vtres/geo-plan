import '../assets/css/HomePage.css';
import Typewriter from 'typewriter-effect';
import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';

export default function HomePage() {

  const [value, setValue] = useState('Somos o que você procura');
  const [texto, setTexto] = useState('bora la q vai dar certooooo!');

  // const [text, setText] = useState(' ')
  // const titulo = document.getElementById('text')
  function typeWriter() {
    // const textoArray = elemento.split('');
    // if (elemento == value) {
    //   const titulo = document.getElementById('text_h')
    //   titulo.innerHTML = '';
    //   textoArray.forEach((letra, i) => {
    //     setTimeout(() => titulo.innerHTML += letra, 100 * i);
    //   });
    // } else if (elemento = texto) {
    //   const titulo = document.getElementById('text_p')
    //   titulo.innerHTML = '';
    //   textoArray.forEach((letra, i) => {
    //     setTimeout(() => titulo.innerHTML += letra, 100 * i);
    //   });
    // }
    // new Typewriter('#text_h', {
    //   strings: ['Hello', 'World'],
    //   autoStart: true,
    // });
  }

  useEffect(() => {
    // typeWriter()
    // setTimeout(() => typeWriter(texto), 2400)


    // while(true){
    //   setTimeout(() => {
    //     typeWriter(value)

    //   }, 5000);
    // }


  })

  return (
    // <div class="containerr">
    //     <p>Coding is <span class="typed-text"></span><span class="cursor">&nbsp;</span></p>
    // </div>
    <div className='wrapper_services' >
      <Row>
        <Col>
          {/* <h1 id='text_h'></h1>
          <p id='text_p'></p> */}
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString('Hello World!')
                .callFunction(() => {
                  console.log('String typed out!');
                })
                .pauseFor(2500)
                .deleteAll()
                .callFunction(() => {
                  console.log('All strings were deleted');
                })
                .start();
            }}
          />
        </Col>
        <Col>
        </Col>
      </Row>

    </div>
  )
}


