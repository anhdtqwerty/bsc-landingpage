am4core.useTheme(am4themes_animated);
am4core.useTheme(am4themes_dark);

var chart = am4core.create("amchart", am4charts.PieChart3D);
chart.legend = new am4charts.Legend();
chart.hiddenState.properties.opacity = 0;
chart.responsive.enabled = true;

chart.data = [
  {
    label: "Team",
    value: 15,
    color: am4core.color("#CBCBCB"),
  },
  {
    label: "Advisor",
    value: 5,
    color: am4core.color("#EFEFEF"),
  },
  {
    label: "Seed",
    value: 10,
    color: am4core.color("#FF6C26"),
  },
  {
    label: "Private",
    value: 20,
    color: am4core.color("#FD8719"),
  },
  {
    label: "Public",
    value: 1.2,
    color: am4core.color("#FFA425"),
  },
  {
    label: "Ecosystem Funding",
    value: 48.8,
    color: am4core.color("#FEC635"),
  },
];

chart.innerRadius = am4core.percent(30);
chart.radius = am4core.percent(60);

var series = chart.series.push(new am4charts.PieSeries3D());
series.dataFields.value = "value";
series.dataFields.category = "label";
series.slices.template.propertyFields.fill = "color";
series.labels.template.maxWidth = 130;
series.labels.template.wrap = true;