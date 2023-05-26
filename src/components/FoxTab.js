function FoxTab() {
  return (
    <div className="FoxTab Content__tab">
    <div className="Content__tab__header">
      <div className="Content__tab__header__title">
        <h1 className="">Raposa Vermelha</h1>
        <p>Vulpes Vulpes</p>
      </div>
      <div className="Content__tab__header__animal-info">
        <div className="Content__tab__header__animal-info__number">
          <p>35</p>
        </div>
        <div className="Content__tab__header__animal-info__name">
          <p>KG</p>
        </div>
      </div>
      <div className="Content__tab__header__animal-info">
        <div className="Content__tab__header__animal-info__number">
          <p>17</p>
        </div>
        <div className="Content__tab__header__animal-info__name">
          <p>Age</p>
        </div>
      </div>
    </div>
    <div className="Content__tab__article">
      <img src="assets/raposa-vermelha-1.jpg" alt="" className="Content__tab__article__img"/>
      <div className="Content__tab__article__text">
      <p>A raposa-vermelha é a maior das raposas verdadeiras e tem uma distribuição ampla pelo hemisfério Norte, abrangendo América do Norte, Europa, Ásia e partes do Norte da África. É considerada uma espécie pouco preocupante pela Lista Vermelha da IUCN. A expansão humana contribuiu para o aumento de sua área de distribuição, inclusive na Austrália, onde é considerada invasiva e causa danos às populações nativas de mamíferos e aves. Devido a isso, foi incluída na lista das 100 espécies exóticas invasoras mais daninhas do mundo.</p>

      <p>A raposa-vermelha é um mamífero onívoro e oportunista de porte médio, com pelos geralmente castanho-avermelhados. Possui hábitos noturnos e crepusculares, mas também pode ser vista durante o dia em áreas com pouca movimentação. Sua alimentação diária média é de aproximadamente 500g. Ela caça principalmente animais pequenos como coelhos e lebres, mas também pode se alimentar de roedores, aves, insetos, peixes, ovos, frutos, restos de comida humana e carniça, se necessário.</p>
      </div>
      <img src="assets/raposa-vermelha-2.jpg" alt="" className="Content__tab__article__img"/>
      <div className="Content__tab__article__text">
      <p>A raposa-vermelha possui um corpo alongado, com membros relativamente curtos para sua altura. Sua cauda é longa, peluda e toca o solo quando a raposa está em pé. Suas pupilas são ovais e orientadas verticalmente. A raposa-vermelha tem cinco dedos nas patas dianteiras e quatro nas patas traseiras. Esses dedos terminam em garras semi-retráteis e são circundados por pelos interdigitais, especialmente durante o inverno.</p>

      <p>O crânio da raposa-vermelha é estreito e alongado, com a caixa craniana pequena e aproximadamente do mesmo comprimento da região facial. Seus caninos são longos e pontiagudos, enquanto os carniceiros são pequenos e afiados. Os incisivos são levemente inclinados para dentro, permitindo que a raposa agarre sua presa e corte pequenos pedaços de carne. Os pré-molares são simples e pontiagudos, enquanto os molares têm uma forma mais achatada e são adequados para esmagar alimentos, como ossos de presas menores.</p>
      </div>
      <div className="Content__tab__article__quote">
      <p>Você tem que aprender a não confiar em uma raposa. Porque elas são traiçoeiras. Vão enganar você. Vão enganar a todos.</p>
      <p>-Teen wolf</p>
      </div>
      <table className="Content__tab__article__table">
          <tr><td><p className="Content__tab__article__table__text">Class: Mammalia</p></td></tr>
          <tr><td><p className="Content__tab__article__table__text">Ordem: Carnívora</p></td></tr>
          <tr><td><p className="Content__tab__article__table__text">Família: Canidae</p></td></tr>
          <tr><td><p className="Content__tab__article__table__text">Gênero: Vulpes</p></td></tr>
          <tr><td><p className="Content__tab__article__table__text">Espécie: V. vulpes</p></td></tr>
        </table>
    </div>
  </div>
  );
}

export default FoxTab;
