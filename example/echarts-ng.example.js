(function (angular) {
  "use strict";

  angular.module('example', ['echarts-ng'])
    .controller('ExampleCtrl', ['$scope', '$echarts', function($scope, $echarts) {
      $scope.IDENTITY = $echarts.generateInstanceIdentity();
      $scope.distribution = {
        legend: {
          data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
        },
        xAxis : [
          {
            type : 'category',
            data : ['周一','周二','周三','周四','周五','周六','周日']
          }
        ],
        yAxis : [
          {
            type : 'value'
          }
        ],
        series : [
          {
            name:'邮件营销',
            type:'bar',
            data:[120, 132, 101, 134, 90, 230, 210]
          },
          {
            name:'联盟广告',
            type:'bar',
            data:[220, 182, 191, 234, 290, 330, 310]
          },
          {
            name:'视频广告',
            type:'bar',
            data:[150, 232, 201, 154, 190, 330, 410]
          },
          {
            name:'直接访问',
            type:'bar',
            data:[320, 332, 301, 334, 390, 330, 320]
          },
          {
            name:'搜索引擎',
            type:'bar',
            data:[820, 932, 901, 934, 1290, 1330, 1320]
          }
        ]
      };

      $scope.GAUGE_ID = $echarts.generateInstanceIdentity();
      $scope.gauge = {
        tooltip : {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c}%"
        },
        series: [
          {
            name: '业务指标',
            type: 'gauge',
            detail: {formatter:'{value}%'},
            data: [{value: 50, name: '完成率'}]
          }
        ]
      }
    }])
})(angular);