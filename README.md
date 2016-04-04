# echarts-ng
Simple angularjs wrap for Baidu echarts. Still in develop, not production ready.

## pre-requirement
+ angularjs - 1.3+
+ echarts   - 3.0+

## usage

```shell
bower install echarts-ng --save
```

A base global echarts option is necessary. I provide one like below:

```js
{
  backgroundColor: 'rgba(255, 255, 255, .5)',
  legend: {
    left: 'center',
    top: 'top',
    padding: [20, 10, 10, 10]
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  }
}
```

you can change the default through config block:

```js
var newGlobalOption = {};
$echartsProvider.setGlobalOption(newGlobalOption);
```

A related service and directive make up this wrap, service(provider) named `$echarts`, directive(attribution only) named `echarts`. For some reason, the service is required when you use the directive. maybe a little awkward, but i think necessary.

+ First, use the service to generate an unique id for directive echarts-instance:

```js
$scope.DISTRIBUTION_ID = $echarts.generateInstanceIdentity();
```

+ Second, provide echarts adaptable option for visualize:

```js
$scope.distribution = {
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
        name:'联盟广告',
        type:'bar',
        data:[220, 182, 191, 234, 290, 330, 310]
      }
    ]
  };
```

+ Next, use the directive

```html
<div echarts="DISTRIBUTION_ID" config="distribution"></div>
```

Pay attention for cases below:

+ When miss the `ID`, directive will throw error. 
+ Echarts initialize need computable height, which means `0px` will cause silent initialize error. therefore, use `css` give it explicit `height` or `min-height`.
+ you can use echarts instance directly in your controller, for `connect`, `group`,
the method return promise with the instance object:

```js
$echarts.queryEchartsInstance($scope.DISTRIBUTION_ID);
```

+ For personal reason, there's no watch inside directive. when your data changes, you should explicit notify the directive. when you empty the data, and want it show loading, you should explicit notify the directive.

```js
// start the specific instance loading
$echarts.updateEchartsInstance($scope.DISTRIBUTION_ID);
// update the specific instance
$echarts.updateEchartsInstance($scope.DISTRIBUTION_ID, $scope.distribution);
```

## distribution

```shell
// dependencies for Subsequent example
bower install;
npm install
```

## license
MIT