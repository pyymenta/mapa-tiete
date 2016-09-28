//JSON com Informações de cada categoria
/*const information = {
  '_1A': {
    'titulo': 'Destamponamento de córrego',
    'texto': 'O destamponamento é uma solução adotada para os córregos limpos' +
              ' a fim de aumentar a sua capacidade de vazão' +
              ' e melhorar a drenagem superficial urbana. Além disso, ' +
              'a abertura dos córregos promove o contato dos corpos d´água com a' +
              ' atmosfera e colabora para o ressurgimento da vida aquática e ciliar;',
    'img': '../img/1A.png'
  },
  '_2A': {
    'titulo': 'Implantar eixos drenantes',
    'texto': 'Criar grandes cordões de infiltração das águas pluviais em locais estratégicos, ' +
              'transversais ao sentido do escoamento superficial das bacias de drenagem, ' +
              'colaborando para impedir que as águas atinjam os pontos mais baixos da várzea;',
    'img': '../img/2A.png'
  },
  '_3A': {
    'titulo': 'Praças secas rebaixadas',
    'texto': 'Orientar o escoamento das águas pluviais em direção a grandes áreas projetadas para receber,' +
              ' reter e retardar a descida de grandes volumes d´água;',
    'img': '../img/3A.png'
  }
};*/
const information = {
  '_1A': {
  'titulo': 'Destamponamento de córrego ',
  'texto': 'O destamponamento é uma solução adotada para os córregos limpos a fim de aumentar a sua capacidade de vazão e melhorar a drenagem superficial urbana. Além disso, a abertura dos córregos promove o contato dos corpos d´água com a atmosfera e colabora para o ressurgimento da vida aquática e ciliar;'
  },
  '_1B': {
  'titulo': 'Qualificação de córregos abertos',
  'texto': 'O destamponamento é uma solução adotada para os córregos limpos a fim de aumentar a sua capacidade de vazão e melhorar a drenagem superficial urbana. Além disso, a abertura dos córregos promove o contato dos corpos d´água com a atmosfera e colabora para o ressurgimento da vida aquática e ciliar;'
  },
  '_2A': {
  'titulo': 'Implantar eixos drenantes',
  'texto': 'Criar grandes cordões de infiltração das águas pluviais em locais estratégicos, transversais ao sentido do escoamento superficial das bacias de drenagem, colaborando para impedir que as águas atinjam os pontos mais baixos da várzea;'
  },
  '_2B': {
  'titulo': 'Canteiros drenantes',
  'texto': 'Criar grandes cordões de infiltração das águas pluviais em locais estratégicos, transversais ao sentido do escoamento superficial das bacias de drenagem, colaborando para impedir que as águas atinjam os pontos mais baixos da várzea. '
  },
  '_3A': {
  'titulo': 'Praças secas rebaixadas',
  'texto': 'Orientar o escoamento das águas pluviais em direção a grandes áreas projetadas para receber, reter e retardar a descida de grandes volumes d´água;'
  },
  '_3B': {
  'titulo': 'Praças de absorção',
  'texto': 'Orientar o escoamento das águas pluviais em direção a grandes áreas projetadas para receber, reter e retardar a descida de grandes volumes d´água;'
  },
  '_3C': {
  'titulo': 'Alças de pontes',
  'texto': 'Orientar o escoamento das águas pluviais em direção a grandes áreas projetadas para receber, reter e retardar a descida de grandes volumes d´água;'
  },
  '_4A': {
  'titulo': 'Parques lineares',
  'texto': 'Aumentar o número de praças e parques que proporcionam áreas de lazer, convívio e contemplação e absorvem e refletem a irradiação solar, amenizando as ilhas de calor.<br>A recuperação ambiental das margens do sistema hídrico  colaboram para infiltração e armazenamento da água no lençol freático e para a criação da mata ciliar, importante componente para a produção de alimentos para a fauna aquática;'
  },
  '_4B': {
  'titulo': 'Outros parques',
  'texto': 'Aumentar o número de praças e parques que proporcionam áreas de lazer, convívio e contemplação e absorvem e refletem a irradiação solar, amenizando as ilhas de calor.<br>A recuperação ambiental das margens do sistema hídrico  colaboram para infiltração e armazenamento da água no lençol freático e para a criação da mata ciliar, importante componente para a produção de alimentos para a fauna aquática;'
  },
  '_5A': {
  'titulo': 'Requalificação de praças existentes',
  'texto': 'Aumentar o número de praças e parques que proporcionam áreas de lazer, convívio e contemplação e absorvem e refletem a irradiação solar, amenizando as ilhas de calor.<br>A recuperação ambiental das margens do sistema hídrico  colaboram para infiltração e armazenamento da água no lençol freático e para a criação da mata ciliar, importante componente para a produção de alimentos para a fauna aquática;'
  },
  '_5B': {
  'titulo': 'Praças oriundas de destinação obrigatória',
  'texto': 'Aumentar o número de praças e parques que proporcionam áreas de lazer, convívio e contemplação e absorvem e refletem a irradiação solar, amenizando as ilhas de calor.<br>A recuperação ambiental das margens do sistema hídrico  colaboram para infiltração e armazenamento da água no lençol freático e para a criação da mata ciliar, importante componente para a produção de alimentos para a fauna aquática;'
  },
  '_5C': {
  'titulo': 'Praças sobre túneis',
  'texto': 'Aumentar o número de praças e parques que proporcionam áreas de lazer, convívio e contemplação e absorvem e refletem a irradiação solar, amenizando as ilhas de calor.<br>A recuperação ambiental das margens do sistema hídrico  colaboram para infiltração e armazenamento da água no lençol freático e para a criação da mata ciliar, importante componente para a produção de alimentos para a fauna aquática;'
  },
  '_5D': {
  'titulo': 'Praças sob viadutos',
  'texto': 'Aumentar o número de praças e parques que proporcionam áreas de lazer, convívio e contemplação e absorvem e refletem a irradiação solar, amenizando as ilhas de calor.<br>A recuperação ambiental das margens do sistema hídrico  colaboram para infiltração e armazenamento da água no lençol freático e para a criação da mata ciliar, importante componente para a produção de alimentos para a fauna aquática;'
  },
  '_5E': {
  'titulo': 'Outras praças',
  'texto': 'Aumentar o número de praças e parques que proporcionam áreas de lazer, convívio e contemplação e absorvem e refletem a irradiação solar, amenizando as ilhas de calor.<br>A recuperação ambiental das margens do sistema hídrico  colaboram para infiltração e armazenamento da água no lençol freático e para a criação da mata ciliar, importante componente para a produção de alimentos para a fauna aquática;'
  },
  '_6A': {
  'titulo': 'Alamedas',
  'texto': 'Criar um sistema ambiental em rede aumenta a conectividade entre áreas verdes, proporcionando percursos sombreados aos usuários e caminhos ecológicos para a fauna;'
  },
  '_6B': {
  'titulo': 'Bulevares',
  'texto': 'Criar um sistema ambiental em rede aumenta a conectividade entre áreas verdes, proporcionando percursos sombreados aos usuários e caminhos ecológicos para a fauna;'
  },
  '_7A': {
  'titulo': 'Abertura de novo viário',
  'texto': 'A implantação de bulevares que interligam os bairros e priorizam o transporte público e alamedas de conexões locais com ciclovias e amplas calçadas irá promover a integração;'
  },
  '_7B': {
  'titulo': 'Alargamento de viário existente',
  'texto': 'A implantação de bulevares que interligam os bairros e priorizam o transporte público e alamedas de conexões locais com ciclovias e amplas calçadas irá promover a integração;'
  },
  '_7C': {
  'titulo': 'Requalificação de viário existente',
  'texto': 'A implantação de bulevares que interligam os bairros e priorizam o transporte público e alamedas de conexões locais com ciclovias e amplas calçadas irá promover a integração;'
  },
  '_8A': {
  'titulo': 'Ampliação e melhoria de passeios existentes',
  'texto': 'A requalificação dos passeios por meio do redesenho de sua geometria, seja ampliando-o em detrimento do leito carroçável, seja diminuindo curvaturas para reduzir a velocidade dos automóveis incentivarão a locomoção peatonal pelo território. A acessibilidade deve ser garantida em ponto estratégicos  com a criação de amplos passeios que vencem os desníveis;'
  },
  '_8B': {
  'titulo': 'Acesso - rampas e escadarias',
  'texto': 'A requalificação dos passeios por meio do redesenho de sua geometria, seja ampliando-o em detrimento do leito carroçável, seja diminuindo curvaturas para reduzir a velocidade dos automóveis incentivarão a locomoção peatonal pelo território. A acessibilidade deve ser garantida em ponto estratégicos  com a criação de amplos passeios que vencem os desníveis;'
  },
  '_9A': {
  'titulo': 'Ciclopassarelas sobre ferrovia',
  'texto': 'Novas travessias associadas a equipamentos, espaços públicos ou estações de trem e metrô, que priorizam deslocamentos a pé e de bicicleta garantem a conexão entre bairros e o acesso a trabalho, serviços e equipamentos públicos;'
  },
  '_9B': {
  'titulo': 'Ciclopassarela sob ferrovia',
  'texto': 'Novas travessias associadas a equipamentos, espaços públicos ou estações de trem e metrô, que priorizam deslocamentos a pé e de bicicleta garantem a conexão entre bairros e o acesso a trabalho, serviços e equipamentos públicos;'
  },
  '_9C': {
  'titulo': 'Ciclopassarela sobre rios ou córregos',
  'texto': 'Novas travessias associadas a equipamentos, espaços públicos ou estações de trem e metrô, que priorizam deslocamentos a pé e de bicicleta garantem a conexão entre bairros e o acesso a trabalho, serviços e equipamentos públicos;'
  },
  '_10A': {
  'titulo': 'Equipamentos em terrenos públicos subutilizados',
  'texto': 'A implantação de novos equipamentos, além de suprir as necessidades da população, qualifica a vida nos bairros;'
  },
  '_10B': {
  'titulo': 'Equipamentos em galpões reformados',
  'texto': 'A implantação de novos equipamentos, além de suprir as necessidades da população, qualifica a vida nos bairros;'
  },
  '_10C': {
  'titulo': 'Equipamentos em áreas indicadas de parcelamento e grandes lotes',
  'texto': 'A implantação de novos equipamentos, além de suprir as necessidades da população, qualifica a vida nos bairros;'
  },
  '_11A': {
  'titulo': 'Infraestrutura de TI e incentivo ao setor de negócios',
  'texto': 'Manter e potencializar unidades produtivas, incentivar a implantação de novas atividades produtivas, desenvolver o setor logístico, proteger territórios produtivos da incorporação residencial vertical e modernizar e integrar o entorno das unidades de atacado/varejo;'
  },
  '_11B': {
  'titulo': 'Permanência de usos produtivos',
  'texto': 'Manter e potencializar unidades produtivas, incentivar a implantação de novas atividades produtivas, desenvolver o setor logístico, proteger territórios produtivos da incorporação residencial vertical e modernizar e integrar o entorno das unidades de atacado/varejo;'
  },
  '_11C': {
  'titulo': 'Incentivo ao setor logístico',
  'texto': 'Manter e potencializar unidades produtivas, incentivar a implantação de novas atividades produtivas, desenvolver o setor logístico, proteger territórios produtivos da incorporação residencial vertical e modernizar e integrar o entorno das unidades de atacado/varejo;'
  },
  '_11D': {
  'titulo': 'Incentivo ao parcelamento de grandes centros de compras com manutenção de uso',
  'texto': 'Manter e potencializar unidades produtivas, incentivar a implantação de novas atividades produtivas, desenvolver o setor logístico, proteger territórios produtivos da incorporação residencial vertical e modernizar e integrar o entorno das unidades de atacado/varejo;'
  },
  '_12A': {
  'titulo': 'Fruição pública',
  'texto': 'Implantar Conjuntos de Habitação Social de dimensões menores e mais espalhados pelo território, contemplando fachadas ativas, faixas de fruição pública, mix de rendas e espaços públicos de qualidade, procurando ao máximo relacionar os conjuntos com o espaço urbano à sua volta;'
  },
  '_12B': {
  'titulo': 'Pequenas praças como espaços de socialização',
  'texto': 'Implantar Conjuntos de Habitação Social de dimensões menores e mais espalhados pelo território, contemplando fachadas ativas, faixas de fruição pública, mix de rendas e espaços públicos de qualidade, procurando ao máximo relacionar os conjuntos com o espaço urbano à sua volta;'
  },
  '_12C': {
  'titulo': 'Divisões condominiais com poucas unidades habitacionais e divididos por faixa de atendimento',
  'texto': 'Implantar Conjuntos de Habitação Social de dimensões menores e mais espalhados pelo território, contemplando fachadas ativas, faixas de fruição pública, mix de rendas e espaços públicos de qualidade, procurando ao máximo relacionar os conjuntos com o espaço urbano à sua volta;'
  },
  '_12D': {
  'titulo': 'Fachada ativa',
  'texto': 'Implantar Conjuntos de Habitação Social de dimensões menores e mais espalhados pelo território, contemplando fachadas ativas, faixas de fruição pública, mix de rendas e espaços públicos de qualidade, procurando ao máximo relacionar os conjuntos com o espaço urbano à sua volta;'
  },
  '_12E': {
  'titulo': 'Demarcação de áreas para habitação em terrenos menores, distribuídos pelo território',
  'texto': 'Implantar Conjuntos de Habitação Social de dimensões menores e mais espalhados pelo território, contemplando fachadas ativas, faixas de fruição pública, mix de rendas e espaços públicos de qualidade, procurando ao máximo relacionar os conjuntos com o espaço urbano à sua volta;'
  },
  '_12F': {
  'titulo': 'Taxas de ocupação mais altas em áreas próximas às áreas verdes',
  'texto': 'Implantar Conjuntos de Habitação Social de dimensões menores e mais espalhados pelo território, contemplando fachadas ativas, faixas de fruição pública, mix de rendas e espaços públicos de qualidade, procurando ao máximo relacionar os conjuntos com o espaço urbano à sua volta;'
  },
  '_12G': {
  'titulo': 'Maiores áreascondominiais verdes em regiões com pouca oferta de áreas verdes',
  'texto': 'Implantar Conjuntos de Habitação Social de dimensões menores e mais espalhados pelo território, contemplando fachadas ativas, faixas de fruição pública, mix de rendas e espaços públicos de qualidade, procurando ao máximo relacionar os conjuntos com o espaço urbano à sua volta;'
  }
}
var cLayer;
var spCoords = [-5191207.638373509, -2698731.105121977];
var extent = [-5191207.638373509, -2698731.105121977, -5183207.638373509, -2695731.105121977];
var projection = new ol.proj.Projection({
  code: 'xkcd-image',
  units: 'pixels',
  extent: extent
});
var defaultImg = 'http://gestaourbana.prefeitura.sp.gov.br/wp-content/uploads/2014/08/arco_tiete.jpg';

