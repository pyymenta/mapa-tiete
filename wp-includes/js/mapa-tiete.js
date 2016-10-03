/// DEBUG
var bugMap;

//JSON com Informações de cada categoria
const information = {
  '_1A': {
  'titulo': 'Destamponamento de córrego ',
  'texto': '1A. Destamponar córregos limpos é uma solução adotada para reaproximar as pessoas dos cursos d´água, aumentar a capacidade de vazão fluvial e melhorar a drenagem superficial urbana. Além Disso, a abertura promove o contato dos corpos d´água com a atmosfera, colaborando para o ressurgimento da vida aquática e ciliar.'
  },
  '_1B': {
  'titulo': 'Qualificação de córregos abertos',
  'texto': '1B. Qualificar córregos abertos é uma solução adotada para reaproximar as pessoas dos cursos d´água, aproveitando as estruturas existentes para implantação de percursos leves para pedestres e ciclistas, sem comprometer a capacidade de vazão atual.'
  },
  '_2A': {
  'titulo': 'Implantar eixos drenantes',
  'texto': '2A. Implantar cordões de absorção das águas pluviais em vias públicas que antecedem áreas de alagamento é uma forma de criar barreiras ao escoamento superficial, ao mesmo tempo em que se qualifica as vias públicas com jardins lineares.'
  },
  '_2B': {
  'titulo': 'Canteiros drenantes',
  'texto': 'Criar grandes cordões de infiltração das águas pluviais em locais estratégicos, transversais ao sentido do escoamento superficial das bacias de drenagem, colaborando para impedir que as águas atinjam os pontos mais baixos da várzea. '
  },
  '_3A': {
  'titulo': 'Praças secas rebaixadas',
  'texto': '3A. Implantar praças permeáveis capazes de absorver grandes volumes de água durante as chuvas torrenciais contribui para a redução de enchentes e alagamentos, ao passo em que o plantio de espécies adaptadas às cheias promove áreas ajardinadas de contemplação.'
  },
  '_3B': {
  'titulo': 'Praças de absorção',
  'texto': '3B. Implantar praças secas rebaixadas capazes de receber, reter e retardar a descida de grandes volumes d´água durante as chuvas torrenciais contribui para a redução de enchentes e alagamentos, ao passo que oferece espaços públicos para atividades de esporte e lazer.'
  },
  '_3C': {
  'titulo': 'Alças de pontes',
  'texto': '3C. Implantar praças com capacidade de absorção das águas pluviais em alças de pontes localizadas sobre fozes de tributários do Rio Tietê contribui para a redução de enchentes e alagamentos, ao passo em que a qualificação destas áreas promove melhoria na acessibilidade aos passeios das pontes existentes.'
  },
  '_4A': {
  'titulo': 'Parques lineares',
  'texto': '4A. A recuperação ambiental das margens do sistema hídrico, além de reaproximar as pessoas dos córregos, colabora para a infiltração e armazenamento da água no lençol freático e para o surgimento da mata ciliar, importante componente para a produção de alimentos para a fauna aquática.'
  },
  '_4B': {
  'titulo': 'Outros parques',
  'texto': '4B. Implantar novos parques aumenta a oferta de áreas de lazer, convívio e contemplação no Arco Tietê, além de colaborar para a absorção da irradiação solar, amenização das ilhas de calor e aumento da umidade relativa do ar.'
  },
  '_5A': {
  'titulo': 'Requalificação de praças existentes',
  'texto': '5A. Requalificar praças existentes aumentando sua arborização e promovendo novos espaços de lazer qualificados é uma estratégia para reaproximar a população local dos espaços públicos hoje subutilizados.'
  },
  '_5B': {
  'titulo': 'Praças oriundas de destinação obrigatória',
  'texto': ' 5B. Definir a localização das praças oriundas de destinação de grandes lotes é uma estratégia de garantir que sua posição seja a melhor possível em relação à rede de espaços públicos e equipamentos projetada para todo o Arco Tietê, evitando espaços verdes isolados e de difícil acesso.'
  },
  '_5C': {
  'titulo': 'Praças sobre túneis',
  'texto': '5C. Implantar praças sobre túneis, com novas vias locais perimetrais, é uma estratégia para que os espaços hoje ocupados pelas linhas de alta tensão (futuramente enterradas) sejam utilizados pela população, tornando-se novas frentes urbanas.'
  },
  '_5D': {
  'titulo': 'Praças sob viadutos',
  'texto': '5D. Implantar praças sob viadutos, com novas vias locais perimetrais, é uma estratégia para que os baixios de viadutos não se tornem fundos subutilizados da cidade, mas sim novos espaços públicos com potencial de gerar novas frentes urbanas.'
  },
  '_5E': {
  'titulo': 'Novas praças',
  'texto': '5E. Implantar novas praças aumenta a oferta de áreas de lazer, convívio e contemplação aos moradores dos bairros, além de colaborar para a absorção da irradiação solar, amenização das ilhas de calor e aumento da umidade relativa do ar.'
  },
  '_6A': {
  'titulo': 'Alamedas',
  'texto': '6A. A implantação de alamedas proporciona percursos sombreados aos pedestres e ciclistas e colabora para a formação de um sistema ambiental em rede, conectando áreas verdes, equipamentos e estações do trem e do metrô.'
  },
  '_6B': {
  'titulo': 'Bulevares',
  'texto': '6B. A implantação de bulevares ao longo de vias públicas que priorizam o transporte público colabora para o desenvolvimento urbano ao longo dos eixos de transporte e para a formação de um sistema ambiental em rede.'
  },
  '_7A': {
  'titulo': 'Abertura de novo viário',
  'texto': '7A. A abertura de novas vias públicas que rompem com as grandes quadras aumenta a interligação entre áreas do Arco Tietê que hoje se encontram isoladas e possibilita a emergência de novas frentes urbanas.'
  },
  '_7B': {
  'titulo': 'Alargamento de viário existente',
  'texto': '7B. Alargar vias públicas atualmente subdimensionadas assegura que os fluxos de pedestres e ciclistas possam ser garantidos ao lado de automóveis e, eventualmente, ônibus, promovendo diversidade modal às áreas de desenvolvimento urbano.'
  },
  '_7C': {
  'titulo': 'Requalificação de viário existente',
  'texto': '7C. A requalificação do sistema viário é uma estratégia utilizada em vias públicas que devem receber reformas tanto em seus passeios quanto em seu leito carroçável, sem desapropriação, a fim de qualificar a circulação de todos os modos de transporte.'
  },
  '_8A': {
  'titulo': 'Ampliação e melhoria de passeios existentes',
  'texto': '8A. Requalificar os passeios por meio do redesenho de sua geometria, seja ampliando-o em detrimento do leito carroçável, seja diminuindo curvaturas para reduzir a velocidade dos automóveis, incentiva a locomoção de pedestres e ciclistas pela cidade.'
  },
  '_8B': {
  'titulo': 'Acesso - rampas e escadarias',
  'texto': '8B. Implantar novos acessos verticais por meio de rampas e escadarias associadas a passeios e espaços públicos é uma estratégia para promover acessibilidade às áreas com grandes desníveis no tecido urbano.'
  },
  '_9A': {
  'titulo': 'Ciclopassarelas sobre ferrovia',
  'texto': '9A. Implantar novas travessias sobre a ferrovia, associadas a equipamentos, espaços públicos e estações de trem, que priorizem deslocamentos a pé e de bicicleta, garante novas conexões entre bairros e a melhoria no acesso ao trabalho, aos serviços e aos equipamentos públicos.'
  },
  '_9B': {
  'titulo': 'Ciclopassarela sob ferrovia',
  'texto': '9B. Implantar novas travessias sob a ferrovia associadas a equipamentos, espaços públicos e estações de trem, que priorizem deslocamentos a pé e de bicicleta, garante novas conexões entre bairros e a melhoria no acesso ao trabalho, aos serviços e aos equipamentos públicos.'
  },
  '_9C': {
  'titulo': 'Ciclopassarela sobre rios ou córregos',
  'texto': '9C. Implantar novas travessias sobre o Rio Tietê, associadas a equipamentos ou espaços públicos, que priorizem deslocamentos a pé e de bicicleta, garante maior conexão entre as margens do rio, promovendo novos eixos de integração do tecido urbano. '
  },
  '_10A': {
  'titulo': 'Equipamentos em terrenos públicos subutilizados',
  'texto': '10A. O enterramento das linhas de alta tensão é uma solução adotada para a implantação de novas vias públicas sem a necessidade de desapropriação de moradores.'
  },
  '_10B': {
  'titulo': 'Equipamentos em galpões reformados',
  'texto': '10B. A implantação de infovias é uma estratégia adotada para incentivar usos produtivos ao longo dos eixos estratégicos.'
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
var spCoords = [-5199000, -2695000];

// Working
var extent = [-5204950,-2698891,-5181999,-2690035];
var mapImageLayer = new ol.layer.Image({
      source: new ol.source.ImageStatic({
        url: '../wp-includes/img/background.png',        
        imageExtent: extent,
        projection: 'EPSG:3857'
      })
    });

var defaultImg = 'http://gestaourbana.prefeitura.sp.gov.br/wp-content/uploads/2014/08/arco_tiete.jpg';
var cImage;
var proposta;
var imgUrl;

function readProp(obj, prop) {
    return obj[prop];
}
var strokeLineDash = [0];

var lStyle = new ol.style.Style({
          stroke: new ol.style.Stroke({
            color: 'rgba(80,120,200,0.8)',
            width: 2,
            lineDash: strokeLineDash
          }),
          fill: new ol.style.Fill({
            color: 'rgba(120,180,255,0.5)'
          })
        });

jQuery(document).ready(function() {
  // jQuery('#propostaImagem').html("<img src='"+defaultImg+"' alt='Arco Tietê' />");

  // Modal / Lightbox    
  var modal = jQuery('#container_lightbox');
  var isModal = false;
  
  function hideLinks(){
      if(!isModal)
          jQuery(svg).css('opacity', '0');
  }
  function fixaCloseBT(){
      var closeBT = jQuery('.close');
      var mContent = jQuery('.modal_content');
      jQuery('.close').css({'opacity': '1'});
      closeBT.offset({
          top: mContent.offset().top-6,
          left: mContent.offset().left+mContent.width()+20
      });
  }
  function openModal(){
    jQuery(modal).css({
        'opacity': '1',
        'max-height': '100%',
        'height': '100%',
        'overflow': 'auto',
    });
    jQuery('body').toggleClass('modal_open');

    // var modCont = '<h3>'+proposta.titulo+'</h3>'+imgUrl+'<p>'+proposta.texto+'</p>';
    jQuery('#lightbox_content').html(jQuery('#infoContainer').html());
    isModal = true;
    setTimeout(fixaCloseBT, 100);
  }
  function fechaModal(){
      jQuery('body').removeClass('modal_open');
      isModal = false;
      // hideLinks();
      jQuery('body').css('padding-right', 'initial');
      jQuery(modal).css({
          'opacity': '0',
          'height': '0',
          'overflow': 'hidden',
      });
      jQuery('.close').css({'opacity': '0'});
  }
  jQuery(document).mouseup(function (e){
      var container = jQuery(".modal_content");
      if (!container.is(e.target) // se o alvo não for o container
          && (container.has(e.target).length === 0) // ...nem um filho do container
          && (e.target != jQuery('html').get(0))) // nem a scrollbar
      {
          fechaModal();
      }
  });

  jQuery(".close").click(fechaModal);
  /// End Modal / Lightbox

  /// Adiciona camadas ao array mapLayers    

  /// CAMADAS
  // CHAVE BING
  /*
  AsOanmHkUY8fnofQzDZbdilguBznksMGkjFh0OqiY7mrzoMP7Nj_hUA6Vx5HP9-h
  */
  var mapLayers = [new ol.layer.Tile({
    source: new ol.source.OSM()
    // source: new ol.source.BingMaps({key: 'AsOanmHkUY8fnofQzDZbdilguBznksMGkjFh0OqiY7mrzoMP7Nj_hUA6Vx5HP9-h', imagerySet: 'AerialWithLabels', culture: 'pt-BR'})
  })];
  lStyle = new ol.style.Style({
              stroke: new ol.style.Stroke({
                color: 'rgba(243,146,0,0.8)',
                width: 2
              }),
              fill: new ol.style.Fill({
                color: 'rgba(255,255,255,0.2)'
              })
            });
  var perimetroMaior = platMapAPI.createCustomVectorLayerFromKML("../wp-content/themes/gestaourbana-1.2/uploads/PerimetroACT.kml", lStyle);
  

  var kmlUrls = [];
  for (codigo in information){kmlUrls.push(codigo.split('_')[1]+'.kml');}
  
  // for (var i = 0; i < kmlUrls.length; i++) {
  for (var i = kmlUrls.length-1; i >= 0; i--) {
    var nome = '_'+kmlUrls[i].split('.')[0];
    
    /// Estilo
    var perimCode = parseInt(nome.replace(/[^0-9\.]/g, ''), 10);
    var perimSubcode = nome.split(perimCode)[1];
    var pStrCol = 'rgba(80,120,200,0.8)';
    var pFillCol = 'rgba(80,120,200,0.5)';
    var pWidth = 2;
    var pDash = [0];

    switch (perimCode) {
      case 1:
        pStrCol = 'rgba(120,181,220,0.95)';
        pWidth = 3;
        pDash = [9,8];
        break;
      case 2:
        pStrCol = 'rgba(60,90,131,0.95)';
        pWidth = 3;
        pDash = [7,7];
        break;
      case 3:
        pStrCol = 'rgba(172,189,211,0.95)';
        break;
      case 4:
        pStrCol = 'rgba(71,105,52,0.95)';
        break;
      case 5:
        pStrCol = 'rgba(138,181,61,0.95)';
        break;
      case 6:
        pStrCol = 'rgba(138,181,61,0.95)';
        if (perimSubcode == 'A') {
          pWidth = 2;
          pDash = [2,10];
        }
        else {
          pWidth = 3;
          pDash = [3,10];
        }
        break;
      case 7:
        pStrCol = 'rgba(234,187,46,0.95)';
        if(perimSubcode == 'C')
          pStrCol = 'rgba(249,233,185,0.95)';
        break;
      case 8:        
        pStrCol = 'rgba(216,133,46,0.95)';
        pWidth = 1;
        break;
      case 9:
        pStrCol = 'rgba(255,255,255,0.95)';
        break;
      case 10:       
        pStrCol = 'rgba(0,0,0,0.95)';
        pWidth = 3;
        pDash = [0,10,0,10,1];
        break;
      default:        
        break;
    }
    pFillCol = pStrCol.replace("0.95","0.25");

    lStyle = new ol.style.Style({
              stroke: new ol.style.Stroke({
                color: pStrCol,
                width: pWidth,
                lineDash: pDash
              }),
              fill: new ol.style.Fill({
                color: pFillCol
              })
            });
    /// END Estilo

    var camada = platMapAPI.createCustomVectorLayerFromKML("../wp-content/themes/gestaourbana-1.2/uploads/"+kmlUrls[i], lStyle);
    camada.set("name",nome); 
    mapLayers.push(camada);
  }

  var view = new ol.View({
    center: spCoords,
    zoom: 12,
    minZoom: 12,
    maxZoom: 30
  });
  perimetroMaior.set("name", "Arco Tietê"); 
  mapLayers.push(perimetroMaior);
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
        color: 'rgba(255,255,255,0.5)',
        width: 3,
        lineDash: strokeLineDash
      }),
      fill: new ol.style.Fill({
        color: 'rgba(255,255,255,0.2)'
      })
    })
  });

  // featureOverlay.setZIndex(1);

  var highlight;
  var displayFeatureInfo = function (pixel) {
    var feature = map.forEachFeatureAtPixel(pixel, function (feature) {
      if(feature !== highlight)
        return feature;
    });
    var info = document.getElementById('info');
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
      var layer = cLayer.get('name');
      proposta = readProp(information, layer);      
      // IMAGEM PADRÃO
      // imgUrl = "<img src='../wp-content/themes/gestaourbana-1.2/uploads/"+layer.split('_')[1]+".png' onerror=\"this.src='"+defaultImg+"'\" alt='"+proposta.titulo+"' />";
      imgUrl = "<img src='../wp-content/themes/gestaourbana-1.2/uploads/"+layer.split('_')[1]+".png' alt='"+proposta.titulo+"' />";
      jQuery('#propostaTitulo').html(proposta.titulo);      
      jQuery('#propostaImagem').html(imgUrl);
      jQuery('#propostaTexto').html(proposta.texto);      
    } else {
      jQuery('#propostaTitulo').html('Clique no perímetro desejado para obter mais informações.');      
      jQuery('#propostaImagem').html('');

      jQuery('#propostaTexto').html('');
    }
  };
  /*map.on('click', function (evt) {
    getFeatureLayerInfo(evt.pixel);    
  });*/
  
  // MouseOver - bug por conta da sobreposição
  // map.on('pointermove', function (evt) {
  map.on('click', function (evt) {
    getFeatureLayerInfo(evt.pixel);
    if (evt.dragging) {
      return;
    }
    var pixel = map.getEventPixel(evt.originalEvent);
    displayFeatureInfo(pixel);
    openModal();
  });
  // jQuery('#propostaImagem').click(openModal);
});
