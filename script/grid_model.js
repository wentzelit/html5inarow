function GridModel() {
    var tokens = [];

    this.setToken = function(token, x, y) {

        if (tokens[x] === undefined) {
            tokens[x] = [];
        }

        if (this.getToken(x, y)) {
            throw new IllegalPlacementException();
        }

        tokens[x][y] = token;
    };

    this.getToken = function(x, y) {
        if (tokens[x] instanceof Array) {
            if (tokens[x][y] instanceof Token) {
                return tokens[x][y];
            }
        }
        return null;
    };
}
