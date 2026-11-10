const API={python:'/api'};
const CONFIG={
  brand:'SR BRAND',
  topbar:'✨ Livraison gratuite partout au Maroc · Commandez maintenant',
  email:'srbrand768@gmail.com',
  whatsapp:'212727951624',
  whatsappDisplay:'+212 727-951624',
  address:'Maroc',
  instagram:'@srbrand.ma',
  instagramUrl:'https://www.instagram.com/srbrand.ma/'
};

const COLORS=['red','blue','green','white','black'];
const COLOR_LABELS={red:'Rouge',blue:'Bleu',green:'Vert Émeraude',pink:'Magenta',blush:'Rose poudré',rose:'Rose',purple:'Mauve',mauve:'Mauve grisé',violet:'Violet',bordo:'Bordo',white:'Blanc',black:'Noir',beige:'Beige',sky:'Blanc',assorted:'Couleurs assorties',redwhite:'Rouge & Blanc'};
const COLOR_HEX={red:'#b41022',blue:'#173a76',green:'#08765d',pink:'#d62972',blush:'#d8a6ad',rose:'#efa5b2',purple:'#b69ac3',mauve:'#9f929d',violet:'#963d79',bordo:'#650018',white:'#f7f7f4',black:'#171717',beige:'#e8d2bc',sky:'#c9dcf8',assorted:'linear-gradient(135deg,#171717 0 25%,#a7192e 25% 50%,#f2d6d8 50% 75%,#f7f1e8 75%)',redwhite:'linear-gradient(135deg,#ffffff 0 48%,#c81f2c 48% 100%)'};

// ===== IMAGES : un seul endroit pour changer le dossier des photos =====
// Mets ici le dossier qui contient tes .webp (ex: 'static/images/' ou 'images/' ou '' si à côté de index.html)
const IMG_BASE='static/images/';
const imgUrl=f=>(!f||/^(https?:|data:|blob:|\/|static\/|images\/)/.test(f))?f:IMG_BASE+f;
const mapObj=(o,fn)=>Object.fromEntries(Object.entries(o||{}).map(([k,v])=>[k,fn(v)]));
const withImages=p=>({...p,image:imgUrl(p.image),colorImages:mapObj(p.colorImages,imgUrl),galleries:mapObj(p.galleries,a=>a.map(imgUrl))});

