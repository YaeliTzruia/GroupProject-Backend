
var permissions = {
    scopes: [
        { id: 0, key: 'USER', value: 'User', desc: 'Basic user, can use all the basic features.' },
        // { id: [0, 1, 2], key: 'COMBINED', value: 'Admin', desc: 'Can define and edit settings. for client and users' },
        { id: 1, key: 'ADMIN', value: 'Admin', desc: 'Can define and edit settings. for client and users' },
        // { id: 2, key: 'HELP_DESK', value: 'Help Desk', desc: 'Adding / editing tags on the help desk page' },
        // { id: 4, key: 'MODERATOR', value: 'Moderator', desc: 'Adding / editing tags on the help desk page' },
    ],

    init: () => {
        var scopes = permissions.scopes;

        scopes.forEach(pr => {
            if (typeof (pr.id) == 'object') {
                var v = 0;
                pr.id.forEach(id => {
                    v += id;
                });
                pr.id = v;
            } else {
                pr.id = pr.id;
            }
        });
    },

    get: (permissionId) => {
        var list = permissions.scopes;

        var map = {};
        list.forEach(pr => {
            if ((permissionId & pr.id) == pr.id) {
                map[pr.key] = 1;
            }
        });
        return map;
    }
}

permissions.init();

module.exports = permissions;