function readProp(obj, prop) {
    return obj[prop];
}

jQuery(document).ready(function() {
  jQuery('#propostaImagem').html("<img src='"+defaultImg+"' alt='Arco Tietê' />");
  
  /// Adiciona camadas ao array mapLayers
  var mapLayers = [
    new ol.layer.Tile({source: new ol.source.OSM()}),
    new ol.layer.Image({
      source: new ol.source.ImageStatic({
        url: '../wp-includes/img/background.png',
        //url: 'background-transp.png',
        projection: projection,
        imageExtent: extent
      })
    })
  ];

  /*var kmlUrls = [
      '1A.kml',
      '1B.kml',
      '2A.kml',
      '3A.kml',
      '3B.kml',
      '3C.kml',
      '4A.kml',
      '4B.kml',
      '5A.kml'
    ];*/
    var kmlUrls = [];
    for (codigo in information){
      // var fileName = ;
      kmlUrls.push(codigo.split('_')[1]+'.kml');
    }
    for (var i = 0; i < kmlUrls.length; i++) {
      var nome = '_'+kmlUrls[i].split('.')[0];    
      var camada = platMapAPI.createVectorLayerFromKML("../kmls/"+kmlUrls[i]);        
      camada.set("name",nome);
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

  var featureOverlay = new ol.layer.Vector({
    source: new ol.source.Vector(),
    map: map,
    style: new ol.style.Style({
      stroke: new ol.style.Stroke({
        color: '#fdd',
        width: 3
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
    /*if (feature) {
      // info.innerHTML = feature.getId() + ': ' + feature.get('name');
      info.innerHTML = feature.getProperties();
    } else {
      info.innerHTML = '&nbsp;';
    }*/

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
  
  var getFeatureLayerInfo = function (pixel) {
    cLayer = map.forEachLayerAtPixel(pixel, function (layer) {
      if(layer != featureOverlay){
        return layer;
      }      
    });

    var feature = map.forEachFeatureAtPixel(pixel, function(feature){
      return feature;
    });

    if (feature) {
      // info.innerHTML = feature.getId() + ': ' + feature.get('name');
      console.log(cLayer);
      var layer = cLayer.get('name');
      var proposta = readProp(information, layer);      
      var imgUrl = "<img src='../wp-includes/img/"+layer.split('_')[1]+".png' onerror=\"this.src='"+defaultImg+"'\" alt='"+proposta.titulo+"' />";
      jQuery('#propostaTitulo').html(proposta.titulo);      
      jQuery('#propostaImagem').html(imgUrl);
      jQuery('#propostaTexto').html(proposta.texto);
      /*switch (layer) {
        case '_1A':
          console.log(information);
          break;
        default:          
          info.innerHTML = information;
          break;
      }*/

      // console.log("Informacoes: ",information);
      // abrirModal();
    } else {
      info.innerHTML = '&nbsp;';
      // fecharModal();
    }

    /*if (feature !== highlight) {
      if (highlight) {
        featureOverlay.getSource().removeFeature(highlight);
      }
      if (feature) {
        featureOverlay.getSource().addFeature(feature);
      }
      highlight = feature;
    }*/

  };

  map.on('click', function (evt) {
    getFeatureLayerInfo(evt.pixel);
  });
  
  map.on('pointermove', function (evt) {
    if (evt.dragging) {
      return;
    }
    var pixel = map.getEventPixel(evt.originalEvent);
    displayFeatureInfo(pixel);
  });
/*
  $(".close").click(fecharModal);
  
*/
});