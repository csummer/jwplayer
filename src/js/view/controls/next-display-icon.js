import displayIconTemplate from 'view/controls/templates/display-icon';
import NEXT_ICON from 'assets/SVG/next.svg';

define([
    'utils/helpers',
    'utils/ui'
], function(utils, UI) {

    return class NextDisplayIcon {
        constructor(model, api) {
            const element = utils.createElement(displayIconTemplate('next', model.get('localization').next, NEXT_ICON));

            this.iconUI = new UI(element).on('click tap', function() {
                api.next();
            });

            model.change('nextUp', function(nextUpChangeModel, nextUp) {
                element.style.display = nextUp ? '' : 'none';
            });

            this.el = element;
        }

        element() {
            return this.el;
        }
    };
});
