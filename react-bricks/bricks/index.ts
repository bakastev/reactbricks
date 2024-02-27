import { types } from 'react-bricks/frontend';
import MyHeroUnit from './custom/MyHeroUnit'; // Wir importieren nur MyHeroUnit, nicht MyHeroUnitProps
import Pokemon from './custom/Pokemon';
import reactBricksUITheme from './react-bricks-ui';
import { BackgroundGradient } from './custom/background-gradient';

const bricks: types.Theme[] = [
  reactBricksUITheme, // React Bricks UI
  {
    themeName: 'Custom Theme 1',
    categories: [
      {
        categoryName: 'Hero sections',
        bricks: [MyHeroUnit, BackgroundGradient], // Nur MyHeroUnit hier
      },
      {
        categoryName: 'Pokemon',
        bricks: [Pokemon],
      },
    ],
  },
]

export default bricks;
