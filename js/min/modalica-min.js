$(document).ready(function(){$.fn.modalica=function(){var a=$.fn.modalica,i=$("body");a.init=function(){i.append('<div class="modalica-modal"><div class="modalica--wrapper"><div class="modalica--close"><span>x</span></div><div class="modalica--content"></div></div></div>')},a.init();var c=$(".modalica-modal"),n=c.find(".modalica--content");this.click(function(i){i.preventDefault();var c=$(this).attr("href");a.open(c)}),$(".modalica--close").click(function(i){i.preventDefault(),a.close()}),a.open=function(a){i.addClass("modalica-active");var o=$(a).html();n.empty().append(o),c.addClass("active")},a.close=function(){c.removeClass("active"),i.removeClass("modalica-active")}}});