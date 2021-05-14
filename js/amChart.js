window.addEventListener("resize", reportWindowSize);
am4core.useTheme(am4themes_animated);
am4core.useTheme(am4themes_dark);

var chart = am4core.create("amchart", am4charts.PieChart3D);
chart.legend = new am4charts.Legend();
chart.hiddenState.properties.opacity = 0;
chart.responsive.enabled = true;

chart.data = [
  {
    label: "Seed Round",
    value: 8,
    color: am4core.color("#CBCBCB"),
  },
  {
    label: "Private Sale",
    value: 10,
    color: am4core.color("#EFEFEF"),
  },
  {
    label: "Public Sale",
    value: 1,
    color: am4core.color("#FF6C26"),
  },
  {
    label: "DEX/TGE",
    value: 2,
    color: am4core.color("#FD8719"),
  },
  {
    label: "Team",
    value: 15,
    color: am4core.color("#FFA425"),
  },
  {
    label: "Airdrop",
    value: 1,
    color: am4core.color("#FEC635"),
  },
  {
    label: "Ecosystem/Incentives",
    value: 11,
    color: am4core.color("#8B635C"),
  },
  {
    label: "Liquidity Pool Reward",
    value: 15,
    color: am4core.color("#60594D"),
  },
  {
    label: "Reserves",
    value: 15,
    color: am4core.color("#9BC4CB"),
  },
  {
    label: "Marketing",
    value: 22,
    color: am4core.color("#CFEBDF"),
  },
];

chart.innerRadius = am4core.percent(30);
chart.radius = am4core.percent(60);

var series = chart.series.push(new am4charts.PieSeries3D());
series.dataFields.value = "value";
series.dataFields.category = "label";
series.slices.template.propertyFields.fill = "color";
series.labels.template.maxWidth = 130;
function reportWindowSize() {
  if (window.innerWidth <= 960) series.labels.template.wrap = true;
  else series.labels.template.wrap = false;
}
