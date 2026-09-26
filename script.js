const menu=document.getElementById('menu'),nav=document.getElementById('nav');
if(menu&&nav){
  menu.onclick=()=>{nav.style.display=nav.style.display==='flex'?'none':'flex'};
  nav.querySelectorAll('a').forEach(a=>a.onclick=()=>{if(innerWidth<=800)nav.style.display='none'});
}

const form=document.querySelector('.project-form');

if(form){
  form.addEventListener('submit',function(e){
    e.preventDefault();
    const data=new FormData(form);
    const message=`Hello Ahtisham Digital Services 👋

I want to start a website project.

Business Name: ${data.get('Business Name')}
Business Type: ${data.get('Business Type')}
Phone / WhatsApp: ${data.get('Phone / WhatsApp')}
Email: ${data.get('Customer Email')}
City / Address: ${data.get('City / Address')}
Package: ${data.get('Package')}

Services / Products:
${data.get('Services / Products')}

Website Style / Colors:
${data.get('Style / Colors')}

Extra Requirements:
${data.get('Extra Requirements')}`;

    const whatsappURL='https://wa.me/923185005177?text='+encodeURIComponent(message);
    window.open(whatsappURL,'_blank');
  });
}
