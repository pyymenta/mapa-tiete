jQuery(document).ready(function() {
  var modal = $('#container_lightbox');
  function  fecharModal() {
    $('body').removeClass('modal_open');
    $(modal).css({
      'opacity': '1',
      'max-height': '100%',
      'height': '100%',
      'overflow': 'auto'
    });
  }
  function  abrirModal() {
    $('body').addClass('modal_open');
    $(modal).css({
      'opacity': '1',
      'height': '1',
      'overflow': 'hidden',
    });
  }


  var spCoords = [-5191207.638373509, -2698731.105121977];
// var extent = [-5191207.638373509,-2698731.105121977,0,0];
// var extent = [0,0,8000,3000];
  var extent = [-5191207.638373509, -2698731.105121977, -5183207.638373509, -2695731.105121977];
//Teste ol
  var projection = new ol.proj.Projection({
    code: 'xkcd-image',
    units: 'pixels',
    extent: extent
  });

  var mapLayers = [
    new ol.layer.Tile({source: new ol.source.OSM()}),
    new ol.layer.Image({
      source: new ol.source.ImageStatic({
        url: '../wp-includes/img/background.png',
        //url: 'background-transp.png',
        projection: projection,
        imageExtent: extent
      })
    })];

/// Adiciona camadas ao array mapLayers
  var kmlUrls = [
    '1A.kml',
    '1B.kml',
    '2A.kml',
    '3A.kml',
    '3B.kml',
    '3C.kml',
    '4A.kml',
    '4B.kml',
    '5A.kml'
  ];

  //JSON com Informações de cada categoria
  const information = {
    '1A': {
      'titulo': 'Destamponamento de córrego',
      'texto': 'O destamponamento é uma solução adotada para os córregos limpos' +
                ' a fim de aumentar a sua capacidade de vazão' +
                ' e melhorar a drenagem superficial urbana. Além disso, ' +
                'a abertura dos córregos promove o contato dos corpos d´água com a' +
                ' atmosfera e colabora para o ressurgimento da vida aquática e ciliar;',
      'img': '../img/1A.png'
    },
    '2A': {
      'titulo': 'Implantar eixos drenantes',
      'texto': 'Criar grandes cordões de infiltração das águas pluviais em locais estratégicos, ' +
                'transversais ao sentido do escoamento superficial das bacias de drenagem, ' +
                'colaborando para impedir que as águas atinjam os pontos mais baixos da várzea;',
      'img': '../img/2A.png'
    },
    '3A': {
      'titulo': 'Praças secas rebaixadas',
      'texto': 'Orientar o escoamento das águas pluviais em direção a grandes áreas projetadas para receber,' +
                ' reter e retardar a descida de grandes volumes d´água;',
      'img': '../img/3A.png'
    }
  };

  for (var i = 0; i < kmlUrls.length; i++) {
    var camada = platMapAPI.createVectorLayerFromKML("../kmls/"+kmlUrls[i]);
    camada.set("name", 'camada' + (i + 1));
    mapLayers.push(camada);
  }

  var view = new ol.View({
    // center: spCoords,
    center: ol.extent.getCenter(extent),
    zoom: 11,
    // minZoom: 10,
    maxZoom: 30
  });


  var map = new ol.Map({
    layers: mapLayers,
    target: 'mapa',
    view: view
  });

// Teste

  var featureOverlay = new ol.layer.Vector({
    source: new ol.source.Vector(),
    map: map,
    style: new ol.style.Style({
      stroke: new ol.style.Stroke({
        color: '#fdd',
        width: 2
      }),
      fill: new ol.style.Fill({
        color: 'rgba(255,0,0,0.1)'
      })
    })
  });

  var highlight;
  var displayFeatureInfo = function (pixel) {
    var feature = map.forEachFeatureAtPixel(pixel, function (feature) {
      return feature;
    });

    var info = document.getElementById('info');
    if (feature) {
      // info.innerHTML = feature.getId() + ': ' + feature.get('name');
      info.innerHTML = feature.getProperties();
    } else {
      info.innerHTML = '&nbsp;';
    }

    if (feature !== highlight) {
      if (highlight) {
        featureOverlay.getSource().removeFeature(highlight);
      }
      if (feature) {
        featureOverlay.getSource().addFeature(feature);
      }
      highlight = feature;
    }

  };
  var teste;
  var myFunc = function (pixel) {
    var feature = map.forEachFeatureAtPixel(pixel, function (feature) {
      return feature;
    });

    var info = document.getElementById('info');
    if (feature) {
      // info.innerHTML = feature.getId() + ': ' + feature.get('name');
      console.log(feature.getProperties());
      console.log("Informacoes: ",information);
      abrirModal();
      teste = feature;
    } else {
      //info.innerHTML = '&nbsp;';
      fecharModal();
    }

    if (feature !== highlight) {
      if (highlight) {
        featureOverlay.getSource().removeFeature(highlight);
      }
      if (feature) {
        featureOverlay.getSource().addFeature(feature);
      }
      highlight = feature;
    }

  };

 /* map.on('pointermove', function (evt) {
    if (evt.dragging) {
      return;
    }
    var pixel = map.getEventPixel(evt.originalEvent);
    displayFeatureInfo(pixel);
  });*/

  $(".close").click(fecharModal);
  map.on('click', function (evt) {
    myFunc(evt.pixel);
  });

});