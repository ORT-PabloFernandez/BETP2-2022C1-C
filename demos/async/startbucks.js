const pedido1 = {tipo: 'Caramel', cliente: 'Juan'};
const pedido2 = {tipo: 'Te helado', cliente: 'Julia'};

function procesarPedido(pedido, callBackCLiente) {
    switch (pedido.tipo) {
        case "Caramel":
            setTimeout(() => {
                callBackCLiente(pedido.cliente);
            }, 4000);
            break;
        case "Te helado":
            setTimeout(() => {
                callBackCLiente(pedido.cliente);
            }, 2000);            
            break;
        default:
            break;
    }
}

procesarPedido(pedido1, cliente => console.log(`Llamar a: ${cliente}`));
procesarPedido(pedido2, cliente => console.log(`Llamar a: ${cliente}`));

