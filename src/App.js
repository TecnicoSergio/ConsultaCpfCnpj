//import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function Consulta() {
    const [cpf, setCpf] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [resultado, setResultado] = useState(null);

    
    
    

    async function consultarCPF() {

        const validarCPF = (cpf) => {
            // Adicione a lógica de validação de CPF aqui
            return /^[0-9]{11}$/.test(cpf);
        };
        
        const consultarCPF = () => {
            if (validarCPF(cpf)) {
                const url = `https://servicos.receita.fazenda.gov.br/Servicos/CPF/ConsultaSituacao/ConsultaPublica.asp?CPF=${cpf}`;
                window.open(url, '_blank');
            } else {
                alert('CPF inválido');
            }
        };

        try {
            const response = await fetch(`https://api.example.com/cpf/${cpf}`, {
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

        const validarCNPJ = (cnpj) => {
            // Adicione a lógica de validação de CNPJ aqui
            return /^[0-9]{14}$/.test(cnpj);
        };

        const consultarCNPJ = () => {
            if (validarCNPJ(cnpj)) {
                const url = `https://www.receitaws.com.br/v1/cnpj/${cnpj}`;
                window.open(url, '_blank');
            } else {
                alert('CNPJ inválido');
            }
        };

        try {
            const response = await fetch(`https://api.example.com/cnpj/${cnpj}`, {
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
                <div class="alert alert-primary" role="alert">
                    Clique nesta TAG você será direcionado ao site da Receita Federal!!
                </div>
                
                <li class="nav-item">
                    <a class="nav-link" href="https://servicos.receita.fazenda.gov.br/Servicos/CPF/ConsultaSituacao/ConsultaPublica.asp">Consultar CPF</a>
                </li>
                <div class="alert alert-primary" role="alert">
                    ==================================
                </div>
                <div class="alert alert-primary" role="alert">
                    ==================================
                </div>
               
            </div>
            <div>
                <div class="alert alert-primary" role="alert">
                    Clique nesta TAG você será direcionado ao site da Receita Federal!!
                </div>
                
                <li class="nav-item">
                    <a class="nav-link" href="https://servicos.receitafederal.gov.br/lista-grupo?categoria=22">Consultar CNPJ</a>
                </li>
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

