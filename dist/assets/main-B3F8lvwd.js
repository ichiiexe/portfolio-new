(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function a(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(t){if(t.ep)return;t.ep=!0;const s=a(t);fetch(t.href,s)}})();const l=document.getElementById("app"),r=document.getElementById("menuNav"),n=document.getElementById("menuBar"),d=document.getElementById("menuClose");n.addEventListener("click",e=>{r.classList.remove("hidden"),setTimeout(()=>{r.classList.remove("opacity-0"),r.classList.add("opacity-95")},10)});d.addEventListener("click",e=>{r.classList.add("opacity-0"),r.classList.remove("opacity-95"),setTimeout(()=>{r.classList.add("hidden")},10)});const u=document.querySelectorAll(".workHover");u.forEach(e=>{e.addEventListener("mouseover",()=>{e.classList.remove("before:grayscale","before:filter","before:opacity-40"),e.firstElementChild.classList.remove("opacity-100"),e.firstElementChild.classList.add("opacity-0"),e.lastElementChild.classList.remove("translate-y-10"),e.lastElementChild.classList.add("bg-rose-600","bg-opacity-20")}),e.addEventListener("mouseout",()=>{e.classList.add("before:grayscale","before:filter","before:opacity-40"),e.firstElementChild.classList.add("opacity-100"),e.firstElementChild.classList.remove("opacity-0"),e.lastElementChild.classList.add("translate-y-10"),e.lastElementChild.classList.remove("bg-rose-600","bg-opacity-20")})});window.addEventListener("load",()=>{console.log(l),setTimeout(()=>{const e=document.getElementById("loader"),o=document.getElementById("content");e.classList.remove("opacity-100"),e.classList.add("opacity-0"),o.classList.add("opacity-100"),o.classList.remove("opacity-0"),setTimeout(()=>{e.classList.add("hidden"),o.classList.remove("hidden")},400)},600)});