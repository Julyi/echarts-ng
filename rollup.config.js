/**
 * @description - observable package rollup configuration
 * @author - bornkiller <hjj491229492@hotmail.com>
 */
import eslint from 'rollup-plugin-eslint';
import resolve from 'rollup-plugin-node-resolve';
import ngAnnotate from 'rollup-plugin-ng-annotate';
import babel from 'rollup-plugin-babel';

export default {
  entry: 'index.js',
  plugins: [
    eslint({
      include: ['index.js', 'src/*.js', 'test/*.js']
    }),
    resolve({ jsnext: true, main: true }),
    ngAnnotate(),
    babel()
  ],
  moduleId: 'ng.echarts',
  moduleName: 'ng.echarts',
  external: ['echarts', 'angular'],
  globals: {
    echarts: 'echarts',
    angular: 'angular'
  },
  targets: [
    { format: 'iife', dest: 'dist/echarts-ng.bundle.js' },
    { format: 'cjs', dest: 'dist/echarts-ng.bundle.common.js' },
    { format: 'umd', dest: 'dist/echarts-ng.bundle.umd.js'},
    { format: 'amd', dest: 'dist/echarts-ng.bundle.amd.js' }
  ]
};