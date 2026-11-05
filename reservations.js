import {createClient} from "https://esm.sh/@supabase/supabase-js@2.57.4";
const supabase=createClient("https://hfxzdifqcjbslmxffvlf.supabase.co","sb_publishable_Z3cDbEmw_8OcJsXAwypOfw_-IwC-RFi");
const $=s=>document.querySelector(s);
const form=$("#reservationForm"),tournament=$("#reservationTournament"),nameInput=$("#reservationTeamName");
const list=$("#reservationsList"),message=$("#reservationMessage"),summary=$("#reservationSummary"),count=$("#reservationCount"),submit=$("#reservationSubmit");
const escapeHtml=v=>String(v??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const normalize=v=>String(v||"").trim().replace(/\s+/g," ").toLocaleLowerCase();
let rows=[],tournaments=[],lastActive=false,refreshing=false;
const missingSchema=error=>["42P01","PGRST205","PGRST204"].includes(error?.code)||/tournament_reservations.*schema cache|relation .*tournament_reservations.*does not exist/i.test(error?.message||"");
function errorText(error){
  if(missingSchema(error))return "Потрібно додати таблицю бронювання в Supabase: виконай supabase/reserved-slots.sql із репозиторію.";
  const msg=String(error?.message||"");
  if(error?.code==="23505")return "Ця команда вже має бронь на цьому турнірі.";
  if(msg.includes("reservation_team_already_exists"))return "Команда з такою назвою вже подала заявку або додана до турніру.";
  if(msg.includes("tournament_team_limit_reached"))return "Вільних місць для бронювання більше немає.";
  if(error?.code==="42501")return "Немає доступу до бронювань. Перевір права адміністратора.";
  return "Не вдалося виконати дію. "+msg;
}
function feedback(text,type=""){
  message.textContent=text;message.className=type;
}
async function refresh(){
  if(refreshing)return;
  refreshing=true;
  try{
    const [ts,rs]=await Promise.all([
      supabase.from("tournaments").select("id,name,max_teams").order("created_at",{ascending:false}),
      supabase.from("tournament_reservations").select("id,tournament_id,team_name,created_at").order("created_at",{ascending:false})
    ]);
    if(ts.error)throw ts.error;
    if(rs.error)throw rs.error;
    tournaments=ts.data||[];rows=rs.data||[];
    const selected=tournament.value;
    tournament.innerHTML='<option value="">Обери турнір</option>'+tournaments.map(t=>'<option value="'+escapeHtml(t.id)+'">'+escapeHtml(t.name)+'</option>').join("");
    if(tournaments.some(t=>String(t.id)===selected))tournament.value=selected;
    else if(tournaments.length)tournament.value=String(tournaments[0].id);
    render();
  }catch(error){
    console.error("Reservations load failed",error);
    list.innerHTML='<div class="empty-state error">'+escapeHtml(errorText(error))+'</div>';
    count.textContent="—";summary.textContent="";
    submit.disabled=missingSchema(error);
  }finally{refreshing=false;}
}
async function render(){
  const id=Number(tournament.value);
  const t=tournaments.find(x=>x.id===id);
  const visible=rows.filter(x=>x.tournament_id===id);
  count.textContent=String(visible.length);
  if(!t){summary.textContent="";list.innerHTML='<div class="empty-state">Обери турнір.</div>';return;}
  summary.textContent="Заброньовано: "+visible.length+" із "+t.max_teams+" місць. Броні враховуються в ліміті разом із підтвердженими командами.";
  list.innerHTML=visible.length?visible.map(h=>'<article class="reservation-row"><div class="reservation-row-main"><strong>'+escapeHtml(h.team_name)+'</strong><small>'+escapeHtml(new Date(h.created_at).toLocaleString("uk-UA"))+'</small></div><button class="btn reject" type="button" data-remove-reservation="'+escapeHtml(h.id)+'">Зняти бронь</button></article>').join(""):'<div class="empty-state">Для цього турніру активних бронювань немає.</div>';
}
form?.addEventListener("submit",async e=>{
  e.preventDefault();
  const id=Number(tournament.value),teamName=nameInput.value.trim().replace(/\s+/g," ");
  if(!id||teamName.length<2||teamName.length>40){feedback("Обери турнір і введи назву команди (2–40 символів).","error");return;}
  if(rows.some(r=>r.tournament_id===id&&normalize(r.team_name)===normalize(teamName))){feedback("Така команда вже заброньована.","error");return;}
  submit.disabled=true;feedback("Зберігаємо бронювання...");
  try{
    const {error}=await supabase.from("tournament_reservations").insert({tournament_id:id,team_name:teamName});
    if(error)throw error;
    nameInput.value="";
    await refresh();feedback("Місце для «"+teamName+"» заброньовано.","success");
  }catch(error){console.error(error);feedback(errorText(error),"error");}
  finally{submit.disabled=false;}
});
tournament?.addEventListener("change",()=>{feedback("");render();});
list?.addEventListener("click",async event=>{
  const btn=event.target.closest("[data-remove-reservation]");
  if(!btn)return;
  const id=Number(btn.dataset.removeReservation);
  const row=rows.find(x=>x.id===id);
  if(!row||!confirm('Зняти бронювання для "'+row.team_name+'"?'))return;
  btn.disabled=true;
  const {error}=await supabase.from("tournament_reservations").delete().eq("id",id);
  if(error){feedback(errorText(error),"error");btn.disabled=false;return;}
  await refresh();feedback("Бронювання знято.","success");
});
// Load admin-only data after the existing authorization flow reveals the dashboard tab.
function checkActive(){
  const active=!$("#reservationsTab")?.classList.contains("hidden")&&!$("#dashboardView")?.classList.contains("hidden");
  if(active&&!lastActive){refresh();}
  lastActive=active;
}
document.querySelectorAll('[data-tab="reservationsTab"]').forEach(b=>b.addEventListener("click",()=>setTimeout(checkActive,0)));
$("#adminSectionSelect")?.addEventListener("change",()=>setTimeout(checkActive,0));
new MutationObserver(checkActive).observe($("#reservationsTab"),{attributes:true,attributeFilter:["class"]});
new MutationObserver(checkActive).observe($("#dashboardView"),{attributes:true,attributeFilter:["class"]});
checkActive();