const LOCAL_PRODUCTS=[
  {
    id:4,name:'Ensemble Danse Orientale Prestige',category:'ensemble',categoryLabel:'ENSEMBLE DANSE ORIENTALE',price:279,badge:'NOUVEAUTÉ',rating:4.9,reviews:18,
    image:'green-1.webp',
    description:'Ensemble 3 pièces avec haut orné de franges dorées, jupe longue fendue et manches fluides. Une silhouette glamour pensée pour les spectacles, soirées et événements.',
    details:['Ensemble 3 pièces','Finitions dorées à franges','Jupe longue avec fentes hautes','Manches longues fluides en voile','Disponible en deux couleurs : Vert Émeraude et Rose'],
    sizes:['S','M','L','XL'],color:['green','rose'],
    colorImages:{green:'danse-green-1.webp',rose:'danse-pink-1.webp'},
    galleries:{
      green:['danse-green-1.webp','danse-green-2.webp','danse-green-3.webp','danse-green-4.webp','danse-green-5.webp'],
      rose:['danse-pink-1.webp','danse-pink-2.webp','danse-pink-3.webp','danse-pink-4.webp','danse-pink-5.webp']
    }
  },
  {
    id:5,name:'Shorts de compression femme',category:'compression',categoryLabel:'SHORTS DE COMPRESSION',price:199,badge:'NOUVEAU',rating:0,reviews:0,
    image:'shorts-compression-beige-pro-1.webp',
    description:'Short de compression femme taille haute, à la coupe près du corps, proposé en beige et en noir avec une finition lisse et invisible sous les vêtements.',
    details:['Taille haute gainante','Coupe près du corps','Design ouvert à l’arrière','Disponible en Beige et Noir','Taille standard'],
    sizes:['M/L','XL','XXL'],color:['beige','black'],
    colorImages:{beige:'shorts-compression-beige-pro-1.webp',black:'shorts-compression-black-pro-1.webp'},
    galleries:{
      beige:['shorts-compression-beige-pro-1.webp','shorts-compression-beige-pro-2.webp','shorts-compression-beige-pro-3.webp','shorts-compression-beige-pro-4.webp','shorts-compression-beige-pro-5.webp'],
      black:['shorts-compression-black-pro-1.webp','shorts-compression-black-pro-2.webp','shorts-compression-black-pro-3.webp','shorts-compression-black-pro-4.webp','shorts-compression-black-pro-5.webp']
    }
  },
  {
    id:6,name:'Ensemble Maid Satin Prestige',category:'ensemble',categoryLabel:'ENSEMBLE MAID SATIN',price:229,badge:'NOUVEAUTÉ',rating:0,reviews:0,
    image:'maid-black-1.webp',
    description:'Un ensemble coordonné au style maid raffiné, mêlant satin lumineux, dentelle ivoire et détails délicats. Une création complète pensée pour une présentation élégante et premium.',
    details:['Corset satiné structuré avec laçage ivoire','Jupe évasée avec tablier bordé de dentelle','Ras-de-cou et deux bandes à nœuds assorties','Bretelles réglables et finitions soignées','Disponible en Noir et Rouge'],
    sizes:['Standard'],color:['black','red'],
    colorImages:{black:'maid-black-1.webp',red:'maid-red-1.webp'},
    galleries:{
      black:['maid-black-1.webp','maid-black-2.webp','maid-black-3.webp','maid-black-4.webp','maid-black-5.webp'],
      red:['maid-red-1.webp','maid-red-2.webp','maid-red-3.webp','maid-red-4.webp','maid-red-5.webp']
    }
  },
  {
    id:7,name:'Robe de Nuit Satin & Dentelle',category:'chemise',categoryLabel:'ROBE DE NUIT',price:200,badge:'NOUVEAUTÉ',rating:0,reviews:0,
    image:'robe-dentelle-purple-1.webp',
    description:'Une robe de nuit fluide en satin lumineux, sublimée par un haut et une finition de bas en dentelle florale. Sa coupe élégante et confortable accompagne les soirées avec douceur.',
    details:['Satin doux et fluide','Haut en dentelle florale','Bretelles fines réglables','Large finition en dentelle au bas','Disponible en Mauve, Bordo, Rouge, Blanc et Noir'],
    sizes:['S','M','L','XL','XXL'],color:['purple','bordo','red','white','black'],
    colorImages:{purple:'robe-dentelle-purple-1.webp',bordo:'robe-dentelle-bordo-1.webp',red:'robe-dentelle-red-1.webp',white:'robe-dentelle-white-1.webp',black:'robe-dentelle-black-1.webp'},
    galleries:{
      purple:['robe-dentelle-purple-1.webp','robe-dentelle-purple-2.webp','robe-dentelle-purple-3.webp','robe-dentelle-purple-4.webp','robe-dentelle-purple-5.webp'],
      bordo:['robe-dentelle-bordo-1.webp','robe-dentelle-bordo-2.webp','robe-dentelle-bordo-3.webp','robe-dentelle-bordo-4.webp','robe-dentelle-bordo-5.webp'],
      red:['robe-dentelle-red-1.webp','robe-dentelle-red-2.webp','robe-dentelle-red-3.webp','robe-dentelle-red-4.webp','robe-dentelle-red-5.webp'],
      white:['robe-dentelle-white-1.webp','robe-dentelle-white-2.webp','robe-dentelle-white-3.webp','robe-dentelle-white-4.webp','robe-dentelle-white-5.webp'],
      black:['robe-dentelle-black-1.webp','robe-dentelle-black-2.webp','robe-dentelle-black-3.webp','robe-dentelle-black-4.webp','robe-dentelle-black-5.webp']
    }
  },
  {
    id:8,name:'Pack de 7 Culottes Coton Femme',category:'culotte',categoryLabel:'PACK DE CULOTTES',price:180,badge:'NOUVEAU',rating:0,reviews:0,
    image:'pack-7-culottes-1.webp',
    description:'Un pack pratique de 7 culottes femme en coton doux, proposé dans un assortiment élégant de couleurs unies et de motifs délicats pour toute la semaine.',
    details:['Pack complet de 7 pièces','Coton doux et respirant','Coupe confortable avec bonne couvrance','Couleurs et motifs assortis','Disponible du S au XXL'],
    sizes:['S','M','L','XL','XXL'],color:['assorted'],
    kicker:'SR BRAND · PACK DE 7',
    colorImages:{assorted:'pack-7-culottes-1.webp'},
    galleries:{
      assorted:['pack-7-culottes-1.webp','pack-7-culottes-2.webp','pack-7-culottes-3.webp','pack-7-culottes-4.webp']
    }
  }
  ,{
    id:9,name:'Ensemble Infirmière Rouge & Blanc',category:'ensemble',categoryLabel:'ENSEMBLE INFIRMIÈRE',price:229,badge:'NOUVEAU',rating:0,reviews:0,
    image:'infirmiere-flatlay-1.webp',
    description:'Ensemble infirmière rouge et blanc avec bonnet assorti, haut noué et jupe courte bordée de dentelle rouge. Présenté avec plusieurs vues pour mieux voir les détails du modèle.',
    details:['Ensemble rouge et blanc','Bonnet assorti inclus','Haut avec liens à nouer','Jupe courte avec finition en dentelle rouge','Disponible en tailles S/M et L/XL'],
    sizes:['S/M','L/XL'],color:['redwhite'],
    colorImages:{redwhite:'infirmiere-flatlay-1.webp'},
    galleries:{
      redwhite:['infirmiere-flatlay-1.webp','infirmiere-flatlay-2.webp','infirmiere-flatlay-3.webp','infirmiere-flatlay-4.webp','infirmiere-flatlay-5.webp']
    }
  },
  {
    id:10,name:'Ensemble Nuit Dentelle & Kimono',category:'ensemble',categoryLabel:'ENSEMBLE DE NUIT',price:229,badge:'NOUVEAU',rating:0,reviews:0,
    image:'ensemble-nuit-blush-1.webp',
    description:'Un ensemble de nuit deux pièces composé d’une nuisette fluide à bretelles fines et d’un kimono long assorti. La dentelle florale, les manches évasées et les finitions délicates créent une silhouette douce et élégante.',
    details:['Ensemble deux pièces : nuisette et kimono long','Dentelle florale sur le décolleté, la taille et les poignets','Voile fluide avec manches larges évasées','Disponible en Rose poudré, Mauve grisé, Rouge, Noir et Blanc','Taille Standard'],
    sizes:['Standard'],color:['blush','mauve','red','black','white'],
    colorImages:{
      blush:'ensemble-nuit-blush-1.webp',
      mauve:'ensemble-nuit-mauve-1.webp',
      red:'ensemble-nuit-red-1.webp',
      black:'ensemble-nuit-black-1.webp',
      white:'ensemble-nuit-white-1.webp'
    },
    galleries:{
      blush:['ensemble-nuit-blush-1.webp','ensemble-nuit-blush-2.webp','ensemble-nuit-blush-3.webp','ensemble-nuit-blush-4.webp','ensemble-nuit-blush-5.webp'],
      mauve:['ensemble-nuit-mauve-1.webp','ensemble-nuit-mauve-2.webp','ensemble-nuit-mauve-3.webp','ensemble-nuit-mauve-4.webp','ensemble-nuit-mauve-5.webp'],
      red:['ensemble-nuit-red-1.webp','ensemble-nuit-red-2.webp','ensemble-nuit-red-3.webp','ensemble-nuit-red-4.webp','ensemble-nuit-red-5.webp'],
      black:['ensemble-nuit-black-1.webp','ensemble-nuit-black-2.webp','ensemble-nuit-black-3.webp','ensemble-nuit-black-4.webp','ensemble-nuit-black-5.webp'],
      white:['ensemble-nuit-white-1.webp','ensemble-nuit-white-2.webp','ensemble-nuit-white-3.webp','ensemble-nuit-white-4.webp','ensemble-nuit-white-5.webp']
    }
  },
  {
    id:11,name:'Ensemble Lingerie Satin V',category:'ensemble',categoryLabel:'ENSEMBLE LINGERIE',price:150,bundleQty:3,bundlePrice:380,badge:'NOUVEAU',rating:0,reviews:0,
    image:'lingerie-rose-1.webp',
    description:'Un ensemble lingerie raffiné avec soutien-gorge rembourré, culotte assortie et harnais décoratif. Les détails métalliques en V apportent une finition élégante. Une pièce coûte 150 DH, avec une offre de trois pièces à 380 DH.',
    details:['Ensemble lingerie satiné avec détails métalliques en V','Soutien-gorge rembourré à bretelles réglables','Culotte assortie et harnais décoratif inclus','1 pièce : 150 DH · Offre 3 pièces : 380 DH','Disponible en Rose, Beige, Blanc, Violet, Rouge et Noir','Tailles S, M, L et XL'],
    sizes:['S','M','L','XL'],color:['rose','beige','sky','violet','red','black'],
    kicker:'SR BRAND · 6 COULEURS',
    colorImages:{
      rose:'lingerie-rose-1.webp',
      beige:'lingerie-beige-1.webp',
      sky:'lingerie-sky-1.webp',
      violet:'lingerie-violet-1.webp',
      red:'lingerie-red-1.webp',
      black:'lingerie-black-1.webp'
    },
    galleries:{
      rose:['lingerie-rose-1.webp','lingerie-rose-2.webp','lingerie-rose-3.webp','lingerie-rose-4.webp','lingerie-rose-5.webp'],
      beige:['lingerie-beige-1.webp','lingerie-beige-2.webp','lingerie-beige-3.webp','lingerie-beige-4.webp','lingerie-beige-5.webp'],
      sky:['lingerie-sky-1.webp','lingerie-sky-2.webp','lingerie-sky-3.webp','lingerie-sky-4.webp','lingerie-sky-5.webp'],
      violet:['lingerie-violet-1.webp','lingerie-violet-2.webp','lingerie-violet-3.webp','lingerie-violet-4.webp','lingerie-violet-5.webp'],
      red:['lingerie-red-1.webp','lingerie-red-2.webp','lingerie-red-3.webp','lingerie-red-4.webp','lingerie-red-5.webp'],
      black:['lingerie-black-1.webp','lingerie-black-2.webp','lingerie-black-3.webp','lingerie-black-4.webp','lingerie-black-5.webp']
    }
  }
  ,
  {
    id:12,name:'Short Gainant Taille Haute Sculptant',category:'compression',categoryLabel:'SHORT GAINANT SCULPTANT',price:180,badge:'NOUVEAU',rating:0,reviews:0,
    image:'short-gainant-beige-2.webp',
    description:'Short gainant femme taille haute avec maintien du ventre, matière extensible et zones texturées pensées pour lisser la silhouette tout en restant confortable au quotidien.',
    details:['Taille haute gainante et maintien abdominal','Matière extensible et douce','Zones texturées sculptantes','Coupe mi-cuisse confortable','Disponible en Beige et Noir','Tailles M/L, XL/XXL et 3XL/4XL'],
    sizes:['M/L','XL/XXL','3XL/4XL'],color:['beige','black'],
    kicker:'SR BRAND · 2 COULEURS',
    colorImages:{
      beige:'short-gainant-beige-2.webp',
      black:'short-gainant-black-2.webp'
    },
    galleries:{
      beige:[
        'short-gainant-beige-1.webp',
        'short-gainant-beige-2.webp',
        'short-gainant-beige-3.webp',
        'short-gainant-beige-4.webp',
        'short-gainant-beige-5.webp',
        'short-gainant-beige-6.webp'
      ],
      black:[
        'short-gainant-black-1.webp',
        'short-gainant-black-2.webp',
        'short-gainant-black-3.webp',
        'short-gainant-black-4.webp',
        'short-gainant-black-5.webp',
        'short-gainant-black-6.webp'
      ]
    }
  }


];

let PRODUCTS=LOCAL_PRODUCTS.map(withImages);
let cart=JSON.parse(localStorage.getItem('srbrand_cart')||'[]');
let activeCategory='all',searchTerm='';
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];

function applyConfig(){
  document.title=document.title.replace('YOUR BRAND',CONFIG.brand);
  $$('#brandLogo,.footer-logo,#footerBrand').forEach(e=>e.textContent=CONFIG.brand);
  const t=$('#topbarText');if(t)t.textContent=CONFIG.topbar;
  $$('#contactEmail,#footerEmail').forEach(e=>{e.textContent=CONFIG.email;if(e.tagName==='A')e.href=`mailto:${CONFIG.email}`});
  $$('#contactWhatsapp').forEach(e=>{e.textContent=CONFIG.whatsappDisplay;e.href=`https://wa.me/${CONFIG.whatsapp}`});
  const fw=$('#footerWhatsapp');if(fw)fw.textContent=CONFIG.whatsappDisplay;
  $$('#contactAddress,#footerAddress').forEach(e=>e.textContent=CONFIG.address);
  const ig=$('#instagramLink');if(ig){ig.textContent=CONFIG.instagram;ig.href=CONFIG.instagramUrl}
  const y=$('#year');if(y)y.textContent=new Date().getFullYear();
}
function setActiveNav(){
  const p=location.pathname.split('/').pop()||'index.html';
  const key=(p==='index.html')?'accueil':(p==='produit.html'?'boutique':p.replace('.html',''));
  const a=document.querySelector(`[data-nav="${key}"]`);if(a)a.classList.add('active');
}
function initMobile(){const b=$('#mobileMenuBtn'),n=$('#mainNav');if(b&&n)b.addEventListener('click',()=>n.classList.toggle('open'))}
function renderHomeStory(){
  const m=$('#homeStoryMedia');if(!m||m.querySelector('img'))return;
  const img=document.createElement('img');
  img.src=imgUrl('static/images/home-histoire-kimono-photo.png');
  img.alt='Modèle portant un ensemble nuit dentelle et kimono rose';
  img.loading='lazy';
  m.appendChild(img);
}
async function loadProducts(){PRODUCTS=LOCAL_PRODUCTS.map(withImages)}

