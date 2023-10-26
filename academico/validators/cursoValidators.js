import * as Yup from 'yup';

const cursoValidators = Yup.object().shape({
    nome: Yup.string()
    .nonNullable()
    .min(2,'Valor muito pequeno')
    .required('campo obrigatorio'),
    duracao: Yup.number().min(1,'Valor muito pequeno'),
    modalidade: Yup.string()
  })

export default cursoValidators