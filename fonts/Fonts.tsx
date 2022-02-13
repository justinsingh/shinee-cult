import { Global } from "@emotion/react";

const Fonts = () => {
  return (
    <Global
      styles={`
    /* Avara Black */
    @font-face {
      font-family: 'Avara_Black';
      src: url('./fonts/Avara/Avara-Black_web.eot');
      src: url('./fonts/Avara/Avara-Black.woff2') format('woff2'), 
           url('./fonts/Avara/Avara-Black.woff') format('woff'),
           url('./fonts/Avara/Avara-Black.ttf') format('truetype');
      font-style: normal;
      font-weight: normal;
    }

    /* Basteleur Bold */
    font-family: 'Basteleur_Bold';
    src: url('./fonts/Basteleur/Basteleur-Bold.ttf') format('truetype');

    /* Minipax Regular */
    font-family: 'Minipax_Regular';
    src: url('./fonts/Minipax/Minipax-Regular.ttf') format('truetype');
    `}
    />
  )
}

export default Fonts;