angular.module('myApp', [])
    .controller('myCtrl', function ($scope, $window, $location) {
        $scope.carArray = [
            {
                id: 0,
                brand: "Mercedes",
                name: "G-Class",
                price: "4.60 Crore",
                nPrice: 46000000,
                fuel: "Petrol",
                engine: 3982,
                power: 577,
                torque: 850,
                transmission: "Automatic",
                seatingCapacity: 5,
                driveTrain: "AWD",
                topSpeed: 220
            },
            {
                id: 1,
                brand: "Mercedes",
                name: "S-Class",
                price: "2.1 Crore",
                nPrice: 21000000,
                fuel: "Petrol",
                engine: 2999,
                power: 362,
                torque: 600,
                transmission: "Automatic",
                seatingCapacity: 5,
                driveTrain: "AWD",
                topSpeed: 250
            },
            {
                id: 2,
                brand: "Mercedes",
                name: "A45",
                price: "1.08 Crore",
                nPrice: 10800000,
                fuel: "Petrol",
                engine: 1991,
                power: 415,
                torque: 500,
                transmission: "Automatic",
                seatingCapacity: 5,
                driveTrain: "AWD",
                topSpeed: 270
            },
            {
                id: 3,
                brand: "Mercedes",
                name: "GLS",
                price: "4.60 Crore",
                nPrice: 46000000,
                fuel: "Petrol",
                engine: 3982,
                power: 577,
                torque: 850,
                transmission: "Automatic",
                seatingCapacity: 5,
                driveTrain: "AWD",
                topSpeed: 220
            },
            {
                id: 4,
                brand: "Porsche",
                name: "911",
                price: "1.64 Crore",
                nPrice: 16400000,
                fuel: "Petrol",
                engine: 2981,
                power: 379,
                torque: 450,
                transmission: "Automatic",
                seatingCapacity: 4,
                driveTrain: "RWD",
                topSpeed: 293
            },
            {
                id: 5,
                brand: "Porsche",
                name: "Cayenne",
                price: "1.27 Crore",
                nPrice: 12700000,
                fuel: "Petrol",
                engine: 2995,
                power: 335,
                torque: 450,
                transmission: "Automatic",
                seatingCapacity: 5,
                driveTrain: "AWD",
                topSpeed: 245
            },
            {
                id: 6,
                brand: "Porsche",
                name: "Taycan",
                price: "1.50 Crore",
                nPrice: 15000000,
                fuel: "Electric",
                engine: 3996,
                power: 402,
                torque: 650,
                transmission: "Automatic",
                seatingCapacity: 4,
                driveTrain: "AWD",
                topSpeed: 230
            },
            {
                id: 7,
                brand: "Porsche",
                name: "Panamera",
                price: "1.45 Crore",
                nPrice: 14500000,
                fuel: "Petrol",
                engine: 2894,
                power: 325,
                torque: 450,
                transmission: "Automatic",
                seatingCapacity: 4,
                driveTrain: "AWD",
                topSpeed: 270
            },
            {
                id: 8,
                brand: "Hyundai",
                name: "Exter",
                price: "14.14 Lakh",
                nPrice: 1414000,
                fuel: "Petrol",
                engine: 1197,
                power: 81.86,
                torque: 114.73,
                transmission: "Manual",
                seatingCapacity: 5,
                driveTrain: "FWD",
                topSpeed: 170
            },
            {
                id: 9,
                brand: "Hyundai",
                name: "Alcazar",
                price: "16.30 Lakh",
                nPrice: 1630000,
                fuel: "Petrol",
                engine: 1599,
                power: 113.42,
                torque: 144.15,
                transmission: "Manual",
                seatingCapacity: 7,
                driveTrain: "FWD",
                topSpeed: 170
            },
            {
                id: 10,
                brand: "Hyundai",
                name: "i20",
                price: "6.91 Lakh",
                nPrice: 691000,
                fuel: "Petrol",
                engine: 1197,
                power: 81.86,
                torque: 114.73,
                transmission: "Manual",
                seatingCapacity: 5,
                driveTrain: "FWD",
                topSpeed: 170
            },
            {
                id: 11,
                brand: "Hyundai",
                name: "Creta",
                price: "10 Lakh",
                nPrice: 1000000,
                fuel: "Petrol",
                engine: 1497,
                power: 113.42,
                torque: 144.15,
                transmission: "Manual",
                seatingCapacity: 5,
                driveTrain: "FWD",
                topSpeed: 165
            }
        ];

        $scope.filterFn = function(option) {
            $scope.orderByExpression = option;
        };

        $scope.redirectWithCarId = function(carId) {
            $window.location.href = `product.html?carId=${carId}`
        };

        var urlParams = new URLSearchParams(window.location.search);
        var carIdParam = urlParams.get('carId');

        var carId = parseInt(carIdParam, 10);

        if (!isNaN(carId) && carId >= 0 && carId < $scope.carArray.length) {
            $scope.currentCarId = carId;
        } else {
            $scope.currentCarId = 0;
        }

        $scope.displayedImage = "images/" + $scope.carArray[$scope.currentCarId].brand + "/" + $scope.carArray[$scope.currentCarId].name + "/" + 'img-1.jpeg';
        $scope.changeDisplayImage = function(imageName) {
            $scope.displayedImage = "images/" + $scope.carArray[$scope.currentCarId].brand + "/" + $scope.carArray[$scope.currentCarId].name + "/" + imageName;
        };
    });

var swiper = new Swiper(".slide-container", {
    slidesPerView: 4,
    spaceBetween: 20,
    sliderPerGroup: 4,
    loop: true,
    centerSlide: "true",
    fade: "true",
    grabCursor: "true",
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
