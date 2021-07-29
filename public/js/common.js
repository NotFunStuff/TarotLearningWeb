var app = angular.module('myApp', []);
app.directive("myFooter", function () {
    return {
        template: '<footer class="site-footer"> <div class="footer-inner bg-dark"> <div class="row footer-container"> <div class="col-sm-6 text-left-footer"> Copyright &copy; 2021 ManyKindOfStuff Co. </div> <div class="col-sm-6 text-right-footer"> Designed by </div> </div> </div> </footer>'
    };
});
app.directive("myHeader", function () {
    return {
        template: '<header> <div class="bground"></div> <p class="header1"> Tarot Learning Website</p> <p class="header2"> Learning the way Universe messaging you</p> <div class="row no-margin"> <div class="nav-item col"> <a class="nav-link" href="#">Home</a> </div> <div class="nav-item col"> <a class="nav-link" href="#">Card List</a> </div> <div class="nav-item col"> <a class="nav-link" href="#">Flashcard</a> </div> <div class="nav-item col"> <a class="nav-link" href="#">Card Spread</a> </div> <div class="nav-item col"> <a class="nav-link" href="#">About</a> </div> </div> </header>'
    };
});