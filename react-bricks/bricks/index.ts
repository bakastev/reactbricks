import { types } from 'react-bricks/frontend';
import HeroUnitProps from './custom/MyHeroUnit';
import PokemonProps from './custom/Pokemon';
import reactBricksUITheme from './react-bricks-ui';
import { BackgroundGradient } from './custom/background-gradient';

const bricks: types.Theme[] = [
  reactBricksUITheme, // React Bricks UI
  {
    themeName: 'Custom Theme 1',
    categories: [
      {
        categoryName: 'Hero sections',
        bricks: [HeroUnit, BackgroundGradient], // Custom Bricks
      },
      {
        categoryName: 'Pokemon',
        bricks: [Pokemon],
      },
    ],
  },
]

export default bricks;
