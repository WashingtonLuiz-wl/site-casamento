import { setCookie } from 'nookies';
import React, { useCallback } from 'react';
import { FaTimes } from 'react-icons/fa';

import Image from 'next/image';

import theme from '@/styles/theme';

import FotoModal from '@/assets/banner/presente.webp';
// import FotoModal from '@/assets/FotoModal.jpg';

import { Background, Container, Content } from './styles';

interface IPopupPopupContactProps {
  visible: boolean;

  onClose(): void;
}

const ModalContact: React.FC<IPopupPopupContactProps> = ({
  visible,
  onClose,
}) => {
  const handleClose = useCallback(() => {
    setCookie(undefined, 'E&W.firstAccess', 'false', {
      maxAge: 60 * 15, // 15 min
    });

    onClose();
  }, [onClose]);

  return (
    <>
      <Background visible={visible} />
      <Container visible={visible}>
        <Content>
          <div className="div-img">
            <Image src={FotoModal} alt="Imagem Lateral" />
          </div>

          <div className="text">
            <p>Olá! Sejam bem-vindos à nossa lista de presentes!</p>
            <p>
              Aqui estão algumas sugestões especiais para nos ajudar a criar um
              lar cheio de amor e felicidade. Fiquem à vontade para escolher o
              presente que mais lhes agrada e compre-o onde preferir. Lembre-se
              de clicar em "presentear" para marcar o item como presenteado para
              evitar presentes repetidos.
            </p>
            <p>
              Agradecemos imensamente por fazerem parte desse momento especial
              em nossas vidas.
            </p>
          </div>
        </Content>

        <button type="button" className="close" onClick={handleClose}>
          <FaTimes size={15} color={theme.colors.secondary} />
        </button>
      </Container>
    </>
  );
};
export default ModalContact;
