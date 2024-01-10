// index.ts
import { types } from 'react-bricks/frontend'

import HeroUnit from './custom/MyHeroUnit'
import Pokemon from './custom/Pokemon'
import MagicCard from './MagicCard' // Importieren Sie Ihre neue Komponente
import reactBricksUITheme from './react-bricks-ui'

const bricks: types.Theme[] = [
  reactBricksUITheme, // React Bricks UI
  {
    themeName: 'Default',
    categories: [
      {
        categoryName: 'Hero sections',
        bricks: [HeroUnit], // Custom Bricks
      },
      {
        categoryName: 'Pokemon',
        bricks: [Pokemon], // External data Bricks
      },
      {
        categoryName: 'Custom', // Erstellen Sie eine neue Kategorie oder fügen Sie sie einer bestehenden hinzu
        bricks: [MagicCard], // Fügen Sie hier Ihre neue Komponente hinzu
      },
    ],
  },
]

export default bricks
