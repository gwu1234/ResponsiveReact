it is a self education project: how to design a responsive ui from React Front End 
Components. css plays a key role here.

1) 
@media (max-width: 768px) {
  .toolbar_navigation-items {
    display: none;
  }
}
this means that for window widths of 768 px or less, toolbar_navigation-items is not visible 

2) 
@media (min-width: 769px) {
  .toolbar__toggle-button {
    display: none;
  }
this means that for window width of 769 px or more, toolbar__toggle-button is not visible

3)
@media (min-width: 769px) {
    .side-drawer {
        display: none;
    }
}
this means for window widths  of 769px or more, side-drawer is not visible

4) using materia-ui, break-points, grid  <Grid item xs={6} sm={3}>

5) using responsive hook

window.addEventListener('resize', handleResize);

React.useEffect (

    () => {
       if (screenSize >= 1280 ) {

          setScreenType('desktop')

          setButtonStyle ({...buttonStyle, fontSize:"22px", fontWeight:"bold", color:"black })
      }
)

listen to screen size changes, and dynamically change css styles