function colorDots(p){
  return `<div class="card-colors" aria-label="Couleurs disponibles">${p.color.map((c,i)=>`<button class="card-color-btn ${i===0?'active':''}" data-card-color="${c}" data-product-id="${p.id}" style="--swatch:${COLOR_HEX[c]}" title="${COLOR_LABELS[c]}" aria-label="${COLOR_LABELS[c]}"></button>`).join('')}</div>`
}
function productCard(p){
  const firstColor=p.color[0];
  const productHref=`produit.html?id=${p.id}`;
  const viewAttr='';
  return `<article class="product-card mockup-card" data-product-card="${p.id}">
    <div class="product-media">
      <span class="label">${p.badge||p.categoryLabel}</span>
      <a class="product-photo-link swipe-product-link" href="${productHref}" ${viewAttr} aria-label="Voir ${p.name}"><img class="product-photo" data-card-image="${p.id}" src="${p.colorImages[firstColor]||p.image}" alt="${p.name}" loading="lazy" draggable="false"></a>
      <div class="product-actions"><button class="quick-btn" data-add="${p.id}" aria-label="Ajouter ${p.name}">＋</button></div>
    </div>
    <div class="product-info"><div class="product-kicker">${p.kicker||`SR BRAND · ${p.color.length} COULEURS`}</div><h3><a href="${productHref}" ${viewAttr}>${p.name}</a></h3>${colorDots(p)}<div class="product-price-line"><span class="price">${p.price} DH</span>${p.oldPrice?`<span class="old-price">${p.oldPrice} DH</span>`:''}</div>${p.bundlePrice?`<div class="bundle-offer">OFFRE ${p.bundleQty} PIÈCES : <strong>${p.bundlePrice} DH</strong></div>`:''}</div>
  </article>`;
}
function cardGalleryForColor(p,color){
  if(!p)return [];
  const colors=Array.isArray(p.color)?p.color:[];
  const start=Math.max(0,colors.indexOf(color));
  const orderedColors=[...colors.slice(start),...colors.slice(0,start)];

  // Pour plusieurs couleurs:
  // vue 1 couleur A -> vue 1 couleur B -> vue 1 couleur C...
  // puis vue 2 couleur A -> vue 2 couleur B -> ...
  if(orderedColors.length>1){
    const galleries=orderedColors.map(c=>{
      const g=p?.galleries?.[c];
      if(Array.isArray(g)&&g.length)return g;
      const single=p?.colorImages?.[c]||p?.image;
      return single?[single]:[];
    });
    const maxViews=Math.max(0,...galleries.map(g=>g.length));
    const result=[];
    for(let viewIndex=0;viewIndex<maxViews;viewIndex++){
      galleries.forEach(g=>{
        if(g[viewIndex])result.push(g[viewIndex]);
      });
    }
    return result;
  }

  const g=p?.galleries?.[color];
  if(Array.isArray(g)&&g.length)return g;
  const single=p?.colorImages?.[color]||p?.image;
  return single?[single]:[];
}
function showCardGalleryImage(card,p,direction){
  if(!card||!p)return false;
  const selected=card.querySelector('.card-color-btn.active')?.dataset.cardColor||p.color[0];
  const gallery=cardGalleryForColor(p,selected);
  if(gallery.length<2)return false;
  let index=Number(card.dataset.cardImageIndex||0);
  index=(index+direction+gallery.length)%gallery.length;
  card.dataset.cardImageIndex=String(index);
  const img=card.querySelector(`[data-card-image="${p.id}"]`);
  if(!img)return false;
  img.classList.add('swipe-changing');
  const nextSrc=gallery[index];
  const matchedColor=(p.color||[]).find(c=>{
    if(p.colorImages?.[c]===nextSrc)return true;
    const g=p.galleries?.[c];
    return Array.isArray(g)&&g.includes(nextSrc);
  });
  const finish=()=>{
    img.src=nextSrc;
    if(matchedColor){
      $$('.card-color-btn',card).forEach(btn=>btn.classList.toggle('active',btn.dataset.cardColor===matchedColor));
      img.alt=`${p.name} — ${COLOR_LABELS[matchedColor]||matchedColor}`;
    }else{
      img.alt=`${p.name} — ${COLOR_LABELS[selected]||selected} — vue ${index+1}`;
    }
    requestAnimationFrame(()=>img.classList.remove('swipe-changing'));
  };
  const pre=new Image();
  pre.onload=finish;pre.onerror=finish;pre.src=nextSrc;
  return true;
}
function bindCardSwipe(scope=document){
  $$('.swipe-product-link',scope).forEach(link=>{
    if(link.dataset.swipeBound==='1')return;
    link.dataset.swipeBound='1';
    const card=link.closest('[data-product-card]');
    const p=PRODUCTS.find(x=>x.id===Number(card?.dataset.productCard));
    if(!card||!p)return;
    let startX=0,startY=0,pointerId=null;
    link.addEventListener('pointerdown',e=>{
      if(e.pointerType==='mouse'&&e.button!==0)return;
      pointerId=e.pointerId;startX=e.clientX;startY=e.clientY;
      link.classList.add('is-swiping');
    });
    link.addEventListener('pointerup',e=>{
      if(pointerId!==e.pointerId)return;
      const dx=e.clientX-startX,dy=e.clientY-startY;
      pointerId=null;link.classList.remove('is-swiping');
      if(Math.abs(dx)>=42&&Math.abs(dx)>Math.abs(dy)*1.15){
        const changed=showCardGalleryImage(card,p,dx<0?1:-1);
        if(changed){
          link.dataset.blockClickUntil=String(Date.now()+650);
          e.preventDefault();e.stopPropagation();
        }
      }
    });
    link.addEventListener('pointercancel',()=>{pointerId=null;link.classList.remove('is-swiping')});
    link.addEventListener('click',e=>{
      if(Number(link.dataset.blockClickUntil||0)>Date.now()){
        e.preventDefault();e.stopPropagation();
      }
    },true);
  });
}

let QUICK_ORDER_STATE=null;

function ensureQuickOrderModal(){
  let modal=$('#quickOrderModal');
  if(modal)return modal;
  modal=document.createElement('div');
  modal.id='quickOrderModal';
  modal.className='quick-order-modal';
  modal.hidden=true;
  modal.innerHTML=`
    <div class="quick-order-backdrop" data-quick-close></div>
    <section class="quick-order-card" role="dialog" aria-modal="true" aria-labelledby="quickOrderTitle">
      <button class="quick-order-close" type="button" data-quick-close aria-label="Fermer">×</button>
      <div class="quick-order-media">
        <img id="quickOrderImage" src="" alt="">
        <div class="quick-order-thumbs" id="quickOrderThumbs"></div>
      </div>
      <div class="quick-order-copy">
        <p class="quick-order-kicker">COMMANDE RAPIDE</p>
        <h2 id="quickOrderTitle"></h2>
        <div class="quick-order-price" id="quickOrderPrice"></div>

        <div class="quick-order-group">
          <div class="quick-order-label">Couleur: <strong id="quickOrderColorLabel"></strong></div>
          <div class="quick-order-colors" id="quickOrderColors"></div>
        </div>

        <div class="quick-order-group">
          <div class="quick-order-label">Taille:</div>
          <div class="quick-order-sizes" id="quickOrderSizes"></div>
        </div>

        <div class="quick-order-group">
          <div class="quick-order-label">Quantité:</div>
          <div class="quick-order-qty">
            <button type="button" id="quickOrderMinus" aria-label="Diminuer">−</button>
            <span id="quickOrderQty">1</span>
            <button type="button" id="quickOrderPlus" aria-label="Augmenter">+</button>
          </div>
        </div>

        <button type="button" class="quick-order-confirm" id="quickOrderConfirm">
          Continuer vers la validation
        </button>
        <p class="quick-order-note">Vous pourrez vérifier votre commande avant de confirmer.</p>
      </div>
    </section>`;
  document.body.appendChild(modal);

  $$('[data-quick-close]',modal).forEach(el=>el.onclick=closeQuickOrder);
  modal.addEventListener('click',e=>e.stopPropagation());
  document.addEventListener('keydown',e=>{
    if(e.key==='Escape'&&!modal.hidden)closeQuickOrder();
  });
  return modal;
}

