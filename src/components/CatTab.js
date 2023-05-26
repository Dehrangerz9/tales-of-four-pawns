function  CatTab() {
    return (
      <div className="CatTab Content__tab">
      <div className="Content__tab__header">
        <div className="Content__tab__header__title">
          <h1 className="">Gato</h1>
          <p>Felis Catus</p>
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
        
        <div className="Content__tab__article__text">
        <p>O gato doméstico, cujo nome científico é Felis silvestris catus, é um mamífero carnívoro da família dos felídeos, amplamente conhecido como animal de estimação. Sendo um predador natural, ocupa o topo da cadeia alimentar e se alimenta de diversos animais, como roedores, pássaros, lagartixas e alguns insetos. Pesquisas realizadas por instituições norte-americanas indicam que os gatos são o segundo animal de estimação mais popular do mundo, ficando numericamente atrás apenas dos peixes de aquário. Além disso, eles ocupam a trigésima nona posição na lista das 100 espécies exóticas invasoras mais daninhas do mundo, de acordo com a União Internacional para a Conservação da Natureza (UICN).</p>
  
        <p>A associação dos gatos com os humanos teve início há cerca de 9.500 anos, um período mais antigo do que se estimava anteriormente, que variava entre 3.500 e 8.000 anos. A subfamília dos felíneos (Felinae), que engloba os gatos domésticos, surgiu aproximadamente há 12 milhões de anos, expandindo-se da África subsaariana até as terras que compreendem o Egito atualmente. Acredita-se que o antepassado imediato dos gatos domésticos seja o gato-selvagem-africano (Felis silvestris lybica). Além disso, evidências genéticas indicam que os gatos domésticos atuais possuem uma origem direta dos gatos selvagens do Oriente Médio.</p>
        </div>
        <img src="assets/gato-1.jpg" alt="" className="Content__tab__article__img"/>
        <img src="assets/gato-2.jpg" alt="" className="Content__tab__article__img"/>
        <div className="Content__tab__article__text">
        <p>Devido à sua habilidade como caçadores e sua utilidade no controle de pragas, os gatos desfrutaram de uma posição privilegiada na Europa cristã por muitos séculos. No entanto, durante o início da Idade Média, a situação mudou. Os gatos foram associados a maus espíritos e, muitas vezes, foram queimados junto com pessoas acusadas de bruxaria. Até hoje, existe o estereótipo de que as bruxas possuem gatos pretos como animais de estimação, associados a vários tipos de feitiçaria. No entanto, dependendo da região, os gatos pretos também podem ser considerados animais que trazem boa sorte. Há muitas histórias sobre sorte e azar associados a esses animais de cor escura.</p>
  
        <p>No final da Idade Média, a aceitação dos gatos nas residências foi retomada. Com o tempo, a visão mística e preconceituosa relacionada às crenças de bruxaria deu lugar ao prazer de ter esses pequenos animais domesticados. A capacidade dos gatos de combinar independência e sociabilidade fez com que ganhassem o status de animais de companhia desejáveis e se tornassem parte integrante das famílias. Em diversos textos literários e acadêmicos, os gatos são descritos como portadores de inúmeras virtudes, o que lhes confere uma posição privilegiada na sociedade humana.</p>
        </div>
        <div className="Content__tab__article__quote">
        <p>O ronronar de um gato é a música mais doce que um amante dos felinos pode ouvir.</p>
        </div>
        <table className="Content__tab__article__table">
          <tr><td><p className="Content__tab__article__table__text">Class: Mammalia</p></td></tr>
          <tr><td><p className="Content__tab__article__table__text">Ordem: Carnívora</p></td></tr>
          <tr><td><p className="Content__tab__article__table__text">Família: Felidae</p></td></tr>
          <tr><td><p className="Content__tab__article__table__text">Gênero: Felis</p></td></tr>
          <tr><td><p className="Content__tab__article__table__text">Espécie: F. catus</p></td></tr>
        </table>
      </div>
    </div>
    );
  }
  
  export default CatTab;
  