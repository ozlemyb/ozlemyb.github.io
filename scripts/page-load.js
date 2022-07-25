

window.addEventListener('load', function() {
    this.document.body.classList.remove('fade');    
});
//window.addEventListener('unload', function() {});
window.addEventListener('pageshow', function() {
    this.document.body.classList.remove('fade');    
});