function closeQuickOrder(){
  const modal=$('#quickOrderModal');
  if(modal)modal.hidden=true;
  document.body.classList.remove('quick-order-open');
  QUICK_ORDER_STATE=null;
}


function renderQuickOrderGallery(product,color,activeSrc=null){
  const modal=$('#quickOrderModal');
  const image=$('#quickOrderImage',modal);
  const thumbs=$('#quickOrderThumbs',modal);
  if(!modal||!image||!thumbs)return;
  const gallery=galleryForColor(product,color);
  const fallback=(product.colorImages&&product.colorImages[color])||product.image;
  const mainSrc=activeSrc&&gallery.includes(activeSrc)?activeSrc:(gallery[0]||fallback);
  image.src=mainSrc;
  image.alt=`${product.name} — ${COLOR_LABELS[color]||color}`;
  QUICK_ORDER_STATE.view=mainSrc;
  thumbs.innerHTML=gallery.map((src,i)=>`
    <button type="button" class="quick-order-thumb ${src===mainSrc?'active':''}" data-quick-image="${src}" aria-label="Vue ${i+1}">
      <img src="${src}" alt="${product.name} vue ${i+1}">
    </button>`).join('');
  $$('[data-quick-image]',thumbs).forEach(btn=>btn.onclick=()=>{
    const src=btn.dataset.quickImage;
    QUICK_ORDER_STATE.view=src;
    image.src=src;
    $$('[data-quick-image]',thumbs).forEach(x=>x.classList.toggle('active',x===btn));
  });
}

function openQuickOrder(product,initialColor=null){
  if(!product)return;
  const modal=ensureQuickOrderModal();
  const selectedColor=product.color.includes(initialColor)?initialColor:product.color[0];
  QUICK_ORDER_STATE={
    product,
    color:selectedColor,
    size:product.sizes[0],
    qty:1,
    view:(galleryForColor(product,selectedColor)[0]||((product.colorImages&&product.colorImages[selectedColor])||product.image))
  };

  const title=$('#quickOrderTitle',modal);
  const price=$('#quickOrderPrice',modal);
  const image=$('#quickOrderImage',modal);
  const colorLabel=$('#quickOrderColorLabel',modal);
  const colors=$('#quickOrderColors',modal);
  const sizes=$('#quickOrderSizes',modal);
  const qty=$('#quickOrderQty',modal);
  const confirm=$('#quickOrderConfirm',modal);

  title.textContent=product.name;
  price.innerHTML=`<strong>${product.price} DH</strong>${product.bundlePrice?`<span>${product.bundleQty} pièces: ${product.bundlePrice} DH</span>`:''}`;
  colorLabel.textContent=COLOR_LABELS[selectedColor]||selectedColor;
  qty.textContent='1';
  confirm.disabled=false;
  confirm.textContent='Continuer vers la validation';
  renderQuickOrderGallery(product,selectedColor,QUICK_ORDER_STATE.view);

  colors.innerHTML=product.color.map((c,i)=>`
    <button type="button" class="quick-order-color ${c===selectedColor?'active':''}" data-quick-color="${c}" title="${COLOR_LABELS[c]||c}" aria-label="${COLOR_LABELS[c]||c}">
      <img src="${product.colorImages[c]||product.image}" alt="${COLOR_LABELS[c]||c}">
    </button>`).join('');

  sizes.innerHTML=product.sizes.map((s,i)=>`
    <button type="button" class="${i===0?'active':''}" data-quick-size="${s}">${s}</button>`).join('');

  $$('[data-quick-color]',modal).forEach(btn=>btn.onclick=()=>{
    const c=btn.dataset.quickColor;
    QUICK_ORDER_STATE.color=c;
    QUICK_ORDER_STATE.view=(galleryForColor(product,c)[0]||((product.colorImages&&product.colorImages[c])||product.image));
    colorLabel.textContent=COLOR_LABELS[c]||c;
    renderQuickOrderGallery(product,c,QUICK_ORDER_STATE.view);
    $$('[data-quick-color]',modal).forEach(x=>x.classList.toggle('active',x===btn));
  });

  $$('[data-quick-size]',modal).forEach(btn=>btn.onclick=()=>{
    QUICK_ORDER_STATE.size=btn.dataset.quickSize;
    $$('[data-quick-size]',modal).forEach(x=>x.classList.toggle('active',x===btn));
  });

  $('#quickOrderMinus',modal).onclick=()=>{
    QUICK_ORDER_STATE.qty=Math.max(1,QUICK_ORDER_STATE.qty-1);
    qty.textContent=QUICK_ORDER_STATE.qty;
  };
  $('#quickOrderPlus',modal).onclick=()=>{
    QUICK_ORDER_STATE.qty=Math.min(99,QUICK_ORDER_STATE.qty+1);
    qty.textContent=QUICK_ORDER_STATE.qty;
  };
  $('#quickOrderConfirm',modal).onclick=()=>{
    const state=QUICK_ORDER_STATE;
    if(!state)return;
    confirm.disabled=true;
    confirm.textContent='Ouverture de la validation...';
    addToCart(state.product.id,state.color,state.size,state.qty);
  };

  modal.hidden=false;
  document.body.classList.add('quick-order-open');
  requestAnimationFrame(()=>$('#quickOrderConfirm',modal)?.focus());
}

function bindProductActions(scope=document){
  $$('[data-add]',scope).forEach(b=>b.onclick=e=>{e.preventDefault();e.stopPropagation();const p=PRODUCTS.find(x=>x.id===+b.dataset.add);if(!p)return;const card=b.closest('[data-product-card]');const selected=card?.querySelector('.card-color-btn.active')?.dataset.cardColor||p.color[0];openQuickOrder(p,selected)});
  $$('.card-color-btn',scope).forEach(btn=>btn.onclick=e=>{e.preventDefault();e.stopPropagation();const id=+btn.dataset.productId,c=btn.dataset.cardColor,p=PRODUCTS.find(x=>x.id===id);if(!p)return;const card=btn.closest('[data-product-card]');$$('.card-color-btn',card).forEach(x=>x.classList.toggle('active',x===btn));if(card)card.dataset.cardImageIndex='0';const img=$(`[data-card-image="${id}"]`,card);if(img){img.src=p.colorImages[c]||p.image;img.alt=`${p.name} — ${COLOR_LABELS[c]}`}});
  $$('[data-view-product]',scope).forEach(link=>link.onclick=e=>{
    if(!document.querySelector('.boutique-split-page'))return;
    e.preventDefault();
    const id=+link.dataset.viewProduct;
    const url=new URL(location.href);url.searchParams.set('id',id);history.replaceState({},'',url);
    renderProductDetail(id);
    $$('[data-product-card]',scope).forEach(card=>card.classList.toggle('selected-card',+card.dataset.productCard===id));
    if(innerWidth<1180)document.querySelector('#splitProductPanel')?.scrollIntoView({behavior:'smooth',block:'start'});
  });
  bindCardSwipe(scope);
}
function renderProducts(target='#productGrid',featured=false){
  const grid=$(target);if(!grid)return;
  let arr=PRODUCTS.filter(p=>(activeCategory==='all'||p.category===activeCategory)&&(`${p.name} ${p.description}`).toLowerCase().includes(searchTerm.toLowerCase()));
  if(featured){const newest=PRODUCTS.find(p=>p.id===12);arr=[newest,...PRODUCTS.filter(p=>p.id!==12).slice(0,2)].filter(Boolean)}
  grid.innerHTML=arr.length?arr.map(productCard).join(''):'<div class="empty-state">Aucun produit trouvé.</div>';
  bindProductActions(grid);
  if(document.querySelector('.boutique-split-page')){const current=getProductFromQuery();$$('[data-product-card]',grid).forEach(card=>card.classList.toggle('selected-card',+card.dataset.productCard===current.id));}
}

