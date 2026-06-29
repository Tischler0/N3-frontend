// 1. Rota de CEP
async function buscarCEP() {
    const cep = document.getElementById('cepInput').value;
    const resultado = document.getElementById('resultadoCep');
    resultado.innerHTML = "Carregando...";
    try {
        const response = await fetch(`https://brasilapi.com.br/api/cep/v1/${cep}`);
        const data = await response.json();
        if (response.ok) {
            resultado.innerHTML = `<p><strong>Cidade:</strong> ${data.city} - ${data.state}<br><strong>Bairro:</strong> ${data.neighborhood}<br><strong>Rua:</strong> ${data.street || 'Não informada'}</p>`;
        } else {
            resultado.innerHTML = "<p style='color:red;'>CEP não encontrado.</p>";
        }
    } catch (error) {
        resultado.innerHTML = "<p style='color:red;'>Erro ao buscar dados.</p>";
    }
}

// 2. Rota de Bancos
async function buscarBancos() {
    const resultado = document.getElementById('resultadoBancos');
    resultado.innerHTML = "Carregando...";
    try {
        const response = await fetch('https://brasilapi.com.br/api/banks/v1');
        const data = await response.json();
        // Pega apenas os 5 primeiros para não travar a tela
        let lista = '<ul>';
        data.slice(0, 5).forEach(banco => {
            lista += `<li><strong>${banco.code || 'S/N'}:</strong> ${banco.name}</li>`;
        });
        lista += '</ul>';
        resultado.innerHTML = lista;
    } catch (error) {
        resultado.innerHTML = "<p style='color:red;'>Erro ao buscar bancos.</p>";
    }
}

// 3. Rota de Feriados (Configurado para o ano letivo do projeto: 2026)
async function buscarFeriados() {
    const resultado = document.getElementById('resultadoFeriados');
    resultado.innerHTML = "Carregando...";
    try {
        const response = await fetch('https://brasilapi.com.br/api/feriados/v1/2026');
        const data = await response.json();
        let lista = '<ul>';
        // Mostra os 5 primeiros feriados de 2026
        data.slice(0, 5).forEach(feriado => {
            lista += `<li><strong>${feriado.date}:</strong> ${feriado.name}</li>`;
        });
        lista += '</ul>';
        resultado.innerHTML = lista;
    } catch (error) {
        resultado.innerHTML = "<p style='color:red;'>Erro ao buscar feriados.</p>";
    }
}