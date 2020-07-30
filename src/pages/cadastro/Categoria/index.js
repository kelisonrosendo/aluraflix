import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

function CadastroCategoria() {

    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: ''
    }

    const [categorias, setCategorias] = useState([]);
    const [values, setValues] = useState(valoresIniciais);

    function setValue(chave, valor) {
        setValues({
            ...values,
            [chave]: valor
        });
    }

    function handleCategoria(e) {
        setValue(e.target.getAttribute('name'), e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        setCategorias([
            ...categorias,
            values
        ]);

        setValues(valoresIniciais);
    }

    return (
        <PageDefault>
            <h1>Cadastro de categoria: {values.nome}</h1>

            <form onSubmit={handleSubmit}>

                <FormField
                    label="Nome:"
                    type="text"
                    name="nome"
                    value={values.nome}
                    onChange={handleCategoria}
                />

                <FormField
                    label="Descrição:"
                    type="text"
                    name="descricao"
                    value={values.descricao}
                    onChange={handleCategoria}
                />

                <FormField
                    label="Cor:"
                    type="color"
                    name="cor"
                    value={values.cor}
                    onChange={handleCategoria}
                />

                <button> Cadastrar </button>
            </form>

            <ul>
                {categorias.map((categoria, indice) => {
                    return (
                        <li key={`${categoria}${indice}`}>
                            {categoria.nome}
                        </li>
                    );
                })}
            </ul>

            <Link to="/">
                Voltar para home
            </Link>
        </PageDefault>
    );
}

export default CadastroCategoria;
