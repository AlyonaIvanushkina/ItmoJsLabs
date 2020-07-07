$(document).ready(function(){

    let totalQty = 0;
    let totalPrice = 0;
    let budjet = 0;

    $('.node').matchHeight();
    $('.img-wrap').matchHeight();

    let ids = ['sdd', 'hdd', 'usbdrive'];
    fetch('https://kodaktor.ru/cart_data.json')
        .then(response => response.json())
        .then(json => {
            ids.forEach(nodeId => {
                $('#'+nodeId+' .node-cost .node-price').html(json[nodeId]);
                $('#'+nodeId).attr('node-price', json[nodeId]);
            });
        });

    (function () {
        do {
            budjet = prompt('How much money do you have? ($)', 0);
        } while(budjet <= 0);
        $('#budget').html(budjet);
    })();

    $('#node-list').on('click', '.node .remove', function(e){
        $(this).parent('div').remove();
        // Обновление общего количества
        totalQty--;
        $("#total-qty").html(totalQty);
         // Обновление общей цены
        let price = parseInt($(this).parent('div').find(".node-price").html());
        totalPrice = totalPrice - price;
        $("#total-price").html(totalPrice);
    });

    $(".node").draggable({
        helper: 'clone',
        revert: true            
    });
            
    $("#node-list").droppable({
        accept: ".node",
        activeClass: "drop-active",
        hoverClass: "drop-hover",
        drop: function(event, ui) {
            let price = parseInt(ui.draggable.find(".node-price").html());
            let newPrice = totalPrice + price; 
            let balance = budjet - totalPrice;
            
            if (newPrice > budjet) {
                message = 'You have only $' + balance + ' !'
                alert(message);
            } else {
                let node = ui.draggable.html();
                let nodeId = ui.draggable.attr("id");
                let html = '<div class="node icart">';
                html = html + '<a class="remove ' + nodeId + '">&times;</a>';
                html = html + node + '</div>';

                $("#node-list").append(html);
            
                // Обновление общего количества
                totalQty++;
                $("#total-qty").html(totalQty);
                // Обновление общей цены
                totalPrice = totalPrice + price;
                $("#total-price").html(totalPrice);
            }
        }
    });

    $("#cart-clear").click(function() {
        $("#node-list").fadeOut("2000", function() {
            $(this).html("").fadeIn("fast").css({left: 0});
        });
        $("#total-qty").html("0");
        $("#total-price").html("0");
        totalQty = 0;
        totalPrice = 0;
        return false;
    });
});
