const phone='5532998030038';
const toast=document.getElementById('toast');
function showToast(message){if(!toast)return;toast.textContent=message;toast.classList.add('show');clearTimeout(window.__toast);window.__toast=setTimeout(()=>toast.classList.remove('show'),2600)}
function openWhatsApp(product){const text=`Olá, quero pedir: ${product}.`;window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`,'_blank','noopener');showToast('Abrindo seu pedido no WhatsApp…')}
document.querySelectorAll('[data-order]').forEach(button=>{button.addEventListener('click',()=>openWhatsApp(button.dataset.order))});
document.querySelectorAll('.add').forEach(button=>{button.addEventListener('click',()=>openWhatsApp(button.dataset.product))});
