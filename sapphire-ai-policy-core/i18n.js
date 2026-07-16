/* ENVISAGE AI Policy — language switcher */
(function(){
  var NAV = {
    en: ["Home", "Claude & Cowork", "Token Efficiency", "Data Security", "Verification", "AI Toolkit", "AI Directory", "Usage of OSINT", "Case Study"],
    th: ["หน้าหลัก", "Claude และ Cowork", "ประหยัดโทเคน", "ความปลอดภัยข้อมูล", "การตรวจสอบยืนยัน", "ชุดเครื่องมือ AI", "ไดเร็กทอรี AI", "การใช้ OSINT", "กรณีศึกษา"],
    my: ["ပင်မ", "Claude နှင့် Cowork", "တိုကင်ချွေတာရေး", "ဒေတာလုံခြုံရေး", "အတည်ပြုစစ်ဆေးရေး", "AI ကိရိယာစုံ", "AI လမ်းညွှန်", "OSINT အသုံးပြုမှု", "ဖြစ်ရပ်လေ့လာမှု"]
  };
  function apply(lang){
    if(!NAV[lang]) lang = "en";
    document.documentElement.setAttribute("lang", lang);
    try{ localStorage.setItem("envisage-lang", lang); }catch(e){}
    document.querySelectorAll(".lang-section").forEach(function(el){
      el.classList.toggle("active", el.getAttribute("data-lang")===lang);
    });
    document.querySelectorAll(".nav-links a").forEach(function(a,i){
      if(NAV[lang][i]) a.textContent = NAV[lang][i];
    });
    document.querySelectorAll(".lang-switch button").forEach(function(b){
      b.classList.toggle("active", b.getAttribute("data-setlang")===lang);
    });
  }
  document.addEventListener("DOMContentLoaded", function(){
    var saved = "en";
    try{ saved = localStorage.getItem("envisage-lang") || "en"; }catch(e){}
    document.querySelectorAll(".lang-switch button").forEach(function(b){
      b.addEventListener("click", function(){ apply(b.getAttribute("data-setlang")); });
    });
    apply(saved);

    /* Dropdown nav: click/tap toggle for touch + keyboard, hover handled in CSS */
    document.querySelectorAll(".nav-links li.dropdown > a").forEach(function(trigger){
      trigger.addEventListener("click", function(e){
        if(trigger.getAttribute("href") === "#"){
          e.preventDefault();
          trigger.parentElement.classList.toggle("open");
        }
      });
    });
    document.addEventListener("click", function(e){
      document.querySelectorAll(".nav-links li.dropdown.open").forEach(function(li){
        if(!li.contains(e.target)) li.classList.remove("open");
      });
    });
  });
})();