function getProductFromQuery(idOverride=null){const id=Number(idOverride||new URLSearchParams(location.search).get('id')||1);return PRODUCTS.find(p=>p.id===id)||PRODUCTS[0]}
function discountPercent(p){return p.oldPrice?Math.round((1-p.price/p.oldPrice)*100):0}
function productLineTotal(p,qty){
  const quantity=Math.max(0,Number(qty)||0);
  if(!p.bundleQty||!p.bundlePrice)return p.price*quantity;
  return Math.floor(quantity/p.bundleQty)*p.bundlePrice+(quantity%p.bundleQty)*p.price;
}
function categoryBreadcrumbLabel(p){return p.category==='soutien'?'Soutiens-gorge':p.category==='chemise'?'Chemises de nuit':p.category==='pyjama'?'Pyjamas':p.category==='ensemble'?'Ensembles':p.category==='compression'?'Shorts de compression':p.category==='culotte'?'Culottes':'Collection'}
function galleryForColor(p,color){
  if(p.galleries&&Array.isArray(p.galleries[color])&&p.galleries[color].length)return p.galleries[color];
  return p.color.map(c=>p.colorImages[c]).filter(Boolean);
}
function detailThumbsHtml(p,color){
  if(p.galleries&&p.galleries[color]){
    return galleryForColor(p,color).map((src,i)=>`<button class="thumb-btn ${i===0?'active':''}" data-detail-image="${src}" aria-label="Vue ${i+1}"><img src="${src}" alt="${p.name} — vue ${i+1}"></button>`).join('');
  }
  return p.color.map((c,i)=>`<button class="thumb-btn ${c===color?'active':''}" data-detail-color="${c}" title="${COLOR_LABELS[c]}"><img src="${p.colorImages[c]}" alt="${p.name} ${COLOR_LABELS[c]}"></button>`).join('');
}
function renderProductDetail(idOverride=null){
  const host=$('#productDetail');if(!host)return;
  const p=getProductFromQuery(idOverride);let selectedColor=p.color[0],selectedSize=p.sizes[0],qty=1;
  const firstGallery=galleryForColor(p,selectedColor);
  const initialMain=(p.galleries&&p.galleries[selectedColor])?firstGallery[0]:(p.colorImages[selectedColor]||p.image);
  const bc=$('#productBreadcrumb');if(bc)bc.textContent=p.name;
  const catBc=$('#productCategoryBreadcrumb');if(catBc)catBc.textContent=categoryBreadcrumbLabel(p);
  if(!document.querySelector('.boutique-split-page')) document.title=`${p.name} — ${CONFIG.brand}`;
  metaTrack('ViewContent',metaProductParams(p,selectedColor,1));
  host.innerHTML=`<section class="product-detail-layout">
    <aside class="product-thumbs" id="detailThumbs" aria-label="Vues du produit">${detailThumbsHtml(p,selectedColor)}</aside>
    <div class="product-main-visual"><button class="zoom-bubble" type="button" aria-label="Zoom">⌕</button><img id="detailMainImage" src="${initialMain}" alt="${p.name} — ${COLOR_LABELS[selectedColor]}"></div>
    <div class="product-buybox">
      <p class="product-category-label">${p.categoryLabel}</p><h1>${p.name}</h1>
      <div class="rating-row">${p.reviews?`<span class="stars">★★★★★</span><span>(${p.reviews} avis)</span>`:'<span>Nouveau produit</span>'}</div>
      <div class="detail-price-row"><strong>${p.price} DH</strong>${p.oldPrice?`<del>${p.oldPrice} DH</del><span class="discount-pill">-${discountPercent(p)}%</span>`:''}${p.bundlePrice?`<span class="bundle-pill">${p.bundleQty} PIÈCES : ${p.bundlePrice} DH</span>`:''}</div>
      <p class="detail-description">${p.description}</p>
      <div class="buy-divider"></div>
      <div class="option-label">Couleur: <strong id="detailColorLabel">${COLOR_LABELS[selectedColor]}</strong></div>
      <div class="image-color-options">${p.color.map((c,i)=>`<button class="image-color-btn ${i===0?'active':''}" data-detail-color="${c}" title="${COLOR_LABELS[c]}"><img src="${p.colorImages[c]}" alt="${COLOR_LABELS[c]}"></button>`).join('')}</div>
      <div class="option-label">Taille:</div><div class="detail-size-grid">${p.sizes.map((s,i)=>`<button class="${i===0?'active':''}" data-detail-size="${s}">${s}</button>`).join('')}</div>
      <div class="option-label">Quantité:</div><div class="quantity-control"><button id="qtyMinus">−</button><span id="qtyValue">1</span><button id="qtyPlus">＋</button></div>
      <div class="buy-actions"><button class="detail-add" id="detailAdd">▢ &nbsp; AJOUTER AU PANIER</button><button class="detail-favorite" id="detailFavorite">♡ &nbsp; AJOUTER AUX FAVORIS</button></div>
    </div>
  </section>
  <section class="product-service-bar"><article><span>▣</span><div><strong>Livraison gratuite</strong><small>Partout au Maroc</small></div></article><article><span>↶</span><div><strong>Retour facile</strong><small>Sous 7 jours</small></div></article><article><span>♢</span><div><strong>Paiement à la livraison</strong><small>Payez à la réception</small></div></article></section>
  <section class="product-tabs"><div class="tab-buttons"><button class="active" data-tab="description">DESCRIPTION</button><button data-tab="details">DÉTAILS</button><button data-tab="delivery">LIVRAISON & RETOURS</button></div><div class="tab-panel active" data-panel="description"><p>${p.description}</p><ul>${p.details.map(d=>`<li>${d}</li>`).join('')}</ul></div><div class="tab-panel" data-panel="details"><ul>${p.details.map(d=>`<li>${d}</li>`).join('')}</ul></div><div class="tab-panel" data-panel="delivery"><p>Livraison gratuite partout au Maroc. Retour ou échange possible sous 7 jours, selon nos conditions.</p></div></section>`;

  const main=$('#detailMainImage',host),colorLabel=$('#detailColorLabel',host),thumbsHost=$('#detailThumbs',host);
  const bindGalleryThumbs=()=>{
    $$('[data-detail-image]',thumbsHost).forEach(btn=>btn.onclick=()=>{
      main.src=btn.dataset.detailImage;
      main.alt=`${p.name} — ${COLOR_LABELS[selectedColor]}`;
      $$('[data-detail-image]',thumbsHost).forEach(x=>x.classList.toggle('active',x===btn));
    });
  };
  const refreshGallery=()=>{
    if(p.galleries&&p.galleries[selectedColor]){
      thumbsHost.innerHTML=detailThumbsHtml(p,selectedColor);
      main.src=galleryForColor(p,selectedColor)[0];
      bindGalleryThumbs();
    }else{
      main.src=p.colorImages[selectedColor]||p.image;
      $$('[data-detail-color]',thumbsHost).forEach(x=>x.classList.toggle('active',x.dataset.detailColor===selectedColor));
    }
    main.alt=`${p.name} — ${COLOR_LABELS[selectedColor]}`;
  };
  bindGalleryThumbs();
  $$('[data-detail-color]',host).forEach(btn=>btn.onclick=()=>{
    selectedColor=btn.dataset.detailColor;
    colorLabel.textContent=COLOR_LABELS[selectedColor];
    $$('.image-color-options [data-detail-color]',host).forEach(x=>x.classList.toggle('active',x.dataset.detailColor===selectedColor));
    refreshGallery();
  });
  $$('[data-detail-size]',host).forEach(btn=>btn.onclick=()=>{selectedSize=btn.dataset.detailSize;$$('[data-detail-size]',host).forEach(x=>x.classList.toggle('active',x===btn))});
  $('#qtyMinus',host).onclick=()=>{qty=Math.max(1,qty-1);$('#qtyValue',host).textContent=qty};
  $('#qtyPlus',host).onclick=()=>{qty++;$('#qtyValue',host).textContent=qty};
  $('#detailAdd',host).onclick=()=>addToCart(p.id,selectedColor,selectedSize,qty);
  $('#detailFavorite',host).onclick=e=>{e.currentTarget.classList.toggle('active');e.currentTarget.innerHTML=e.currentTarget.classList.contains('active')?'♥ &nbsp; AJOUTÉ AUX FAVORIS':'♡ &nbsp; AJOUTER AUX FAVORIS'};
  $$('.tab-buttons button',host).forEach(btn=>btn.onclick=()=>{$$('.tab-buttons button',host).forEach(x=>x.classList.remove('active'));$$('.tab-panel',host).forEach(x=>x.classList.remove('active'));btn.classList.add('active');$(`[data-panel="${btn.dataset.tab}"]`,host).classList.add('active')});
}

