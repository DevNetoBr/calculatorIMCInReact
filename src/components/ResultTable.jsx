import { formatNumber } from "../lib/utils";

export default function ResultTable({IMCData}) {
    return (
        <table className="text-neutral-600 text-left mx-auto">
        <tbody className='[&>tr>td]:px-6 [&>tr>td]:py-1'>
            <tr className="font-bold border border-b-rose-400 border-rounded">
                <td>Peso</td>
                <td>Altura</td>
                <td>IMC</td>
                <td>Resultado</td>
            </tr>
            <tr>
                <td>{formatNumber(IMCData.weight, 1)+"kg"}</td>
                <td>{formatNumber(IMCData.height)+"m"}</td>
                <td>{formatNumber(IMCData.imc, 1)}</td>
                <td>{IMCData.result}</td>
            
            </tr>
        </tbody>
      </table>
    );
};

