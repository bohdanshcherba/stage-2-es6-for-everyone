import { showModal } from './modal';
import { createFighterImage } from '../fighterPreview';
import { createElement } from '../../helpers/domHelper';

export function showWinnerModal(fighter) {
  const winner = createFighter(fighter)

  showModal(`Win ${fighter.name}`,winner,'KeyA')

}
function createFighter(fighter) {
  const imgElement = createFighterImage(fighter);
  const fighterElement = createElement({
    tagName: 'div',

  });

  fighterElement.append(imgElement);
  return fighterElement;
}
