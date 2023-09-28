function openTab(tabId, button) {
    var tabs = document.querySelectorAll('.tab');
    var buttons = document.querySelectorAll('.tab-button-container button');
    
    tabs.forEach(function(tab) {
        tab.classList.add('hidden');
    });

    buttons.forEach(function(btn) {
        btn.classList.remove('border-white');
    });
    
    var tabElement = document.getElementById(tabId);
    if (tabElement) {
        tabElement.style.display = 'flex flex-col';
        tabElement.classList.remove('hidden');
    }
    
    if (button) {
        button.classList.add('border-white');
    }
}

openTab('tab1', document.querySelector('.tab-button-container button'));
