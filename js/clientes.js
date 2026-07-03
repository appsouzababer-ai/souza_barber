async function carregarClientes(){

    const { data, error } = await supabaseClient
        .from("usuarios")
        .select("*")
        .order("nome", {
            ascending: true
        });

    if(error){
        return [];
    }

    return data;
}
