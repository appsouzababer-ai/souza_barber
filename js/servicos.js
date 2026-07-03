async function listarServicos(){

    const { data, error } = await supabaseClient
        .from("servicos")
        .select("*")
        .order("nome");

    if(error){
        return [];
    }

    return data;
}

async function adicionarServico(
    nome,
    valor
){

    return await supabaseClient
        .from("servicos")
        .insert([
            {
                nome,
                valor
            }
        ]);
}

async function editarServico(
    id,
    nome,
    valor
){

    return await supabaseClient
        .from("servicos")
        .update({
            nome,
            valor
        })
        .eq("id", id);
}

async function excluirServico(id){

    return await supabaseClient
        .from("servicos")
        .delete()
        .eq("id", id);
}
