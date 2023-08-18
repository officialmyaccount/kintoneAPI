(() => {
    'use strict';

    kintone.events.on('app.record.index.show', (event) => {
        kintone.app.getHeaderMenuSpaceElement().innerHTML = '<button id=\'my_index_button\'>一覧のボタン</button>';
    })
})();
