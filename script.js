function consultarProducto(nombreProducto) {
    // Cambia este número por tu número de WhatsApp real (con código de país 51 para Perú)
    const telefono = "51907890725"; 
    const mensaje = encodeURIComponent(Hola, vi tu página web y me interesa el servicio/producto: ${nombreProducto});
    const url = https://wa.me/${telefono}?text=${mensaje};
    
    window.open(url, '_blank');
}
