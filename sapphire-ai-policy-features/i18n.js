/* SAPPHIRE AI — Features documentation — language switcher */
(function(){
  var NAV = {
    en: ["Chat Interface & Prompt Tools","Prompt Templates","Prompt Studio","Administrative Management of Prompt Writing","Personal Prompt Templates","Prompt Studio Modal & Company Autocomplete","Modern Chat UI Redesign","TypeScript Migration","PDF Export & Copy Formats","Streaming Recovery & Session Handling","Shareable Chat Links","Screening & Filtering","System-wide Filtering Tools","Exclusion List Capabilities","Adding up to Sixty Additional Fields on Screens","Enhanced Export Functionality","Regional Filtering & Company Lists","Partial Match Exclusions","Export Service Layer & Error Handling","Save Screener Results from Chat","Financial Data Tools","Daily Price Metrics Tool","Daily Price Metrics Tool Launch","Historical Financial Data","PriceEquity OHLCV Tool","Chart Generation Tool","Chart Rendering, Groq & Parameter Profiles","Portfolio Analyst Tool Launch","Portfolio Analyst Field Parity","Company Financials Batch Retrieval","ROE Formatter Bug Fix","Scorecards & Research","Scorecard Rankings","Integrate Scorecards into SAMAI Chatbot","Scorecard Tool Launch","Scorecard Team Averages & Spider Charts","Scorecard Rankings in Portfolio Analyst","Broker Notes MCP Integration","Broker Notes Date Filtering & Opus 4.5","Response Quality & Reliability","Citation Management in SAM","Citation System Launch","Citation, UI & Screener Improvements","Citation Source ID Bug Fix","Citation Deduplication & Tooltips","Improving Anthropic Content and Complexity","Streaming Content Extraction","Cancellation & Streaming Reliability","Platform & Infrastructure","Chatbot Architecture Refactor","LangGraph Tool Loop Fix","Context Management Enhancements","Context Budget & Model Updates","LangGraph v1 & MIC Ticker Matching","Model Fallback Chains","AI Core Runtime Extraction","Excel Processing Enhancements","Firecrawl Web Extraction Tool","Image Upload & Vision Processing"],
    th: ["อินเทอร์เฟซแชทและเครื่องมือพรอมต์","เทมเพลตพรอมต์","สตูดิโอพรอมต์","การบริหารจัดการการเขียนพรอมต์","เทมเพลตพรอมต์ส่วนตัว","หน้าต่าง Prompt Studio และการเติมชื่อบริษัทอัตโนมัติ","การออกแบบ UI แชทใหม่ที่ทันสมัย","การย้ายไปใช้ TypeScript","การส่งออก PDF และรูปแบบการคัดลอก","การกู้คืนสตรีมมิงและการจัดการเซสชัน","ลิงก์แชทที่แชร์ได้","การคัดกรองและการกรองข้อมูล","เครื่องมือกรองข้อมูลทั่วระบบ","ความสามารถรายการยกเว้น","การเพิ่มฟิลด์เสริมสูงสุด 60 รายการ","ฟังก์ชันการส่งออกที่ปรับปรุงแล้ว","การกรองตามภูมิภาคและรายชื่อบริษัท","การยกเว้นแบบจับคู่บางส่วน","เลเยอร์บริการส่งออกและการจัดการข้อผิดพลาด","บันทึกผลตัวคัดกรองจากแชท","เครื่องมือข้อมูลการเงิน","เครื่องมือข้อมูลราคารายวัน","เปิดตัวเครื่องมือข้อมูลราคารายวัน","ข้อมูลการเงินย้อนหลัง","เครื่องมือ PriceEquity OHLCV","เครื่องมือสร้างกราฟ","การแสดงผลกราฟ Groq และโปรไฟล์พารามิเตอร์","เปิดตัวเครื่องมือนักวิเคราะห์พอร์ตโฟลิโอ","ความเท่าเทียมของฟิลด์ในนักวิเคราะห์พอร์ตโฟลิโอ","การดึงข้อมูลการเงินบริษัทแบบกลุ่ม","แก้ไขข้อผิดพลาดตัวจัดรูปแบบ ROE","สกอร์การ์ดและการวิจัย","การจัดอันดับสกอร์การ์ด","รวมสกอร์การ์ดเข้ากับแชทบอท SAMAI","เปิดตัวเครื่องมือสกอร์การ์ด","ค่าเฉลี่ยทีมสกอร์การ์ดและกราฟใยแมงมุม","การจัดอันดับสกอร์การ์ดในนักวิเคราะห์พอร์ตโฟลิโอ","การรวม Broker Notes MCP","การกรองวันที่ Broker Notes และ Opus 4.5","คุณภาพการตอบสนองและความน่าเชื่อถือ","การจัดการการอ้างอิงใน SAM","เปิดตัวระบบการอ้างอิง","การปรับปรุงการอ้างอิง UI และตัวคัดกรอง","แก้ไขข้อผิดพลาด Source ID ของการอ้างอิง","การลบการอ้างอิงซ้ำและทูลทิป","การปรับปรุงเนื้อหาและความซับซ้อนของ Anthropic","การดึงเนื้อหาแบบสตรีมมิง","การยกเลิกและความน่าเชื่อถือของสตรีมมิง","แพลตฟอร์มและโครงสร้างพื้นฐาน","การปรับโครงสร้างสถาปัตยกรรมแชทบอท","แก้ไขปัญหาลูปเครื่องมือ LangGraph","การปรับปรุงการจัดการบริบท","งบประมาณบริบทและการอัปเดตโมเดล","LangGraph v1 และการจับคู่ MIC Ticker","ห่วงโซ่โมเดลสำรอง","การแยกรันไทม์ AI Core","การปรับปรุงการประมวลผล Excel","เครื่องมือดึงข้อมูลเว็บ Firecrawl","การอัปโหลดรูปภาพและการประมวลผลภาพ"],
    my: ["Chat အင်တာဖေ့စ်နှင့် Prompt ကိရိယာများ","Prompt တမ်းပလိတ်များ","Prompt Studio","Prompt ရေးသားခြင်း စီမံခန့်ခွဲမှု","ကိုယ်ပိုင် Prompt တမ်းပလိတ်များ","Prompt Studio Modal နှင့် ကုမ္ပဏီ Autocomplete","ခေတ်မီ Chat UI ပြန်လည်ဒီဇိုင်းဆွဲခြင်း","TypeScript ပြောင်းရွှေ့ခြင်း","PDF Export နှင့် Copy Format များ","Streaming ပြန်လည်ရယူခြင်းနှင့် Session ကိုင်တွယ်မှု","မျှဝေနိုင်သော Chat လင့်များ","စစ်ထုတ်ခြင်းနှင့် စစ်ထုတ်ရေးလုပ်ငန်း","စနစ်တစ်ခုလုံး စစ်ထုတ်ရေးကိရိယာများ","ဖယ်ထုတ်စာရင်း စွမ်းရည်များ","စခရင်များတွင် Field ခြောက်ဆယ်အထိ ထပ်တိုးခြင်း","တိုးမြှင့်ထားသော Export လုပ်ဆောင်ချက်","ဒေသအလိုက် စစ်ထုတ်ခြင်းနှင့် ကုမ္ပဏီစာရင်းများ","တစိတ်တပိုင်း ကိုက်ညီမှု ဖယ်ထုတ်ခြင်း","Export Service Layer နှင့် အမှားကိုင်တွယ်မှု","စကားပြောမှတ်တမ်းမှ Screener ရလဒ် သိမ်းဆည်းခြင်း","ငွေရေးကြေးရေး ဒေတာ ကိရိယာများ","ငွေရေးနေ့စဉ်ဈေးနှုန်း ကိရိယာ","နေ့စဉ်ဈေးနှုန်း ကိရိယာ စတင်မိတ်ဆက်ခြင်း","ငွေရေးကြေးရေး သမိုင်းဒေတာ","PriceEquity OHLCV ကိရိယာ","ဇယားကွက် ဖန်တီးရေး ကိရိယာ","ဇယားကွက်ပြသမှု၊ Groq နှင့် Parameter Profiles","Portfolio Analyst ကိရိယာ စတင်မိတ်ဆက်ခြင်း","Portfolio Analyst Field ညီမျှမှု","ကုမ္ပဏီ ငွေရေးကြေးရေး အုပ်စုလိုက် ရယူခြင်း","ROE Formatter အမှား ပြင်ဆင်ခြင်း","Scorecard နှင့် သုတေသန","Scorecard အဆင့်သတ်မှတ်ခြင်း","SAMAI Chatbot ထဲသို့ Scorecard ပေါင်းစပ်ခြင်း","Scorecard ကိရိယာ စတင်မိတ်ဆက်ခြင်း","Scorecard အသင်းပျမ်းမျှနှင့် Spider Chart","Portfolio Analyst ထဲရှိ Scorecard အဆင့်သတ်မှတ်ခြင်း","Broker Notes MCP ပေါင်းစပ်ခြင်း","Broker Notes ရက်စွဲစစ်ထုတ်ခြင်းနှင့် Opus 4.5","အဖြေ အရည်အသွေးနှင့် ယုံကြည်စိတ်ချရမှု","SAM တွင် ကိုးကားချက် စီမံခန့်ခွဲမှု","ကိုးကားချက် စနစ် စတင်မိတ်ဆက်ခြင်း","ကိုးကား၊ UI နှင့် Screener တိုးတက်မှုများ","ကိုးကားချက် Source ID အမှား ပြင်ဆင်ခြင်း","ကိုးကားချက် ထပ်နေမှု ဖယ်ရှားခြင်းနှင့် Tooltip","Anthropic အကြောင်းအရာနှင့် ရှုပ်ထွေးမှု တိုးတက်မှု","Streaming အကြောင်းအရာ ထုတ်ယူခြင်း","ပယ်ဖျက်ခြင်းနှင့် Streaming ယုံကြည်စိတ်ချရမှု","Platform နှင့် အခြေခံအဆောက်အအုံ","Chatbot ဗိသုကာ ပြန်လည်ဆောက်လုပ်ခြင်း","LangGraph Tool Loop ပြင်ဆင်ခြင်း","Context စီမံခန့်ခွဲမှု တိုးတက်မှုများ","Context Budget နှင့် Model အပ်ဒိတ်များ","LangGraph v1 နှင့် MIC Ticker ကိုက်ညီမှု","Model Fallback Chain များ","AI Core Runtime ခွဲထုတ်ခြင်း","Excel လုပ်ဆောင်ချက် တိုးတက်မှုများ","Firecrawl ဝဘ် ထုတ်ယူရေး ကိရိယာ","ပုံတင်ခြင်းနှင့် Vision လုပ်ဆောင်ခြင်း"]
  };
  function apply(lang){
    if(!NAV[lang]) lang = "en";
    document.documentElement.setAttribute("lang", lang);
    try{ localStorage.setItem("sapphire-features-lang", lang); }catch(e){}
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
    try{ saved = localStorage.getItem("sapphire-features-lang") || "en"; }catch(e){}
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
