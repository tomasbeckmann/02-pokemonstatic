import { grey } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';
import Image from 'next/image';

export const Navbar = () => {

  const color = grey[500];

  const theme = createTheme();

  return (
    <div style={{
      display: 'flex',
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'start',
      backgroundColor: color
    }}>

      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
        alt='icono pokemon'
        width={70}
        height={70}
      />



      <span>Pokemon</span>

      <span>Favorites</span>

    </div>
  )
}



