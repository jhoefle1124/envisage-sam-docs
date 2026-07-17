/* SAM Feature Documentation — Help bar search */
(function(){
  function score(item, terms){
    var s = 0;
    var title = item.title.toLowerCase();
    var cat = item.category.toLowerCase();
    var kw = item.keywords;
    terms.forEach(function(t){
      if(!t) return;
      if(title.indexOf(t) === 0) s += 6;
      else if(title.indexOf(t) > -1) s += 4;
      if(cat.indexOf(t) > -1) s += 2;
      if(kw.indexOf(t) > -1) s += 1;
    });
    return s;
  }

  function search(query){
    var terms = query.toLowerCase().trim().split(/\s+/).filter(Boolean);
    if(!terms.length) return [];
    var results = [];
    (window.SAM_SEARCH_INDEX || []).forEach(function(item){
      var s = score(item, terms);
      if(s > 0) results.push({item: item, score: s});
    });
    results.sort(function(a,b){ return b.score - a.score; });
    return results.slice(0, 8).map(function(r){ return r.item; });
  }

  function renderResults(panel, results, query){
    if(!query.trim()){
      panel.innerHTML = "";
      panel.classList.remove("open");
      return;
    }
    if(!results.length){
      panel.innerHTML = '<div class="help-no-results">No matches for &ldquo;' + escapeHtml(query) + '&rdquo; &mdash; try a different word.</div>';
      panel.classList.add("open");
      return;
    }
    panel.innerHTML = results.map(function(item){
      return '<a class="help-result" href="' + item.href + '">' +
             '<span class="help-result-title">' + escapeHtml(item.title) + '</span>' +
             '<span class="help-result-cat">' + escapeHtml(item.category) + '</span>' +
             '</a>';
    }).join("");
    panel.classList.add("open");
  }

  function escapeHtml(s){
    return s.replace(/[&<>"']/g, function(c){
      return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c];
    });
  }

  document.addEventListener("DOMContentLoaded", function(){
    var input = document.getElementById("help-search-input");
    var panel = document.getElementById("help-search-results");
    if(!input || !panel) return;

    input.addEventListener("input", function(){
      var results = search(input.value);
      renderResults(panel, results, input.value);
    });

    input.addEventListener("keydown", function(e){
      if(e.key === "Enter"){
        var first = panel.querySelector(".help-result");
        if(first){
          e.preventDefault();
          window.location.href = first.getAttribute("href");
        }
      }
      if(e.key === "Escape"){
        input.value = "";
        panel.innerHTML = "";
        panel.classList.remove("open");
        input.blur();
      }
    });

    input.addEventListener("focus", function(){
      if(input.value.trim()) renderResults(panel, search(input.value), input.value);
    });

    document.addEventListener("click", function(e){
      if(!panel.contains(e.target) && e.target !== input){
        panel.classList.remove("open");
      }
    });
  });
})();