function cartKey(id,color,size){return `${id}|${color}|${size}`}
function checkoutCartPayload(items=cart){
  return items.map(i=>({id:Number(i.id),color:String(i.color||''),size:String(i.size||''),qty:Math.max(1,Number(i.qty)||1)}));
}
function checkoutUrl(items=cart){
  const payload=encodeURIComponent(JSON.stringify(checkoutCartPayload(items)));
  return `commande.html?cart=${payload}`;
}
function restoreCartFromCheckoutUrl(){
  const raw=new URLSearchParams(location.search).get('cart');
  if(!raw)return false;
  try{
    const parsed=JSON.parse(raw);
    if(!Array.isArray(parsed)||!parsed.length)return false;
    const restored=[];
    for(const item of parsed){
      const id=Number(item.id),p=PRODUCTS.find(x=>x.id===id);if(!p)continue;
      const color=p.color.includes(String(item.color))?String(item.color):p.color[0];
      const size=p.sizes.includes(String(item.size))?String(item.size):p.sizes[0];
      const qty=Math.max(1,Math.min(99,Number(item.qty)||1));
      restored.push({key:cartKey(id,color,size),id,color,size,qty});
    }
    if(!restored.length)return false;
    cart=restored;
    try{localStorage.setItem('srbrand_cart',JSON.stringify(cart))}catch{}
    renderCartCount();
    return true;
  }catch{return false}
}
function addToCart(id,color='red',size='S',quantity=1){
  const p=PRODUCTS.find(x=>x.id===id);if(!p)return;
  const qtyToAdd=Math.max(1,Number(quantity)||1);
  const key=cartKey(id,color,size),e=cart.find(x=>x.key===key);
  if(e)e.qty+=qtyToAdd;else cart.push({key,id,color,size,qty:qtyToAdd});
  metaTrack('AddToCart',metaProductParams(p,color,qtyToAdd));
  saveCart();
  // Le panier est aussi transmis dans l'URL. Ainsi le produit reste visible
  // sur la page de validation même lors d'un test local en file://.
  window.location.href=checkoutUrl(cart);
}
function saveCart(){try{localStorage.setItem('srbrand_cart',JSON.stringify(cart))}catch{}renderCartCount();renderCartPage()}
function renderCartCount(){const n=$('#cartCount');if(n)n.textContent=cart.reduce((s,x)=>s+x.qty,0)}
function renderCartPage(){
  const box=$('#cartItemsPage'),totalEl=$('#cartTotalPage');if(!box)return;let total=0;
  if(!cart.length){box.innerHTML='<div class="empty-cart"><h2>Votre panier est vide</h2><p>Découvrez nos collections et leurs cinq coloris.</p><a class="button button-dark" href="boutique.html">Découvrir la boutique</a></div>';if(totalEl)totalEl.textContent='0 DH';return}
  box.innerHTML=cart.map(i=>{const p=PRODUCTS.find(x=>x.id===i.id);if(!p)return '';const line=productLineTotal(p,i.qty);total+=line;const img=p.colorImages[i.color]||p.image;return `<div class="cart-page-line"><div class="cart-thumb"><img src="${img}" alt="${p.name}"></div><div class="cart-line-copy"><h3>${p.name}</h3><p>${COLOR_LABELS[i.color]} · Taille ${i.size}</p><span>${p.price} DH / pièce${p.bundlePrice?` · ${p.bundleQty} pièces ${p.bundlePrice} DH`:''}</span><div class="qty cart-qty" aria-label="Quantité de ${p.name}"><button type="button" data-minus="${i.key}" aria-label="Diminuer la quantité" title="Diminuer">−</button><span aria-live="polite">${i.qty}</span><button type="button" data-plus="${i.key}" aria-label="Augmenter la quantité" title="Augmenter">+</button></div></div><strong>${line} DH</strong></div>`}).join('');
  if(totalEl)totalEl.textContent=`${total} DH`;$$('[data-minus]').forEach(b=>b.onclick=()=>changeQty(b.dataset.minus,-1));$$('[data-plus]').forEach(b=>b.onclick=()=>changeQty(b.dataset.plus,1));
}
function changeQty(key,d){
  const i=cart.find(x=>x.key===key);if(!i)return;
  i.qty=Math.max(0,(Number(i.qty)||0)+(Number(d)||0));
  if(i.qty===0)cart=cart.filter(x=>x.key!==key);
  saveCart();
}
function syncCheckoutUrl(){
  try{
    const next=cart.length?checkoutUrl(cart):'commande.html';
    history.replaceState(null,'',next);
  }catch{}
}
function changeCheckoutQty(key,d){
  const i=cart.find(x=>x.key===key);if(!i)return;
  i.qty=Math.max(0,(Number(i.qty)||0)+(Number(d)||0));
  if(i.qty===0)cart=cart.filter(x=>x.key!==key);
  saveCart();
  syncCheckoutUrl();
  renderCheckoutPage();
}
function checkout(){
  if(!cart.length)return showToast('Votre panier est vide');
  window.location.href=checkoutUrl(cart);
}
function checkoutItems(){
  return cart.map(i=>{const product=PRODUCTS.find(p=>p.id===i.id);return product?{...i,product}:null}).filter(Boolean);
}
function resetCheckoutButtons(form){
  if(!form)return;
  const siteButton=form.querySelector('[data-order-method="site"]');
  const waButton=form.querySelector('[data-order-method="whatsapp"]');
  if(siteButton){
    siteButton.disabled=false;
    siteButton.innerHTML='<span class="checkout-method-icon">✓</span><span class="checkout-method-copy"><strong>Valider sur le site</strong><small>Commande enregistrée directement</small></span>';
  }
  if(waButton){
    waButton.disabled=false;
    waButton.innerHTML='<span class="checkout-method-icon checkout-wa-icon">WA</span><span class="checkout-method-copy"><strong>Valider via WhatsApp</strong><small>Commande enregistrée + WhatsApp</small></span>';
  }
}

