import * as yup from "yup";

const validations = yup.object().shape({
    email: yup.string().email("geçerli bir email girin").required("zorunlu alan"),
    password: yup.string().min(5,"parolanız en az 5 karakter olmalıdır").required(),
    
})

export default validations;