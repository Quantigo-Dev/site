! function() {
    for (var t = document.querySelectorAll(".image-spliter .mover"), e = t.length; e--;) {
        var n = t[e].getBoundingClientRect().width,
            i = t[e].nextElementSibling,
            l = i.getBoundingClientRect().width;
        i.getBoundingClientRect().height;
        t[e].style.left = l / 2 - n / 2 + "px", i.style.clip = "rect(0px, " + l / 2 + "px, 999px, 0px)";
        var s, c = 0;
        t[e].addEventListener("mousedown", function(t) {
            s = t.clientX, c = 1
        }), t[e].addEventListener("mouseup", function(t) {
            c = 0
        }), t[e].addEventListener("mouseout", function(t) {
            c = 0
        }), t[e].addEventListener("touchstart", function(t) {
            s = t.touches[0].clientX, c = 1
        }), t[e].addEventListener("touchend", function(t) {
            c = 0
        }), t[e].addEventListener("mousemove", function(t) {
            c && (this.style.left = parseInt(this.style.left) + (event.clientX - s) + "px", s = event.clientX, this.nextElementSibling.style.clip = "rect(0px, " + (this.getBoundingClientRect().width / 2 + parseInt(this.style.left)) + "px, " + this.getBoundingClientRect().height + "px, 0px)")
        }), t[e].addEventListener("touchmove", function(t) {
            c && (this.style.left = parseInt(this.style.left) + (t.touches[0].clientX - s) + "px", s = t.touches[0].clientX, this.nextElementSibling.style.clip = "rect(0px, " + (this.getBoundingClientRect().width / 2 + parseInt(this.style.left)) + "px, " + this.getBoundingClientRect().height + "px, 0px)")
        })
    }
    window.addEventListener("resize", function(t) {
        for (var e = document.querySelectorAll(".image-spliter .mover"), n = e.length; n--;) {
            var i = e[n].getBoundingClientRect().width,
                l = e[n].nextElementSibling,
                s = l.getBoundingClientRect().width,
                c = l.getBoundingClientRect().height;
            e[n].style.left = s / 2 - i / 2 + "px", l.style.clip = "rect(0px, " + s / 2 + "px, " + c + "px, 0px)"
        }
    })
}();