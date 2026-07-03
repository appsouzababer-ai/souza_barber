let usuarioLogado = null;

async function login(instagram, senha){

    const { data, error } = await supabaseClient
        .from("usuarios")
        .select("*")
        .eq("instagram", instagram)
        .eq("senha", senha)
        .single();

    if(error || !data){
        return false;
    }

    usuarioLogado = data;

    localStorage.setItem(
        "usuarioLogado",
        JSON.stringify(data)
    );

    return true;
}

async function cadastrar(usuario){

    const { error } = await supabaseClient
        .from("usuarios")
        .insert([usuario]);

    return !error;
}

function logout(){

    usuarioLogado = null;

    localStorage.removeItem(
        "usuarioLogado"
    );
}

function recuperarSessao(){

    const usuario = localStorage.getItem(
        "usuarioLogado"
    );

    if(usuario){
        usuarioLogado = JSON.parse(usuario);
    }
}
