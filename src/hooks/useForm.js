import { useState } from 'react';

function useForm(valoresIniciais) {
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    });
  }

  function handleCategoria(e) {
    setValue(e.target.getAttribute('name'), e.target.value);
  }

  function clearForm() {
    setValue(valoresIniciais);
  }

  return {
    values,
    handleCategoria,
    clearForm,
  };
}

export default useForm;
