
function compartir() {
  const url = encodeURIComponent(window.location.href);
  const mensaje = encodeURIComponent("Mira este video en Worman's");
  window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
  window.open(`https://api.whatsapp.com/send?text=${mensaje}%20${url}`, '_blank');
}
