import React, { useState, useEffect } from "react";
import "./Popup.css";

const Popup = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [countdown, setCountdown] = useState("");
  const [isHoveredHexagon1, setIsHoveredHexagon1] = useState(false);
  const [isHoveredHexagon2, setIsHoveredHexagon2] = useState(false);

  // Definindo a data de destino
  const targetDate = new Date("2025-01-31T00:00:00").getTime();

  // Função para atualizar a contagem regressiva
  const updateCountdown = () => {
    const now = new Date().getTime();
    const timeRemaining = targetDate - now;

    // Calculando dias, horas, minutos e segundos restantes
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    // Atualizando o estado da contagem
    setCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`);
  };

  useEffect(() => {
    // Atualiza o contador a cada segundo
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval); // Limpa o intervalo quando o componente for desmontado
  }, []);

  const handleClose = () => {
    setIsVisible(false); // Fecha o popup
  };

  // Funções para lidar com o mouseover e mouseleave nos hexágonos
  const handleMouseEnterHexagon1 = () => {
    setIsHoveredHexagon1(true); // Quando o mouse entra, altera o estado para true
  };

  const handleMouseLeaveHexagon1 = () => {
    setIsHoveredHexagon1(false); // Quando o mouse sai, volta ao estado original
  };

  const handleMouseEnterHexagon2 = () => {
    setIsHoveredHexagon2(true); // Quando o mouse entra, altera o estado para true
  };

  const handleMouseLeaveHexagon2 = () => {
    setIsHoveredHexagon2(false); // Quando o mouse sai, volta ao estado original
  };

  return (
    isVisible && (
      <div className="popup-container">
        <div className="popup-content">
          <button className="popup-close" onClick={handleClose}>
            &times;
          </button>
          <div className="logo-img">
            <img
              src="images\logo-puntu.png"
              alt="Logo"
              className="logo-puntu"
            />
          </div>
          <div className="img-topo">
            <img
              src="images\img-topo.png "
              alt="Imagem secundária"
              className="img-secundaria"
            />
          </div>

          <div className="cont">
            <p className="text-fimpromo">🔥A promoção acaba em:{countdown}🔥</p>
          </div>

          <div id="hexagono-container">
            {/* Hexágono 1 */}
            <div
              id="hexagono1"
              className="hexagono"
              onMouseEnter={handleMouseEnterHexagon1} // Ativa a troca de texto quando o mouse entra
              onMouseLeave={handleMouseLeaveHexagon1} // Restaura o texto quando o mouse sai
            >
              <div className="hex-text">
                {isHoveredHexagon1 ? (
                  <p className="text2-hex1">
                    Confira já as exclusividades do Plano Premium
                  </p>
                ) : (
                  // Exibe este texto quando o mouse estiver sobre o hexágono
                  <p>
                    Queremos te ajudar a ter um 2025 mais prático e simples.
                    Pare você focar no que realmente importa.
                  </p> // Exibe o texto original
                )}
              </div>
            </div>
          </div>
          <div
            id="hexagono2"
            className="hexagono"
            onMouseEnter={handleMouseEnterHexagon2} // Ativa a troca de texto quando o mouse entra
            onMouseLeave={handleMouseLeaveHexagon2} // Restaura o texto quando o mouse sai
          >
            <div className="hex-text2">
              {isHoveredHexagon2 ? (
                <p className="text2-2hex">
                  Mais de 1500 empresas já aproveitaram essa oportunidade e
                  garantiram o desconto exclusivo – não fique de fora dessa!"
                </p> // Exibe este texto quando o mouse estiver sobre o hexágono
              ) : (
                <>
                  <p className="text-p1">Até</p>
                  <p className="text-numb">69%</p>
                  <p className="text-p2">de desconto no seu plano!</p>
                </>
              )}
            </div>
          </div>
          <div className="elements">
            <div className="qtd-fun">
              <p>Planos e preços:</p>
            </div>
            <div class="Qtd-funBotao">
              <button class="qtd-fun6">
                <a
                  href="https://app.puntu.digital/assinatura?plan=Premium&Pagamento=false&Cupom=OFERTA27"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Até 6 Funcionários: R$27,00/mês
                </a>
              </button>

              <button class="qtd-funAte16">
                <a
                  href="https://app.puntu.digital/assinatura?plan=Premium&Pagamento=false&Cupom=OFERTA47"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  De 6 a 16 funcionários: R$47/mês
                </a>
              </button>
              <button class="qtd-funMais16">
                <a
                  href="https://app.puntu.digital/assinatura?plan=Premium&Pagamento=false&Cupom=OFERTA67"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Mais de 16 funcionários: R$67,00/mês
                </a>
              </button>
            </div>
            <div className="ctt-gabi">
              <button className="num-gabi">
                <img
                  src="images\img-wpp.png"
                  alt="Imagem Whatsapp"
                  className="img-wpp"
                />
                <a
                  href="https://wa.me/61991466572"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <p className="txt-wpp">Fale conosco</p>
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Popup;
