import { defaults } from './models/defaults.model';
import { followEl } from './services/cache-dom.service';
import { mouseMoveHandler } from './events/mousemove.event';
import { mergeOptions } from './services/merge-options.service';

export let init = (options) => {
    mergeOptions(options);
    document.addEventListener('mousemove', mouseMoveHandler);
}
