var tabs, tabsContent, wrapper;

window.onload = function() {
    tabs = document.getElementsByClassName("tab");
    tabsContent = document.getElementsByClassName("tabContent");
    wrapper = document.getElementById("wrapper");
    
    wrapper.addEventListener("click", clickListener);

    hideTabsContent(1);
}

function hideTabsContent(a) {
    for (var i = a; i < tabsContent.length; i++) {
        tabsContent[i].classList.remove("show");
        tabsContent[i].classList.add("hide");
        tabs[i].classList.remove("whiteborder");
    }
}

function showTabsContent(a) {
    if (tabsContent[a].classList.contains("hide")) {
        hideTabsContent(0);
        tabsContent[a].classList.remove("hide");
        tabsContent[a].classList.add("show");
        tabs[a].classList.add("whiteborder");
    }
}

function clickListener(event) {
    var target = event.target;
    if (target.className == "tab") {
        for (var i = 0; i < tabs.length; i++) {
            if (target == tabs[i]) {
                showTabsContent(i);
                break;
            }
        }
    }
}
