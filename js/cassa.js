/**
 * @(#)cassa.js	1.0.0 17-ago-2011
 * Copyright (c) 17-ago-2011 Nicolò Mazzon. All rights reserved.
 *
 *
 *
 *******************************************************************************
 * Data             Versione        Descrizione
 *
 * 17-ago-2011          1.0.0               Creazione
 *
 */

$().ready(prepare_page);

/**
 * 
 */
function prepare_page(){
    $( "#menu" ).tabs();
    
    $("#piatti").tabs().addClass('ui-tabs-vertical ui-helper-clearfix');
    $("#piatti li").removeClass('ui-corner-top').addClass('ui-corner-left');

    $("#menu_dx").accordion({navigation: true,active: 1,collapsible: true,icons: '', autoHeight: false});
}
