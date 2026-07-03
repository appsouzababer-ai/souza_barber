async function buscarHorariosOcupados(data){

    const { data: horarios } =
        await supabaseClient
            .from("agendamentos")
            .select("horario")
            .eq("data", data);

    return horarios || [];
}

async function criarAgendamento(
    usuarioId,
    servicoId,
    data,
    horario,
    observacao
){

    return await supabaseClient
        .from("agendamentos")
        .insert([
            {
                usuario_id: usuarioId,
                servico_id: servicoId,
                data,
                horario,
                observacao
            }
        ]);
}

async function buscarAgendamentos(){

    const { data } =
        await supabaseClient
            .from("agendamentos")
            .select(`
                *,
                usuarios(
                    nome,
                    whats,
                    instagram
                ),
                servicos(
                    nome,
                    valor
                )
            `)
            .order("data");

    return data || [];
}

async function cancelarAgendamento(id){

    return await supabaseClient
        .from("agendamentos")
        .delete()
        .eq("id", id);
}
