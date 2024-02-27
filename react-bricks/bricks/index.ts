import { types } from 'react-bricks/frontend';
import MyHeroUnit from './custom/MyHeroUnit'; // Änderung hier
import Pokemon from './custom/Pokemon'; // Möglicherweise muss hier auch MyPokemon stehen
import reactBricksUITheme from './react-bricks-ui';
import { BackgroundGradient } from './custom/background-gradient';

const bricks: types.Theme[] = [
  reactBricksUITheme, // React Bricks UI
  {
    themeName: 'Custom Theme 1',
    categories: [
      {
        categoryName: 'Hero sections',
        bricks: [MyHeroUnit, BackgroundGradient], // Änderung hier
      },
      {
        categoryName: 'Pokemon',
        bricks: [Pokemon], // Möglicherweise muss hier auch MyPokemon stehen
      },
    ],
  },
]

export default bricks;
