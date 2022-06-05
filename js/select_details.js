function selected_value() {
    var selected = document.querySelector('input[type="radio"]:checked').value;

    var selector = new Array("machine_learning", "natural_lang_process", "computer_vision");

    for(var i = 0; i < selector.length; i++) {
        if(selected == selector[i]) {
            switch(i) {
                case 0:
                    document.getElementById(selector[0]).style.display = "block";
                    document.getElementById(selector[1]).style.display = "none";
                    document.getElementById(selector[2]).style.display = "none";
                    break;
                case 1:
                    document.getElementById(selector[0]).style.display = "none";
                    document.getElementById(selector[1]).style.display = "block";
                    document.getElementById(selector[2]).style.display = "none";
                    break;
                case 2:
                    document.getElementById(selector[0]).style.display = "none";
                    document.getElementById(selector[1]).style.display = "none";
                    document.getElementById(selector[2]).style.display = "block";
                    break;
            }
        }
    }
}