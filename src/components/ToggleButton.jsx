import React from 'react';
import './ToggleButton.scss'

const useToggle = ((initialState) => {
  const [isToggled, setIsToggled] = React.useState(initialState);

  const toggle = React.useCallback(() => {
    setIsToggled(state => !state)
  }, [setIsToggled])

  return [isToggled, toggle];
});

export default function ToggleButton() {
  const [isCollapsed, collapse] = useToggle(false);

  return (
    <div className='nav--button'>
      <div onClick={collapse} className={isCollapsed ? 'open' : 'closed'}>
        <span className='line-1' />
        <span className='line-2' />
        <span className='line-3' />
      </div>
    </div>
  )
}
