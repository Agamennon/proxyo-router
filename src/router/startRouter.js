//import {Router} from 'director/build/director';
import {observable} from 'proxyo'
import queryString from 'query-string'

const startRouter = (router,routes,url) => {

  var location = observable();
  function snapShotLocation (location){
    const l = window.location;
    location.hash = l.hash
    location.host = l.host
    location.hostname = l.hostname
    location.href = l.href
    location.origin = l.origin
    location.pathname = l.pathname
    location.port = l.port
    location.protocol = l.protocol
    location.search = l.search
    location.query = queryString.parse(l.search)
  }

  snapShotLocation(location)
  router.location = location


  router.goTo(location.pathname,'browser')

  //this will fire only if the user interacted with the browser ether by entering an url or by pressing back forward buttons
  window.addEventListener('popstate',(ev) => {
    snapShotLocation(location)
    router.goTo(location.pathname,'browser')
    // store.router.currentPath = Math.random();
  });





    /* autorun(() => {
     // const {currentPath} = store.router;
     console.log('---- currentPath = '+router.currentPath);
     console.log('---- location.pathname = '+router.location.pathname);
     if (router.currentPath !== router.location.pathname) {


     window.history.pushState(null, null, router.currentPath)
     window.dispatchEvent(new Event('popstate'));
     }
     });*/

};

export default startRouter;




/* let  currentSubscription;
 let locationObs = fromResource(
 (sink) => {
 // sink the current state
 //        const {filter, filteredTodos,clearComplete, todos} = this.props.store;





 sink(cloneLocations());
 // subscribe to the record, invoke the sink callback whenever new data arrives
 currentSubscription = window.addEventListener('popstate',() => {

 sink(cloneLocations())
 })
 },
 () => {
 // the user observable is not in use at the moment, unsubscribe (for now)
 location.unsubscribe(currentSubscription)
 }
 );


 autorun(() => {
 // printed everytime the database updates its records
 console.log(locationObs.current())
 })

 */


/*  autorun(() => {
 const {currentPath} = store.router;
 if (currentPath !== window.location.pathname) {
 window.history.pushState(null, null, currentPath)
 }
 });*/