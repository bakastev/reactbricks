import HeroUnitProps from './custom/MyHeroUnit';
import Pokemon, { PokemonProps } from './custom/Pokemon';
import reactBricksUITheme from './react-bricks-ui';
import { BackgroundGradient, BackgroundGradientProps } from './custom/background-gradient';

interface BrickInterface {
  schema: IBlockType<any>;
}

const bricks: Brick<any>[] = [
  reactBricksUITheme, // React Bricks UI
  {
    themeName: 'Default',
    categories: [
      {
        categoryName: 'Hero sections',
        bricks: [HeroUnit, BackgroundGradient],
      },
      {
        categoryName: 'Pokemon',
        bricks: [Pokemon],
      },
    ],
  },
];

export default bricks;
