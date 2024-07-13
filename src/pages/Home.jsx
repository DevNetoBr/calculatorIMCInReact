import React, { useState } from 'react';
import Label from '../components/Label';
import Button from '../components/Button';
import Input from '../components/Input';
import { calculationIMC, IMCResult } from "../lib/IMC";
import ResultTable from '../components/ResultTable'; 

export function Home() {
const [IMCData, setIMCData] = useState(null);

    function handleSubmit (e) {
        e.preventDefault();
        //pegar valores do formulário 
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData);
        const { weight, height } = data;
        const [weightNumber, heightNumber] =   [ parseFloat(weight.replace(",",".")),parseFloat(height.replace(",","."))/100];
        if(isNaN(heightNumber) || isNaN(weightNumber)){
            alert("Preencha todos os campos com números válidos.");
            return;
        }
        if(!weight || !height ) {
            alert("Preencha todos os campos disponíveis.");
            return;
        }
        if(weightNumber < 1 || heightNumber < 0.45 || weightNumber > 200 || heightNumber >= 3) {
            alert("Coloque valores válidos de aultura e peso!")
            return;
        }
        const imc = calculationIMC(weightNumber, heightNumber);
        const imcResultString = IMCResult(imc);

        setIMCData({
            imc: imc,
            result: imcResultString,
            weight: weightNumber,
            height: heightNumber 
        });
       
    };


    return (
        <main className='bg-white max-w-4xl mx-auto md:py-24 md:px-48 rounded px-5 py-10'>
            <section id="form">
                <form onSubmit={handleSubmit}>
                    <div>
                        <Label htmlFor="weight">Peso (kg)</Label>
                        <Input name="weight" type="text" id="weight"/>
                    </div>
                    <div className="mt-4">
                        <Label htmlFor="height">Altura (cm)</Label>
                        <Input name="height" type="text" id="weight"/>
                    </div>
                        <Button type="submit">Calcular</Button>
                </form>
            </section>
            <section id="result"  className='py-10 px-4 h-40'>
                { IMCData ? (
                    <ResultTable IMCData= {IMCData} />
                ) : (
                    <p className="text-center text-neutral-600 text-xl">Saiba agora se está no seu peso ideal!</p>

                )}
             
            </section>
            <section id="reference-table">
                <table className='mx-auto text-left text-neutral-600 md:text-base text-xs'>
                    <thead className="bg-zinc-100 text-rose-400">
                        <tr>
                            <th className="px-6 py-2">IMC</th>
                            <th className="px-6 py-2">Classificação</th>
                        </tr>
                    </thead>
                    <tbody className='[&>tr:nth-child(even)]:bg-zinc-100 [&>tr:nth-child(odd)]:bg-white [&>tr>td]:px-6 [&>tr>td]:py-1'>

                        <tr>
                            <td>Menor que 17</td>
                            <td>Muito abaixo do peso</td>
                        </tr>
                        <tr>
                            <td>Menor que 18,5</td>
                            <td>Abaixo do peso</td>
                        </tr>
                        <tr>
                            <td>Entre 18,5 e 24,9</td>
                            <td>Peso normal</td>
                        </tr>
                        <tr>
                            <td>Entre 25 e 29,9</td>
                            <td>Sobrepeso</td>
                        </tr>
                        <tr>
                            <td>Entre 30 e 34,9</td>
                            <td>Obesidade grau 1</td>
                        </tr>
                        <tr>
                            <td>Entre 35 e 39,9</td>
                            <td>Obesidade grau 2 (severa)</td>
                        </tr>
                        <tr>
                            <td>Maior que 40</td>
                            <td>Obesidade grau 3 (mórbida)</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </main>
    );
}
