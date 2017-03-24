

class Route {

    //props
   component;
   path;


    //lifecycle methods
    onEnter;
    onExit;
    beforeEnter;
    beforeExit;

    constructor(cfg) {
        this.component = cfg.component;
        this.path = cfg.path;
        this.onEnter = cfg.onEnter;
        this.onExit = cfg.onExit;
        this.beforeEnter = cfg.beforeEnter;
        this.beforeExit = cfg.beforeExit;
    }


}

export default Route;
