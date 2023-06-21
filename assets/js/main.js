(function ($) {
    "use strict";

    $(document).ready(function () {
        //preloader
        $("#preloader").delay(1600).animate({
            "opacity": "0"
        }, 500, function () {
            $("#preloader").css("display", "none");
        });

        //preloader counter
        $('.counterr').counterUp({
            delay: 10,
            time: 1000
        });

        //codes for close sidnav
        $(".close").on("click", function () {
            $(".page-wrapper")?.removeClass("sidebar-active");
        });

        //codes for toggle sidnav
        $(".toggle-sidebar").on("click", function () {
            $(".page-wrapper")?.toggleClass("sidebar-active");
        });

        //codes for toggle wallet modal
        $(".wallet-modal-toggler").on("click", function () {
            $(".page-wrapper")?.toggleClass("wallet-modal-active");
        });

        //codes for remove wallet modal
        $(".wallet-modal-close").on("click", function () {
            $(".page-wrapper")?.removeClass("wallet-modal-active");
        });

        //codes for toggle stake modal
        $(".stake-modal-toggler").on("click", function () {
            $(".page-wrapper")?.toggleClass("stake-modal-active");
        });

        //codes for remove stake modal
        $(".stake-modal-close").on("click", function () {
            $(".page-wrapper")?.removeClass("stake-modal-active");
        });

        //codes for language select
        $("#selectPool").niceSelect();

        var options1 = {
            series: [44, 55],
            chart: {
                type: 'donut',
                offsetX: 0,
                width: 280
            },
            colors: ['#4fb3f9', '#232b48'],
            dataLabels: {
                enabled: false
            },
            legend: {
                show: false
            },
            sparkline: {
                enabled: true
            },
            stroke: {
                width: 0
            },
            fill: {
                width: .4
            },
            plotOptions: {
                pie: {
                    donut: {
                        size: '90%'
                    }
                }
            }
        };

        var chart = document.querySelector("#liquidity-chart");
        if (chart) {
            var liquidityChart = new ApexCharts(chart, options1);
            liquidityChart.render();
        }
    });

})(jQuery);