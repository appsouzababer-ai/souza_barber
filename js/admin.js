const ADMIN_USER = "admin";
const ADMIN_PASS = "123456";

function loginAdmin(
    usuario,
    senha
){

    return (
        usuario === ADMIN_USER &&
        senha === ADMIN_PASS
    );
}
