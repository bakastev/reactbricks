import { types } from 'react-bricks/frontend';
import MyHeroUnit, { MyHeroUnitProps } from './custom/MyHeroUnit'; // Hier importieren wir MyHeroUnit und MyHeroUnitProps
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
        bricks: [MyHeroUnit], // Nur MyHeroUnit hier
      },
      {
        categoryName: 'Pokemon',
        bricks: [Pokemon],
      },
    ],
  },
]

export default bricks;
