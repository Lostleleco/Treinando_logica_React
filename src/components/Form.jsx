import React, { useState } from "react";

function Form() {
    const [idade, setIdade] = useState('');
    const [ano, setAno] = useState('');
    const [resultado, setResultado] = useState(null);

    const calcularIdade = (idade, ano) => {
        if (idade > 0 && ano > 0) {
            setResultado(ano - idade);
        } else {
            setResultado(0);
        }
    };

    const handleIdadeChange = (e) => {
        const value = e.target.value;
        setIdade(value);
        calcularIdade(value, ano);
    };

    const handleAnoChange = (e) => {
        const value = e.target.value;
        setAno(value);
        calcularIdade(idade, value);
    };

    return (
      <div>
        <input 
          type="number" 
          placeholder="Digite o ano que nasceu" 
          value={idade}
          onChange={handleIdadeChange}
        />
        <input 
          type="number" 
          placeholder="Digite o ano que estamos" 
          value={ano}
          onChange={handleAnoChange}
        />
        <p>A sua idade é: {resultado !== null ? resultado : ''} anos</p>
      </div>
    );
}

export default Form;
