<?php
    class App
    {
        static function getHead($title)
        {
            include(HTML_DIR.'head.html');
            echo('<title>');
            echo(SITE_NAME . ' - ' . $title);
            echo('</title></head>');

        }
        static function getModal()
        {
            include(HTML_DIR.'modal.html');
        }
        static function getLeftMain()
        {
            include(HTML_DIR . 'left-main.html');
        }
        static function getRightMain()
        {
            include(HTML_DIR . 'right-main.html');
        }
        static function getNavBar()
        {
            include (HTML_DIR . 'navbar.html');
        }
        static function getEmployee_gg()
        {
            include(HTML_DIR . 'empleado-gg.html');
        }
        static function getMenuGG()
        {
            include(HTML_DIR . 'menu-gg.html');

        }
        static function getMenuGS()
        {
            include(HTML_DIR . 'menu-gs.html');
        }
        static function getMenuE()
        {
            include(HTML_DIR . 'menu-e.html');
        }
        static function getSitio()
        {
            include(HTML_DIR . 'sitio.html');
        }
        static function getInsidencia()
        {
            include(HTML_DIR . 'insidencia.html');
        }
        static function get404()
        {
            include(HTML_DIR . '404.html');
        }
        static function getModalPuesto()
        {
            include(HTML_DIR. 'modalpuesto.html');
        }
        static function getSitioEstatico()
        {
            include(HTML_DIR . 'sitio-estatico.html');
        }
        static function getModalModificarComentario()
        {
            include(HTML_DIR . 'modal-modificar-comentario.html');
        }

        static function getUsuario()
        {
            include(HTML_DIR . 'usuario.html');
        }
        static function getSubir()
        {
            include(HTML_DIR . 'example.html');
        }
        static function getAvisos()
        {
            include(HTML_DIR . 'avisos.html');
        }
        static function getGestionSolicud()
        {
            include(HTML_DIR . 'gestion-solicitud.html');
        }
    /*    static function getModalModificarInsidencia()
        {
            include(HTML_DIR . 'modal-modificar-insidencia');
        } */
        static function getSolicitud()
        {
            include(HTML_DIR . 'solicitudmedica.html');
        }
        static function getNuevaInsidencia()
        {
            include(HTML_DIR . 'nuevainsidencia.html');
        }
        static function getSeguimientos()
        {
            include(HTML_DIR . 'showseguimiento.html');
        }
        static function getMenuCategoria()
        {
            include(HTML_DIR . 'menucategoria.html');
        }
        static function getCategoria()
        {
            include(HTML_DIR . 'categoria.html');
        }
        static function getMenuSubcategoria()
        {
            include(HTML_DIR . 'menusubcategoria.html');
        }
        static function getSubCategoria()
        {
            include(HTML_DIR . 'subcategoria.html');

        }
        static function getMenuSitio()
        {
            include(HTML_DIR . 'seguimiento.html');
        }
        static function getPermisos()
        {
            include(HTML_DIR . 'permisos.html');
        }
        static function getModalJefe()
        {
            include(HTML_DIR . 'modal-seleccionar-jefe.html');
        }
        static function getInsidenciaSitio()
        {
            include(HTML_DIR . 'insidenciasitio.html');
        }
    }
?>