function renderCheckoutPage(){
  const form=$('#checkoutForm'),itemsHost=$('#checkoutOrderItems');if(!form||!itemsHost)return;
  restoreCartFromCheckoutUrl();
  const content=$('#checkoutContent'),empty=$('#checkoutEmpty'),success=$('#checkoutSuccess'),items=checkoutItems();
  if(success)success.hidden=true;
  if(!items.length){content.hidden=true;empty.hidden=false;return}
  if(!META_CHECKOUT_TRACKED){
    metaTrack('InitiateCheckout',metaCheckoutParams(items));
    META_CHECKOUT_TRACKED=true;
  }
  content.hidden=false;empty.hidden=true;let total=0;
  itemsHost.innerHTML=items.map(i=>{const lineTotal=productLineTotal(i.product,i.qty);total+=lineTotal;const img=i.product.colorImages[i.color]||i.product.image;return `<article class="checkout-order-line"><img src="${img}" alt="${i.product.name}"><div><h3>${i.product.name}</h3><p>${COLOR_LABELS[i.color]||i.color} · Taille ${i.size}</p><div class="qty cart-qty checkout-qty" aria-label="Quantité de ${i.product.name}"><button type="button" data-checkout-minus="${i.key}" aria-label="Diminuer la quantité" title="Diminuer">−</button><span aria-live="polite">${i.qty}</span><button type="button" data-checkout-plus="${i.key}" aria-label="Augmenter la quantité" title="Augmenter">+</button></div></div><strong>${lineTotal} DH</strong></article>`}).join('');
  const totalEl=$('#checkoutOrderTotal');if(totalEl)totalEl.textContent=`${total} DH`;
  $$('[data-checkout-minus]',itemsHost).forEach(b=>b.onclick=()=>changeCheckoutQty(b.dataset.checkoutMinus,-1));
  $$('[data-checkout-plus]',itemsHost).forEach(b=>b.onclick=()=>changeCheckoutQty(b.dataset.checkoutPlus,1));
  form.onsubmit=e=>{
    e.preventDefault();
    if(!form.reportValidity())return;

    const method=(e.submitter?.dataset?.orderMethod||'site').toLowerCase();
    const data=new FormData(form);
    const firstName=String(data.get('first_name')||'').trim();
    const lastName=String(data.get('last_name')||'').trim();
    const phone=String(data.get('phone')||'').trim();
    const address=String(data.get('address')||'').trim();
    const currentItems=checkoutItems();
    if(!currentItems.length)return showToast('Votre panier est vide');

    const customerName=`${firstName} ${lastName}`.trim();
    const methodButtons=$$('[data-order-method]',form);
    methodButtons.forEach(btn=>btn.disabled=true);

    const activeButton=e.submitter;
    if(activeButton){
      if(method==='whatsapp'){
        activeButton.innerHTML='<span class="checkout-method-icon checkout-wa-icon">WA</span><span class="checkout-method-copy"><strong>Enregistrement...</strong><small>Ouverture de WhatsApp</small></span>';
      }else{
        activeButton.innerHTML='<span class="checkout-method-icon">✓</span><span class="checkout-method-copy"><strong>Enregistrement...</strong><small>Validation sur le site</small></span>';
      }
    }

    const orderPayloadItems=currentItems.map(({product,...item})=>({
      ...item,
      image:(product.colorImages&&product.colorImages[item.color])||product.image||''
    }));

    fetch(`${API.python}/orders`,{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({
        customer_name:customerName,
        customer_first_name:firstName,
        customer_last_name:lastName,
        customer_phone:phone,
        customer_address:address,
        order_method:method,
        meta_fbp:metaCookie('_fbp'),
        meta_fbc:metaCookie('_fbc'),
        meta_event_source_url:window.location.href,
        items:orderPayloadItems
      })
    })
    .then(async response=>{
      const result=await response.json().catch(()=>({}));
      if(!response.ok)throw new Error(result.error||'Impossible d\'enregistrer la commande.');
      return result;
    })
    .then(result=>{
      const orderId=String(result.order_id||'').trim();
      const total=Math.round(Number(result.total||currentItems.reduce((sum,i)=>sum+productLineTotal(i.product,i.qty),0)));
      try{sessionStorage.setItem('srbrand_last_order_id',orderId)}catch{}

      const purchaseParams=metaCheckoutParams(currentItems);
      purchaseParams.value_mad=total;
      purchaseParams.order_id=orderId;
      purchaseParams.checkout_method=method;
      metaTrack(
        'Purchase',
        purchaseParams,
        orderId?{eventID:`srbrand-order-${orderId}`}:{}
      );

      // Method 1: confirmation directly on the site.
      if(method==='site'){
        cart=[];
        saveCart();
        form.reset();
        const content=$('#checkoutContent');
        const empty=$('#checkoutEmpty');
        const success=$('#checkoutSuccess');
        const successOrder=$('#checkoutSuccessOrder');
        if(content)content.hidden=true;
        if(empty)empty.hidden=true;
        if(successOrder)successOrder.textContent=orderId?`#${orderId}`:'';
        if(success)success.hidden=false;
        window.scrollTo({top:0,behavior:'smooth'});
        return;
      }

      // Method 2: saved first, then open WhatsApp.
      const lines=currentItems.map(i=>{
        const product=i.product;
        const colorLabel=COLOR_LABELS[i.color]||i.color||'-';
        const lineTotal=productLineTotal(product,i.qty);
        return `- ${i.qty}x ${product.name}
  Couleur: ${colorLabel} | Taille: ${i.size}
  Montant: ${lineTotal} DH`;
      });

      const first=currentItems[0];
      const firstImage=first?((first.product.colorImages&&first.product.colorImages[first.color])||first.product.image||''):'';
      let previewUrl='';
      if(firstImage){
        const params=new URLSearchParams({img:firstImage,product:first.product.name,order:orderId});
        previewUrl=`${location.origin}/order-share-preview?${params.toString()}`;
      }

      const message=[
        previewUrl,
        '*Nouvelle commande SR BRAND*',
        orderId?`Commande #${orderId}`:'',
        '',
        `Client: ${customerName}`,
        `Telephone: ${phone}`,
        `Adresse: ${address}`,
        '',
        '*Articles:*',
        lines.join('\n\n'),
        '',
        `*Total: ${total} DH*`
      ].filter(Boolean).join('\n');

      const encoded=encodeURIComponent(message);
      const appUrl=`whatsapp://send?phone=${CONFIG.whatsapp}&text=${encoded}`;
      const mobileFallback=`https://wa.me/${CONFIG.whatsapp}?text=${encoded}`;
      const desktopFallback=`https://web.whatsapp.com/send?phone=${CONFIG.whatsapp}&text=${encoded}`;

      cart=[];
      saveCart();

      let fallbackTimer=null;
      const clearFallback=()=>{if(fallbackTimer){clearTimeout(fallbackTimer);fallbackTimer=null}};
      document.addEventListener('visibilitychange',()=>{if(document.hidden)clearFallback()},{once:true});
      window.location.href=appUrl;
      fallbackTimer=setTimeout(()=>{
        if(!document.hidden){
          const isMobile=/Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
          window.location.href=isMobile?mobileFallback:desktopFallback;
        }
      },1400);
    })
    .catch(error=>{
      showToast(error.message||'Erreur lors de la commande');
      resetCheckoutButtons(form);
    });
  };
}

/* ============================================================
   SR BRAND — META PIXEL EVENTS
   Pixel: 1020120844392689
   ============================================================ */
let META_CHECKOUT_TRACKED=false;

function metaCookie(name){
  try{
    const prefix=`${name}=`;
    const part=document.cookie.split('; ').find(row=>row.startsWith(prefix));
    return part?decodeURIComponent(part.slice(prefix.length)):'';
  }catch{return ''}
}

function metaTrack(eventName,params={},options=null){
  try{
    if(typeof window.fbq!=='function')return;
    if(options)window.fbq('track',eventName,params,options);
    else window.fbq('track',eventName,params);
  }catch(error){
    console.debug('Meta Pixel:',error);
  }
}

function metaProductParams(product,color=null,qty=1){
  if(!product)return {};
  const quantity=Math.max(1,Number(qty)||1);
  const value=Number(productLineTotal(product,quantity)||((Number(product.price)||0)*quantity));
  return {
    content_ids:[String(product.id)],
    content_name:product.name,
    content_category:product.categoryLabel||product.category||'SR BRAND',
    content_type:'product',
    contents:[{id:String(product.id),quantity}],
    value_mad:value,
    ...(color?{color:COLOR_LABELS[color]||color}:{})
  };
}

function metaCheckoutParams(items){
  const valid=(items||[]).filter(i=>i&&i.product);
  return {
    content_ids:valid.map(i=>String(i.product.id)),
    content_type:'product',
    contents:valid.map(i=>({id:String(i.product.id),quantity:Math.max(1,Number(i.qty)||1)})),
    num_items:valid.reduce((sum,i)=>sum+(Math.max(1,Number(i.qty)||1)),0),
    value_mad:valid.reduce((sum,i)=>sum+Number(productLineTotal(i.product,i.qty)||0),0)
  };
}

function showToast(t){let x=$('#toast');if(!x){x=document.createElement('div');x.id='toast';x.className='toast';document.body.appendChild(x)}x.textContent=t;x.classList.add('show');setTimeout(()=>x.classList.remove('show'),2300)}
function setAccountStatus(message,type='error'){
  const status=$('#accountStatus');if(!status)return;status.textContent=message;status.className=`account-status ${type}`;
}
function showAccountProfile(user){
  const guest=$('#accountGuest'),profile=$('#accountProfile');if(!guest||!profile)return;
  guest.hidden=true;profile.hidden=false;
  const welcome=$('#accountWelcome'),email=$('#accountEmail'),avatar=$('#accountAvatar');
  if(welcome)welcome.textContent=`Bienvenue, ${user.name}`;
  if(email)email.textContent=user.email;
  if(avatar)avatar.textContent=(user.name||'S').trim().charAt(0).toUpperCase();
}
async function accountRequest(path,payload){
  const response=await fetch(`${API.python}${path}`,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload||{})});
  const data=await response.json().catch(()=>({}));
  if(!response.ok)throw new Error(data.error||'Une erreur est survenue.');
  return data;
}
async function initAccountPage(){
  const guest=$('#accountGuest'),profile=$('#accountProfile');if(!guest||!profile)return;
  const tabs=$$('[data-account-tab]'),login=$('#loginForm'),register=$('#registerForm');
  const switchTab=tab=>{tabs.forEach(b=>b.classList.toggle('active',b.dataset.accountTab===tab));login.hidden=tab!=='login';register.hidden=tab!=='register';setAccountStatus('','info')};
  tabs.forEach(button=>button.onclick=()=>switchTab(button.dataset.accountTab));
  $$('[data-social-provider]').forEach(button=>button.onclick=()=>setAccountStatus(`La connexion ${button.dataset.socialProvider} nécessite l’activation de l’identifiant officiel de SR BRAND.`,'info'));
  login.onsubmit=async e=>{e.preventDefault();if(!login.reportValidity())return;const data=Object.fromEntries(new FormData(login).entries());setAccountStatus('Connexion en cours...','info');try{const result=await accountRequest('/auth/login',data);showAccountProfile(result.user)}catch(error){setAccountStatus(error.message)}};
  register.onsubmit=async e=>{e.preventDefault();if(!register.reportValidity())return;const data=Object.fromEntries(new FormData(register).entries());if(data.password!==data.password_confirm)return setAccountStatus('Les deux mots de passe ne correspondent pas.');setAccountStatus('Création du compte...','info');try{const result=await accountRequest('/auth/register',{name:data.name,email:data.email,password:data.password});showAccountProfile(result.user)}catch(error){setAccountStatus(error.message)}};
  const logout=$('#accountLogout');if(logout)logout.onclick=async()=>{try{await accountRequest('/auth/logout',{});}catch{}location.reload()};
  try{const response=await fetch(`${API.python}/auth/me`);const result=await response.json();if(result.logged_in&&result.user)showAccountProfile(result.user)}catch{}
}

