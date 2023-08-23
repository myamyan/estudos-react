
import './App.scss';

import Cabecalho from '../../components/cabecalho/';
import { useState } from 'react';


function Home() {




    const [valorcarro, setValorcarro] = useState(0);
    const [nparcelas, setnparcelas] = useState(0);
    const [juros, setjuros] = useState(0);
    const [valortotal, setValortotal] = useState(0);
    const [parcelado, setparcelado] = useState(0);

    function compra() {


        let j = (valorcarro * juros) / 100;

        let jf = j * nparcelas

        let x = valorcarro + jf;

        setValortotal(x)

        let y = x / nparcelas;

        setparcelado(y)
    }



    return (
        <div className="App">

            <Cabecalho />

            <div className='container'>


                <h1> Simulador de Compras de Veículos </h1>


                <div className='menu'>



                    <div className='esquerda'>

                        <img src="/assets/images/carro.png" alt="" />

                    </div>

                    <div className='direita'>
                        <div className='inputs'>
                            <p> Valor Total </p>
                            <input type="text" value={valorcarro} onChange={e => setValorcarro(Number(e.target.value))} />

                        </div>

                        <div className='inputs2'>

                            <div>
                                <p> Parcelas </p>
                                <input type="text" value={nparcelas} onChange={e => setnparcelas(Number(e.target.value))} />
                            </div>

                            <div className="espc">
                                <p > Juros Mensal (%) </p>
                                <input type="text" value={juros} onChange={e => setjuros(Number(e.target.value))} />
                            </div>
                        </div>

                        <div className="botaum">
                            <button onClick={compra}> Calcular </button>
                        </div>

                        <div className="results">
                            <div> Parcela:  {parcelado} </div>
                            <div>Valor total: {valortotal} </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
