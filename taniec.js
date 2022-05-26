function dancing(event, pixel){
        $(event.target).animate({top: pixel + 'px'}, function(){
        dancing(event, -pixel);
        });
        }

        $(document).ready(function(){
        var speed=120;//speed ot the text
        $('#sidebar a').hover(function(event){
        $(this).stop().animate({top: '-5px'}, speed, function(){
        dancing(event, 5);
        });
        }, function(){
        //mouse out
        $(this).stop().animate({top: '0'}, speed);
        });

        });