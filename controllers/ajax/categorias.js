$(document).ready(function()
{
    $('#table').on('click','.categoria',function()
    {
        $('#table .selected').removeClass('selected');
        $(this).toggleClass('selected');
        var id_mod = $(this).children(0).html();


        if($('[name = "editar"]').prop('checked') == true)
        {
           // getAvisos(id_mod);
        }
       else
           {
                $('[name= "id_aviso"]').val(0);
                $('[name= "titulo"]').val("");
                $('[name= "fecha_publicacion"]').val("");
                $('[name= "fecha_finalizacion"]').val("");
                $('[name= "contenido"]').val("");
           }
    });

    $('#formcategoria').submit(function(e)
    {
        e.preventDefault();
        var formulario = $('#formcategoria');
        var data = formulario.serialize();
        var ms = $('#message');
        var modal = $('#myModal');
        agregarCategoria(data,modal,ms);

    });

    $('#searchtxt').keypress(
        function(e)
        {
            //condicion para linpiar de caracteres especiales (no alfa nunmericos)
            var pressed = (e.key.toString().length == 1)? e.key :'';
            var search = $(this).val()+ pressed;
            searchCategoria(search,$('#table'));
        });

    $('#table').on('click','.cambiar-estado',function()
    {
        //invertimos el estado
        estado = ($(this).attr('estado') == 0 )? '1' : '0';
        id = $(this).attr('id');

        cambiarEstado(id,estado);
    });
});

function agregarCategoria(data,modal,message_area_modal)
{
    $.ajax(
    {
        url: '?post=categoria&'+data,
        type: 'POST',
        data: null,
        dataType: "html",
        cache: false,
        contentType: false,
        processData: false,
        beforeSend:function()
                    {
                        text = '<div class="alert alert-dismissible alert-info center s12 m12">' +
                        '<button type="button" class="close" data-dismiss="alert">&times;</button>' +
                        '<img src="views/img/load.gif"></img> Creando categoría</div>';
                        $('#result').html(text);
                    },
        complete: function(res)
                    {
                        try
                        {
                            if(res.responseText==1)
                            {
                                message_area_modal.html("<img src='views/img/success.png'></img> La categoría se ha creado");
                                modal.openModal();
                                $('#result').html('');
                                searchCategoria("",$('#table'));
                            }
                            else
                            {
                                text = '<div class="alert alert-dismissible alert-danger">' +
                                '<button type="button" class="close" data-dismiss="alert">&times;</button>' + http.responseText + '</div>';
                                $('#result').html(http.responseText);
                            }
                        }
                        catch (e)
                        {
                            $('#result').html(res.responseText);
                        }
                    }
    });
}


function editarCategoria(data,modal,message_area_modal)
{
    $.ajax(
    {
        url: '?post=categoria&mod=1&'+data,
        type: 'POST',
        data: null,
        dataType: "html",
        cache: false,
        contentType: false,
        processData: false,
        beforeSend:function()
                    {
                        text = '<div class="alert alert-dismissible alert-info center s12 m12">' +
                        '<button type="button" class="close" data-dismiss="alert">&times;</button>' +
                        '<img src="views/img/load.gif"></img> Creando categoría...</div>';
                        table.html(text);
                    },
        complete: function(res)
                    {
                        try
                        {
                            if(res.responseText==1)
                            {
                                message_area_modal.html("<img src='views/img/success.png'></img> La categoría se ha editado");
                                modal.openModal();
                                $('#result').html('');
                            }
                            else
                            {
                                text = '<div class="alert alert-dismissible alert-danger">' +
                                '<button type="button" class="close" data-dismiss="alert">&times;</button>' + http.responseText + '</div>';
                                $('#result').html(http.responseText);
                            }
                        }
                        catch (e)
                        {
                            $('#result').html(res.responseText);
                        }
                    }
    });
}


function searchCategoria(search,table)
{
    $.ajax(
    {
        url: '?get=categorias_table&search='+search,
        type: 'POST',
        data: null,
        dataType: "html",
        cache: false,
        contentType: false,
        processData: false,
        beforeSend:function()
                    {
                        text = '<div class="alert alert-dismissible alert-info center s12 m12">' +
                        '<button type="button" class="close" data-dismiss="alert">&times;</button>' +
                        '<img src="views/img/load2.gif"></img> Cargando...</div>';
                        table.html(text);
                    },
        complete: function(res)
                    {
                        try
                        {
                            table.html(res.responseText);
                        }
                        catch (e)
                        {
                            table.html(res.responseText);
                        }
                    }
    });
}
function cambiarEstado(id,estado)
{
    data = '&mod=2&'+'id='+id+'&estado='+estado;

    $.ajax(
    {
        url: '?post=categoria'+data,
        type: 'POST',
        data: null,
        dataType: "html",
        cache: false,
        contentType: false,
        processData: false,
        complete: function(res)
                    {

                        try
                        {
                            if(res.responseText==1)
                            {
                                $('#message').html('Se ha cambiado el estado dela categoría');
                                $('#myModal').openModal();
                                searchCategoria("",$('#table'));
                            }
                            else
                            {
                                $('#message').html('Se ha ocurrido un error');
                                $('#myModal').openModal();
                            }
                        }
                        catch (e)
                        {
                            $('#message').html(res.responseText);
                                $('#myModal').openModal();
                        }
                    }
    });
}

