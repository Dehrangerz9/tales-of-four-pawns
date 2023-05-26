function  CoyoteTab() {
    return (
      <div className="CoyoteTab Content__tab">
      <div className="Content__tab__header">
        <div className="Content__tab__header__title">
          <h1 className="">Coiote</h1>
          <p>Canis latrans</p>
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
        <img src="assets/coiote-1.jpg" alt="" className="Content__tab__article__img"/>
        <div className="Content__tab__article__text">
        <p>O coiote, também conhecido como chacal americano por zoólogos, é um mamífero pertencente à família Canidae e ao gênero Canis. Sua distribuição abrange exclusivamente a América do Norte e Central. Os coiotes geralmente vivem solitários, mas ocasionalmente podem formar matilhas. Sua expectativa de vida média é de cerca de 6 anos. A palavra "coiote" tem origem na língua Nahuatl. Esse mamífero da família dos canídeos é encontrado desde o Alasca até o Panamá e é semelhante ao lobo (C. lupus), porém é menor, mais esbelto e possui orelhas proporcionalmente mais longas.</p>
  
        <p>Na América do Norte, o coiote ocupa uma grande parte do nicho ecológico que os chacais ocupam na Eurásia, embora seja maior e mais predatório.</p>
        </div>
        <img src="assets/coiote-2.jpg" alt="" className="Content__tab__article__img"/>
        <div className="Content__tab__article__text">
        <p>Sua dieta é essencialmente à base de carne. Os coiotes têm preferência por coelhos, veados, alces, pássaros, cobras, lagartos, peixes, ovelhas, bezerros e todo tipo de carniça com que se deparam. Isto não significa que, de vez em quando, eles não comam igualmente determinadas frutas e gramas.</p>
  
        <p>Em contato mais próximo com o Homem os coiotes se nutrem de ratos normalmente encontrados nos lixos. Sua tendência para a adaptabilidade influencia na sua sobrevivência, pois em qualquer época do ano, independente da estação climática, eles têm maior facilidade para achar a caça. Em geral eles vivem por volta de 6 anos.</p>
        </div>
        <div className="Content__tab__article__quote">
        <p>Os lobos escondem seus próprios excrementos para não atrair a atenção dos coiotes. A alcateia não aceita mutação genética.</p>
        <p>-Fernando Matos</p>
        </div>

        <table className="Content__tab__article__table">
          <tr><td><p className="Content__tab__article__table__text">Class: Mammalia</p></td></tr>
          <tr><td><p className="Content__tab__article__table__text">Ordem: Carnívora</p></td></tr>
          <tr><td><p className="Content__tab__article__table__text">Família: Canidae</p></td></tr>
          <tr><td><p className="Content__tab__article__table__text">Gênero: Canis</p></td></tr>
          <tr><td><p className="Content__tab__article__table__text">Espécie: C. latrans</p></td></tr>
        </table>
      </div>
    </div>
    );
  }
  
  export default CoyoteTab;
  