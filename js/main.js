var listabirre = $('#listabirre');
var carello =[];

birre.forEach(birra => {
    console.log(birre);
    let contenitore = $('<div></div>').addClass('col-md-6');
    let row = $('<div></div>').addClass('row mt-5');
    let contenitoreimmagine = $('<div></div>').addClass('col-md-4 text-center');
    let immagine = $('<img></img>').addClass('img-fluid').attr('src', birra.immagine );

    let descrizione = $('<div></div>').addClass('col-md-8');
    let titolo = $('<h3></h3>').html(birra.nome);
    let informazione = $('<p></p>').html(birra.descrizione);
    let lista = $('<ul></ul>');
    let listipo = $('<li></li>').html(birra.tipo.join(', '));
    let listgrado = $('<li></li>').html(birra.gradoAlcolico);
    let prezzo = $('<p></p>').html(birra.prezzo + '€');
    let aggiungi = $('<button></button>').addClass('btn btn-secondary').html('Aggiungi al carello');
    
    immagine.appendTo(contenitoreimmagine);
    contenitoreimmagine.appendTo(row);
    
    titolo.appendTo(descrizione);
    
    
    informazione.appendTo(descrizione);
    

    listipo.appendTo(lista);
    listgrado.appendTo(lista);
    lista.appendTo(descrizione);
    

    prezzo.appendTo(descrizione);

    aggiungi.appendTo(descrizione);
    
    descrizione.appendTo(row);
    row.appendTo(contenitore); 
    contenitore.appendTo(listabirre);
});

// per aggiungere al carello



/*<div class="col-md-6">
    <div class="row">
        <div class="col-md-4"><img></div>
            <div class="col-md-8"><h3></h3>
                <p></p>
                <ul>
                    <li></li>
                    <li></li>
                </ul>
                <button type="button" class="btn btn-secondary">Aggiungi al carello</button>
            </div>
        </div>
    </div>*/