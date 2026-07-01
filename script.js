botao = document.getElementById('btn-enviar');
email = document.getElementById('ed-email');

botaoCEP = document.getElementById('btn-CEP');
inputCEP = document.getElementById('inputCEP');

botaoCNPJ = document.getElementById('btn-CNPJ');
inputCNPJ = document.getElementById('inputCNPJ');

botaoClima = document.getElementById('btn-Clime');
inputClima = document.getElementById('inputClima');

botao.addEventListener("click", 
    function (){
        alert(email.value)
    }
)

botaoCEP.addEventListener("click", 
    async function() {
        const cep = inputCEP.value;
        
        const response = await fetch(
            `https://brasilapi.com.br/api/cep/v1/${cep}`
        )

        const resposta = await response.json();

        const divResposta = document.getElementById('respostaCEP');

        divResposta.innerHTML = 
            `
                CEP: ${resposta.cep}<br>
                Rua: ${resposta.street || 'Não informada'}<br>
                Bairro: ${resposta.neighborhood || 'Não informado'}<br>
                Cidade: ${resposta.city}-${resposta.state}
            `;

    }    
)

botaoCNPJ.addEventListener("click",
    async function() {
        const cnpj = inputCNPJ.value;

        const response = await fetch(
            `https://brasilapi.com.br/api/cnpj/v1/${cnpj}`
        )

        const resposta = await response.json();

        const divResposta = document.getElementById('respostaCNPJ');

        divResposta.innerHTML = 
            `
                Razão Social: ${resposta.razao_social || 'Não encontrada'}<br>
                Nome Fantasia: ${resposta.nome_fantasia || 'Não informado'}<br>
                Situação: ${resposta.descricao_situacao_cadastral || 'N/A'}
            `;
    }
)

botaoClima.addEventListener("click",
    async function() {
        const codigoIcao = inputClima.value;

        const response = await fetch(
            `https://brasilapi.com.br/api/cptec/v1/clima/aeroporto/${codigoIcao}`
        )

        const resposta = await response.json();

        const divResposta = document.getElementById('respostaClima');

        divResposta.innerHTML = 
            `
                Aeroporto: ${resposta.codigo_aeroporto || 'N/A'}<br>
                Condição: ${resposta.condicao_desc || 'Não informada'}<br>
                Temperatura: ${resposta.temp || '0'}°C<br>
                Atualizado em: ${resposta.atualizado_em || 'N/A'}
            `;
    }
)