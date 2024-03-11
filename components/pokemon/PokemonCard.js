import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Grid from '@mui/material/Grid';
import { TextField } from "@mui/material";
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/router';


export const PokemonCard = ({ pokemon }) => {

  const router = useRouter()

  const onClick = () => {
    router.push(`/pokemon/${pokemon.id}`)
  }

  return (
    <Grid item xs={6} s={4} m={3} xl={2} key={pokemon.id}>
      <Card
      onClick={ onClick }
      >
        <CardContent>
          <CardMedia
            sx={{ height: 250 }}
            image={pokemon.img}
            title={pokemon.name}
          />
        </CardContent>
        <CardActions sx={{ justifyContent: 'space-around' }}>
          <Typography sx={{ textTransform: 'capitalize' }}>
            {pokemon.name}
          </Typography>
          <Typography >
            #{pokemon.id}
          </Typography>
        </CardActions>
      </Card>
    </Grid>
  )
}
