import * as Yup from 'yup';

const alunoValidators = Yup.object().shape({
    nome: Yup.string()
    .nonNullable()
    .min(2,'Valor muito pequeno')
    .required('campo obrigatorio'),
    email: Yup.string().email(),
    cpf: Yup.string().max(14)
  })

export default alunoValidators