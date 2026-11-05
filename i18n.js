/* Public-page English localization. Administration pages are intentionally excluded. */
(() => {
  if (!/^(?:\/|\/index\.html|\/apply\.html|\/tournament\.html)$/.test(location.pathname.replace(/^\/AHLTV-Tour(?=\/|$)/i, "") || "/")) return;
  const dictionary={"ТВОЯ КОМАНДА":"YOUR TEAM","ТВОЯ СЦЕНА":"YOUR STAGE","ТВОЯ КОМАНДА. ТВОЯ СЦЕНА.":"YOUR TEAM. YOUR STAGE.","Турніри":"Tournaments","ТУРНІРИ":"TOURNAMENTS","Подати заявку":"Apply","ПОДАТИ ЗАЯВКУ":"APPLY","Увійти":"Log in","Акаунт":"Account","Меню":"Menu","НАВІГАЦІЯ":"NAVIGATION","Обирай своє змагання":"Choose your competition","Зареєструвати команду":"Register a team","Твій особистий кабінет":"Your personal account","Твої заявки та налаштування":"Your applications and settings","ПЛАТФОРМА":"PLATFORM","ДЛЯ ТИХ, ХТО ЛЮБИТЬ ГРУ":"FOR THOSE WHO LOVE THE GAME","Твоя команда.":"Your team.","Твоя сцена.":"Your stage.","Збирай команду, обирай турнір і грай на перемогу.":"Build your team, choose a tournament and play to win.","Знайти турнір":"Find a tournament","ЯК ЦЕ ПРАЦЮЄ":"HOW IT WORKS","Твій шлях у гру":"Your path to the game","Обери турнір":"Choose a tournament","Знайди своє змагання":"Find your competition","Збери команду":"Build your team","Подай заявку на участь":"Submit your entry","Грай на перемогу":"Play to win","Покажи, на що здатні ви":"Show what your team can do","ОБИРАЙ СВОЮ ГРУ":"CHOOSE YOUR GAME","Усі турніри":"All tournaments","Обирай змагання та приєднуйся до гри.":"Pick a competition and join the game.","Завантаження турнірів...":"Loading tournaments...","Збирай команду.":"Build your team.","Побачимось у грі.":"See you in the game.","Твій наступний турнір починається з першого кроку.":"Your next tournament starts with the first step.","Місце, де команди виходять на свою сцену.":"Where teams take the stage.","АHLTV — Подати заявку":"AHLTV — Apply","AHLTV — Подати заявку":"AHLTV — Apply","AHLTV — Турнір":"AHLTV — Tournament","ДЕТАЛІ ТУРНІРУ":"TOURNAMENT DETAILS","Завантаження турніру...":"Loading tournament...","Обери турнір, додай дані команди, логотип і повний склад.":"Choose a tournament and enter your team's details, logo and full roster.","ПЕРШИЙ КРОК ДО ГРИ":"YOUR FIRST STEP INTO THE GAME","Потрібен акаунт":"Account required","Щоб зареєструвати команду на турнір, спочатку увійди або створи акаунт.":"Log in or create an account to register your team for a tournament.","Увійти / Зареєструватися":"Log in / Sign up","Ви увійшли як":"Signed in as","ВИБІР ТУРНІРУ":"CHOOSE A TOURNAMENT","Турнір":"Tournament","Завантаження...":"Loading...","ЗАЯВКА КОМАНДИ":"TEAM APPLICATION","Команда":"Team","Команди":"Teams","КОМАНДИ":"TEAMS","Назва команди":"Team name","Тег":"Tag","Капітан / нік":"Captain / nickname","Email капітана":"Captain's email","Telegram або Discord":"Telegram or Discord","Логотип команди":"Team logo","обов’язково":"required","PNG, JPG або WEBP · максимум 5 МБ":"PNG, JPG or WEBP · max 5 MB","Обрати логотип":"Choose logo","Основний склад":"Starting roster","Нік":"Nickname","Steam-посилання":"Steam link","Заміни":"Substitutes","Обов’язково 1 · максимум 3":"At least 1 · max 3","Додати заміну":"Add substitute","Додатково":"Additional information","Коментар":"Comment","Підтверджую правильність даних і згоду з правилами турніру.":"I confirm the information is correct and agree to the tournament rules.","Відправити заявку":"Submit application","Сітка":"Bracket","Правила":"Rules","ТУРНІРНА СІТКА":"TOURNAMENT BRACKET","ПРАВИЛА":"RULES","Пошук":"Search","Пошук команди":"Search teams","Сортувати команди":"Sort teams","Повний перегляд сітки":"View full bracket","Закрити перегляд":"Close preview","Сітка турніру":"Tournament bracket","Навігація у підвалі":"Footer navigation","Основна навігація":"Main navigation","Мобільна навігація":"Mobile navigation","Відкрити меню":"Open menu","Закрити меню":"Close menu","Розділи турніру":"Tournament sections","Зареєструватися":"Sign up","Вкажи посилання Steam Community або s.team":"Enter a Steam Community or s.team link","Якщо є важлива інформація для адміністрації — напиши тут.":"If you have important information for the organizers, enter it here.","@telegram або Discord username":"@telegram or Discord username","Наприклад: AHLTV Team":"For example: AHLTV Team","Дату не вказано":"Date not specified","Гра не вказана":"Game not specified","Реєстрація відкрита":"Registration open","Реєстрація закрита":"Registration closed","Незабаром":"Coming soon","Триває":"Live","Завершено":"Finished","РЕЄСТРАЦІЯ":"REGISTRATION","НЕЗАБАРОМ":"COMING SOON","ЗАВЕРШЕНО":"FINISHED","РЕЄСТРАЦІЯ ВІДКРИТА":"REGISTRATION OPEN","РЕЄСТРАЦІЯ ЗАКРИТА":"REGISTRATION CLOSED","ТУРНІР":"TOURNAMENT","Матчі":"Matches","Деталі турніру":"Tournament details","Підтверджених команд ще немає.":"No confirmed teams yet.","Не вдалося завантажити команди.":"Could not load teams.","Не знайдено команд за запитом.":"No teams match your search.","Реєстрація зараз недоступна":"Registration is currently unavailable","Заповнення турніру":"Tournament capacity","Кількість команд недоступна":"Team count unavailable","Правила для цього турніру ще не додані.":"Rules have not been added for this tournament yet.","Не вдалося завантажити турніри":"Could not load tournaments","Перевір з’єднання та спробуй ще раз.":"Check your connection and try again.","Оновити сторінку":"Refresh page","Турнірів поки немає":"No tournaments yet","Нові змагання з’являться тут. Заглянь трохи пізніше!":"New competitions will appear here. Check back later!","Турнір не знайдено.":"Tournament not found.","Не вдалося завантажити турнір. Спробуй оновити сторінку.":"Could not load tournament. Please refresh the page.","Турнір не знайдено або він прихований.":"Tournament not found or hidden.","Помилка завантаження":"Loading error","Немає відкритих турнірів":"No open tournaments","Прибрати заміну":"Remove substitute","Потрібно увійти в акаунт.":"Please log in.","Логотип завеликий. Максимум 5 МБ.":"Logo is too large. Maximum 5 MB.","Логотип має бути PNG, JPG або WEBP.":"Logo must be PNG, JPG or WEBP.","Потрібно вказати від 1 до 3 замін.":"You must provide 1 to 3 substitutes.","Спочатку обери турнір.":"Choose a tournament first.","Обов’язково вкажи Telegram або Discord.":"Please enter Telegram or Discord.","Обов’язково додай логотип команди.":"Please upload a team logo.","Завантажуємо лого...":"Uploading logo...","Немає зв’язку з сервером. Перевір інтернет і натисни «Відправити заявку» ще раз.":"Cannot connect to the server. Check your connection and click Submit application again.","Не вдалося завантажити логотип.":"Could not upload the logo.","Відправляємо...":"Submitting...","Немає зв’язку з сервером. Перевір інтернет і спробуй відправити заявку ще раз.":"Cannot connect to the server. Check your connection and try submitting again.","Ця команда або тег уже зареєстровані на цей турнір.":"This team or tag is already registered for this tournament.","Один Steam-профіль не можна вказувати двічі в одному складі.":"The same Steam profile cannot appear twice on one roster.","Один із цих Steam-профілів уже зареєстрований в іншій команді цього турніру.":"One of these Steam profiles is already registered with another team in this tournament.","Перевір склад: 5 гравців, 1–3 заміни та правильні Steam-посилання.":"Check your roster: 5 players, 1–3 substitutes and valid Steam links.","Для подачі заявки потрібно увійти в акаунт.":"Please log in to apply.","Не вдалося відправити заявку.":"Could not submit application.","Заявку відправлено.":"Application submitted.","Гравець 1":"Player 1","Гравець 2":"Player 2","Гравець 3":"Player 3","Гравець 4":"Player 4","Гравець 5":"Player 5","Заміна 1":"Substitute 1","Заміна 2":"Substitute 2","Заміна 3":"Substitute 3"};
  const patterns=[
    [/^(\\d+) \\/ (\\d+) команд$/,(_,a,b)=>a+" / "+b+" teams"],
    [/^(\\d+) команд$/,(_,n)=>n+" teams"],
    [/^до (\\d+) команд$/,(_,n)=>"up to "+n+" teams"],
    [/^до початку (\\d+) дн\\.$/,(_,n)=>n+" days until start"],
    [/^Гравець (\\d+)$/,(_,n)=>"Player "+n],
    [/^Заміна (\\d+)$/,(_,n)=>"Substitute "+n],
    [/^Вкажи нік гравця (\\d+)\\.$/,(_,n)=>"Enter a nickname for player "+n+"."],
    [/^Вкажи правильне Steam-посилання для гравця (\\d+)\\.$/,(_,n)=>"Enter a valid Steam link for player "+n+"."],
    [/^Вкажи нік заміни (\\d+)\\.$/,(_,n)=>"Enter a nickname for substitute "+n+"."],
    [/^Вкажи правильне Steam-посилання для заміни (\\d+)\\.$/,(_,n)=>"Enter a valid Steam link for substitute "+n+"."],
    [/^Переглянути сітку (\\d+)$/,(_,n)=>"View bracket "+n],
    [/^Сітка (\\d+) турніру (.*)$/,(_,n,t)=>"Bracket "+n+" for "+t],
    [/^Відкрити сітку (\\d+) повністю у новій вкладці$/,(_,n)=>"Open bracket "+n+" in a new tab"],
    [/^Команди турніру (.*)$/,(_,n)=>"Teams in "+n],
    [/^Матчі турніру (.*)$/,(_,n)=>"Matches in "+n],
    [/^Логотип (.*)$/,(_,n)=>"Logo of "+n]
  ];
  const original=new WeakMap();
  const attrs=["placeholder","title","aria-label"];
  let language="uk";
  try { language=localStorage.getItem("ahltv-tour-language")==="en"?"en":"uk"; } catch {}
  const translate=(input)=>{
    const s=String(input), trimmed=s.trim();
    let out=dictionary[trimmed];
    if(!out){ for(const [pattern,fn] of patterns){const m=trimmed.match(pattern);if(m){out=fn(...m);break;}} }
    if(!out) return s;
    return s.slice(0,s.indexOf(trimmed))+out+s.slice(s.indexOf(trimmed)+trimmed.length);
  };
  function shouldIgnore(el){
    return !el || !!el.closest("script,style,noscript,textarea,[data-no-translate],.event-title h3,.event-team-name,.detail-team-name,.team-name,.match-team-name");
  }
  function applyNode(node){
    if(node.nodeType===Node.TEXT_NODE){
      const parent=node.parentElement;
      if(shouldIgnore(parent)||!node.nodeValue.trim()) return;
      if(!original.has(node))original.set(node,node.nodeValue);
      const base=original.get(node);
      // Text coming from a render function is considered new source text.
      if(language==="en" && node.nodeValue!==translate(base) && node.nodeValue!==base)original.set(node,node.nodeValue);
      node.nodeValue=language==="en"?translate(original.get(node)):original.get(node);
    }else if(node.nodeType===Node.ELEMENT_NODE){
      if(shouldIgnore(node)) return;
      for(const name of attrs){
        if(!node.hasAttribute(name))continue;
        const current=node.getAttribute(name);
        const key="i18nOriginal"+name.replace(/-([a-z])/g,(_,c)=>c.toUpperCase());
        if(!node.dataset[key]|| (language==="en"&&current!==translate(node.dataset[key])&&current!==node.dataset[key]))node.dataset[key]=current;
        node.setAttribute(name,language==="en"?translate(node.dataset[key]):node.dataset[key]);
      }
      for(const child of node.childNodes)applyNode(child);
    }
  }
  let scheduled=false;
  function update(){
    if(scheduled)return;
    scheduled=true;
    queueMicrotask(()=>{scheduled=false;applyNode(document.body);document.documentElement.lang=language;document.title=language==="en"?translate(document.title):document.title;document.querySelectorAll("[data-lang-option]").forEach(b=>{const active=b.dataset.langOption===language;b.classList.toggle("is-active",active);b.setAttribute("aria-pressed",String(active));});});
  }
  function init(){
    const header=document.querySelector(".header-inner");
    if(!header)return;
    const group=document.createElement("div");
    group.className="language-switch";
    group.setAttribute("role","group");
    group.setAttribute("aria-label","Language / Мова");
    group.innerHTML='<span class="language-caption">Мова</span><button type="button" data-lang-option="uk" aria-label="Українська">UA</button><span class="language-divider">/</span><button type="button" data-lang-option="en" aria-label="English">EN</button>';
    const account=header.querySelector(".account-btn");
    const menu=header.querySelector(".menu-btn");
    header.insertBefore(group,account||menu||null);
    group.addEventListener("click",event=>{
      const btn=event.target.closest("[data-lang-option]");
      if(!btn)return;
      language=btn.dataset.langOption;
      try {localStorage.setItem("ahltv-tour-language",language);}catch{}
      // Re-render source data to correctly restore Ukrainian when switching back.
      update();
      window.dispatchEvent(new CustomEvent("ahltv:languagechange",{detail:{language}}));
    });
    const style=document.createElement("style");
    style.textContent='.language-switch{display:flex;align-items:center;gap:5px;margin-left:auto;padding:5px 8px;border:1px solid rgba(255,255,255,.12);border-radius:12px;background:rgba(255,255,255,.035);white-space:nowrap}.language-switch .language-caption{font-size:11px;color:var(--muted,#aaa);margin-right:4px}.language-switch button{border:0;background:transparent;color:var(--muted,#aaa);padding:4px 6px;border-radius:7px;cursor:pointer;font-weight:800;font-size:11px}.language-switch button.is-active{color:#fff;background:rgba(240,106,59,.32)}.language-switch button:hover{color:white}.language-divider{opacity:.3}.language-switch+.account-btn{margin-left:0}@media(max-width:740px){.language-switch{margin-left:auto;padding:4px;gap:2px}.language-switch .language-caption{display:none}.language-switch button{padding:5px}.language-switch~.menu-btn{margin-left:0}.header-inner{gap:7px}.brand{min-width:0}}';
    document.head.appendChild(style);
    const observer=new MutationObserver(update);
    observer.observe(document.body,{subtree:true,childList:true,characterData:true,attributes:true,attributeFilter:attrs});
    update();
  }
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init,{once:true});else init();
})();
