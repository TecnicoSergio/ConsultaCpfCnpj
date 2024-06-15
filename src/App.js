//import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function Consulta() {
    const [cpf, setCpf] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [resultado, setResultado] = useState(null);

    async function consultarCPF() {
        try {
            const response = await fetch(`https://servicos.receita.fazenda.gov.br/Servicos/CPF/ConsultaSituacao/ConsultaPublica.asp${cpf}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer SEU_TOKEN_AQUI'
                }
            });

            if (!response.ok) {
                throw new Error('Erro ao consultar CPF');
            }

            const data = await response.json();
            setResultado(data);
        } catch (error) {
            console.error('Erro:', error);
        }
    }

    async function consultarCNPJ() {
        try {
            const response = await fetch(`https://solucoes.receita.fazenda.gov.br/Servicos/cnpjreva/cnpjreva_Solicitacao.asp${cnpj}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer SEU_TOKEN_AQUI'
                }
            });

            if (!response.ok) {
                throw new Error('Erro ao consultar CNPJ');
            }

            const data = await response.json();
            setResultado(data);
        } catch (error) {
            console.error('Erro:', error);
        }
    }

    return (
        <div>
            <h1>Consulta de CPF e CNPJ</h1>
            <div>
                <input
                    type="text"
                    value={cpf}
                    onChange={(e) => setCpf(e.target.value)}
                    placeholder="Digite o CPF"
                />
                <button onClick={consultarCPF}>Consultar CPF</button>
            </div>
            <div>
                <input
                    type="text"
                    value={cnpj}
                    onChange={(e) => setCnpj(e.target.value)}
                    placeholder="Digite o CNPJ"
                />
                <button onClick={consultarCNPJ}>Consultar CNPJ</button>
            </div>
            {resultado && (
                <div>
                    <h2>Resultado:</h2>
                    <pre>{JSON.stringify(resultado, null, 2)}</pre>
                </div>
            )}
        </div>
    );
}

export default Consulta;

