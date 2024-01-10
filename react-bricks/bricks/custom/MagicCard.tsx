// MagicCard.tsx
import React from 'react'
import { types, Text } from 'react-bricks/frontend'
import './MagicCard.css' // Stellen Sie sicher, dass Sie das CSS hier importieren

const MagicCard: types.Brick = () => {
  return (
    <div className="card">
      <div className="card-info">
        <Text
          propName="title" // Der Name des bearbeitbaren Textfeldes
          renderBlock={(props) => (
            <p className="title" {...props.attributes}>
              {props.children}
            </p>
          )}
          placeholder="MagicCard"
        />
      </div>
    </div>
  )
}

MagicCard.schema = {
  name: 'magic-card',
  label: 'Magic Card',
  sideEditProps: [
    {
      name: 'background',
      label: 'Hintergrundfarbe',
      type: types.SideEditPropType.Text,
    },
    {
      name: 'color',
      label: 'Textfarbe',
      type: types.SideEditPropType.Text,
    },
  ],
}

export default MagicCard
