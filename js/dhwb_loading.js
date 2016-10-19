(function ($)
{
    var is_correctly_init_loading = true;
    var tbl_html_element = new Array("loading_waiting",
    "loading_success",
    "loading_error",
    "loading_blockedfilter");
    for(var index = 0; index < tbl_html_element.length; index++)
    {
        if($('#'+tbl_html_element[index]).length == 0)
        {
            is_correctly_init_loading = false;
            console.warn("Element '#'"+tbl_html_element[index]+" doesn't exist");
        }
    }

    
    if(is_correctly_init_loading == true)
    {
        var nbr_load_loading = 0;
        var nbr_load_blocked_loading = 0;
        var iserror_loading = false;

        /*  REQUIRES    :   blocked
            MODIFIES    :
            EFFECTS     :
        */
        loading_showFiltreWaiting = function (blocked)
        {
            if(typeof(blocked) === "undefined"
            || (blocked != true &&
                blocked != false))
            {
                var blocked = false;
            }

            if(iserror_loading == false)
            {
                if(blocked == true)
                {
                    nbr_load_blocked_loading++;
                    if(nbr_load_blocked_loading == 1)
                    {
                        $('#loading_blockedfilter').show();
                    }
                }
                else {
                    nbr_load_loading++;
                }

                $('#loading_waiting').show();
                $('#loading_success').hide();
                $('#loading_error').hide();
            }
        };


    }
    else {
        console.error("Element aren't correctly implements");
    }



    /*loading_hideFiltreWaiting = function(blocked)
    {
        if(typeof(blocked) === "undefined")
        {
            var blocked =
        }
        if(filterwaiting_isblocked == false)
        {
            filterwaiting_index--;
            if(filterwaiting_index <= 0)
            {
                filterwaiting_index = 0;
                $('#icon_waiting').hide();
                $('#filterOnCharge').hide();
                $('#icon_error').hide();
                $('#icon_success').hide();
            }
        }
    };
    loading_hideFiltreWaiting_error = function (error)
    {
        if(filterwaiting_isblocked == false)
        {
            filterwaiting_isblocked = true;
            filterwaiting_index = 0;
            $('#icon_waiting').hide();
            if (error != "")
            {
                $('#icon_error').html("<span class='errorText'> : " + error + "</span>")
                        .addClass('text_in');
            }
            else
            {
                $('#icon_error').removeClass('text_in');
            }

            $('#icon_error').show();

            setTimeout(function()
            {
                filterwaiting_isblocked = false;
                $('#icon_error, #filterOnCharge').hide();
            },20000);
            $('#icon_error').unbind('click').click(function()
            {
                filterwaiting_isblocked = false;
                $('#icon_error, #filterOnCharge').hide();
            });

        }
    };
    loading_hideFiltreWaiting_errorajax = function(data)
    {
        if(typeof(data) != "undefined"
            && typeof(data.responseJSON) != "undefined"
            && typeof(data.responseJSON['txt']) != "undefined")
        {
            hideFiltreWaiting_error(gl_common_errorgetpage + data.responseJSON['txt']);
        }
        else
        {
            hideFiltreWaiting_error(gl_common_errorgetpage + gl_common_veuillezreessayerplustard);
        }
    }
    loading_hideFiltreWaiting_success = function ()
    {
        if(filterwaiting_isblocked == false)
        {
            $('#icon_waiting').hide();
            $('#filterOnCharge').hide();
            $('#icon_success').show();
            setTimeout(function()
            {
                filterwaiting_index--;
                if(filterwaiting_index == 0)
                {
                    $('#icon_success').hide();
                    $('#icon_waiting').hide();
                    $('#filterOnCharge').hide();
                }
            }, 2000);
        }
    };*/

})(jQuery);
