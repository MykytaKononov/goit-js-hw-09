import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */let e={email:"",message:""};const l=localStorage.getItem("feedback-form-state");l&&(e=JSON.parse(l),document.querySelector('[name="email"]').value=e.email||"",document.querySelector('[name="message"]').value=e.message||"");const t=document.querySelector(".feedback-form");(e.email===""||e.message==="")&&alert("Fill please all fields");t.addEventListener("submit",a=>{a.preventDefault(),console.log(e),localStorage.clear(),t.reset()});t.addEventListener("input",a=>{a.target.name==="email"&&(e.email=a.target.value),a.target.name==="message"&&(e.message=a.target.value),localStorage.setItem("feedback-form-state",JSON.stringify(e))});
//# sourceMappingURL=2-form.js.map
