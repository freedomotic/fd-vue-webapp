declare module 'vee-validate/dist/vee-validate.minimal.esm';
declare module 'vee-validate/dist/locale/en';
declare module 'vee-validate/dist/rules.esm';

declare module '*.json' {
  const data: any;
  export default data;
}

declare interface NodeModule {
  hot: any;
}
