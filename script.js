const phone='5532998030038';
const toast=document.getElementById('toast');
function showToast(message){toast.textContent=message;toast.classList.add('show');clearTimeout(window.__toast);window.__toast=setTimeout(()=>toast.classList.remove('show'),2600)}
document.querySelectorAll('.add').forEach(button=>{button.addEventListener('click',()=>{const product=button.dataset.product;const text=`Olá, quero pedir: ${product}.`;window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`,'_blank','noopener');showToast('Abrindo seu pedido no WhatsApp…')})});
