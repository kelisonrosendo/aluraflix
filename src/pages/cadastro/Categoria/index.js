import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';
import categoriasRepository from '../../../repositories/categorias';

function CadastroCategoria() {
  const valoresIniciais = {
    titulo: '',
    descricao: '',
    cor: '',
  };

  const { handleCategoria, values, clearForm } = useForm(valoresIniciais);

  const [categorias, setCategorias] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    setCategorias([
      ...categorias,
      values,
    ]);

    clearForm();
  }

  useEffect(() => {
    categoriasRepository.getAll()
      .then((listaCategorias) => {
        setCategorias(listaCategorias);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de categoria:
        { values.titulo}
      </h1>

      <form onSubmit={handleSubmit}>

        <FormField
          label="Título:"
          type="text"
          name="titulo"
          value={values.titulo}
          onChange={handleCategoria}
        />

        <FormField
          label="Descrição:"
          type="textarea"
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

        <Button> Cadastrar </Button>
      </form>

      {categorias.length === 0 && (
        <div>
          Carregando...
        </div>
      )}

      <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria.id}`}>
            {categoria.titulo}
          </li>
        ))}
      </ul>

      <Link to="/">
        Voltar para home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
