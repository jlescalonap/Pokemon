import { useEffect, useState } from 'react';

import { Layout } from '../../components/layouts/Layout';
import NoFavorites from '../../components/ui/NoFavorites';
import { localFavorites } from '../../utils';
import { FavoritePokemons } from '../../components/pokemon';

const FavoritesPage = () => {

  const [favoritePokemons, setfavoritePokemons] = useState<number[]>([])

  useEffect(() => {
    setfavoritePokemons(localFavorites.pokemons());
  }, [])


  return (
    <Layout title='Favorites'>
      {
        favoritePokemons.length === 0
          ? ( <NoFavorites /> )
          : ( <FavoritePokemons pokemons={favoritePokemons} /> )
      }
      
    </Layout>
  )
}

export default FavoritesPage;