async function initProfileSticker(){
  const sticker=$('#profileSticker');if(!sticker)return;
  try{
    const response=await fetch(`${API.python}/auth/me`);
    const result=await response.json();
    if(result.logged_in&&result.user){
      sticker.classList.add('is-logged');
      const icon=sticker.querySelector('.profile-avatar-icon'),label=sticker.querySelector('.profile-sticker-label');
      const name=String(result.user.name||'Profil').trim();
      if(icon)icon.textContent=(name.charAt(0)||'S').toUpperCase();
      if(label)label.textContent=name.split(/\s+/)[0]||'Profil';
      sticker.title=`Profil de ${name}`;
    }
  }catch{}
}
function initSearch(){const b=$('#searchBtn'),p=$('#searchPanel'),i=$('#searchInput'),c=$('#clearSearch');if(!b||!p)return;b.onclick=()=>{p.classList.toggle('open');if(i)i.focus()};if(i)i.oninput=()=>{searchTerm=i.value;renderProducts()};if(c)c.onclick=()=>{i.value='';searchTerm='';renderProducts()}}
function initPage(){
  applyConfig();setActiveNav();initMobile();initSearch();renderCartCount();
  const account=$('#accountBtn');if(account)account.onclick=()=>{window.location.href='compte.html'};
  const filters=$$('.filter');filters.forEach(b=>b.onclick=()=>{filters.forEach(x=>x.classList.remove('active'));b.classList.add('active');activeCategory=b.dataset.category;renderProducts()});
  const cp=$('#checkoutBtnPage');if(cp)cp.onclick=checkout;
  const nf=$('#newsletterForm');if(nf)nf.onsubmit=async e=>{e.preventDefault();try{const response=await fetch(`${API.python}/newsletter`,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({email:$('#newsletterEmail').value})});const result=await response.json().catch(()=>({}));if(!response.ok)throw new Error(result.error||'Inscription impossible.');showToast('Merci ! Vous êtes inscrit(e).');nf.reset()}catch(error){showToast(error.message||'Le serveur est indisponible.')}};
  const cf=$('#contactForm');if(cf)cf.onsubmit=async e=>{e.preventDefault();const fd=new FormData(cf);try{const response=await fetch(`${API.python}/contact`,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(Object.fromEntries(fd.entries()))});const result=await response.json().catch(()=>({}));if(!response.ok)throw new Error(result.error||'Envoi impossible.');showToast('Message envoyé !');cf.reset()}catch(error){showToast(error.message||'Le serveur est indisponible.')}};
}
function initHero(){
  const wrap=$('#heroSlides');if(!wrap)return;
  const slides=[
    {
      eyebrow:'NUIT DENTELLE & KIMONO',
      title:'Douceur, dentelle et élégance.',
      text:'Un ensemble de nuit féminin avec kimono assorti, pensé pour une présentation chic et raffinée.',
      cta:'Voir l’ensemble nuit',
      link:'produit.html?id=10',
      img:'ensemble-nuit-blush-1.webp',
      pos:'center',
      size:'contain',
      bg:'#ead9d4'
    },

    {
      eyebrow:'NOUVEAU · SHORT GAINANT',
      title:'Maintien sculptant. Confort au quotidien.',
      text:'Un short taille haute gainant disponible en Beige et Noir, proposé en M/L, XL/XXL et 3XL/4XL.',
      cta:'Voir le short gainant',
      link:'produit.html?id=12',
      img:'short-gainant-beige-2.webp',
      pos:'center',
      size:'contain',
      bg:'#eee8e2'
    },

    {
      eyebrow:'LINGERIE SATIN',
      title:'Satin moderne. Détails dorés.',
      text:'Ensemble Lingerie Satin V disponible en six couleurs, avec une finition élégante et raffinée.',
      cta:'Voir la lingerie',
      link:'produit.html?id=11',
      img:'lingerie-rose-1.webp',
      pos:'center',
      size:'contain',
      bg:'#eadfd8'
    },

    {
      eyebrow:'DANSE ORIENTALE',
      title:'Élégance en mouvement.',
      text:'Une silhouette prestige aux détails dorés, disponible en Vert Émeraude et Rose.',
      cta:'Voir l’ensemble',
      link:'produit.html?id=4',
      img:'danse-green-1.webp',
      pos:'center',
      size:'contain',
      bg:'#ecebea'
    },

    {
      eyebrow:'CONFORT SCULPTANT',
      title:'Maintien doux. Ligne invisible.',
      text:'Le short de compression femme pensé pour le confort quotidien et une finition discrète sous les vêtements.',
      cta:'Voir le short',
      link:'produit.html?id=5',
      img:'shorts-compression-beige-pro-1.webp',
      pos:'center',
      size:'contain',
      bg:'#eadbc8'
    },

    {
      eyebrow:'MAID SATIN',
      title:'Satin raffiné. Détails délicats.',
      text:'Un ensemble complet aux finitions soignées, disponible en Noir et Rouge.',
      cta:'Voir l’ensemble',
      link:'produit.html?id=6',
      img:'maid-black-1.webp',
      pos:'center',
      size:'contain',
      bg:'#efe7de'
    },

    {
      eyebrow:'NUIT EN DENTELLE',
      title:'Satin fluide. Dentelle raffinée.',
      text:'Une robe de nuit élégante et confortable, disponible en cinq couleurs et cinq tailles.',
      cta:'Voir la robe de nuit',
      link:'produit.html?id=7',
      img:'robe-dentelle-purple-1.webp',
      pos:'center',
      size:'contain',
      bg:'#eee8e3'
    },

    {
      eyebrow:'DOUCEUR AU QUOTIDIEN',
      title:'Sept culottes. Une semaine de confort.',
      text:'Un pack pratique en coton doux, avec un assortiment élégant de couleurs et de motifs.',
      cta:'Voir le pack de 7',
      link:'produit.html?id=8',
      img:'pack-7-culottes-1.webp',
      pos:'center',
      size:'contain',
      bg:'#efe8e4'
    },

    {
      eyebrow:'ROUGE & BLANC',
      title:'Un modèle signature aux détails contrastés.',
      text:'Ensemble Infirmière Rouge & Blanc présenté avec plusieurs vues pour mieux découvrir chaque détail.',
      cta:'Voir le modèle',
      link:'produit.html?id=9',
      img:'infirmiere-flatlay-1.webp',
      pos:'center',
      size:'contain',
      bg:'#f0e6df'
    }
  ];

  let idx=0;
  let timer=null;

  wrap.innerHTML=slides.map((s,i)=>`<article class="hero-slide ${i?'':'active'}">
    <div class="hero-image" style="background-image:url('${imgUrl(s.img)}');background-position:${s.pos||'center'};background-size:${s.size||'contain'};background-repeat:no-repeat;background-color:${s.bg||'#eee'}"></div>
    <div class="shade"></div>
    <div class="hero-copy">
      <p class="eyebrow">${s.eyebrow}</p>
      <h1>${s.title}</h1>
      <p>${s.text}</p>
      <a href="${s.link}" class="button button-light">${s.cta}</a>
    </div>
  </article>`).join('');

  const dots=$('#sliderDots');if(!dots)return;
  dots.innerHTML=slides.map((_,i)=>`<button class="${i?'':'active'}" data-slide="${i}" aria-label="Slide ${i+1}"></button>`).join('');

  const go=n=>{
    idx=(n+slides.length)%slides.length;
    $$('.hero-slide').forEach((s,i)=>s.classList.toggle('active',i===idx));
    $$('#sliderDots button').forEach((d,i)=>d.classList.toggle('active',i===idx));
  };

  const startAuto=()=>{
    if(timer)clearInterval(timer);
    timer=setInterval(()=>go(idx+1),2000);
  };

  const prev=$('#prevSlide'),next=$('#nextSlide');
  if(prev)prev.onclick=()=>{go(idx-1);startAuto()};
  if(next)next.onclick=()=>{go(idx+1);startAuto()};
  $$('#sliderDots button').forEach(d=>d.onclick=()=>{go(+d.dataset.slide);startAuto()});

  startAuto();
}
window.addEventListener('DOMContentLoaded',async()=>{initPage();initProfileSticker();await loadProducts();renderProducts('#productGrid',false);renderProducts('#featuredProducts',true);renderCartPage();renderCheckoutPage();renderProductDetail();initHero();renderHomeStory();initAccountPage()});